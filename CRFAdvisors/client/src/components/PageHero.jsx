import { Link } from 'react-router-dom'

/**
 * Interior-page hero: blue gradient, breadcrumb, white Playfair H1.
 * Pass `parent={{ label, to }}` to add an intermediate breadcrumb crumb
 * (e.g. Home / Consulting Services / This Page).
 */
export default function PageHero({ title, breadcrumb, subtext, parent }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb__sep">/</span>
          {parent && (
            <>
              <Link to={parent.to}>{parent.label}</Link>
              <span className="breadcrumb__sep">/</span>
            </>
          )}
          <span className="breadcrumb__current">{breadcrumb}</span>
        </nav>
        <h1>{title}</h1>
        {subtext && <p className="page-hero__sub">{subtext}</p>}
      </div>
    </section>
  )
}
