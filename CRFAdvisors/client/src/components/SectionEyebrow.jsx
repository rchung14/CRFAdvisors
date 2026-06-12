/** ALL CAPS tracked label above section headings. */
export default function SectionEyebrow({ children, light = false }) {
  return <span className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{children}</span>
}
