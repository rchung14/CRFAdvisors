import { Router } from 'express';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const router = Router();

const SERVICE_OPTIONS = [
  'Loan Review',
  'Due Diligence',
  'Portfolio Stress Testing',
  'ALLL Methodology',
  'CECL Methodology & ACL Review',
  'CECL Implementation',
  'Training',
  'General Inquiry',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mirrors the client-side validation exactly. Returns null when valid.
function validate(body) {
  if (typeof body !== 'object' || body === null) return 'invalid';
  const { name, institution, email, phone, service, message } = body;

  if (typeof name !== 'string' || !name.trim() || name.length > 100) return 'name';
  if (typeof institution !== 'string' || !institution.trim() || institution.length > 150) return 'institution';
  if (typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 254) return 'email';
  if (phone !== undefined && phone !== '' && (typeof phone !== 'string' || phone.length > 30)) return 'phone';
  if (service !== undefined && service !== '' && !SERVICE_OPTIONS.includes(service)) return 'service';
  if (typeof message !== 'string' || !message.trim() || message.length > 5000) return 'message';
  return null;
}

// Simple in-memory rate limiter: max 5 submissions per IP per 15 minutes.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const submissions = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

// Periodically drop stale entries so the map doesn't grow unbounded.
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of submissions) {
    const recent = times.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length === 0) submissions.delete(ip);
    else submissions.set(ip, recent);
  }
}, RATE_WINDOW_MS).unref();

router.post('/api/contact', async (req, res) => {
  // Honeypot: bots fill the hidden "website" field. Respond as if successful.
  if (req.body && typeof req.body.website === 'string' && req.body.website.trim() !== '') {
    return res.status(200).json({ success: true, message: 'Message received.' });
  }

  if (isRateLimited(req.ip)) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }

  if (validate(req.body) !== null) {
    return res.status(400).json({
      success: false,
      message: 'Please check the required fields and try again.',
    });
  }

  const { name, institution, email, phone, service, message } = req.body;

  try {
    const { error: resendError } = await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_RECIPIENT,
      subject: 'New Contact Form Submission - CRF Advisors',
      text: [
        `Name: ${name}`,
        `Institution / Company: ${institution}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Service Interest: ${service || 'Not specified'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      replyTo: email,
    });

    if (resendError) {
      return res.status(500).json({ success: false, message: 'Unable to send your message right now.' });
    }

    // Best-effort confirmation to the submitter. Fire-and-forget: a failure
    // here must not mask the successfully delivered inquiry above.
    resend.emails
      .send({
        from: process.env.EMAIL_USER,
        to: email,
        replyTo: process.env.CONTACT_RECIPIENT,
        subject: "We've received your message - CRF Advisors",
        text: [
          `Dear ${name},`,
          '',
          `Thank you for contacting CRF Advisorsm Inc. This email confirms that we have received your message${service ? ` regarding ${service}` : ''}.`,
          '',
          'A senior member of our team is currently reviewing your inquiry and will reach out to you shortly - typically within one business day - to learn more about your institution, your objectives, and how we can best be of assistance.',
          '',
          'If your matter is time-sensitive, you are welcome to reach us directly at (267) 816-4272 during normal business hours.',
          '',
          'We appreciate your interest in CRF Advisors and look forward to speaking with you.',
          '',
          'Sincerely,',
          '',
          'The CRF Advisors Team',
          'CRF Advisors, Inc.',
          'Fort Washington, PA',
          '(267) 816-4272',
          'https://crfadvisors.com',
          '',
          '—',
          'This is an automated confirmation. If you reply to this email, your message will be delivered to our team.',
        ].join('\n'),
      })
      .catch(() => {});

    return res.status(200).json({ success: true, message: 'Message received.' });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to send your message right now.' });
  }
});

export default router;
