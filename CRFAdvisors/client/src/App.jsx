import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ConsultingServices from './pages/ConsultingServices'
import Clients from './pages/Clients'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ServicePage from './pages/ServicePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'

// Router-agnostic app shell: main.jsx wraps it in BrowserRouter for the
// client; entry-server.jsx wraps it in StaticRouter for build-time prerender.
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting-services" element={<ConsultingServices />} />
          <Route path="/consulting" element={<Navigate to="/consulting-services" replace />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
