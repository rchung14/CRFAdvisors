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

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Single LCP image preload per page, swapped into the <!--HERO_IMAGE_PRELOAD-->
// marker near the top of <head> (see index.html) — the prerendered
// <img>/<picture> markup sits too deep in <body> for the preload scanner to
// find it early on its own (see routesMeta.js heroImageAvif comment), and
// appending it at the end of <head> would put it after the ~25 KiB inlined
// stylesheet, again too late for early discovery.
function heroPreloadTag({ heroImageAvif }) {
  return heroImageAvif
    ? `<link rel="preload" as="image" type="image/avif" href="${heroImageAvif}" fetchpriority="high" />`
    : ''
}

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
    `<meta property="og:image" content="${SITE_URL}/og-card.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
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

// SITE_URL comes from src/config.js via the SSR bundle — single source of
// truth for the canonical domain across runtime and prerender.
const { render, ROUTES_META, SITE_URL } = await import(path.join(root, 'dist-ssr/entry-server.js'))
let template = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf-8')

// Per-route modulepreload hints: pages are lazy (route-level code splitting),
// so without a hint the page chunk is only discovered after the entry script
// executes. Preloading it (and its imports) removes that request-chain hop.
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, 'dist/.vite/manifest.json'), 'utf-8')
)

const PAGE_SRC = {
  '/': 'src/pages/Home.jsx',
  '/consulting-services': 'src/pages/ConsultingServices.jsx',
  '/clients': 'src/pages/Clients.jsx',
  '/about': 'src/pages/About.jsx',
  '/contact': 'src/pages/Contact.jsx',
  '/privacy': 'src/pages/Privacy.jsx',
  '/terms': 'src/pages/Terms.jsx',
  '/accessibility': 'src/pages/Accessibility.jsx',
}

function chunkFiles(key, seen = new Set()) {
  const chunk = manifest[key]
  if (!chunk || seen.has(chunk.file)) return seen
  seen.add(chunk.file)
  for (const dep of chunk.imports || []) chunkFiles(dep, seen)
  return seen
}

// Files already loaded by the entry <script>/<link modulepreload> tags in the
// template — no need to hint them again.
const entryFiles = chunkFiles('index.html')

function preloadTags(routePath) {
  const key = routePath.startsWith('/consulting-services/')
    ? 'src/pages/ServicePage.jsx'
    : PAGE_SRC[routePath]
  if (!key || !manifest[key]) throw new Error(`No manifest chunk for ${routePath}`)
  return [...chunkFiles(key)]
    .filter((f) => !entryFiles.has(f))
    .map((f) => `<link rel="modulepreload" crossorigin href="/${f}" />`)
}

// Inline the (single, cssCodeSplit: false) stylesheet so the first paint
// doesn't block on a CSS request. The ~5 KiB gzipped cost per HTML page buys
// the render-blocking request away entirely.
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/)
if (!cssLink) throw new Error('Stylesheet link not found in dist/index.html')
const css = fs.readFileSync(path.join(root, 'dist', cssLink[1]), 'utf-8')
template = template.replace(cssLink[0], `<style>${css}</style>`)

// Template kept as the SPA fallback for unknown URLs (see vercel.json
// rewrites) — an empty root div avoids hydration mismatches, and there's no
// single route to preload a hero image for.
fs.writeFileSync(
  path.join(root, 'dist/spa-fallback.html'),
  template.replace('<!--HERO_IMAGE_PRELOAD-->', '')
)

for (const meta of Object.values(ROUTES_META)) {
  const appHtml = await render(meta.path)
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(meta.description)}$2`
    )
    .replace('<!--HERO_IMAGE_PRELOAD-->', heroPreloadTag(meta))
    .replace('</head>', `${headTags(meta)}${preloadTags(meta.path).join('\n    ')}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outDir = meta.path === '/' ? path.join(root, 'dist') : path.join(root, `dist${meta.path}`)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  process.stdout.write(`prerendered ${meta.path}\n`)
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
fs.rmSync(path.join(root, 'dist/.vite'), { recursive: true, force: true })
