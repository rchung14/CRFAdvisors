import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import Button from '../components/Button'
import '../styles/NotFound.css'

// Rendered for unknown URLs. The Vercel rewrite serves spa-fallback.html with
// a 200, so this page carries a noindex robots tag to keep Google from
// treating stray URLs as soft 404s or duplicate pages.
export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <main className="page">
      <Seo
        title="Page Not Found | CRF Advisors"
        description="The page you are looking for does not exist."
        path={pathname}
        noindex
      />

      <section className="section not-found">
        <div className="container">
          <p className="not-found__code">404</p>
          <h1>Page Not Found</h1>
          <p className="not-found__sub">
            The page you are looking for doesn&rsquo;t exist or may have moved.
          </p>
          <div className="not-found__ctas">
            <Button to="/">Back to Home</Button>
            <Button to="/consulting-services" variant="ghost">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
