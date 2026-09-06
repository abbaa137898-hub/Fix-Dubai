import { ServiceItem, ReviewItem, PropertyTypeItem } from '../types';
import acRepairTechnicianImg from '../assets/images/ac_repair_technician_1783177536352.jpg';
import electricalWorkImg from '../assets/images/electrical_work_technician_1783177884189.jpg';
import paintingCeilingImg from '../assets/images/painting_ceiling_technician_1783178611940.jpg';
import carpentryWorksImg from '../assets/images/carpentry_works_technician_1783178632813.jpg';
import homeRenovationImg from '../assets/images/home_renovation_technician_1783178653562.jpg';

export const PHONE_NUMBER = '+971 56 837 4070';
export const PHONE_CLEAN = '+971568374070';
export const WHATSAPP_LINK = 'https://wa.me/971568374070?text=Hello%20Fix%20Dubai,%20I%20need%20urgent%20home%20service%20in%20the%20UAE.';
export const EMAIL_ADDRESS = 'fixdubai@gmail.com';
export const DUBIZZLE_PROFILE_LINK = 'https://www.dubizzle.com/en/public-profile/b7957f53-86b2-4a98-9009-ce35be59c704/';
export const FACEBOOK_PAGE_LINK = 'https://www.facebook.com/share/14iB9QdHVAg/?mibextid=wwXIfr';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'ac-repair',
    route: '/ac-repairing-Installation',
    title: 'AC Repairing & Installation',
    category: 'Cooling & HVAC',
    shortDescription: 'Complete cooling solutions, deep servicing, gas refilling, and quick fixing for hot summer days.',
    fullDescription: 'In the intense UAE summer, a broken AC is an absolute emergency. Our certified HVAC specialists provide 24/7 rapid troubleshooting, compressor replacements, duct cleaning, gas top-ups, and brand-new split/chiller AC installations with zero mess left behind.',
    iconName: 'Snowflake',
    image: acRepairTechnicianImg,
    features: [
      'Emergency 45-Minute Breakdown Response',
      'Gas Refilling & Leakage Detection',
      'Deep Coil & Coil Chemical Cleaning',
      'Split, Ducted & Central AC Maintenance',
      'Thermostat & Smart Cooling Upgrades'
    ],
    priceRangeAED: 'From 150 AED (Inspection & Service)',
    emergencyAvailable: true,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
      afterImg: acRepairTechnicianImg,
      beforeTitle: 'Clogged, Leaking & Warm AC Unit',
      afterTitle: 'Sanitized, Ice-Cold & Whisper-Quiet Unit',
      description: 'Removed heavy dust build-up, repaired drainage pipe leak, and recharged refrigerant.'
    }
  },
  {
    id: 'painting-ceiling',
    route: '/painting-ceiling',
    title: 'Painting & Ceiling',
    category: 'Interior & Exterior',
    shortDescription: 'Fresh odorless interior/exterior painting and custom gypsum false ceiling designs with concealed lighting.',
    fullDescription: 'Give your villa or apartment a fresh luxury feel. We use premium Jotun non-toxic, odorless paints and craft exquisite gypsum ceilings with cove LED lighting. Our team covers all furniture and floors before starting.',
    iconName: 'Paintbrush',
    image: paintingCeilingImg,
    features: [
      'Interior & Exterior Odorless Wall Painting',
      'Crack Filling & Dampness Treatment',
      'Gypsum False Ceiling & Cove LED Design',
      'Accent Wall Texture & Decorative Finishes',
      'Move-In / Move-Out Quick Turnaround Painting'
    ],
    priceRangeAED: 'From 600 AED (Studio / Room Package)',
    emergencyAvailable: false,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      afterImg: paintingCeilingImg,
      beforeTitle: 'Peeling Paint & Water-Damaged Ceiling',
      afterTitle: 'Flawless Gypsum Cove Ceiling & Silk Finish',
      description: 'Scraped flaking paint, applied anti-damp primer, constructed modern gypsum recessed ceiling with warm LED coves.'
    }
  },
  {
    id: 'plumbing',
    route: '/plumbing-works',
    title: 'Plumbing Works',
    category: 'Plumbing & Drainage',
    shortDescription: 'Fixing leaks, pipe installations, bathroom fittings, water heaters, and emergency blockage clearance.',
    fullDescription: 'From hidden burst pipes and high water bills to full bathroom fixture upgrades, our experienced plumbers handle residential and commercial plumbing systems with precision. We use non-destructive detection tools and ensure all areas are left spotless.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    features: [
      '24/7 Emergency Burst Pipe & Leak Repairs',
      'Water Heater Replacement & Repair',
      'Blocked Drain & Sewer Jet Cleaning',
      'Sanitary Ware & Tap Installations',
      'Water Pump & Tank Servicing'
    ],
    priceRangeAED: 'From 120 AED',
    emergencyAvailable: true,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      beforeTitle: 'Corroded Pipes & Under-Sink Flooding',
      afterTitle: 'High-Grade Copper & PVC Flawless Piping',
      description: 'Replaced rusted iron joints with durable PVC and high-pressure flex hoses.'
    }
  },
  {
    id: 'electrical',
    route: '/electrical-work',
    title: 'Electrical Work',
    category: 'Electrical & Power',
    shortDescription: 'Safe wiring, DB box upgrades, light fixture installations, short-circuit repairs, and appliance setups.',
    fullDescription: 'Electrical safety is vital. Our DEWA-standard electricians resolve power tripping, faulty breaker boxes, flickering lighting, and complete home rewiring. We guarantee tested, fire-safe electrical connections.',
    iconName: 'Zap',
    image: electricalWorkImg,
    features: [
      'Power Tripping & Short-Circuit Fixes',
      'Chandelier & LED Spotlight Installation',
      'Distribution Board (DB) Maintenance',
      'Smart Switch & Home Automation Wiring',
      'Waterproof Outdoor & Garden Electricals'
    ],
    priceRangeAED: 'From 130 AED',
    emergencyAvailable: true,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      afterImg: electricalWorkImg,
      beforeTitle: 'Tripping Breakers & Tangled Wiring',
      afterTitle: 'Neatly Labeled, Multi-Tested DB Panel',
      description: 'Rewired circuits, replaced overloaded breakers, and performed thorough voltage diagnostics.'
    }
  },
  {
    id: 'home-maintenance',
    route: '/home-maintenance',
    title: 'Home Maintenance',
    category: 'Comprehensive AMC & Handyman',
    shortDescription: 'Complete residential maintenance contracts, quarterly preventive servicing, and on-demand handyman solutions.',
    fullDescription: 'Ensure year-round peace of mind for your villa or apartment. Our comprehensive home maintenance and AMC packages deliver 24/7 unlimited emergency callouts, scheduled AC & plumbing upkeep, and swift handyman assistance.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    features: [
      '24/7 Priority Emergency Callouts',
      'Quarterly Comprehensive AC & MEP Servicing',
      'On-Demand Drilling, TV Mounting & Handyman',
      'Holiday Home & Short-Term Rental Maintenance',
      'Free Property Health & Snagging Inspection'
    ],
    priceRangeAED: 'From 180 AED (AMC from 1,400 AED/yr)',
    emergencyAvailable: true,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      beforeTitle: 'Neglected Electrical & Water Systems',
      afterTitle: 'Proactively Maintained & Certified Home',
      description: 'Conducted complete AC chemical cleaning, water pump pressure tuning, and circuit balancing.'
    }
  },
  {
    id: 'tiling-flooring',
    route: '/Tiling-Flooring',
    title: 'Tiling & Flooring',
    category: 'Renovation & Finishes',
    shortDescription: 'Perfect alignment and modern tile layouts for kitchens, bathrooms, balconies, and living spaces.',
    fullDescription: 'Transform old or cracked floors into luxurious spaces. We install porcelain, ceramic, marble, and parquet flooring with laser precision leveling and waterproof grout sealing designed for high durability.',
    iconName: 'LayoutGrid',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Kitchen & Bathroom Tile Regrouting & Replacement',
      'Large Format Porcelain & Marble Laying',
      'Waterproof Membrane Installation',
      'Parquet & Wooden Vinyl Flooring',
      'Balcony & Outdoor Paver Restoration'
    ],
    priceRangeAED: 'From 45 AED / Sq. Meter',
    emergencyAvailable: false,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      beforeTitle: 'Stained, Cracked Kitchen Tiles',
      afterTitle: 'Modern Matte White Marble Finish',
      description: 'Complete tile replacement with zero dust spreading into adjacent living rooms.'
    }
  },
  {
    id: 'carpentry',
    route: '/carpentry-works',
    title: 'Carpentry Works',
    category: 'Wood & Joinery',
    shortDescription: 'Furniture repair, door/window hinges adjustments, custom wardrobe design, and wooden installations.',
    fullDescription: 'Whether doors are squeaking or stuck from humidity, or you need bespoke built-in cabinets, our master carpenters deliver flawless woodcraft. We handle kitchen cabinets, pergola repairs, and lock replacements.',
    iconName: 'Hammer',
    image: carpentryWorksImg,
    features: [
      'Door Lock, Hinge & Sliding Mechanism Repair',
      'Custom Kitchen Cabinet & Wardrobe Repairs',
      'Pergola & Wooden Deck Restoration',
      'Flat-Pack Furniture Assembly (IKEA etc.)',
      'Custom Partition & Shelving Installation'
    ],
    priceRangeAED: 'From 150 AED',
    emergencyAvailable: false,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=800&q=80',
      afterImg: carpentryWorksImg,
      beforeTitle: 'Misaligned Hinges & Worn Cabinet Doors',
      afterTitle: 'Custom-Fitted Soft-Close Woodwork',
      description: 'Realigned kitchen cabinetry, replaced rusted hinges with hydraulic soft-close fittings, and restored wood varnish.'
    }
  },
  {
    id: 'renovation',
    route: '/home-repair-renovation',
    title: 'Home Repair & Renovation',
    category: 'Full Remodeling',
    shortDescription: 'Complete structural renewal, kitchen remodeling, and turnkey maintenance to make your home look brand new.',
    fullDescription: 'Looking to upgrade your property value? Fix Dubai brings 25 years of mastery to full home makeovers. We manage turnkey renovations seamlessly on time, on budget, and done exactly as you wish!',
    iconName: 'Home',
    image: homeRenovationImg,
    features: [
      'Complete Kitchen & Bathroom Remodeling',
      'Villa Makeover & Landscaping Upgrades',
      'Structural Crack Repair & Plastering',
      'Turnkey Project Management',
      'Customized Client Cooperation & Planning'
    ],
    priceRangeAED: 'Custom Quote (Free On-Site Inspection)',
    emergencyAvailable: false,
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      afterImg: homeRenovationImg,
      beforeTitle: 'Outdated & Weathered Villa Living Space',
      afterTitle: 'Architectural Turnkey Luxury Makeover',
      description: 'Executed complete structural remodeling, marble flooring installation, and bespoke interior architectural detailing.'
    }
  }
];

export const PROPERTY_TYPES: PropertyTypeItem[] = [
  {
    id: 'villas',
    title: 'Residential Villas',
    subtitle: 'Luxury & Family Villas across UAE',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    description: 'Full-scale annual maintenance, chiller & split AC management, roof water leakage prevention, pool pump electricals, and exterior painting for luxury villas.',
    keyServices: [
      'Complete Chiller / VRF AC Maintenance',
      'Water Tank Cleaning & High-Pressure Jetting',
      'Garden Lighting & Pump Electrical Maintenance',
      'Exterior Weatherproof Jotun Painting'
    ],
    amcAvailable: true
  },
  {
    id: 'apartments',
    title: 'Apartments & Flats',
    subtitle: 'High-Rise Living & Studio Upkeep',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Quick-response emergency repairs, concealed plumbing fixes, DEWA-compliant electrical upkeep, and move-in/out painting packages.',
    keyServices: [
      'Rapid 45-Min Emergency Callout',
      'Balcony Sliding Door & Window Sealing',
      'Bathroom Leakage & Odor Elimination',
      'Instant Kitchen Appliance Plumbing & Wiring'
    ],
    amcAvailable: true
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    subtitle: 'Offices, Retail Shops & Warehouses',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Custom Annual Maintenance Contracts (AMCs) to keep your office or shop operating smoothly 24/7 without business disruption.',
    keyServices: [
      'After-Hours & Weekend Silent Maintenance',
      'Emergency Commercial Electrical Restoration',
      'HVAC Air Quality & Duct Disinfection',
      'Gypsum Partition & Ceiling Modifications'
    ],
    amcAvailable: true
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Mohammad R.',
    location: 'Dubai Marina, UAE',
    rating: 5,
    date: '2 days ago',
    serviceUsed: 'AC Repairing & Emergency Callout',
    reviewText: '"Amazing service! My AC broke down at night and Fix Dubai\'s team arrived quickly and fixed it. Very professional and clean work."',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Sarah K.',
    location: 'Arabian Ranches, Dubai',
    rating: 5,
    date: '1 week ago',
    serviceUsed: 'Tiling & Plumbing Renovation',
    reviewText: '"They completely renovated my kitchen tiles and did some plumbing work. Very affordable range and they worked exactly as I wished."',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'John D.',
    location: 'Downtown Dubai',
    rating: 5,
    date: '2 weeks ago',
    serviceUsed: 'Full Apartment Painting',
    reviewText: '"The team is highly cooperative. They painted my entire apartment beautifully and didn\'t leave a single spot or mess behind. Highly recommended!"',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Tariq Al-Mansoor',
    location: 'Al Reem Island, Abu Dhabi',
    rating: 5,
    date: '3 weeks ago',
    serviceUsed: 'Electrical & Water Heater Replacement',
    reviewText: '"Called Fix Dubai on a Friday morning for a tripping water heater circuit. The technician arrived in 35 minutes with the exact spare parts needed. Transparent pricing and respectful crew."',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Elena Rostova',
    location: 'Palm Jumeirah Villa',
    rating: 5,
    date: 'Last month',
    serviceUsed: 'Annual Villa Maintenance Contract',
    reviewText: '"We have trusted Fix Dubai for over 3 years for our villa AMC. They keep our 8 AC units running in peak summer without any complaints. Truly 25 years of mastery!"',
    verified: true
  }
];

export const EMIRATES_LIST = [
  'Dubai',
];
