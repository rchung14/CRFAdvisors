import { FileSearch, Search, Activity, Calculator, Layers } from 'lucide-react'
import bannerLoanReview from '../assets/svc-loan-review.webp'
import bannerDueDiligence from '../assets/svc-due-diligence.webp'
import bannerStressTesting from '../assets/svc-stress-testing.webp'
import bannerAlll from '../assets/svc-alll.webp'
import bannerCecl from '../assets/svc-cecl.webp'

// Long-form content for the five standalone service pages (/services/:slug).
// Rendered by ServicePage.jsx; metadata + JSON-LD derived in routesMeta.js.
//
// Section item shapes:
//   - string                       -> plain <li>
//   - { term, desc }               -> <li><strong>term.</strong> desc</li>
// Section `ordered: true` renders <ol> (numbered methodology), else <ul>.
//
// `related` is an array of segments: a string renders as text, an object
// { to, label } renders as an internal <Link> (keyword anchor text).

export const SERVICE_PAGES = [
  {
    slug: 'loan-review',
    id: 'loan-review',
    icon: FileSearch,
    banner: bannerLoanReview,
    bannerAlt: 'Two credit professionals reviewing loan portfolio documents and financial statements',
    eyebrow: 'Loan Review',
    breadcrumb: 'Independent Loan Review',
    h1: 'Independent Loan Review for Banks and Financial Institutions',
    metaTitle: 'Independent Loan Review for Banks & Credit Unions | CRF Advisors',
    metaDescription:
      'Objective, third-party loan review for community banks, credit unions, and savings institutions. Risk rating validation, problem credit identification, examiner readiness.',
    intro: [
      'Independent loan review is an objective, third-party assessment of a financial institution’s loan portfolio quality, designed to validate risk ratings, identify deteriorating credits early, and confirm compliance with the institution’s credit policies and applicable regulatory guidance. Unlike internal credit review, an independent loan review program is performed by professionals with no operational stake in the lending decisions being evaluated, satisfying the independence requirement reinforced throughout federal banking guidance.',
    ],
    sections: [
      {
        heading: 'Why Independent Loan Review Matters',
        paragraphs: [
          'Federal banking regulators expect every institution to maintain an effective loan review system that operates independently of loan administration. The Interagency Policy Statement on the Allowance for Credit Losses, the OCC’s Loan Portfolio Management Handbook, and the FDIC’s Risk Management Manual all reinforce that loan review independence is a foundational element of safe and sound credit risk management.',
          'For most community banks, building and staffing a fully independent internal loan review function is impractical. Engaging an external loan review firm satisfies the independence requirement, brings cross-institutional perspective, and concentrates senior credit expertise on the engagement without the overhead of full-time staff.',
        ],
        items: [
          'The ACL/ALLL calculation',
          'Risk reporting to the board’s audit and risk committees',
          'Management’s response to regulatory examinations',
          'Strategic decisions about portfolio concentrations and underwriting standards',
        ],
        itemsLead: 'Findings from loan review feed directly into:',
      },
      {
        heading: 'Our Loan Review Methodology',
        paragraphs: ['Each loan review engagement follows a defined six-phase approach:'],
        ordered: true,
        items: [
          { term: 'Scoping and Planning', desc: 'Coverage targets are calibrated to institution size, portfolio composition, growth, concentrations, and prior examination findings. Typical first-year coverage targets 50–70% of commercial loan dollars, with annual recalibration based on findings.' },
          { term: 'Risk-Based Sample Selection', desc: 'Sampling weights toward classified credits, criticized assets, large concentrations, recently originated loans, and any segment with elevated risk indicators. Random sampling supplements the risk-weighted selection.' },
          { term: 'Underwriting and Credit Analysis Review', desc: 'Each selected credit is evaluated against the institution’s underwriting standards: cash flow analysis, collateral support, guarantor strength, loan structure, covenant compliance, and policy adherence.' },
          { term: 'Risk Rating Validation', desc: 'Independent re-rating using the institution’s regulatory rating scale (Pass, Special Mention, Substandard, Doubtful, Loss) with documented rationale for any rating differences. Disagreements with internal ratings are escalated for management review.' },
          { term: 'Findings Reporting', desc: 'Detailed written report to management and the board with severity-graded findings, opportunity for management response, and clear recommendations.' },
          { term: 'Trend and Systemic Analysis', desc: 'Aggregate findings are analyzed to identify systemic underwriting, documentation, or administrative issues across portfolio segments, often the most valuable output of the engagement.' },
        ],
      },
      {
        heading: 'What You Receive',
        items: [
          'Executive summary suitable for board presentation',
          'Loan-level review forms with documented rationale for every conclusion',
          'Risk rating change recommendations supported by analysis',
          'Policy and process findings with practical recommendations',
          'Aggregate exception reports by category',
          'Materials prepared for inclusion in the institution’s regulatory examination response',
        ],
      },
      {
        heading: 'Who We Serve',
        items: [
          'Community banks with $100M to $5B in assets',
          'Federal credit unions with member business loan portfolios',
          'Savings institutions and mutual holding companies',
          'Bank holding companies preparing for or responding to examination',
        ],
      },
    ],
    faqs: [
      { q: 'How often should we have an independent loan review?', a: 'Annual reviews are standard. Institutions with elevated risk profiles, recent examination findings, or material portfolio growth may benefit from semi-annual coverage.' },
      { q: 'What does "independent" actually require?', a: 'Independence means the reviewer has no loan approval authority, no compensation tied to lending volume, and no relationship that could compromise objectivity. Engaging an external firm automatically satisfies the independence requirement.' },
      { q: 'Will examiners accept our internal loan review function?', a: 'Internal loan review can satisfy regulatory expectations if it is functionally independent of loan administration, adequately staffed at the appropriate seniority, and properly documented. Most community banks lack the scale to do this effectively in-house.' },
      { q: 'How is sample size determined?', a: 'Regulatory guidance does not prescribe a fixed percentage. Coverage is based on portfolio composition, concentration risk, prior findings, and growth, with emphasis on risk-based rather than purely statistical sampling.' },
      { q: 'What happens if you disagree with our internal risk ratings?', a: 'We document the rationale for the recommended rating change and submit it through the institution’s normal rating-change process. Management retains authority over the final rating.' },
    ],
    approach: [
      { term: 'Independence is non-negotiable', desc: 'We do not accept engagements where independence is compromised by scope or relationship.' },
      { term: 'Findings are graded by severity', desc: 'Not by criticism for its own sake. The goal is actionable insight, not exception-counting.' },
      { term: 'Practical recommendations beat theoretical perfection', desc: 'Findings come with realistic remediation paths.' },
      { term: 'Trend identification matters as much as individual loan findings', desc: 'Patterns across a portfolio reveal more than any single credit.' },
    ],
    related: [
      'Loan review findings often inform ',
      { to: '/services/alll-methodology', label: 'ALLL methodology and ACL calculation' },
      ', ',
      { to: '/services/cecl-implementation', label: 'CECL model assumptions' },
      ', and ',
      { to: '/services/portfolio-stress-testing', label: 'loan portfolio stress testing' },
      '. Acquisition contexts call for our ',
      { to: '/services/due-diligence', label: 'credit due diligence services' },
      '.',
    ],
  },

  {
    slug: 'due-diligence',
    id: 'due-diligence',
    icon: Search,
    banner: bannerDueDiligence,
    bannerAlt: 'Signing a transaction agreement, representing credit due diligence for mergers, acquisitions, and portfolio purchases',
    eyebrow: 'Due Diligence',
    breadcrumb: 'Credit Due Diligence',
    h1: 'Credit Due Diligence for Mergers, Acquisitions, and Portfolio Transactions',
    metaTitle: 'Credit Due Diligence for Bank M&A and Portfolio Acquisitions | CRF Advisors',
    metaDescription:
      'Independent credit due diligence for whole-bank acquisitions, branch acquisitions, and loan portfolio purchases. Risk identification, day-one credit marks, reserve adequacy.',
    intro: [
      'Credit due diligence is the systematic pre-closing examination of a target institution’s loan portfolio to validate credit quality, identify concealed risk, confirm reserve adequacy, and inform acquisition pricing. For acquirers, comprehensive credit diligence is the difference between paying for a healthy book of business and inheriting a portfolio of problem credits that surface in the first post-closing examination cycle.',
    ],
    sections: [
      {
        heading: 'Why Credit Due Diligence Matters',
        paragraphs: [
          'In community bank M&A, the loan portfolio typically represents 60–75% of the target’s earning assets. Sellers’ representations and audited financial statements rarely capture the granular credit issues that drive purchase price adjustments, day-one credit marks under purchase accounting, and post-closing ACL adjustments under CECL.',
        ],
        itemsLead: 'A rigorous credit diligence engagement:',
        items: [
          'Identifies credit quality issues before negotiations close',
          'Supports purchase price adjustments where warranted',
          'Provides defensible input for ASC 805 day-one credit marks',
          'Informs the CECL day-one ACL calculation required of acquirers',
          'Gives the acquirer’s board and primary regulator confidence in the transaction’s underwriting',
        ],
      },
      {
        heading: 'Our Due Diligence Methodology',
        paragraphs: ['Each diligence engagement is sized to the transaction, but typically follows a seven-phase approach:'],
        ordered: true,
        items: [
          { term: 'Pre-Closing Scoping', desc: 'Definition of transaction structure (whole-bank vs. portfolio purchase, stock vs. asset deal), target portfolio composition, and concentration screening from public data.' },
          { term: 'Risk-Weighted Sample Selection', desc: 'Sample emphasizes classified credits, large credits, concentrations, and recently originated loans. Confidentiality protocols are established with the target’s deal team.' },
          { term: 'Credit File Examination', desc: 'Full review of underwriting, documentation, collateral valuation, performance history, and risk ratings.' },
          { term: 'Concentration Analysis', desc: 'Industry, geographic, CRE property type, and single-borrower exposure analyzed against the acquirer’s risk appetite.' },
          { term: 'Reserve Adequacy Assessment', desc: 'Evaluation of the target’s ACL/ALLL against portfolio risk profile, with comparison to peer institutions.' },
          { term: 'Day-One Credit Mark Estimation', desc: 'Preliminary credit marks estimated for purchase accounting purposes, supporting both negotiation and post-closing accounting.' },
          { term: 'Findings Reporting', desc: 'Confidential report to the acquirer’s leadership, counsel, and (when appropriate) the board.' },
        ],
      },
      {
        heading: 'Transaction Types We Support',
        items: [
          'Whole-bank acquisitions',
          'Branch acquisitions with loan portfolios',
          'Whole-loan portfolio purchases',
          'FDIC-assisted transactions',
          'Distressed portfolio acquisitions and workout engagements',
        ],
      },
      {
        heading: 'What You Receive',
        items: [
          'Confidential findings report suitable for board and regulator presentation',
          'Credit quality scorecard by portfolio segment',
          'Identified problem credits with quantified risk exposure',
          'Concentration analysis with recommendations',
          'Preliminary day-one credit mark estimates',
          'Recommended representations and warranties',
          'Materials supporting any purchase price adjustment request',
        ],
      },
    ],
    faqs: [
      { q: 'When should credit diligence start?', a: 'As soon as a confidentiality agreement is in place and ideally before the binding purchase agreement is signed. Early engagement preserves negotiating leverage.' },
      { q: 'How does diligence differ from independent loan review?', a: 'Diligence is forward-looking and transaction-focused, producing input for negotiation and purchase accounting. Loan review is recurring and oversight-focused, supporting ongoing credit risk management.' },
      { q: 'What sample size is typical?', a: 'For whole-bank transactions, coverage of 60–80% of commercial loan dollars is common, supplemented by full review of all classified and large credits.' },
      { q: 'Do you support CECL day-one ACL calculations?', a: 'Yes. Our findings feed directly into the acquirer’s CECL day-one calculation requirements.' },
      { q: 'Can findings derail a deal?', a: 'Our role is to inform, not to advocate. We deliver findings calibrated to the transaction context so the acquirer’s leadership can make informed decisions about price, structure, and walk-away triggers.' },
    ],
    approach: [
      { term: 'Speed without compromise', desc: 'M&A timelines are unforgiving, but accuracy matters more than expedience.' },
      { term: 'Direct communication', desc: 'With the deal team, counsel, and the acquirer’s board.' },
      { term: 'Findings calibrated to inform negotiation', desc: 'Not to derail it for its own sake.' },
      { term: 'Confidentiality protocols', desc: 'That protect both parties throughout the process.' },
    ],
    related: [
      'Diligence findings often inform post-closing ',
      { to: '/services/loan-review', label: 'loan review' },
      ', ',
      { to: '/services/alll-methodology', label: 'ALLL/ACL methodology integration' },
      ', and ',
      { to: '/services/cecl-implementation', label: 'CECL day-one and ongoing modeling' },
      '.',
    ],
  },

  {
    slug: 'portfolio-stress-testing',
    id: 'stress-testing',
    icon: Activity,
    banner: bannerStressTesting,
    bannerAlt: 'Financial data and analytics dashboard, representing scenario-based loan portfolio stress testing',
    eyebrow: 'Portfolio Stress Testing',
    breadcrumb: 'Portfolio Stress Testing',
    h1: 'Loan Portfolio Stress Testing for Regulatory Compliance and Capital Planning',
    metaTitle: 'Loan Portfolio Stress Testing for Community Banks | CRF Advisors',
    metaDescription:
      'Scenario-based stress testing of commercial, CRE, and consumer loan portfolios. Capital impact modeling, regulatory readiness, board reporting for community banks and credit unions.',
    intro: [
      'Loan portfolio stress testing is the quantitative modeling of credit losses under adverse economic scenarios, used to validate capital adequacy, inform strategic planning, and demonstrate sound risk management to regulators. While DFAST stress testing is mandatory only for institutions above $250 billion in assets, federal banking regulators expect community banks and credit unions to perform commensurate portfolio stress testing as part of sound risk management, particularly for institutions with material concentrations.',
    ],
    sections: [
      {
        heading: 'Why Portfolio Stress Testing Matters',
        paragraphs: [
          'Interagency supervisory guidance establishes the expectation that even smaller institutions should perform meaningful stress testing of their largest portfolio risks. Commercial real estate concentrations, in particular, are subject to enhanced scrutiny once they exceed regulatory thresholds of total capital.',
        ],
        itemsLead: 'Effective stress testing serves multiple purposes:',
        items: [
          'Validates capital adequacy under plausible adverse conditions',
          'Informs strategic decisions about portfolio composition and growth',
          'Supports the bank’s capital planning process',
          'Provides input to the reasonable and supportable forecast component of CECL',
          'Demonstrates active risk management to examiners and the board',
        ],
      },
      {
        heading: 'Our Stress Testing Methodology',
        paragraphs: ['Each stress testing engagement follows a six-phase approach:'],
        ordered: true,
        items: [
          { term: 'Portfolio Segmentation', desc: 'Loans grouped by characteristics that drive correlated risk: CRE property type, C&I industry, geographic concentration, borrower size.' },
          { term: 'Scenario Design', desc: 'Base, adverse, and severely adverse scenarios aligned with Federal Reserve macroeconomic scenarios or tailored to institution-specific risks. Scenarios calibrated to portfolio sensitivities.' },
          { term: 'Loss Estimation', desc: 'Application of segment-specific loss rates derived from institution history, peer data, and external benchmarks (FDIC call report data, Federal Reserve research, industry studies).' },
          { term: 'Capital Impact Modeling', desc: 'Projected impact on Tier 1, Total Capital, and CET1 ratios over multi-year horizons under each scenario.' },
          { term: 'Liquidity and Earnings Impact', desc: 'Net interest margin compression, deposit flight risk, and operational cash flow disruption under stress.' },
          { term: 'Reporting and Sensitivity Analysis', desc: 'Board-ready report with scenario comparisons and recommendations for mitigation.' },
        ],
      },
      {
        heading: 'Portfolio Types We Stress Test',
        items: [
          'Commercial real estate (CRE), by property type: office, retail, industrial, multifamily, hospitality',
          'Commercial and industrial (C&I)',
          'Construction and development',
          'Residential 1–4 family',
          'Home equity and HELOC',
          'Consumer and indirect auto',
        ],
      },
      {
        heading: 'What You Receive',
        items: [
          'Detailed quantitative model with documented assumptions and methodology',
          'Scenario results across multiple time horizons',
          'Capital adequacy assessment under each scenario',
          'Recommendations for concentration management',
          'Materials suitable for board, ALCO, and regulator presentation',
          'Model documentation supporting examiner review',
        ],
      },
    ],
    faqs: [
      { q: 'Is stress testing required for community banks?', a: 'Mandatory only for institutions over $250 billion in assets. Strongly expected as sound practice for smaller institutions, particularly those with elevated CRE concentrations or rapid loan growth.' },
      { q: 'How often should stress tests be run?', a: 'At minimum annually. More frequently for institutions with elevated risk profiles, material portfolio changes, or recent examination findings.' },
      { q: 'Can stress test results inform CECL?', a: 'Stress test loss rates can inform the reasonable and supportable forecast period under CECL, though they typically reflect more severe scenarios than CECL’s expected-loss framework. We help institutions reconcile the two frameworks where appropriate.' },
      { q: 'What scenarios do you use?', a: 'Federal Reserve supervisory scenarios are the starting point, supplemented by institution-specific scenarios that reflect the bank’s portfolio sensitivities: local economic conditions, industry concentrations, or specific tail risks.' },
    ],
    approach: [
      { term: 'Models built to be understood', desc: 'Not black boxes.' },
      { term: 'Documentation that supports examination', desc: 'Not just compliance.' },
      { term: 'Scenarios calibrated to the institution’s actual portfolio', desc: 'Not generic templates.' },
      { term: 'Findings that inform strategy', desc: 'Not just satisfy regulators.' },
    ],
    related: [
      'Stress testing findings often inform ',
      { to: '/services/cecl-implementation', label: 'CECL modeling' },
      ' and ',
      { to: '/services/alll-methodology', label: 'ALLL/ACL methodology' },
      '. Acquisition contexts call for our ',
      { to: '/services/due-diligence', label: 'credit due diligence services' },
      '.',
    ],
  },

  {
    slug: 'alll-methodology',
    id: 'alll',
    icon: Calculator,
    banner: bannerAlll,
    bannerAlt: 'Calculator and accounting documents, representing ALLL/ACL allowance methodology and reserve calculation',
    eyebrow: 'ALLL Methodology & Review',
    breadcrumb: 'ALLL Methodology',
    h1: 'ALLL/ACL Methodology Review and FFIEC Compliance Support',
    metaTitle: 'ALLL Methodology Review and FFIEC Compliance | CRF Advisors',
    metaDescription:
      'Independent review and implementation support for ALLL/ACL methodology. FFIEC Interagency Policy compliance, impaired loan valuation, TDR and OREO accounting.',
    intro: [
      'The Allowance for Loan and Lease Losses (ALLL) methodology, and its successor under CECL, the Allowance for Credit Losses (ACL), is the formal framework by which a financial institution estimates and reserves for expected credit losses in its loan portfolio. CRF Advisors provides independent review, validation, and implementation support for ALLL and ACL methodologies, ensuring compliance with the FFIEC Interagency Policy Statement on the Allowance for Credit Losses and applicable GAAP.',
    ],
    sections: [
      {
        heading: 'Why ALLL/ACL Methodology Matters',
        paragraphs: [
          'The ALLL/ACL is one of the largest estimates in a bank’s financial statements and a focus area for both external auditors and federal examiners. Inadequate or poorly documented methodology results in material weaknesses, restated financials, and examiner criticism, all of which carry real cost.',
          'The transition from incurred-loss ALLL (ASC 450) to expected-loss CECL (ASC 326) has elevated the technical complexity substantially. Even institutions years into CECL adoption continue to refine methodology, documentation, and qualitative factor frameworks as expectations evolve.',
        ],
      },
      {
        heading: 'Our ALLL/ACL Services',
        items: [
          'ALLL/ACL methodology validation and independent review',
          'Qualitative factor framework development and refinement',
          'Individually evaluated credit valuation',
          'TDR (Troubled Debt Restructuring) accounting support, including post-CECL TDR elimination considerations',
          'OREO (Other Real Estate Owned) valuation and accounting',
          'Documentation review for examiner readiness',
          'External auditor coordination and support',
          'Transition support for institutions adopting or refining CECL',
        ],
      },
      {
        heading: 'Methodology',
        paragraphs: ['Each ALLL/ACL engagement is scoped to the institution but typically includes:'],
        ordered: true,
        items: [
          { term: 'Segmentation Review', desc: 'Validation that portfolio segmentation captures meaningfully distinct risk profiles and supports the chosen methodology.' },
          { term: 'Loss Rate Validation', desc: 'Independent calculation and benchmarking of historical loss rates against the institution’s experience and peer data.' },
          { term: 'Qualitative Factor Assessment', desc: 'Evaluation of the Q-factor framework for directional consistency, supportability, and avoidance of double-counting with the quantitative model.' },
          { term: 'Individual Credit Evaluation', desc: 'Review of individually evaluated impaired loans for valuation accuracy, including collateral analysis and discounted cash flow.' },
          { term: 'Documentation Review', desc: 'Memo and supporting workpaper review for examiner and audit readiness.' },
        ],
      },
      {
        heading: 'Common Issues We Address',
        items: [
          'Inconsistent or unsupported qualitative factor adjustments',
          'Inadequate or overly granular portfolio segmentation',
          'Mismatched loss rate periods and current economic conditions',
          'Insufficient documentation of judgment-based adjustments',
          'Impaired loan valuation that doesn’t reflect current collateral conditions',
          'TDR designation errors and disclosure gaps',
          'OREO carrying values exceeding fair value less cost to sell',
          'Reserve adequacy that doesn’t reflect known portfolio risk',
        ],
      },
    ],
    faqs: [
      { q: 'How often should the ALLL/ACL methodology be reviewed?', a: 'Annual independent validation is standard practice. Methodology changes require contemporaneous review and documentation.' },
      { q: 'Do you replace our internal ALLL/ACL process?', a: 'No. We validate, support, and recommend improvements. The institution retains full ownership of the calculation, methodology, and documentation.' },
      { q: 'Are you familiar with both ALLL and CECL frameworks?', a: 'Yes. Many institutions still operate under incurred-loss ALLL for sub-$1B portfolios; others transitioned to CECL but continue refining. We work with both.' },
      { q: 'Can you support TDR accounting under the new CECL framework?', a: 'Yes. ASU 2022-02 eliminated TDR accounting for CECL adopters but introduced new disclosure requirements for loan modifications. We help institutions implement the new framework correctly.' },
      { q: 'Do you coordinate directly with our external auditors?', a: 'Yes, and we typically encourage it. Our findings often align with auditor expectations and can streamline the year-end audit process.' },
    ],
    approach: [
      { term: 'Documentation built for examination', desc: 'Not just for filing.' },
      { term: 'Qualitative factor frameworks that pass scrutiny', desc: 'Without overreaching.' },
      { term: 'Practical methodology calibrated to institution size', desc: 'And portfolio complexity.' },
      { term: 'Direct coordination', desc: 'With audit and examination teams.' },
    ],
    related: [
      'ALLL/ACL methodology integrates closely with ',
      { to: '/services/cecl-implementation', label: 'CECL model implementation' },
      ', ',
      { to: '/services/loan-review', label: 'independent loan review' },
      ', and ',
      { to: '/services/portfolio-stress-testing', label: 'portfolio stress testing' },
      '. Pre-closing M&A engagements involve coordinated ',
      { to: '/services/due-diligence', label: 'credit due diligence' },
      '.',
    ],
  },

  {
    slug: 'cecl-implementation',
    id: 'cecl',
    icon: Layers,
    banner: bannerCecl,
    bannerAlt: 'Financial analytics dashboard with charts, representing CECL model development and forecasting',
    eyebrow: 'CECL Model & Implementation',
    breadcrumb: 'CECL Implementation',
    h1: 'CECL Model Development and Implementation for Financial Institutions',
    metaTitle: 'CECL Model Implementation for Community Banks and Credit Unions | CRF Advisors',
    metaDescription:
      'End-to-end CECL model development, validation, and implementation. WARM, DCF, vintage analysis, and loss rate methodologies for community banks and credit unions.',
    intro: [
      'Current Expected Credit Loss (CECL), codified in ASC 326, replaced the incurred-loss model with a forward-looking expected-loss framework for accounting for credit losses. CRF Advisors provides end-to-end CECL model development, validation, and implementation support, calibrated to institution size and portfolio complexity, with documentation built to withstand both audit and examiner scrutiny.',
    ],
    sections: [
      {
        heading: 'Why CECL Implementation Matters',
        paragraphs: [
          'CECL became effective for SEC filers in 2020 and for all other institutions in 2023. The transition has been the most consequential change to bank credit loss accounting in a generation, materially affecting reserve levels, capital planning, earnings volatility, M&A purchase accounting, and regulatory reporting.',
          'Many community banks adopted CECL using vendor solutions or simplified methodologies that examiners are now scrutinizing more intensely. Effective CECL implementation requires not only a working model but defensible documentation, integrated qualitative factor frameworks, and reasonable and supportable economic forecasts.',
        ],
        itemsLead: 'The transition materially affects:',
        items: [
          'ACL levels and required reserves',
          'Capital planning and dividend policy',
          'Earnings volatility through the economic cycle',
          'M&A purchase accounting (day-one ACL calculations)',
          'Regulatory reporting and disclosure',
        ],
      },
      {
        heading: 'CECL Methodology Options We Support',
        paragraphs: [
          'The right methodology depends on portfolio composition, data availability, operational capacity, and the institution’s strategic priorities. Vendor solutions can satisfy the technical requirement but may obscure assumptions that examiners now expect institutions to defend.',
        ],
        items: [
          { term: 'Weighted Average Remaining Maturity (WARM)', desc: 'Appropriate for many community banks with limited historical data depth.' },
          { term: 'Discounted Cash Flow (DCF)', desc: 'For institutions wanting more granular forward-looking forecasting.' },
          { term: 'Vintage analysis', desc: 'For portfolios with sufficient historical cohort data.' },
          { term: 'Static pool analysis', desc: 'For institutions with stable, well-characterized pools.' },
          { term: 'Loss rate methodology with adjustments', desc: 'Appropriate for stable, well-characterized portfolios.' },
        ],
      },
      {
        heading: 'Our CECL Implementation Process',
        ordered: true,
        items: [
          { term: 'Data Readiness Assessment', desc: 'Evaluating available portfolio data for CECL requirements: historical performance, prepayment behavior, segment-level detail, and call report alignment.' },
          { term: 'Methodology Selection', desc: 'Recommendation calibrated to portfolio complexity and operational capacity, with clear rationale for the choice.' },
          { term: 'Model Development', desc: 'Building or validating the selected methodology with full documentation, including data sources, assumptions, and limitations.' },
          { term: 'Reasonable and Supportable Forecast Framework', desc: 'Designing the forward-looking component with supportable economic forecasts, appropriate forecast horizon, and reversion methodology aligned to portfolio characteristics.' },
          { term: 'Qualitative Factor Framework', desc: 'Building or refining Q-factors consistent with CECL, avoiding double-counting with the quantitative model and providing directional consistency.' },
          { term: 'Parallel Run Support', desc: 'Side-by-side running with the prior methodology during transition periods, including post-transition refinement.' },
          { term: 'Documentation Package', desc: 'Methodology memo, governance documentation, supporting workpapers, and disclosures aligned to audit and examination expectations.' },
          { term: 'Audit and Examiner Support', desc: 'Direct engagement with auditors and regulators during reviews of CECL methodology.' },
        ],
      },
      {
        heading: 'Common Issues We Address',
        items: [
          'Vendor model "black box" with insufficient documentation',
          'Forecast periods too short or too long for the portfolio’s life',
          'Reversion methodology not aligned with portfolio characteristics',
          'Qualitative factors that double-count macroeconomic forecast already in the quantitative model',
          'Insufficient governance documentation for examiner review',
          'ACL volatility that doesn’t reconcile to portfolio behavior',
          'Disclosure gaps in financial statements and call reports',
        ],
      },
    ],
    faqs: [
      { q: 'We use a vendor for CECL. Do we still need independent validation?', a: 'Yes. Examiners increasingly expect institutions to understand and defend vendor model assumptions, not simply rely on the vendor. Independent validation also satisfies model risk management expectations.' },
      { q: 'Is WARM acceptable for community banks?', a: 'Yes. WARM is widely accepted for institutions with appropriate portfolio characteristics and a properly designed Q-factor framework. Many community banks find WARM the most defensible methodology given data limitations.' },
      { q: 'How does CECL interact with portfolio stress testing?', a: 'CECL expected-loss forecasts and stress test scenarios are different tools with different time horizons and severity assumptions. We help institutions reconcile the two frameworks where appropriate.' },
      { q: 'Do you build models or only review them?', a: 'Both. We build models for institutions that need end-to-end implementation, and we validate models built internally or by vendors. Each engagement is scoped to the institution’s situation.' },
      { q: 'What happens at examination?', a: 'We support institutions directly through examination cycles, responding to examiner questions on methodology, assumptions, and documentation. The goal is examination success, not just methodology defense.' },
    ],
    approach: [
      { term: 'Methodology calibrated to the institution', desc: 'Not the vendor’s template.' },
      { term: 'Documentation built for examination', desc: 'Not just filing.' },
      { term: 'Transparent assumptions', desc: 'That the institution can defend independently.' },
      { term: 'Practical implementation', desc: 'That operational staff can sustain.' },
    ],
    related: [
      'CECL methodology integrates closely with ',
      { to: '/services/alll-methodology', label: 'ALLL/ACL framework' },
      ', ',
      { to: '/services/portfolio-stress-testing', label: 'portfolio stress testing' },
      ', and ',
      { to: '/services/loan-review', label: 'loan review findings' },
      '. Acquirers face day-one CECL calculations supported by ',
      { to: '/services/due-diligence', label: 'credit due diligence' },
      '.',
    ],
  },
]

// Generic trust block rendered at the foot of every service page.
export const WHY_CRF = [
  { term: 'Independence by design', desc: 'Every engagement is structured to preserve the independence that gives our findings credibility with regulators, auditors, and boards. We decline engagements where independence cannot be maintained.' },
  { term: 'Senior-led, senior-staffed', desc: 'Engagements are staffed at the proper experience level relative to portfolio complexity. The credit professionals reviewing your portfolio have decades of banking, audit, and regulatory experience, not entry-level analysts trained on your engagement.' },
  { term: 'Tri-State roots, national perspective', desc: 'Based in Philadelphia and serving institutions across Pennsylvania, New Jersey, Delaware, Maryland, and beyond, CRF Advisors brings cross-regional perspective informed by years of work with community banks, savings institutions, credit unions, and financial services companies.' },
  { term: 'Practical over theoretical', desc: 'Findings come with realistic remediation paths. Recommendations are calibrated to what institutions can actually implement, not theoretical best practices that won’t survive contact with the operations team.' },
  { term: 'Direct engagement', desc: 'The senior credit professional who scopes your engagement is the same one who delivers the findings to your board.' },
]

export const SERVICE_PAGE_BY_SLUG = Object.fromEntries(SERVICE_PAGES.map((p) => [p.slug, p]))
