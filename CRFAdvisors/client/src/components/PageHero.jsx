import { Link } from 'react-router-dom'

/**
 * Interior-page hero: blue gradient by default, or a dark photo with a navy
 * overlay when `image` is provided. Breadcrumb + white Playfair H1.
 * Pass `parent={{ label, to }}` for an intermediate breadcrumb crumb.
 */
export default function PageHero({ title, breadcrumb, subtext, parent, image, imageAlt }) {
  return (
    <section className={`page-hero${image ? ' page-hero--photo' : ''}`}>
      {image && (
        <>
          <img className="page-hero__photo" src={image} alt={imageAlt || ''} aria-hidden={!imageAlt} />
          <div className="page-hero__overlay" aria-hidden="true" />
        </>
      )}
      <div className="container page-hero__content">
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
