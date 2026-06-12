import tedPhoto from '../assets/ted.webp'
import joshPhoto from '../assets/josh.webp'
import ryanPhoto from '../assets/ryan.webp'
import blankPhoto from '../assets/blank.webp'

// Team roster for the /about page. Members without a `photo` get a gradient
// placeholder with initials until a real headshot is provided.
export const TEAM = [
  {
    name: 'Ted Ahn',
    title: 'President',
    initials: 'TA',
    photo: tedPhoto,
    bio: 'Ted is the engagement leader and Director of the credit risk division. He has over XX years in banking, including 9 years as external and internal auditor (RSM) for financial institutions ranging from $40M to $5B in assets. His experience includes managing credit risk and audit engagements, implementing ALLL methodology per Interagency Policy, valuation of impaired loans, TDRs, and OREO, and developing analytical models for credit risk.',
  },
  {
    name: 'Joshua Cash',
    title: 'Manager',
    initials: 'JC',
    photo: joshPhoto,
    bio: "Joshua is a senior credit professional with 10+ years in banking. He holds a Bachelor's degree in Economics from Penn State University. Previously at Wells Fargo as a relationship manager and assistant branch manager, Joshua has been with CRF Advisors for 7+ years managing portfolio risk activities, credit underwriting review, risk rating, and structured loan portfolio reviews.",
  },
  {
    name: 'Evan Cywinsky',
    title: 'Senior Credit Analyst',
    initials: 'EC',
    photo: blankPhoto,
    bio: 'Evan is a senior credit analyst performing detailed credit review and stress test analysis for bank and credit union engagements. His background in banking and credit underwriting supports risk rating validation and portfolio quality assessment across commercial loan portfolios.',
  },
  {
    name: 'Dan Kim',
    title: 'Senior Credit Analyst',
    initials: 'DK',
    photo: blankPhoto,
    bio: "Dan is a senior credit analyst performing detailed credit review and stress test analysis. He is also involved in the implementation of CRF Advisors' CECL model. Dan holds a Bachelor's degree in Economics from the University of Pennsylvania.",
  },
  {
    name: 'Ryan Chung',
    title: 'Credit Analyst',
    initials: 'RC',
    photo: ryanPhoto,
    bio: "Ryan is a credit analyst supporting loan review, risk rating validation, and portfolio stress testing engagements across CRF Advisors' bank and credit union clients.",
  },
]
