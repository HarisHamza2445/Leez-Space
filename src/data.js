const img = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const HERO_IMAGE = img('1477959858617-67f85cf4f1df', 2000);
export const ENQUIRY_IMAGE = img('1497366216548-37526070297c', 1400);

export const NAV = ['Home', 'Properties', 'About', 'Blog'];

export const FEATURES = [
  { icon: 'shield', title: 'Verified Listings', lines: ['Verified', 'Listings'], text: 'Every property is checked by our team' },
  { icon: 'users', title: 'Direct Owner Options', lines: ['Direct Owner', 'Options'], text: 'Talk to owners, skip the middlemen' },
  { icon: 'doc', title: 'End-to-End Assistance', lines: ['End-to-End', 'Assistance'], text: 'From site visit to paperwork' },
  { icon: 'clock', title: 'Save Time & Effort', lines: ['Save Time', '& Effort'], text: 'Shortlist in minutes, not weeks' },
];

export const PROPERTY_TYPES = ['Residential', 'Commercial', 'Industrial', 'Plots & Land', 'PG & Co-living'];
export const DEALS = ['Rent', 'Buy', 'Sell'];

export const LOCATION_SUGGESTIONS = [
  'Noida, Sector 62', 'Noida, Sector 63', 'Noida, Sector 75', 'Noida, Sector 146',
  'Noida, Sector 18', 'Greater Noida West', 'Greater Noida, Knowledge Park',
  'Ghaziabad, Indirapuram', 'Ghaziabad, Raj Nagar Extension', 'Noida Expressway',
];

export const CATEGORIES = [
  { title: 'Flats & Apartments', icon: 'building', image: img('1502672260266-1c1ef2d93688'), count: 1240 },
  { title: 'Independent House', icon: 'home', image: img('1600596542815-ffad4c1539a9'), count: 386 },
  { title: 'PG & Paying Guest', icon: 'users', image: img('1505693416388-ac5ce068fe85'), count: 512 },
  { title: 'Villas & Bungalows', icon: 'home', image: img('1613490493576-7fde63acd811'), count: 148 },
  { title: 'Residential Plot', icon: 'tree', image: img('1500382017468-9049fed747ef'), count: 274 },
  { title: 'Office Space', icon: 'briefcase', image: img('1497366811353-6870744d04b2'), count: 932 },
  { title: 'Shops & Showrooms', icon: 'store', image: img('1441986300917-64674bd600d8'), count: 418 },
  { title: 'Warehouse & Industrial', icon: 'warehouse', image: img('1586528116311-ad8dd3c8310d'), count: 207 },
  { title: 'Co-working Space', icon: 'users', image: img('1527192491265-7e15c55b1ed2'), count: 163 },
  { title: 'Hotel & Hospitality', icon: 'hotel', image: img('1566073771259-6a8506099945'), count: 59 },
];

export const ROI_PROPERTIES = [
  { badge: 'Best for ROI', type: 'Office Space', typeIcon: 'building', name: 'Logix Cyber Park', location: 'Sector 62, Noida', size: '5,000 Sq. Ft.', yieldMin: 7, yieldMax: 9, price: '₹1.20 Cr*', image: img('1486406146926-c627a92ad1ab') },
  { badge: 'High ROI', type: 'Warehouse', typeIcon: 'warehouse', name: 'ESR Industrial Park', location: 'Greater Noida', size: '20,000 Sq. Ft.', yieldMin: 8, yieldMax: 11, price: '₹3.50 Cr*', image: img('1553413077-190dd305871c') },
  { badge: 'Popular for Rental', type: 'Residential', typeIcon: 'home', name: 'Godrej Tropical Isle', location: 'Sector 146, Noida', size: '3 BHK', yieldMin: 6, yieldMax: 8, price: '₹2.10 Cr*', image: img('1545324418-cc1a3fa10c00') },
  { badge: 'Good Rental Demand', type: 'Retail & Office', typeIcon: 'store', name: 'Spectrum Metro Mall', location: 'Sector 75, Noida', size: '500 Sq. Ft.', yieldMin: 8, yieldMax: 12, price: '₹70 Lakh*', image: img('1555636222-cae831e670b3') },
  { badge: 'Ready to Move', type: 'Office Space', typeIcon: 'building', name: 'Bhutani Alphathum', location: 'Sector 90, Noida', size: '1,200 Sq. Ft.', yieldMin: 7, yieldMax: 10, price: '₹95 Lakh*', image: img('1497366216548-37526070297c') },
  { badge: 'New Launch', type: 'Residential', typeIcon: 'home', name: 'ATS Pious Hideaways', location: 'Sector 150, Noida', size: '4 BHK', yieldMin: 5, yieldMax: 7, price: '₹3.80 Cr*', image: img('1460317442991-0ec209397118') },
];

export const ROI_BENEFITS = [
  { icon: 'chart', title: 'Prime Locations', text: 'High demand areas with growth potential.' },
  { icon: 'coins', title: 'Better Rental Returns', text: 'Generate steady and attractive rental income.' },
  { icon: 'trend', title: 'Growing Demand', text: 'High occupancy & increasing value.' },
  { icon: 'star', title: 'Ideal for Investment', text: 'Long-term growth and wealth creation.' },
];

// Builder names are rendered as typographic wordmarks, not their official logos.
export const BUILDERS = [
  { name: 'BHUTANI', sub: 'INFRA', style: 'bold' },
  { name: 'ATS', sub: 'The better way home', style: 'red' },
  { name: 'GAURS', sub: 'your own world', style: 'serif' },
  { name: 'ACE', sub: 'fulfilling aspirations', style: 'red' },
  { name: 'Godrej', sub: 'PROPERTIES', style: 'script' },
  { name: 'MAHAGUN', sub: 'A name that performs', style: 'blue' },
  { name: 'CRC', sub: 'Building a better tomorrow', style: 'blue' },
  { name: 'EXPERION', sub: 'The positive side of life', style: 'teal' },
  { name: 'GULSHAN', sub: 'HOMZ', style: 'bold' },
  { name: 'SUPERTECH', sub: 'LIMITED', style: 'blue' },
];

export const CITIES = [
  { name: 'Noida', tags: 'Commercial | Residential | Industrial', live: true, image: img('1567157577867-05ccb1388e66') },
  { name: 'Ghaziabad', tags: 'Residential | Commercial', live: true, image: img('1574362848149-11496d93a7c7') },
  { name: 'Gurgaon', tags: 'Commercial | Residential', live: false, image: img('1480714378408-67cf0d13bc1b') },
  { name: 'Delhi', tags: 'Residential | Commercial', live: false, image: img('1587474260584-136574528ed5') },
  { name: 'Faridabad', tags: 'Residential | Industrial', live: false, image: img('1449844908441-8829872d2607') },
];

export const APP_FEATURES = [
  { icon: 'crown', title: 'Premium Listings', text: 'Verified and curated properties' },
  { icon: 'pin', title: 'Noida & Ghaziabad', text: 'Wide range of options in top locations' },
  { icon: 'bolt', title: 'Easy & Fast', text: 'Search, book visits and get updates' },
  { icon: 'shield', title: 'Safe & Reliable', text: 'Connect with verified owners and dealers' },
];

export const STATS = [
  { value: 4300, suffix: '+', label: 'Verified properties' },
  { value: 120, suffix: '+', label: 'Partner builders' },
  { value: 18000, suffix: '+', label: 'Happy clients' },
  { value: 98, suffix: '%', label: 'Response rate' },
];
