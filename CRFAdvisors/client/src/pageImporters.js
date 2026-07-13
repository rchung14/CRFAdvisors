// Route-level code splitting: one importer per page. App.jsx wraps these in
// React.lazy; entry-server.jsx awaits them all before prerendering; main.jsx
// preloads the current route's chunk before hydrating so the prerendered
// markup is never replaced by a Suspense fallback.
export const PAGE_IMPORTERS = {
  Home: () => import('./pages/Home'),
  ConsultingServices: () => import('./pages/ConsultingServices'),
  ServicePage: () => import('./pages/ServicePage'),
  Clients: () => import('./pages/Clients'),
  About: () => import('./pages/About'),
  Contact: () => import('./pages/Contact'),
  Privacy: () => import('./pages/Privacy'),
  Terms: () => import('./pages/Terms'),
  Accessibility: () => import('./pages/Accessibility'),
  NotFound: () => import('./pages/NotFound'),
}

/** The importer for the page a pathname renders (mirrors the routes in App.jsx). */
export function importerForPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return PAGE_IMPORTERS.Home
  if (path === '/consulting-services') return PAGE_IMPORTERS.ConsultingServices
  if (path.startsWith('/consulting-services/')) return PAGE_IMPORTERS.ServicePage
  if (path === '/clients') return PAGE_IMPORTERS.Clients
  if (path === '/about') return PAGE_IMPORTERS.About
  if (path === '/contact') return PAGE_IMPORTERS.Contact
  if (path === '/privacy') return PAGE_IMPORTERS.Privacy
  if (path === '/terms') return PAGE_IMPORTERS.Terms
  if (path === '/accessibility') return PAGE_IMPORTERS.Accessibility
  return PAGE_IMPORTERS.NotFound
}
