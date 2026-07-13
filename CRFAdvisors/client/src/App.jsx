import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import { PAGE_IMPORTERS } from './pageImporters'

// Pages are code-split per route so a visitor only downloads the page they're
// on. entry-server.jsx awaits the importers before prerendering, so the
// static HTML is always complete; main.jsx preloads the current route's
// chunk before hydrating.
const Home = lazy(PAGE_IMPORTERS.Home)
const ConsultingServices = lazy(PAGE_IMPORTERS.ConsultingServices)
const ServicePage = lazy(PAGE_IMPORTERS.ServicePage)
const Clients = lazy(PAGE_IMPORTERS.Clients)
const About = lazy(PAGE_IMPORTERS.About)
const Contact = lazy(PAGE_IMPORTERS.Contact)
const Privacy = lazy(PAGE_IMPORTERS.Privacy)
const Terms = lazy(PAGE_IMPORTERS.Terms)
const Accessibility = lazy(PAGE_IMPORTERS.Accessibility)
const NotFound = lazy(PAGE_IMPORTERS.NotFound)

// Router-agnostic app shell: main.jsx wraps it in BrowserRouter for the
// client; entry-server.jsx wraps it in StaticRouter for build-time prerender.
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting-services" element={<ConsultingServices />} />
          <Route path="/consulting" element={<Navigate to="/consulting-services" replace />} />
          <Route path="/consulting-services/:slug" element={<ServicePage />} />
          {/* Redirects from the earlier flat /services/* URLs to the nested ones */}
          <Route path="/services/loan-review" element={<Navigate to="/consulting-services/loan-review" replace />} />
          <Route path="/services/due-diligence" element={<Navigate to="/consulting-services/due-diligence" replace />} />
          <Route path="/services/portfolio-stress-testing" element={<Navigate to="/consulting-services/stress-testing" replace />} />
          <Route path="/services/alll-methodology" element={<Navigate to="/consulting-services/alll" replace />} />
          <Route path="/services/cecl-implementation" element={<Navigate to="/consulting-services/cecl" replace />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          {/* Real 404 page (noindex) instead of redirecting to home — a JS
              redirect on every unknown URL reads as a soft 404 to Google */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
