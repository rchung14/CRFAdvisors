import { useState } from 'react'

// Accessible single-open accordion for the service-page FAQ. Each question is
// an <h3> button (aria-expanded + aria-controls) toggling its answer panel.
// The full Q&A text stays in the DOM (collapsed panels use `hidden`), so it
// remains crawlable and consistent with the FAQPage JSON-LD. First item opens
// by default.
export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq">
      {items.map(({ q, a }, i) => {
        const isOpen = openIndex === i
        const triggerId = `faq-trigger-${i}`
        const panelId = `faq-panel-${i}`
        return (
          <div key={q} className="faq__item">
            <h3 className="faq__q">
              <button
                id={triggerId}
                type="button"
                className="faq__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span>{q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="faq__panel"
              hidden={!isOpen}
            >
              <p>{a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
