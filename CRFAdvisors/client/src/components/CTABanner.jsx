import Button from './Button'

/** Blue-gradient call-to-action banner used at the bottom of every page. */
export default function CTABanner({ heading, subtext, buttonLabel = 'Contact Us', buttonTo = '/contact' }) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>{heading}</h2>
        {subtext && <p className="cta-banner__sub">{subtext}</p>}
        <Button to={buttonTo} variant="white">
          {buttonLabel}
        </Button>
      </div>
    </section>
  )
}
