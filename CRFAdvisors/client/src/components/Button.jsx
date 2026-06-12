import { Link } from 'react-router-dom'

/**
 * Design-system button. Renders a router Link when `to` is given,
 * otherwise a native button. Variants: primary | ghost | ghost-light | white.
 */
export default function Button({ to, variant = 'primary', children, ...rest }) {
  const className = `btn btn--${variant}`
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}
