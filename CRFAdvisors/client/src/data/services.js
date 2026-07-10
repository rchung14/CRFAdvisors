import { FileSearch, Search, Activity, Calculator, ClipboardCheck, Layers } from 'lucide-react'

// The six core services. `summary` feeds the homepage cards; the long-form
// fields feed the /consulting-services detail sections (SEO H2s from site.md).
export const SERVICES = [
  {
    id: 'loan-review',
    slug: 'loan-review',
    name: 'Loan Review',
    icon: FileSearch,
    summary:
      'Independent assessment of loan portfolio quality, underwriting standards, risk rating accuracy, and regulatory compliance.',
    h2: 'Independent Loan Review for Banks and Financial Institutions',
    paragraphs: [
      'Our independent loan review provides an objective assessment of loan portfolio quality for national and community banks, federal credit unions, and savings institutions. Each loan portfolio review engagement evaluates credit underwriting standards, risk rating accuracy, loan classification, and compliance with applicable regulatory guidelines.',
      'By identifying potential problem credits early, our credit review helps management strengthen credit administration, support examination readiness, and maintain confidence in portfolio reporting with regulators, auditors, and the board.',
    ],
    bullets: [
      'Risk rating validation and loan classification review',
      'Credit underwriting and documentation assessment',
      'Annual and targeted loan portfolio review programs',
      'Regulatory compliance and examination support',
    ],
  },
  {
    id: 'due-diligence',
    slug: 'due-diligence',
    name: 'Due Diligence',
    icon: Search,
    summary:
      'Comprehensive credit due diligence for M&A activity, whole bank acquisitions, and loan portfolio purchases.',
    h2: 'Credit Due Diligence for Mergers, Acquisitions, and Transactions',
    paragraphs: [
      'CRF Advisors performs comprehensive credit due diligence for merger and acquisition activity, whole bank acquisitions, and loan portfolio purchases. Our work gives acquirers a clear, independent view of the credit quality they are taking on before a transaction closes.',
      'Each loan portfolio due diligence engagement evaluates credit quality, portfolio concentrations, underwriting standards, and reserve adequacy, equipping decision-makers with the credit insight needed to price and structure the transaction with confidence.',
    ],
    bullets: [
      'Whole bank and branch acquisition credit review',
      'Loan portfolio purchase evaluation',
      'Concentration and underwriting standards analysis',
      'Reserve adequacy assessment prior to close',
    ],
  },
  {
    id: 'stress-testing',
    slug: 'stress-testing',
    name: 'Portfolio Stress Testing',
    icon: Activity,
    summary:
      'Scenario-based stress testing of commercial, residential, and consumer portfolios with credit loss and capital impact modeling.',
    h2: 'Loan Portfolio Stress Testing for Regulatory Compliance',
    paragraphs: [
      'We deliver scenario-based stress testing of commercial, residential, and consumer loan portfolios for regulatory and internal planning purposes. Our bank stress test models simulate economic downturn scenarios tailored to each institution’s portfolio composition and market footprint.',
      'Deliverables include credit loss projections and capital impact analysis that support regulatory expectations, board reporting, and forward-looking risk management decisions.',
    ],
    bullets: [
      'Economic downturn scenario modeling',
      'Credit loss projection by portfolio segment',
      'Capital impact analysis for planning and reporting',
      'CRE, C&I, residential, and consumer coverage',
    ],
  },
  {
    id: 'alll',
    slug: 'alll',
    name: 'ALLL Methodology & Review',
    icon: Calculator,
    summary:
      'Review and implementation of ALLL methodology in compliance with the FFIEC Interagency Policy Statement and GAAP.',
    h2: 'ALLL Methodology Review and FFIEC Compliance',
    paragraphs: [
      'CRF Advisors reviews and implements Allowance for Loan and Lease Losses (ALLL) methodology to ensure compliance with the FFIEC Interagency Policy Statement and GAAP. We assess directional consistency, qualitative factor support, and documentation quality across the allowance process.',
      'Engagements also cover impaired loan valuation, troubled debt restructuring (TDR) accounting, and other real estate owned (OREO) review. These are the areas examiners scrutinize most closely.',
    ],
    bullets: [
      'FFIEC Interagency Policy Statement compliance',
      'Impaired loan valuation and TDR accounting',
      'OREO valuation and accounting review',
      'Qualitative factor and documentation support',
    ],
  },
  {
    id: 'cecl-acl-review',
    slug: 'cecl-acl-review',
    name: 'CECL Methodology & ACL Review',
    icon: ClipboardCheck,
    summary:
      'Independent review of the Allowance for Credit Losses (ACL) calculation and CECL methodology for conformity with interagency policy and ASC 326.',
    h2: 'Independent CECL Methodology and Allowance for Credit Losses (ACL) Review',
    paragraphs: [
      'CRF Advisors performs an independent review of the Allowance for Credit Losses (ACL) calculation and Current Expected Credit Loss (CECL) methodology implemented by management. Review procedures focus on the completeness of the ACL computation and supporting documentation, and conformity of the CECL methodology with interagency policy and accounting standards.',
      'Engagements test the accuracy of the ACL computation, verify loan pool balances to the general ledger, and evaluate pool segmentation, life determination, and qualitative assumptions.',
    ],
    bullets: [
      'ACL computation accuracy testing and GL reconciliation',
      'Pool segmentation, criteria, and life determination review',
      'Recalculation of sampled PD x LGD and DCF loss model outputs',
      'Qualitative assumption and documentation review',
    ],
  },
  {
    id: 'cecl',
    slug: 'cecl',
    name: 'CECL Implementation & Modeling',
    icon: Layers,
    summary:
      'End-to-end CECL model development and implementation using vintage, PD x LGD, and discounted cash flow approaches, tailored to institution size.',
    h2: 'CECL Implementation and Modeling for Financial Institutions',
    paragraphs: [
      'We assist financial institutions and credit unions with implementation of the Current Expected Credit Loss (CECL) model. Our CECL implementation and modeling is tailored to institution size and portfolio complexity, making the standard practical for community banks and credit unions as well as larger institutions.',
      'Engagements include data gap analysis, model selection, parallel run support, and documentation prepared to stand up to regulatory review.',
    ],
    bullets: [
      'Loan-level data collection and gap analysis',
      'Vintage, PD x LGD, and DCF loss modeling',
      'Parallel run support and calibration',
      'Documentation for regulatory review',
    ],
  },
]

export const APPROACH = [
  {
    title: 'Comprehensive Risk Assessment',
    body: 'We identify key credit, valuation, and risk rating issues early to support timely reporting and portfolio analysis.',
  },
  {
    title: 'Independent Credit Review',
    body: 'We perform independent loan review, loan portfolio credit analysis, and risk rating validation to assess portfolio quality and underwriting standards.',
  },
  {
    title: 'Regulatory Alignment',
    body: 'Our reviews support regulatory compliance, audit readiness, and risk management for banks and financial institutions.',
  },
]

export const PROCESS_STEPS = [
  {
    title: 'Portfolio Understanding',
    body: 'We begin with your portfolio composition, credit policies, and risk profile to scope the engagement properly.',
  },
  {
    title: 'Risk Assessment & Rating',
    body: 'Detailed credit analysis, risk rating validation, and identification of valuation or classification issues.',
  },
  {
    title: 'Findings & Reporting',
    body: 'Clear, documented findings with practical recommendations delivered to management and the board.',
  },
  {
    title: 'Regulatory Alignment',
    body: 'Results mapped to regulatory expectations to support examination readiness and audit response.',
  },
]
