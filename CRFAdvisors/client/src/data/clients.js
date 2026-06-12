// All 33 institutions served, grouped by state for the /clients page.
export const CLIENT_GROUPS = [
  {
    label: 'Pennsylvania',
    abbr: 'PA',
    clients: [
      { name: 'Bird in Hand Bank', city: 'Bird in Hand, PA' },
      { name: 'Customers Bank', city: 'Reading, PA' },
      { name: 'Fidelity Deposit and Discount', city: 'Dunmore, PA' },
      { name: 'Hatboro Federal Savings', city: 'Hatboro, PA' },
      { name: 'Huntingdon Valley Bank', city: 'Doylestown, PA' },
      { name: 'Hyperion Bank', city: 'Philadelphia, PA' },
      { name: 'Landmark Bank', city: 'Pittston, PA' },
      { name: 'Merck Sharp and Dohme', city: 'Chalfont, PA' },
      { name: 'Money Mart', city: 'Wayne, PA' },
      { name: 'Muncy Bank', city: 'Muncy, PA' },
      { name: 'Port Richmond Savings', city: 'Philadelphia, PA' },
      { name: 'Quaint Oak Bank', city: 'Philadelphia, PA' },
      { name: 'Reinvestment Fund', city: 'Philadelphia, PA' },
      { name: 'Second Federal Savings and Loan', city: 'Philadelphia, PA' },
      { name: 'Sharon Bank', city: 'Philadelphia, PA' },
      { name: 'United Bank of Philadelphia', city: 'Philadelphia, PA' },
      { name: 'William Penn Bank', city: 'Levittown, PA' },
    ],
  },
  {
    label: 'New Jersey',
    abbr: 'NJ',
    clients: [
      { name: '1st Colonial Community Bank', city: 'Cherry Hill, NJ' },
      { name: 'First Bank of NJ', city: 'Hamilton, NJ' },
      { name: 'Franklin Bank', city: 'Woodstown, NJ' },
      { name: 'Millville Savings Bank', city: 'Millville, NJ' },
      { name: 'Parke Bank', city: 'Sewell, NJ' },
    ],
  },
  {
    label: 'Delaware',
    abbr: 'DE',
    clients: [
      { name: 'Artisans Bank', city: 'Wilmington, DE' },
      { name: 'Bancorp Bank', city: 'Wilmington, DE' },
    ],
  },
  {
    label: 'Maryland',
    abbr: 'MD',
    clients: [
      { name: 'Congressional Bank', city: 'Bethesda, MD' },
      { name: 'Jarrettsville Federal Savings and Loan', city: 'Jarrettsville, MD' },
    ],
  },
  {
    label: 'Beyond the Tri-State',
    abbr: 'Other',
    clients: [
      { name: 'CAMC FCU', city: 'Charleston, WV' },
      { name: 'Habib American Bank', city: 'New York, NY' },
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
