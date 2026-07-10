import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from '../routes/contactRoutes.js';

dotenv.config();

const app = express();

app.disable('x-powered-by');

// Render terminates TLS at a single proxy hop; trust it so req.ip is the
// real client address (rate limiting is per-visitor, not per-proxy).
app.set('trust proxy', 1);

// Security headers on every response
app.use((req, res, next) => {
  res.set({
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Content-Security-Policy':
      "default-src 'none'; frame-ancestors 'none'; base-uri 'self'",
  });
  next();
});

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://crf-advisors.vercel.app')
  .split(',')
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow same-origin/non-browser requests (no Origin header) and localhost dev
      if (!origin || allowedOrigins.includes(origin) || /^http:\/\/localhost(:\d+)?$/.test(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
  })
);

app.use(express.json({ limit: '50kb' }));

// Root route for health check / ping
app.get('/', (req, res) => {
  res.send('Ping successful - CRF Advisors backend is running');
});

app.use(contactRoutes);

// Generic error handler — never leak internals
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.message === 'Not allowed by CORS' ? 403 : 500).json({
    success: false,
    message: 'Request could not be processed.',
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0');
