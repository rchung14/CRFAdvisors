import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { PAGE_IMPORTERS } from './pageImporters.js'

export { ROUTES_META } from './seo/routesMeta.js'

/**
 * Renders the app for a given URL. Used by scripts/prerender.mjs at build time.
 *
 * Pages are React.lazy (see App.jsx), and renderToString can't wait for a
 * chunk mid-render — the first pass emits the Suspense fallback for any page
 * whose module hasn't resolved yet. So: kick off every page import, let the
 * lazy payloads settle, and re-render until the page content (<main>) is in
 * the output.
 */
export async function render(url) {
  const app = (
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )

  await Promise.all(Object.values(PAGE_IMPORTERS).map((load) => load()))

  for (let attempt = 0; attempt < 10; attempt++) {
    const html = renderToString(app)
    if (html.includes('<main')) return html
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  throw new Error(`Prerender produced no page content for ${url}`)
}
