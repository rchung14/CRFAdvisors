// All institutions served, grouped by state for the /clients page.
// CLIENT_COUNT below is derived — never hardcode the total elsewhere.
export const CLIENT_GROUPS = [
  {
    label: 'Pennsylvania',
    abbr: 'PA',
    blurb:
      'CRF Advisors has performed independent loan review and credit review for Pennsylvania financial institutions of all sizes, from community banks in Philadelphia to savings institutions across the state.',
    clients: [
      { name: 'American Bank', city: 'Allentown, PA' },
      { name: 'Bird in Hand Bank', city: 'Bird in Hand, PA' },
      { name: 'Customers Bank', city: 'Reading, PA' },
      { name: 'Eagle One CU', city: 'Philadelphia, PA' },
      { name: 'Fidelity Deposit and Discount', city: 'Dunmore, PA' },
      { name: 'First Commonwealth FCU', city: 'Allentown, PA' },
      { name: 'Firstrust Bank', city: 'Philadelphia, PA' },
      { name: 'Franklin Tioga', city: 'Philadelphia, PA' },
      { name: 'Hatboro Federal Savings', city: 'Hatboro, PA' },
      { name: 'Huntingdon Valley Bank', city: 'Doylestown, PA' },
      { name: 'Hyperion Bank', city: 'Philadelphia, PA' },
      { name: 'Landmark Bank', city: 'Pittston, PA' },
      { name: 'Merck Sharp and Dohme', city: 'Chalfont, PA' },
      { name: 'Money Mart', city: 'Wayne, PA' },
      { name: 'Muncy Bank', city: 'Muncy, PA' },
      { name: 'Port Richmond Savings', city: 'Philadelphia, PA' },
      { name: 'PS Bank', city: 'Scranton, PA' },
      { name: 'Quaint Oak Bank', city: 'Philadelphia, PA' },
      { name: 'Reinvestment Fund', city: 'Philadelphia, PA' },
      { name: 'Second Federal Savings and Loan', city: 'Philadelphia, PA' },
      { name: 'Sharon Bank', city: 'Philadelphia, PA' },
      { name: 'Trumark FCU', city: 'Ambler, PA' },
      { name: 'United Bank of Philadelphia', city: 'Philadelphia, PA' },
      { name: 'William Penn Bank', city: 'Levittown, PA' },
    ],
  },
  {
    label: 'New Jersey',
    abbr: 'NJ',
    blurb:
      'New Jersey engagements cover loan portfolio review and credit due diligence for community banks and savings institutions from Marlton to Princeton.',
    clients: [
      { name: '1st Colonial Community Bank', city: 'Marlton, NJ' },
      { name: 'First Bank of NJ', city: 'Princeton, NJ' },
      { name: 'FNBA', city: 'Absecon, NJ' },
      { name: 'Franklin Bank', city: 'Woodstown, NJ' },
      { name: 'Haddon Savings Bank', city: 'Haddon, NJ' },
      { name: 'Millville Bank', city: 'Millville, NJ' },
      { name: 'Parke Bank', city: 'Sewell, NJ' },
    ],
  },
  {
    label: 'Delaware',
    abbr: 'DE',
    blurb:
      'Wilmington-based banks engage CRF Advisors for independent credit review and portfolio risk analysis.',
    clients: [
      { name: 'Artisans Bank', city: 'Wilmington, DE' },
      { name: 'The Bancorp', city: 'Wilmington, DE' },
    ],
  },
  {
    label: 'Maryland',
    abbr: 'MD',
    blurb:
      'Maryland institutions rely on CRF Advisors for loan review, ALLL methodology support, and regulatory compliance.',
    clients: [
      { name: 'Congressional Bank', city: 'Bethesda, MD' },
      { name: 'Jarrettsville Federal Savings and Loan', city: 'Jarrettsville, MD' },
    ],
  },
  {
    label: 'Beyond the Tri-State',
    abbr: 'Other',
    blurb:
      'Beyond the Tri-State area, CRF Advisors has served banks, credit unions, and non-profit organizations nationwide, from New York to San Francisco.',
    clients: [
      { name: 'Bank of Taiwan NY Branch', city: 'New York, NY' },
      { name: 'CAMC FCU', city: 'Charleston, WV' },
      { name: 'Capital Impact Partners', city: 'Arlington, VA' },
      { name: 'HAB Bank', city: 'New York, NY' },
      { name: 'Low Income Investment Fund', city: 'San Francisco, CA' },
      { name: 'Miami Firefighters FCU', city: 'Miami, FL' },
      { name: 'Rollstone Bank and Trust', city: 'Leominster, MA' },
      { name: 'Toyota Financial Savings Bank', city: 'Henderson, NV' },
      { name: "Workman's Circle Credit Union", city: 'Savannah, GA' },
    ],
  },
]

export const CLIENT_COUNT = CLIENT_GROUPS.reduce((n, g) => n + g.clients.length, 0)

// Subset shown in the homepage trust bar.
export const FEATURED_CLIENTS = [
  'Customers Bank',
  'Parke Bank',
  'Artisans Bank',
  'Congressional Bank',
  'William Penn Bank',
  'Hyperion Bank',
  '1st Colonial Community Bank',
  'Toyota Financial Savings Bank',
]
