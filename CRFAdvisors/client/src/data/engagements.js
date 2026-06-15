// PLACEHOLDER DATA — CRF to replace with real anonymized engagement summaries.
//
// Keep every entry anonymized: institution SIZE + STATE + SERVICE + OUTCOME only.
// Do NOT use real client names (named case studies typically require the
// client's written permission). Edit this one file to populate the
// "Representative Engagements" section on /clients.
//
// Card fields:
//   tag      -> short service label shown as an eyebrow/badge (reuse existing
//               service names: 'Loan Review', 'Due Diligence', 'Stress Testing',
//               'CECL', 'ALLL')
//   headline -> anonymized descriptor, e.g.
//               'Independent Loan Review — $[X]B Community Bank, [State]'
//   summary  -> 2–3 sentence anonymized scope + outcome
//
// TODO: When real, approved content exists, a Review/CaseStudy or
// CreativeWork JSON-LD schema could be added in routesMeta.js for /clients.

export const ENGAGEMENTS = [
  {
    tag: 'Loan Review',
    headline: 'Independent Loan Review — $[X]B Community Bank, [State]',
    summary:
      '[PLACEHOLDER: Describe the engagement — institution size, scope of the loan review (e.g., % of commercial loan dollars covered, CRE/C&I focus), what CRF assessed, and the outcome. Keep anonymized — size, state, and service only.]',
  },
  {
    tag: 'CECL',
    headline: 'CECL Model Implementation — $[X]M Credit Union, [State]',
    summary:
      '[PLACEHOLDER: Describe the CECL engagement — portfolio complexity, methodology selected (e.g., WARM, DCF), data and documentation work performed, and the outcome at audit or examination. Keep anonymized.]',
  },
  {
    tag: 'Stress Testing',
    headline: 'Portfolio Stress Testing — $[X]B Savings Institution, [State]',
    summary:
      '[PLACEHOLDER: Describe the stress testing engagement — portfolio segments modeled, scenarios applied, capital impact analysis, and how results supported capital planning or the board. Keep anonymized.]',
  },
  {
    tag: 'Due Diligence',
    headline: 'Credit Due Diligence — Whole-Bank Acquisition, [State]',
    summary:
      '[PLACEHOLDER: Describe the diligence engagement — transaction type, coverage of the target loan portfolio, concentrations and reserve adequacy reviewed, and how findings informed pricing or the day-one credit mark. Keep anonymized.]',
  },
]
