// Hard 410 for dead paths left over from the previous WordPress site.
//
// The SPA rewrite in vercel.json answers every unmatched path with a 200, which
// makes retired URLs look alive to crawlers (a soft 404) and keeps them in the
// index indefinitely. Paths that can never be valid again -- /wp-content,
// /wp-admin, /wp-login.php, /xmlrpc.php -- are rewritten here instead so they
// return a real "410 Gone" and get dropped.
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('X-Robots-Tag', 'noindex')
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.status(410).send(
    `<!doctype html>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>410 Gone | CRF Advisors</title>
<h1>410 Gone</h1>
<p>This page was part of a previous version of crfadvisors.com and no longer exists.</p>
<p><a href="/">Go to the CRF Advisors home page</a></p>
`
  )
}
