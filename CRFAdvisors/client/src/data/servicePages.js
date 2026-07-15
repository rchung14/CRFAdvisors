import { SERVICE_PAGE_META_BY_SLUG } from './servicePagesMeta'
import { FileSearch, Search, Activity, Calculator, ClipboardCheck, Layers, GraduationCap } from 'lucide-react'
import bannerLoanReview from '../assets/svc-loan-review.webp'
import bannerDueDiligence from '../assets/svc-due-diligence.webp'
import bannerStressTesting from '../assets/svc-stress-testing.webp'
import bannerAlll from '../assets/svc-alll.webp'
import bannerCecl from '../assets/svc-cecl.webp'
import bannerTraining from '../assets/svc-training.webp'

// Long-form content for the six standalone service pages
// (/consulting-services/:slug).
// Rendered by ServicePage.jsx; metadata + JSON-LD derived in routesMeta.js.
//
// Section item shapes:
//   - string                       -> plain <li>
//   - { term, desc }               -> <li><strong>term.</strong> desc</li>
// Section `ordered: true` renders <ol> (numbered methodology), else <ul>.
//
// `related` is an array of segments: a string renders as text, an object
// { to, label } renders as an internal <Link> (keyword anchor text).

const SERVICE_PAGE_CONTENT = [
  {
    slug: 'loan-review',
    id: 'loan-review',
    icon: FileSearch,
    banner: bannerLoanReview,
    bannerAlt: 'Two credit professionals reviewing loan portfolio documents and financial statements',
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
        heading: 'What Our Credit File Review Examines',
        paragraphs: [
          'Within each reviewed credit, analysis goes beyond confirming the file is complete. Reviewers perform:',
        ],
        items: [
          'Ratio and trend analysis of borrower financial performance',
          'Cash flow analysis to assess borrower repayment capacity',
          'Payment history review across the lending relationship',
          'Current collateral value review against outstanding exposure',
          'Review of correspondence and credit file documentation',
          'Inquiry of lending personnel on relationship status and strategy',
          'Identification of Troubled Debt Restructured (TDR) loans and review of their impairment valuation',
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
    approach: [
      { term: 'Independence is non-negotiable', desc: 'We do not accept engagements where independence is compromised by scope or relationship.' },
      { term: 'Findings are graded by severity', desc: 'We grade findings by severity so management can prioritize what matters, rather than tallying exceptions for their own sake.' },
      { term: 'Practical recommendations beat theoretical perfection', desc: 'Findings come with realistic remediation paths.' },
      { term: 'Trend identification matters as much as individual loan findings', desc: 'Patterns across a portfolio reveal more than any single credit.' },
    ],
    related: [
      'Loan review findings often inform ',
      { to: '/consulting-services/alll', label: 'ALLL methodology and ACL calculation' },
      ', ',
      { to: '/consulting-services/cecl', label: 'CECL model assumptions' },
      ', and ',
      { to: '/consulting-services/stress-testing', label: 'loan portfolio stress testing' },
      '. Acquisition contexts call for our ',
      { to: '/consulting-services/due-diligence', label: 'credit due diligence services' },
      '. Training available for this topic: ',
      { to: '/consulting-services/training', label: 'credit risk management training' },
      '.',
    ],
  },

  {
    slug: 'due-diligence',
    id: 'due-diligence',
    icon: Search,
    banner: bannerDueDiligence,
    bannerAlt: 'Signing a transaction agreement, representing credit due diligence for mergers, acquisitions, and portfolio purchases',
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
    approach: [
      { term: 'Speed without compromise', desc: 'M&A timelines are unforgiving, and accuracy still matters more than expedience.' },
      { term: 'Direct communication', desc: 'With the deal team, counsel, and the acquirer’s board.' },
      { term: 'Findings calibrated to inform negotiation', desc: 'Results are framed to guide the acquirer’s negotiation, pricing, and structure decisions.' },
      { term: 'Confidentiality protocols', desc: 'That protect both parties throughout the process.' },
    ],
    related: [
      'Diligence findings often inform post-closing ',
      { to: '/consulting-services/loan-review', label: 'loan review' },
      ', ',
      { to: '/consulting-services/alll', label: 'ALLL/ACL methodology integration' },
      ', and ',
      { to: '/consulting-services/cecl', label: 'CECL day-one and ongoing modeling' },
      '.',
    ],
  },

  {
    slug: 'stress-testing',
    id: 'stress-testing',
    icon: Activity,
    banner: bannerStressTesting,
    bannerAlt: 'Financial data and analytics dashboard, representing scenario-based loan portfolio stress testing',
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
    approach: [
      { term: 'Models built to be understood', desc: 'Transparent enough for staff to follow, explain, and maintain.' },
      { term: 'Documentation that supports examination', desc: 'Organized for examiner and auditor reliance.' },
      { term: 'Scenarios calibrated to the institution’s actual portfolio', desc: 'Built around the institution’s actual concentrations and market footprint.' },
      { term: 'Findings that inform strategy', desc: 'Framed to guide capital and portfolio decisions, not only regulatory sign-off.' },
    ],
    related: [
      'Stress testing findings often inform ',
      { to: '/consulting-services/cecl', label: 'CECL modeling' },
      ' and ',
      { to: '/consulting-services/alll', label: 'ALLL/ACL methodology' },
      '. Acquisition contexts call for our ',
      { to: '/consulting-services/due-diligence', label: 'credit due diligence services' },
      '.',
    ],
  },

  {
    slug: 'alll',
    id: 'alll',
    icon: Calculator,
    banner: bannerAlll,
    bannerAlt: 'Calculator and accounting documents, representing ALLL/ACL allowance methodology and reserve calculation',
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
          'Identification and impairment valuation of Troubled Debt Restructured (TDR) loans, including post-CECL TDR elimination considerations',
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
    approach: [
      { term: 'Documentation built for examination', desc: 'Organized for examiner and auditor reliance.' },
      { term: 'Qualitative factor frameworks that pass scrutiny', desc: 'Supportable, well documented, and free of double-counting.' },
      { term: 'Practical methodology calibrated to institution size', desc: 'And portfolio complexity.' },
      { term: 'Direct coordination', desc: 'With audit and examination teams.' },
    ],
    related: [
      'ALLL/ACL methodology integrates closely with ',
      { to: '/consulting-services/cecl', label: 'CECL implementation and modeling' },
      ', ',
      { to: '/consulting-services/cecl-acl-review', label: 'independent ACL review' },
      ', ',
      { to: '/consulting-services/loan-review', label: 'independent loan review' },
      ', and ',
      { to: '/consulting-services/stress-testing', label: 'portfolio stress testing' },
      '. Pre-closing M&A engagements involve coordinated ',
      { to: '/consulting-services/due-diligence', label: 'credit due diligence' },
      '. Training available for this topic: ',
      { to: '/consulting-services/training', label: 'ALLL and credit risk training' },
      '.',
    ],
  },

  {
    slug: 'cecl-acl-review',
    id: 'cecl-acl-review',
    icon: ClipboardCheck,
    banner: bannerAlll,
    bannerAlt: 'Accounting documents and calculator, representing independent review of the ACL calculation and CECL methodology',
    intro: [
      'CRF Advisors performs an independent review of the Allowance for Credit Losses (ACL) calculation and the Current Expected Credit Loss (CECL) methodology implemented by management. Our review procedures focus on the completeness of the ACL computation and its supporting documentation, and on conformity of the CECL methodology with the Interagency Policy Statement on the Allowance for Credit Losses and applicable accounting standards.',
    ],
    sections: [
      {
        heading: 'Background: ASC 326 and the Move to Expected Losses',
        paragraphs: [
          'In June 2016, the Financial Accounting Standards Board (FASB) issued Accounting Standards Update (ASU) 2016-13 (Topic 326), Financial Instruments — Credit Losses. ASU 2016-13 replaces the incurred-loss impairment methodology in prior GAAP with a CECL methodology and requires consideration of a broader range of information to determine credit loss estimates. Financial assets measured at amortized cost are presented at the net amount expected to be collected through an allowance for credit losses.',
          'In March 2022, the FASB further amended Topic 326 with ASU 2022-02, Financial Instruments — Credit Losses (Topic 326): Troubled Debt Restructurings and Vintage Disclosures, eliminating TDR accounting for CECL adopters and introducing new loan modification and vintage disclosure requirements. An independent ACL review confirms that the institution’s methodology and disclosures have kept pace with these amendments.',
        ],
      },
      {
        heading: 'Why an Independent ACL Review Matters',
        paragraphs: [
          'The ACL is one of the largest and most judgment-dependent estimates in a financial institution’s financial statements, and it is a standing focus area for external auditors and federal examiners. An independent review by professionals with no stake in the original methodology gives the board, the audit committee, and examiners confidence that the calculation is complete, accurate, and supportable.',
        ],
        itemsLead: 'Independent review findings support:',
        items: [
          'Board and audit committee oversight of the allowance process',
          'Model risk management expectations for independent validation',
          'External audit fieldwork and year-end reporting',
          'Examination readiness and response to prior findings',
        ],
      },
      {
        heading: 'Summary of Review Procedures',
        paragraphs: ['Each ACL review engagement typically includes the following procedures:'],
        ordered: true,
        items: [
          { term: 'Policy and Methodology Compliance Review', desc: 'Review of the ACL calculation and CECL methodology for compliance with the Interagency Policy Statement on the Allowance for Credit Losses and FASB ASU 2016-13 (Topic 326).' },
          { term: 'ACL Computation Accuracy Testing', desc: 'Independent testing of the accuracy of the ACL computation, including formulas, inputs, and roll-forward of prior-period balances.' },
          { term: 'CECL Reconciliation and GL Verification', desc: 'Testing of the CECL reconciliation and verification of loan pool balances to the general ledger.' },
          { term: 'Pool Segmentation Review', desc: 'Review of pool segmentation and the criteria supporting each pool, confirming segments capture meaningfully distinct risk characteristics.' },
          { term: 'Life-of-Loan Determination Review', desc: 'Review of the life determination of loan pools, including prepayment and curtailment assumptions.' },
          { term: 'Loss Model Recalculation', desc: 'Recalculation of a sample of PD x LGD or discounted cash flow (DCF) outputs used in the loss model.' },
          { term: 'Qualitative Assumption Review', desc: 'Review of qualitative factor assumptions and supporting documentation for directional consistency and supportability.' },
        ],
      },
      {
        heading: 'What You Receive',
        items: [
          'Independent report on the completeness and accuracy of the ACL computation',
          'Documented conclusions on CECL methodology conformity with interagency policy and ASC 326',
          'Recalculation workpapers for sampled loss model outputs',
          'Findings and practical recommendations on segmentation, life determination, and Q-factors',
          'Materials suitable for board, audit committee, auditor, and examiner presentation',
        ],
      },
    ],
    approach: [
      { term: 'Independence from the methodology under review', desc: 'We review calculations we did not build; institutions that engaged us for implementation receive review from separately assigned professionals.' },
      { term: 'Recalculation, not just inspection', desc: 'Sampled loss model outputs are independently recalculated, not merely traced to documentation.' },
      { term: 'Findings graded by severity', desc: 'With practical remediation paths management can act on before the next examination.' },
      { term: 'Documentation built for examination', desc: 'Workpapers and conclusions organized for auditor and examiner reliance.' },
    ],
    related: [
      'ACL review pairs naturally with ',
      { to: '/consulting-services/cecl', label: 'CECL implementation and modeling' },
      ', ',
      { to: '/consulting-services/alll', label: 'ALLL methodology review' },
      ', and ',
      { to: '/consulting-services/loan-review', label: 'independent loan review' },
      ', whose risk rating findings feed the allowance calculation. Training available for this topic: ',
      { to: '/consulting-services/training', label: 'CECL and ACL training' },
      '.',
    ],
  },

  {
    slug: 'cecl',
    id: 'cecl',
    icon: Layers,
    banner: bannerCecl,
    bannerAlt: 'Financial analytics dashboard with charts, representing CECL model development and forecasting',
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
          { term: 'Vintage loss rate analysis', desc: 'For portfolios with sufficient historical cohort data.' },
          { term: 'Probability of Default x Loss Given Default (PD x LGD)', desc: 'For institutions wanting loss estimates built from default likelihood and loss severity components.' },
          { term: 'Discounted Cash Flow (DCF)', desc: 'For institutions wanting more granular forward-looking forecasting.' },
          { term: 'Weighted Average Remaining Maturity (WARM)', desc: 'Appropriate for many community banks with limited historical data depth.' },
          { term: 'Static pool and loss rate methodologies with adjustments', desc: 'Appropriate for stable, well-characterized portfolios.' },
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
    approach: [
      { term: 'Methodology calibrated to the institution', desc: 'Sized to its portfolio, data, and operational capacity.' },
      { term: 'Documentation built for examination', desc: 'Organized for auditor and examiner reliance.' },
      { term: 'Transparent assumptions', desc: 'That the institution can defend independently.' },
      { term: 'Practical implementation', desc: 'That operational staff can sustain.' },
    ],
    related: [
      'After implementation, our ',
      { to: '/consulting-services/cecl-acl-review', label: 'CECL methodology and ACL review' },
      ' provides ongoing independent validation. CECL methodology also integrates closely with the ',
      { to: '/consulting-services/alll', label: 'ALLL/ACL framework' },
      ', ',
      { to: '/consulting-services/stress-testing', label: 'portfolio stress testing' },
      ', and ',
      { to: '/consulting-services/loan-review', label: 'loan review findings' },
      '. Acquirers face day-one CECL calculations supported by ',
      { to: '/consulting-services/due-diligence', label: 'credit due diligence' },
      '. Training available for this topic: ',
      { to: '/consulting-services/training', label: 'credit risk management training' },
      '.',
    ],
  },

  {
    slug: 'training',
    id: 'training',
    icon: GraduationCap,
    banner: bannerTraining,
    bannerAlt: 'Training room prepared for a credit risk management session, with financial charts on screen and materials at each seat',
    intro: [
      'CRF Advisors provides credit risk management training for the credit, loan review, finance, and audit staff of banks, credit unions, non-profit organizations, and financial services companies. Curriculum spans the full allowance and credit analysis framework — ALLL methodology under ASC 450 and ASC 310, impaired loan valuation, CECL preparation and modeling, Troubled Debt Restructured (TDR) loans, and day-to-day credit analysis and monitoring — taught by the same senior credit professionals who perform our loan review and allowance engagements.',
    ],
    sections: [
      {
        heading: 'ALLL Methodology Training',
        paragraphs: [
          'Allowance methodology remains the estimate examiners and auditors scrutinize most closely. Training grounds staff in the accounting standards behind each component of the calculation:',
        ],
        items: [
          { term: 'ASC 450 (FAS 5 General Reserve)', desc: 'Pooled reserves for incurred losses: segmentation, historical loss rates, and qualitative factor frameworks.' },
          { term: 'ASC 310-10 (FAS 114 Loan Impairment)', desc: 'Individually evaluated impaired loans: identification triggers, measurement alternatives, and documentation.' },
          { term: 'ASC 310-20 (FAS 91 Loans)', desc: 'Nonrefundable fees and origination costs: deferral, amortization, and their effect on carrying value.' },
          { term: 'ASC 310-30 (SOP 03-3 Credit Impaired Loans)', desc: 'Purchased credit-impaired loans: accretable yield, nonaccretable difference, and post-acquisition accounting.' },
          { term: 'ALLL Modeling', desc: 'Building and documenting the full calculation: pooling, loss rate derivation, Q-factors, and directional consistency.' },
        ],
      },
      {
        heading: 'Impaired Loan Valuation',
        paragraphs: [
          'Once a loan is identified as impaired, measurement drives the reserve. Training covers each valuation method and when it applies:',
        ],
        items: [
          { term: 'Collateral valuation methods', desc: 'Appraisal review, discounting to disposition value, and costs to sell for collateral-dependent loans.' },
          { term: 'Present value of future cash flows', desc: 'Building restructured payment expectations and discounting at the loan’s effective rate.' },
          { term: 'Loan pricing method', desc: 'Observable market price measurement where an active market for the loan exists.' },
        ],
      },
      {
        heading: 'CECL Preparation, Data Requirements, and Modeling',
        paragraphs: [
          'For institutions preparing for or refining Current Expected Credit Loss adoption, training covers preparation and transition planning, loan-level data requirements — what your core systems must capture for lifetime loss estimation — and modeling approaches including vintage analysis, PD x LGD, and discounted cash flow.',
        ],
      },
      {
        heading: 'Troubled Debt Restructured (TDR) Loans',
        paragraphs: [
          'Modified loans remain a recurring examination focus. Training covers the identification of Troubled Debt Restructured (TDR) loans — borrower financial difficulty plus a concession the institution would not otherwise grant — and the impairment valuation that follows designation, including post-ASU 2022-02 loan modification disclosures for CECL adopters.',
        ],
      },
      {
        heading: 'Credit Analysis and Monitoring',
        paragraphs: [
          'Strong allowance work starts with strong underwriting and monitoring. Training builds analyst fundamentals:',
        ],
        items: [
          { term: 'Credit policies and procedures', desc: 'How policy translates into consistent underwriting, risk rating, and exception handling.' },
          { term: 'Financial statement analysis', desc: 'Reading borrower statements and tax returns for repayment capacity, leverage, and trends.' },
          { term: 'DSCR and LTV calculation and analysis', desc: 'Debt service coverage and loan-to-value mechanics, stress sensitivity, and how each drives risk rating.' },
        ],
      },
    ],
    approach: [
      { term: 'Taught by practitioners', desc: 'The professionals leading training perform loan review, ALLL, and CECL engagements year-round.' },
      { term: 'Built on your portfolio', desc: 'Sessions use your institution’s policies, loss history, and loan examples wherever possible.' },
      { term: 'Calibrated to the audience', desc: 'Technical depth for analysts; oversight frameworks for management, boards, and audit committees.' },
      { term: 'Practical takeaways', desc: 'Staff leave with worksheets, checklists, and procedures they can apply the next business day.' },
    ],
    related: [
      'Training reinforces the same frameworks we apply in ',
      { to: '/consulting-services/loan-review', label: 'independent loan review' },
      ', ',
      { to: '/consulting-services/alll', label: 'ALLL methodology review' },
      ', ',
      { to: '/consulting-services/cecl-acl-review', label: 'CECL methodology and ACL review' },
      ', and ',
      { to: '/consulting-services/cecl', label: 'CECL implementation and modeling' },
      ' engagements.',
    ],
  },
]


// Full page objects = meta (servicePagesMeta.js) + long-form content (above).
export const SERVICE_PAGES = SERVICE_PAGE_CONTENT.map((p) => ({
  ...SERVICE_PAGE_META_BY_SLUG[p.slug],
  ...p,
}))

// Generic trust block rendered at the foot of every service page.
// TODO: CRF to confirm specifics. The independence/staffing/experience claims
// below are firm-positioning statements written for the marketing draft; verify
// they accurately describe how CRF actually staffs and accepts engagements
// before treating them as published fact.
export const WHY_CRF = [
  { term: 'Independence by design', desc: 'Every engagement is structured to preserve the independence that gives our findings credibility with regulators, auditors, and boards. We decline engagements where independence cannot be maintained.' },
  { term: 'Senior-led, senior-staffed', desc: 'Engagements are staffed at the proper experience level relative to portfolio complexity. The credit professionals reviewing your portfolio have decades of banking, audit, and regulatory experience, so you are not paying to train junior analysts on your engagement.' },
  { term: 'Tri-State roots, national perspective', desc: 'Based in Fort Washington and serving institutions across Pennsylvania, New Jersey, Delaware, Maryland, and beyond, CRF Advisors brings cross-regional perspective informed by years of work with community banks, savings institutions, credit unions, and financial services companies.' },
  { term: 'Practical over theoretical', desc: 'Findings come with realistic remediation paths. Recommendations are calibrated to what institutions can actually implement and sustain, rather than an ideal the operations team has no way to put into practice.' },
  { term: 'Direct engagement', desc: 'The senior credit professional who scopes your engagement is the same one who delivers the findings to your board.' },
]

// Editorial outbound citations to primary regulatory sources, per service page.
// These are authority signals; links open in a new tab with rel="noopener
// noreferrer" and intentionally NO rel="nofollow" (editorial citations).
//
// NOTE: to avoid linking deep URLs that may 404, entries marked `verify: true`
// currently point at the authoritative domain/section root. Replace with the
// exact document URL once confirmed.
// TODO: verify exact URLs for all entries marked `verify: true`.
export const SERVICE_SOURCES = {
  'loan-review': [
    { label: 'FDIC — Risk Management Manual of Examination Policies', url: 'https://www.fdic.gov', verify: true },
    { label: 'OCC — Comptroller’s Handbook: Loan Portfolio Management', url: 'https://www.occ.gov', verify: true },
    { label: 'FFIEC — Federal Financial Institutions Examination Council', url: 'https://www.ffiec.gov', verify: false },
  ],
  'due-diligence': [
    { label: 'FDIC — Bank mergers and applications', url: 'https://www.fdic.gov', verify: true },
    { label: 'OCC — Business combinations and licensing', url: 'https://www.occ.gov', verify: true },
    { label: 'FASB — ASC 805 Business Combinations and ASC 326', url: 'https://www.fasb.org', verify: true },
  ],
  'stress-testing': [
    { label: 'Federal Reserve — Supervision & Regulation (stress testing, DFAST/CCAR)', url: 'https://www.federalreserve.gov/supervisionreg.htm', verify: true },
    { label: 'Interagency Guidance on CRE Concentration Risk Management', url: 'https://www.ffiec.gov', verify: true },
    { label: 'FDIC — Supervisory guidance and resources', url: 'https://www.fdic.gov', verify: false },
  ],
  'alll': [
    { label: 'Interagency Policy Statement on Allowances for Credit Losses (2020)', url: 'https://www.ffiec.gov', verify: true },
    { label: 'FASB — ASC 326 Financial Instruments — Credit Losses', url: 'https://www.fasb.org', verify: true },
    { label: 'OCC — Allowance for Credit Losses resources', url: 'https://www.occ.gov', verify: true },
  ],
  'cecl': [
    { label: 'FASB — Current Expected Credit Losses (ASC 326)', url: 'https://www.fasb.org', verify: true },
    { label: 'Federal Reserve — CECL supervisory resources', url: 'https://www.federalreserve.gov/supervisionreg.htm', verify: true },
    { label: 'FFIEC — Interagency CECL resources', url: 'https://www.ffiec.gov', verify: true },
  ],
  'cecl-acl-review': [
    { label: 'Interagency Policy Statement on Allowances for Credit Losses (2020)', url: 'https://www.ffiec.gov', verify: true },
    { label: 'FASB — ASU 2016-13 Financial Instruments — Credit Losses (Topic 326)', url: 'https://www.fasb.org', verify: true },
    { label: 'FASB — ASU 2022-02 TDRs and Vintage Disclosures', url: 'https://www.fasb.org', verify: true },
  ],
  'training': [
    { label: 'FFIEC — Interagency Policy Statement on the ALLL', url: 'https://www.ffiec.gov/pdf/alll.pdf', verify: false },
    { label: 'FASB — Accounting Standards Updates including ASC 326 (CECL)', url: 'https://www.fasb.org/page/PageContent?pageId=/standards/accounting-standards-updates.html', verify: false },
    { label: 'OCC — Comptroller’s Handbook: Loan Portfolio Management', url: 'https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/loan-portfolio-management/pub-ch-loan-portfolio-mgmt.pdf', verify: false },
    { label: 'Federal Reserve — SR 11-7: Guidance on Model Risk Management', url: 'https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm', verify: false },
  ],
}

export const SERVICE_PAGE_BY_SLUG = Object.fromEntries(SERVICE_PAGES.map((p) => [p.slug, p]))
