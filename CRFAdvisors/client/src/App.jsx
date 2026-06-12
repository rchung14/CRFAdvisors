import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ConsultingServices from './pages/ConsultingServices'
import Clients from './pages/Clients'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting-services" element={<ConsultingServices />} />
          <Route path="/consulting" element={<Navigate to="/consulting-services" replace />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </Router>
  )
}

export default App
