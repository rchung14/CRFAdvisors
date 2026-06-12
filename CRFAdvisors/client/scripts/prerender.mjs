// Build-time prerender: renders every route to static HTML with full content,
// per-page meta tags, canonical URLs, and JSON-LD baked in, so crawlers index
// complete pages without executing JavaScript.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle):
//   vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node scripts/prerender.mjs

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE_URL = 'https://crf-advisors.vercel.app'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function headTags({ path: routePath, title, description, schemas }) {
  const url = `${SITE_URL}${routePath === '/' ? '' : routePath}`
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="CRF Advisors, Inc." />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:image" content="${SITE_URL}/logo1.png" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    // data-seo-jsonld lets the runtime Seo component replace these on
    // client-side navigation without duplicating schemas.
    ...schemas.map(
      (schema) =>
        `<script type="application/ld+json" data-seo-jsonld>${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`
    ),
  ]
  return `    ${tags.join('\n    ')}\n  `
}

const { render, ROUTES_META } = await import(path.join(root, 'dist-ssr/entry-server.js'))
const template = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf-8')

// Untouched template kept as the SPA fallback for unknown URLs (see
// vercel.json rewrites) — an empty root div avoids hydration mismatches.
fs.writeFileSync(path.join(root, 'dist/spa-fallback.html'), template)

for (const meta of Object.values(ROUTES_META)) {
  const appHtml = render(meta.path)
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(meta.description)}$2`
    )
    .replace('</head>', `${headTags(meta)}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outDir = meta.path === '/' ? path.join(root, 'dist') : path.join(root, `dist${meta.path}`)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  process.stdout.write(`prerendered ${meta.path}\n`)
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
