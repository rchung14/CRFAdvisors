// SEO meta + FAQ data for the service pages. Split from servicePages.js so
// routesMeta.js (loaded on every route for <head> management and prerender)
// doesn't drag the long-form page content into the shared bundle.
//
// bannerAvif is included here (not just in servicePages.js) so routesMeta.js
// can preload each service page's hero image without importing that file.
import bannerLoanReviewAvif from '../assets/svc-loan-review.avif'
import bannerDueDiligenceAvif from '../assets/svc-due-diligence.avif'
import bannerStressTestingAvif from '../assets/svc-stress-testing.avif'
import bannerAlllAvif from '../assets/svc-alll.avif'
import bannerCeclAvif from '../assets/svc-cecl.avif'
import bannerTrainingAvif from '../assets/svc-training.avif'

export const SERVICE_PAGE_META_LIST = [
  {
    slug: 'loan-review',
    bannerAvif: bannerLoanReviewAvif,
    eyebrow: 'Loan Review',
    breadcrumb: 'Independent Loan Review',
    h1: 'Independent Loan Review for Banks and Financial Institutions',
    metaTitle: 'Independent Loan Review for Banks & Credit Unions | CRF Advisors',
    metaDescription:
      'Objective, third-party loan review for community banks, credit unions, and savings institutions. Risk rating validation, problem credit identification, examiner readiness.',
    faqs: [
      { q: 'How often should we have an independent loan review?', a: 'Annual reviews are standard. Institutions with elevated risk profiles, recent examination findings, or material portfolio growth may benefit from semi-annual coverage.' },
      { q: 'What does "independent" actually require?', a: 'Independence means the reviewer has no loan approval authority, no compensation tied to lending volume, and no relationship that could compromise objectivity. Engaging an external firm automatically satisfies the independence requirement.' },
      { q: 'Will examiners accept our internal loan review function?', a: 'Internal loan review can satisfy regulatory expectations if it is functionally independent of loan administration, adequately staffed at the appropriate seniority, and properly documented. Most community banks lack the scale to do this effectively in-house.' },
      { q: 'How is sample size determined?', a: 'Regulatory guidance does not prescribe a fixed percentage. Coverage is based on portfolio composition, concentration risk, prior findings, and growth, with emphasis on risk-based rather than purely statistical sampling.' },
      { q: 'What happens if you disagree with our internal risk ratings?', a: 'We document the rationale for the recommended rating change and submit it through the institution’s normal rating-change process. Management retains authority over the final rating.' },
    ],
  },
  {
    slug: 'due-diligence',
    bannerAvif: bannerDueDiligenceAvif,
    eyebrow: 'Due Diligence',
    breadcrumb: 'Credit Due Diligence',
    h1: 'Credit Due Diligence for Mergers, Acquisitions, and Portfolio Transactions',
    metaTitle: 'Credit Due Diligence for Bank M&A & Acquisitions | CRF Advisors',
    metaDescription:
      'Independent credit due diligence for whole-bank acquisitions, branch acquisitions, and loan portfolio purchases. Risk identification, day-one credit marks, reserve adequacy.',
    faqs: [
      { q: 'When should credit diligence start?', a: 'As soon as a confidentiality agreement is in place and ideally before the binding purchase agreement is signed. Early engagement preserves negotiating leverage.' },
      { q: 'How does diligence differ from independent loan review?', a: 'Diligence is forward-looking and transaction-focused, producing input for negotiation and purchase accounting. Loan review is recurring and oversight-focused, supporting ongoing credit risk management.' },
      { q: 'What sample size is typical?', a: 'For whole-bank transactions, coverage of 60–80% of commercial loan dollars is common, supplemented by full review of all classified and large credits.' },
      { q: 'Do you support CECL day-one ACL calculations?', a: 'Yes. Our findings feed directly into the acquirer’s CECL day-one calculation requirements.' },
      { q: 'Can findings derail a deal?', a: 'Our role is to inform, not to advocate. We deliver findings calibrated to the transaction context so the acquirer’s leadership can make informed decisions about price, structure, and walk-away triggers.' },
    ],
  },
  {
    slug: 'stress-testing',
    bannerAvif: bannerStressTestingAvif,
    eyebrow: 'Portfolio Stress Testing',
    breadcrumb: 'Portfolio Stress Testing',
    h1: 'Loan Portfolio Stress Testing for Regulatory Compliance and Capital Planning',
    metaTitle: 'Loan Portfolio Stress Testing for Financial Institutions | CRF Advisors',
    metaDescription:
      'Scenario-based stress testing of commercial, CRE, and consumer loan portfolios. Capital impact modeling, regulatory readiness, board reporting for community banks and credit unions.',
    faqs: [
      { q: 'Is stress testing required for community banks?', a: 'Mandatory only for institutions over $250 billion in assets. Strongly expected as sound practice for smaller institutions, particularly those with elevated CRE concentrations or rapid loan growth.' },
      { q: 'How often should stress tests be run?', a: 'At minimum annually. More frequently for institutions with elevated risk profiles, material portfolio changes, or recent examination findings.' },
      { q: 'Can stress test results inform CECL?', a: 'Stress test loss rates can inform the reasonable and supportable forecast period under CECL, though they typically reflect more severe scenarios than CECL’s expected-loss framework. We help institutions reconcile the two frameworks where appropriate.' },
      { q: 'What scenarios do you use?', a: 'Federal Reserve supervisory scenarios are the starting point, supplemented by institution-specific scenarios that reflect the bank’s portfolio sensitivities: local economic conditions, industry concentrations, or specific tail risks.' },
    ],
  },
  {
    slug: 'alll',
    bannerAvif: bannerAlllAvif,
    eyebrow: 'ALLL Methodology & Review',
    breadcrumb: 'ALLL Methodology',
    h1: 'ALLL/ACL Methodology Review and FFIEC Compliance Support',
    metaTitle: 'ALLL Methodology Review & FFIEC Compliance | CRF Advisors',
    metaDescription:
      'Independent review and implementation support for ALLL/ACL methodology. FFIEC Interagency Policy compliance, impaired loan valuation, TDR and OREO accounting.',
    faqs: [
      { q: 'How often should the ALLL/ACL methodology be reviewed?', a: 'Annual independent validation is standard practice. Methodology changes require contemporaneous review and documentation.' },
      { q: 'Do you replace our internal ALLL/ACL process?', a: 'No. We validate, support, and recommend improvements. The institution retains full ownership of the calculation, methodology, and documentation.' },
      { q: 'Are you familiar with both ALLL and CECL frameworks?', a: 'Yes. Many institutions still operate under incurred-loss ALLL for sub-$1B portfolios; others transitioned to CECL but continue refining. We work with both.' },
      { q: 'Can you support TDR accounting under the new CECL framework?', a: 'Yes. ASU 2022-02 eliminated TDR accounting for CECL adopters but introduced new disclosure requirements for loan modifications. We help institutions implement the new framework correctly.' },
      { q: 'Do you coordinate directly with our external auditors?', a: 'Yes, and we typically encourage it. Our findings often align with auditor expectations and can streamline the year-end audit process.' },
    ],
  },
  {
    slug: 'cecl-acl-review',
    bannerAvif: bannerAlllAvif,
    eyebrow: 'CECL Methodology & ACL Review',
    breadcrumb: 'CECL Methodology & ACL Review',
    h1: 'Independent CECL Methodology and ACL Review',
    metaTitle: 'CECL Methodology & ACL Review for Banks | CRF Advisors',
    metaDescription:
      'Independent review of the Allowance for Credit Losses (ACL) calculation and CECL methodology. Pool segmentation, GL reconciliation, PD x LGD and DCF recalculation, Q-factor review.',
    faqs: [
      { q: 'How is an ACL review different from CECL implementation?', a: 'Implementation builds or configures the model; an ACL review independently tests the model and calculation management already runs. Institutions typically engage implementation support once, then periodic independent reviews on an ongoing basis.' },
      { q: 'We use a vendor CECL platform. What does your review cover?', a: 'The review covers the institution’s use of the platform: pool segmentation, assumptions, inputs, reconciliation to the GL, qualitative factors, and documentation. Examiners expect institutions to defend vendor model assumptions, not simply rely on the vendor.' },
      { q: 'How often should the ACL be independently reviewed?', a: 'Annual independent review is standard practice, aligned to the examination and external audit cycle. Methodology changes warrant contemporaneous review.' },
      { q: 'Does the review satisfy model validation expectations?', a: 'The review addresses the core elements of model risk management guidance for the ACL: conceptual soundness, computation accuracy, and outcomes analysis, scoped to institution size and complexity.' },
      { q: 'Do you review ASU 2022-02 loan modification disclosures?', a: 'Yes. The review includes the post-TDR loan modification and vintage disclosure requirements introduced by ASU 2022-02 for CECL adopters.' },
    ],
  },
  {
    slug: 'cecl',
    bannerAvif: bannerCeclAvif,
    eyebrow: 'CECL Implementation & Modeling',
    breadcrumb: 'CECL Implementation & Modeling',
    h1: 'CECL Implementation and Modeling for Financial Institutions',
    metaTitle: 'CECL Implementation & Modeling for Banks & FCUs | CRF Advisors',
    metaDescription:
      'End-to-end CECL implementation and modeling. Vintage, PD x LGD, DCF, WARM, and loss rate methodologies for community banks and credit unions.',
    faqs: [
      { q: 'We use a vendor for CECL. Do we still need independent validation?', a: 'Yes. Examiners increasingly expect institutions to understand and defend vendor model assumptions, not simply rely on the vendor. Independent validation also satisfies model risk management expectations.' },
      { q: 'Is WARM acceptable for community banks?', a: 'Yes. WARM is widely accepted for institutions with appropriate portfolio characteristics and a properly designed Q-factor framework. Many community banks find WARM the most defensible methodology given data limitations.' },
      { q: 'How does CECL interact with portfolio stress testing?', a: 'CECL expected-loss forecasts and stress test scenarios are different tools with different time horizons and severity assumptions. We help institutions reconcile the two frameworks where appropriate.' },
      { q: 'Do you build models or only review them?', a: 'Both, as separate services. This engagement covers end-to-end implementation and modeling; our CECL Methodology & ACL Review service independently validates models built internally or by vendors. Each engagement is scoped to the institution’s situation.' },
      { q: 'What happens at examination?', a: 'We support institutions directly through examination cycles, responding to examiner questions on methodology, assumptions, and documentation. The goal is examination success, not just methodology defense.' },
    ],
  },
  {
    slug: 'training',
    bannerAvif: bannerTrainingAvif,
    eyebrow: 'Training',
    breadcrumb: 'Credit Risk Training',
    h1: 'Credit Risk Management Training for Financial Institution Staff',
    metaTitle: 'Credit Risk Management Training | ALLL, CECL & TDR | CRF Advisors',
    metaDescription:
      'CRF Advisors provides credit risk management training for banks and financial institutions covering ALLL methodology, CECL preparation, TDR identification, impaired loan valuation, and credit analysis.',
    faqs: [
      { q: 'What topics does CRF Advisors training cover?', a: 'Core modules cover ALLL methodology (ASC 450 general reserves, ASC 310-10 loan impairment, ASC 310-20 loan fees and costs, ASC 310-30 credit-impaired loans), impaired loan valuation, CECL preparation and modeling, identification and impairment valuation of Troubled Debt Restructured (TDR) loans, and credit analysis and monitoring including DSCR and LTV calculation.' },
      { q: 'Who is this training designed for?', a: 'Credit department staff, loan officers, loan review personnel, finance and accounting teams, and audit committee or board members at banks, credit unions, and financial services companies. Content is calibrated to the audience — technical modeling for analysts, oversight frameworks for boards.' },
      { q: 'Does CRF Advisors help with CECL data requirements?', a: 'Yes. CECL training covers preparation, loan-level data requirements, and modeling, including what historical performance data your systems must capture and how it feeds vintage, PD x LGD, and discounted cash flow approaches.' },
      { q: 'What ASC standards are covered in training?', a: 'ALLL modules cover ASC 450 (FAS 5 General Reserve), ASC 310-10 (FAS 114 Loan Impairment), ASC 310-20 (FAS 91 Loans), and ASC 310-30 (SOP 03-3 Credit Impaired Loans), plus ASC 326 (CECL) for expected-loss training.' },
      { q: 'Is training delivered on-site or remotely?', a: 'Either. Sessions are scheduled around your team and can run on-site at your institution or remotely, using your own credit policies and portfolio examples wherever possible.' },
    ],
  },
]

export const SERVICE_PAGE_META_BY_SLUG = Object.fromEntries(
  SERVICE_PAGE_META_LIST.map((m) => [m.slug, m])
)
