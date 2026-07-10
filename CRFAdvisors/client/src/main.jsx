import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/Global.css'
import App from './App.jsx'
import { importerForPath } from './pageImporters'

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const container = document.getElementById('root')

// Production HTML is prerendered (scripts/prerender.mjs) — hydrate it.
// Pages are lazy (route-level code splitting), so load the current route's
// chunk first: hydration then never suspends and the prerendered markup is
// adopted in place. Dev server has an empty root — render from scratch.
if (container.hasChildNodes()) {
  importerForPath(window.location.pathname)().finally(() =>
    hydrateRoot(container, app)
  )
} else {
  createRoot(container).render(app)
}
