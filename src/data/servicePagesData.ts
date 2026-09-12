import { ServicePageData } from '../types';
import acRepairImg from '../assets/images/ac_repair_technician_1783177536352.jpg';
import electricalImg from '../assets/images/electrical_work_technician_1783177884189.jpg';
import paintingImg from '../assets/images/painting_ceiling_technician_1783178611940.jpg';
import carpentryImg from '../assets/images/carpentry_works_technician_1783178632813.jpg';
import renovationImg from '../assets/images/home_renovation_technician_1783178653562.jpg';

export const DUBAI_AREAS = [
  'Dubai Marina', 'Jumeirah Beach Residence (JBR)', 'Palm Jumeirah', 'Downtown Dubai',
  'Business Bay', 'Arabian Ranches', 'Dubai Hills Estate', 'Jumeirah Village Circle (JVC)',
  'Jumeirah Lakes Towers (JLT)', 'The Springs & Meadows', 'Emirates Hills', 'Mirdif',
  'Al Barsha', 'DAMAC Hills', 'Al Furjan', 'Deira & Bur Dubai',
];

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  '/ac-repairing-installation': {
    slug: '/ac-repairing-installation',
    aliases: ['/ac-repairing', '/ac-repair', '/ac-installation'],
    serviceId: 'ac-repair',
    title: 'AC Repair & Installation Services in Dubai',
    metaTitle: 'AC Repair & Installation Services in Dubai | Fix Dubai',
    metaDescription: 'Professional AC repair, installation and maintenance services in Dubai. Fix Dubai provides reliable air conditioning solutions for homes and businesses.',
    keywords: [
      'AC repair Dubai',
      'AC installation Dubai',
      'AC maintenance Dubai',
      'air conditioning repair Dubai',
      'AC service Dubai'
    ],
    h1: 'AC Repair & Installation Services in Dubai',
    h1Subtitle: 'Reliable 24/7 emergency AC diagnostics, refrigerant gas refilling, coil cleaning, and precision split, ducted & chiller installations across Dubai homes and commercial properties.',
    heroImage: acRepairImg,
    imageAlt: 'Certified HVAC technician performing AC repair and maintenance service on a residential cooling unit in Dubai',
    category: 'Cooling & HVAC Services',
    priceStartingAED: 'AED 150',
    responseTime: '30 - 45 Minutes',
    warranty: '90-Day Parts & Workmanship Guarantee',
    emergencyAvailable: true,
    overview: [
      'In Dubai and the wider UAE, where summer outdoor temperatures frequently exceed 48°C (118°F), reliable air conditioning is essential for home comfort, respiratory health, and overall safety. Fix Dubai delivers dependable AC repair, AC installation, and ongoing AC maintenance services for residential villas, modern apartments, and commercial businesses across Dubai.',
      'Whether you are facing sudden warm airflow, a frozen evaporator coil, water leaking through false ceilings, a humming compressor, or unusual noises, our certified HVAC technicians arrive fully prepared. We troubleshoot residential cooling problems and commercial cooling loops using advanced digital manifold gauges, electronic refrigerant leak detectors, and genuine OEM replacement parts.',
      'We service all major air conditioning brands and systems commonly installed across Dubai communities—including split wall units, ducted DX systems, and central chiller fan coil units (FCUs) found in master-developer communities by Emaar, Nakheel, and DAMAC.'
    ],
    internalLinks: [
      {
        prefixText: 'For complete year-round property care alongside your AC servicing, explore our',
        route: '/home-maintenance',
        anchorText: 'Home Maintenance Services in Dubai',
        suffixText: 'with scheduled preventive checkups and priority emergency response.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Emergency AC Repair & Troubleshooting',
        description: 'Fast on-site diagnostics for cooling failure, burnt capacitors, faulty contactors, thermostat sensor errors, and compressor trip issues across Dubai.'
      },
      {
        title: 'R410A & R22 Refrigerant Gas Refilling',
        description: 'Electronic leak testing on copper brazed joints, nitrogen pressure holding tests, and precision digital scale refrigerant top-up to restore ice-cold cooling.'
      },
      {
        title: 'Deep Pressure Coil Chemical Cleaning',
        description: 'Complete removal of desert sand, dust mite accumulation, and indoor mildew from cooling coils and blower wheels to restore optimal airflow volume.'
      },
      {
        title: 'Drainage Pipe Unclogging & Leak Repair',
        description: 'High-pressure vacuum flushing of condensate drain trays and drain lines to stop water dripping through ceilings and prevent costly gypsum damage.'
      },
      {
        title: 'Chiller & Ducted AC System Servicing',
        description: 'Actuator valve testing, 2-way and 3-way valve replacement, chilled water flow balancing, and smart digital thermostat calibration for Dubai apartments.'
      },
      {
        title: 'New AC Unit Installation & Replacement',
        description: 'Professional load calculations, vibration-dampened bracket mounting, vacuum-pumped copper piping, and commissioning for O General, Carrier, Daikin, and Gree.'
      }
    ],
    whyChooseUs: [
      {
        title: '30–45 Minute Rapid Response',
        description: 'Mobile service vans stationed across Dubai Marina, JVC, Downtown, Arabian Ranches, and Dubai Hills for prompt dispatch.'
      },
      {
        title: 'Certified HVAC Technicians',
        description: 'Experienced technicians with extensive hands-on expertise in all compressor architectures and cooling systems across the UAE.'
      },
      {
        title: 'Transparent Flat-Rate AED Pricing',
        description: 'Clear, upfront quotes before any wrench is turned or replacement part installed, with no hidden diagnostic surprises.'
      },
      {
        title: 'Clean & Dust-Free Work Guarantee',
        description: 'We use heavy drop sheets, catch-bags for coil washing, and leave your living areas clean and tidy upon completion.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Easy Call or WhatsApp Booking',
        description: 'Contact Fix Dubai with your location and describe the AC issue for prompt scheduling and immediate guidance.'
      },
      {
        step: 2,
        title: 'Comprehensive Diagnostic Check',
        description: 'Technician tests airflow temperature drops, operating pressures, electrical amp draw, and coil conditions.'
      },
      {
        step: 3,
        title: 'Clear Quote & Expert Repair',
        description: 'After your approval of the transparent AED price, repairs are carried out using certified replacement components.'
      },
      {
        step: 4,
        title: 'Cooling Test & Quality Guarantee',
        description: 'We verify ice-cold airflow in every room, confirm whisper-quiet compressor operation, and provide our service warranty.'
      }
    ],
    pricingTable: [
      { item: 'AC Diagnostic & Minor Service Call', price: 'AED 150', notes: 'Deducted from final bill if repair is approved' },
      { item: 'Chemical Deep Coil & Blower Cleaning', price: 'From AED 180 / unit', notes: 'Includes drain line flushing and antimicrobial sanitization' },
      { item: 'Refrigerant Gas Top-Up (R410A / R22)', price: 'From AED 220', notes: 'Includes electronic leak test & digital scale recharge' },
      { item: 'AC Capacitor / Contactor Replacement', price: 'From AED 200', notes: 'Heavy-duty commercial-grade components with warranty' },
      { item: 'Drainage Pipe Unclogging & Leak Repair', price: 'From AED 150', notes: 'High-pressure vacuum jetting with anti-fungal flush' },
      { item: 'Complete Split AC Unit Installation', price: 'From AED 650', notes: 'Includes copper piping connection, vacuum test & bracket' }
    ],
    faqs: [
      {
        question: 'Why is my AC blowing room-temperature air in the Dubai summer heat?',
        answer: 'The most frequent causes in Dubai are a failed compressor start capacitor due to extreme heat stress, low refrigerant gas levels caused by a copper joint leak, or heavily clogged outdoor condenser coils choking heat exchange. Fix Dubai technicians diagnose and fix these issues swiftly.'
      },
      {
        question: 'How quickly can your AC repair technician arrive in Dubai?',
        answer: 'For emergency cooling breakdowns, our average response time is 30 to 45 minutes across primary Dubai communities including Dubai Marina, JLT, JVC, Downtown Dubai, Arabian Ranches, Dubai Hills Estate, and Palm Jumeirah.'
      },
      {
        question: 'How often should AC filters and coils be cleaned in Dubai?',
        answer: 'Due to desert dust storms and continuous summer operation, basic air filters should be rinsed every 4 to 6 weeks, and deep chemical coil cleaning is recommended every 6 months to maintain high energy efficiency and healthy indoor air quality.'
      },
      {
        question: 'Do you provide a warranty on AC repair parts and installation?',
        answer: 'Yes. All replacement parts such as capacitors, fan motors, contactors, and expansion valves supplied and installed by Fix Dubai include a 90-day parts and workmanship guarantee.'
      },
      {
        question: 'Can you service central chiller systems in Emaar and Nakheel communities?',
        answer: 'Yes. We specialize in both ducted chiller fan coil units (FCUs) and independent split systems, including electronic 2-way / 3-way actuator valve diagnostics and digital thermostat replacements across high-rise towers and villas.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
    relatedSlugs: ['/home-maintenance', '/electrical-work', '/plumbing-works']
  },

  '/painting-ceiling': {
    slug: '/painting-ceiling',
    aliases: ['/painting', '/ceiling-works', '/false-ceiling'],
    serviceId: 'painting-ceiling',
    title: 'Painting & Ceiling Services in Dubai',
    metaTitle: 'Painting & Ceiling Services in Dubai | Fix Dubai',
    metaDescription: 'Professional painting and ceiling services in Dubai. Fix Dubai provides quality wall, interior and ceiling painting for homes and businesses.',
    keywords: [
      'painting services Dubai',
      'ceiling painting Dubai',
      'house painting Dubai',
      'interior painting Dubai',
      'wall painting Dubai'
    ],
    h1: 'Painting & Ceiling Services in Dubai',
    h1Subtitle: 'Quality wall, interior and ceiling painting, gypsum false ceiling installations, move-out handover painting, and exterior villa coatings across Dubai, UAE.',
    heroImage: paintingImg,
    imageAlt: 'Professional painter applying smooth interior wall and ceiling paint in a Dubai property',
    category: 'Painting & Architectural Finishes',
    priceStartingAED: 'AED 600',
    responseTime: 'Same-Day Assessment Available',
    warranty: '1-Year Paint & Plaster Adhesion Warranty',
    emergencyAvailable: false,
    overview: [
      'A fresh, professional paint finish elevates your living environment, protects walls against humidity, and creates clean, inviting interiors. Fix Dubai provides comprehensive painting services in Dubai for luxury villas, modern apartments, offices, and commercial properties.',
      'Our team specializes in interior painting, exterior painting, ceiling painting, and wall painting using premium, low-VOC, odorless paints from trusted brands like Jotun (Fenomastic and Jotashield). These formulations are engineered specifically for the UAE climate, ensuring walls remain washable, fade-resistant, and free from moisture stains.',
      'In addition to painting, our skilled craftsmen design and construct contemporary gypsum false ceilings, LED cove lighting channels, and perform water damage repairs to restore flawless ceiling aesthetics after leaks or AC condensation.'
    ],
    internalLinks: [
      {
        prefixText: 'If you are planning a broader upgrade including space restructuring and kitchen or bath remodeling, learn about our',
        route: '/home-repair-renovation',
        anchorText: 'Home Repair & Renovation Services in Dubai',
        suffixText: 'for complete turnkey transformations.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Interior Apartment & Villa Painting',
        description: 'Complete interior painting covering walls, ceilings, baseboards, doors, and trim using smooth silk, matte, or satin Jotun finishes.'
      },
      {
        title: 'Ceiling Painting & Water Stain Restoration',
        description: 'Specialized stain-blocking primers, anti-fungal treatments, and seamless ceiling repainting to eliminate AC leak marks.'
      },
      {
        title: 'Ejari Move-Out & Move-In Handover Painting',
        description: 'Fast 24 to 48-hour turnaround painting ensuring complete color matching and clean finishes to pass strict landlord move-out inspections.'
      },
      {
        title: 'Modern Gypsum False Ceiling Installation',
        description: 'Custom floating ceilings, multi-tier bulkheads, recessed acoustic troughs, and indirect LED strip cove lighting for living rooms.'
      },
      {
        title: 'Exterior Weatherproof Villa Painting',
        description: 'UV-resistant, elastomeric crack-bridging exterior coatings engineered to protect villa facades against coastal humidity, heat, and sand.'
      },
      {
        title: 'Accent Walls & Feature Texture Finishes',
        description: 'Venetian plaster, concrete-look microcement, decorative textured walls, and feature color schemes designed to enhance interior aesthetics.'
      }
    ],
    whyChooseUs: [
      {
        title: 'Full Furniture & Floor Protection',
        description: 'We mask all furniture, lay heavy floor runners, and tape electrical fittings to ensure zero paint splatters on your belongings.'
      },
      {
        title: 'Premium Odorless Jotun Paints',
        description: 'Safe for families and pets, allowing you to occupy your rooms on the same day without harsh chemical smells.'
      },
      {
        title: 'Laser-Straight Ceiling Lines',
        description: 'Master plasterers and drywall fixers ensuring straight joints, smooth corners, and uniform lighting troughs.'
      },
      {
        title: 'Ejari Inspection Pass Guarantee',
        description: 'Reliable move-out painting that meets Dubai rental inspection standards for 100% security deposit return.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Free On-Site Color Consultation',
        description: 'We inspect your property with physical color fan decks, evaluate wall conditions, and provide a clear quote.'
      },
      {
        step: 2,
        title: 'Surface Preparation & Masking',
        description: 'Cracks are opened and filled with acrylic putty, sanded smooth, and all furniture is wrapped in protective plastic.'
      },
      {
        step: 3,
        title: 'Primer & Double Coat Application',
        description: 'High-adhesion primer followed by two uniform coats of premium paint with zero streaks or roller marks.'
      },
      {
        step: 4,
        title: 'Cleanup & Final Walkthrough',
        description: 'All masking is removed, floors are swept and vacuumed, and we inspect every surface with you to ensure satisfaction.'
      }
    ],
    pricingTable: [
      { item: 'Studio Apartment Interior Paint (Walls & Ceiling)', price: 'AED 600 - 850', notes: 'Includes Jotun paint, minor patching & floor masking' },
      { item: '1-Bedroom Apartment Complete Paint', price: 'AED 950 - 1,400', notes: 'Includes primer, 2 topcoats & complete protection' },
      { item: '2-Bedroom Apartment Complete Paint', price: 'AED 1,500 - 2,200', notes: 'Includes washable paint & door frame touchups' },
      { item: '3-4 Bedroom Villa Interior Paint', price: 'From AED 3,200', notes: 'Turnkey package with high-ceiling scaffolding' },
      { item: 'Gypsum False Ceiling with LED Troughs', price: 'From AED 75 / Sqm', notes: 'Includes framing, gypsum boards, joint tape & skim coat' },
      { item: 'Ceiling Water Leak Repair & Repainting', price: 'From AED 250', notes: 'Anti-mold primer, structural patching & color match' }
    ],
    faqs: [
      {
        question: 'Do I need to leave my Dubai home while your painters work?',
        answer: 'No. Because Fix Dubai uses premium, low-VOC, odorless paints and covers all furniture and flooring room-by-room, homeowners and tenants can comfortably remain in the property while painting is underway.'
      },
      {
        question: 'Can you match the exact original wall color for an Ejari move-out inspection in Dubai?',
        answer: 'Yes. We utilize precision color-matching tools on-site to match your original wall tone and sheen, ensuring seamless results that satisfy Dubai property management move-out criteria.'
      },
      {
        question: 'How long does it take to paint an apartment or villa in Dubai?',
        answer: 'A studio or 1-bedroom apartment is typically completed in 1 day. A 2-bedroom apartment takes 1 to 2 days, while a 3 to 5 bedroom villa typically requires 3 to 4 days depending on surface repair needs.'
      },
      {
        question: 'What types of false ceiling boards do you use in kitchens and bathrooms?',
        answer: 'We exclusively use moisture-resistant (green MR) gypsum boards from Knauf and Gyproc in bathrooms, laundry rooms, and kitchens to prevent humidity warping and mold.'
      },
      {
        question: 'Do your painters have access and permits for gated Dubai communities?',
        answer: 'Yes. Fix Dubai holds appropriate trade licensing and technician documentation to arrange gate passes for gated communities such as Emirates Living, Arabian Ranches, Palm Jumeirah, and Downtown Dubai.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
   relatedSlugs: ['/home-repair-renovation', '/tiling-flooring', '/home-maintenance']
  },

  '/plumbing-works': {
    slug: '/plumbing-works',
    aliases: ['/Plumbing-works', '/plumbing', '/plumber'],
    serviceId: 'plumbing',
    title: 'Plumbing Services in Dubai | Plumbing Works',
    metaTitle: 'Plumbing Services in Dubai | Plumbing Works | Fix Dubai',
    metaDescription: 'Reliable plumbing services in Dubai for repairs, installations and maintenance. Fix Dubai provides professional plumbing solutions for homes and businesses.',
    keywords: [
      'plumber Dubai',
      'plumbing services Dubai',
      'plumbing repair Dubai',
      'emergency plumber Dubai',
      'home plumbing Dubai'
    ],
    h1: 'Plumbing Services in Dubai',
    h1Subtitle: 'Reliable plumbing repairs, water leak detection, pipe replacements, water heater repairs, drainage unblocking, and sanitary installations across Dubai, UAE.',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Experienced plumber repairing water pipe leaks and drainage installations in a Dubai home',
    category: 'Plumbing & Hydraulic Services',
    priceStartingAED: 'AED 120',
    responseTime: '30 - 45 Minutes (Emergency)',
    warranty: '100% Leak-Free Guarantee with Warranty',
    emergencyAvailable: true,
    overview: [
      'Plumbing issues like concealed water leaks, burst high-pressure pipes, clogged drains, and failing water heaters can cause severe property damage and inflated utility bills if not resolved quickly. Fix Dubai provides dependable plumbing services in Dubai for homeowners, tenants, and commercial businesses.',
      'Our team of experienced Dubai plumbers handles plumbing repairs, water leak detection, water pump servicing, drainage clearing, and sanitary ware installations with minimal disruption. We use non-invasive acoustic sensors and thermal inspection tools to locate hidden leaks behind tiles and inside walls without unnecessary demolition.',
      'Whether you require an emergency plumber in Dubai for a midnight pipe burst, need a faulty Ariston or Milano water heater replaced, or want luxury bathroom mixers and concealed cisterns installed, Fix Dubai delivers prompt and lasting solutions.'
    ],
    internalLinks: [
      {
        prefixText: 'To keep all your home systems operating smoothly alongside regular plumbing checks, discover our comprehensive',
        route: '/home-maintenance',
        anchorText: 'Home Maintenance Services in Dubai',
        suffixText: 'tailored for villas and apartments.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Emergency Water Leak Repair & Detection',
        description: 'Swift isolation and repair of burst water lines, flex hose failures, and pinhole pipe leaks using non-invasive thermal leak detection gear.'
      },
      {
        title: 'Water Heater (Geyser) Repair & Replacement',
        description: 'Safe replacement and repair of leaking or short-circuiting water heaters (Ariston, Milano, Atlantic) with pressure relief valve calibration.'
      },
      {
        title: 'Drainage Unblocking & Sewer Line Clearing',
        description: 'High-pressure mechanical snake unclogging for blocked kitchen sinks, shower traps, toilet waste pipes, and main villa sewer chambers.'
      },
      {
        title: 'Water Booster Pump & Pressure Switch Servicing',
        description: 'Repair and replacement of variable-speed water booster pumps and pressure tanks to ensure strong, steady water pressure in villa bathrooms.'
      },
      {
        title: 'Bathroom Mixers, Shattafs & Sanitary Ware Installation',
        description: 'Precision fitting of rain showers, Grohe/Hansgrohe mixer taps, bidet shattafs, concealed Geberit cisterns, and wall-hung toilets.'
      },
      {
        title: 'High DEWA Water Bill Investigation',
        description: 'Comprehensive plumbing audit to identify continuous toilet overflows, hidden underground irrigation leaks, and float valve defects.'
      }
    ],
    whyChooseUs: [
      {
        title: '30–45 Minute Emergency Arrival',
        description: 'Fast mobilization across Dubai to shut off active leaks and safeguard your ceilings and floors from water damage.'
      },
      {
        title: 'Non-Destructive Leak Detection',
        description: 'We pinpoint hidden moisture routes using acoustic and thermal technology to prevent destructive wall demolition.'
      },
      {
        title: 'High-Pressure PPR & Copper Fittings',
        description: 'We exclusively install certified, heat-fused PPR and multi-layer PEX pipes built for high Dubai water pressure.'
      },
      {
        title: 'DEWA Code Compliant Standards',
        description: 'All plumbing repairs and water heater installations comply with Dubai Municipality and DEWA safety guidelines.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Immediate Callout & Isolation Guidance',
        description: 'Our technical desk guides you on isolating main valves to stop flooding while our mobile plumber is en route.'
      },
      {
        step: 2,
        title: 'On-Site Diagnostic & Pressure Testing',
        description: 'The plumber checks hydrostatic pressure, inspects fittings, or uses thermal cameras to confirm the leak source.'
      },
      {
        step: 3,
        title: 'Professional Pipe Repair or Replacement',
        description: 'Damaged sections are replaced using heat-fusion PPR or certified flexible couplings with transparent AED pricing.'
      },
      {
        step: 4,
        title: 'Pressure Testing & Leak-Free Guarantee',
        description: 'Lines are pressurized to full working load to confirm zero seepage, and we clean up the workspace completely.'
      }
    ],
    pricingTable: [
      { item: 'Plumbing Diagnostic & Minor Repair Call', price: 'AED 120', notes: 'Deducted from repair if work proceeds' },
      { item: 'Water Heater Replacement (Labor + Plumbing Kit)', price: 'From AED 250', notes: 'Supply of Ariston / Milano heater available at trade rates' },
      { item: 'Kitchen / Bathroom Drain Unblocking', price: 'From AED 180', notes: 'Mechanical snake clearing with sanitary pipe flush' },
      { item: 'Mixer Tap / Shattaf Bidet Installation', price: 'From AED 140', notes: 'Includes new braided stainless steel flexi-hoses' },
      { item: 'Water Booster Pump Repair / Capacitor Change', price: 'From AED 220', notes: 'Impeller cleaning & pressure switch calibration' },
      { item: 'Concealed Water Leak Thermal Audit', price: 'From AED 350', notes: 'Includes comprehensive report for insurance or landlord' }
    ],
    faqs: [
      {
        question: 'How quickly can an emergency plumber in Dubai arrive at my property?',
        answer: 'Fix Dubai emergency plumbing teams arrive within 30 to 45 minutes across major Dubai areas including Dubai Marina, Palm Jumeirah, JVC, Downtown Dubai, Business Bay, Arabian Ranches, and Emirates Living.'
      },
      {
        question: 'Why did my DEWA water bill suddenly jump this month in Dubai?',
        answer: 'Unexplained DEWA bill spikes are most often caused by a continuous silent leak in a concealed toilet cistern, an underground irrigation line fissure, or a faulty float valve on your underground water storage tank. Our plumbers isolate and resolve the issue quickly.'
      },
      {
        question: 'Is it dangerous if my water heater is leaking from the bottom?',
        answer: 'Yes. A bottom leak on an electric water heater usually indicates the inner cylinder has corroded. This can allow water to contact 220V electrical wiring, causing short circuits or fire hazards. Switch off the water heater breaker switch immediately and contact Fix Dubai for prompt replacement.'
      },
      {
        question: 'How do you detect hidden water leaks without breaking bathroom tiles?',
        answer: 'We utilize non-destructive diagnostic tools including acoustic listening gear, moisture meters, and thermal imaging cameras that trace temperature differences caused by hidden hot or cold water pipe leaks behind walls or floors.'
      },
      {
        question: 'Can you install wall-hung concealed cistern toilets (such as Geberit)?',
        answer: 'Yes. Our licensed plumbers regularly install, service, and retrofit wall-hung toilets with concealed cisterns (Geberit, Grohe), including structural wall framing, supply line hookups, and flush plate adjustments.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
    relatedSlugs: ['/home-maintenance', '/electrical-work', '/tiling-flooring']
  },

  '/electrical-work': {
    slug: '/electrical-work',
    aliases: ['/electrical-works', '/electrical', '/electrician'],
    serviceId: 'electrical',
    title: 'Electrical Services in Dubai | Electrical Work',
    metaTitle: 'Electrical Services in Dubai | Electrical Work | Fix Dubai',
    metaDescription: 'Professional electrical services in Dubai including repairs, installations and maintenance. Get reliable electrical solutions from Fix Dubai.',
    keywords: [
      'electrician Dubai',
      'electrical services Dubai',
      'electrical repair Dubai',
      'electrical installation Dubai',
      'home electrician Dubai'
    ],
    h1: 'Electrical Services in Dubai',
    h1Subtitle: 'Professional electrical repairs, short-circuit troubleshooting, DB panel upgrades, chandelier hanging, smart switches, and home electrical maintenance across Dubai.',
    heroImage: electricalImg,
    imageAlt: 'Licensed electrician troubleshooting distribution board wiring and electrical installation in Dubai',
    category: 'Electrical Engineering & Safety',
    priceStartingAED: 'AED 130',
    responseTime: '30 - 45 Minutes (Emergency)',
    warranty: '6-Month Workmanship & Safety Warranty',
    emergencyAvailable: true,
    overview: [
      'Electrical faults pose genuine safety risks, including electrical fire hazards, damaged appliances, and unexpected power outages. Fix Dubai delivers certified electrical services in Dubai following DEWA safety standards for residential homes, luxury villas, apartments, and commercial facilities.',
      'Our team of professional Dubai electricians diagnoses tripping circuit breakers, short circuits, damaged wiring, burnt distribution board terminals, and earth leakage faults using calibrated digital multimeters and infrared thermal cameras.',
      'From emergency power restoration when your breaker trips unexpectedly to hanging heavy crystal chandeliers in double-height villa foyers, adding high-amperage cooker outlets, or wiring smart home automation switches, Fix Dubai ensures certified electrical safety and peace of mind.'
    ],
    internalLinks: [
      {
        prefixText: 'To keep your electrical systems balanced alongside all other property utilities, consider our',
        route: '/home-maintenance',
        anchorText: 'Home Maintenance Services in Dubai',
        suffixText: 'with scheduled preventive inspections.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Emergency Short-Circuit & Power Tripping Repair',
        description: 'Accurate troubleshooting of neutral-to-earth shorts, earth leakage faults, and overloaded circuits that trip your main RCD/ELCB breakers.'
      },
      {
        title: 'Distribution Board (DB Box) Maintenance & Upgrades',
        description: 'Replacing burnt, buzzing, or outdated breakers with certified Schneider, ABB, or Hager MCBs and RCCBs for balanced electrical safety.'
      },
      {
        title: 'Chandelier & High-Ceiling Light Installation',
        description: 'Safe anchor bolting, load testing, and electrical wiring for delicate crystal and modern multi-tier chandeliers in Dubai villas.'
      },
      {
        title: 'Smart Switches & Home Automation Wiring',
        description: 'Installation of smart dimmers and neutral-wire modules (Tuya, Sonoff, Lutron) for remote smartphone and voice assistant lighting control.'
      },
      {
        title: 'Outdoor Garden & Weatherproof Electricals',
        description: 'IP66/IP68 waterproof cabling, landscape bollard lights, pool pump electricals, and armored cable runs designed for UAE exterior conditions.'
      },
      {
        title: 'Dedicated Appliance Sockets & EV Charger Lines',
        description: 'Adding dedicated 32A/40A circuits with individual breakers for induction hobs, dryers, and electric vehicle home charging stations.'
      }
    ],
    whyChooseUs: [
      {
        title: 'DEWA Code Compliant Workmanship',
        description: 'Every circuit modification, wire gauge, and breaker rating complies with Dubai Electricity and Water Authority safety codes.'
      },
      {
        title: 'Thermal Camera Hot-Spot Checks',
        description: 'We use infrared thermal imaging to identify loose, overheating wires in your DB panel before they trigger a fire.'
      },
      {
        title: '30–45 Minute Emergency Dispatch',
        description: 'Emergency electricians on standby across Dubai for fast response when power trips or burning odors occur.'
      },
      {
        title: 'High-Ceiling Scaffolding Equipment',
        description: 'Certified scaffolding for safe installation of heavy chandeliers in high-ceiling living rooms without damaging floors.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Emergency Call or Scheduled Visit',
        description: 'Contact Fix Dubai to report electrical symptoms or schedule a planned lighting installation.'
      },
      {
        step: 2,
        title: 'Digital Insulation & Load Testing',
        description: 'We test branch circuits to identify faulty insulation resistance, ground faults, or phase load imbalances.'
      },
      {
        step: 3,
        title: 'Safe Component Replacement',
        description: 'Burnt breakers, damaged sockets, or melted wiring are replaced with certified genuine parts at transparent AED rates.'
      },
      {
        step: 4,
        title: 'Final Voltage & Safety Verification',
        description: 'We measure phase voltages and load balance across phases, confirming complete system stability and safety.'
      }
    ],
    pricingTable: [
      { item: 'Electrical Inspection & Diagnostic Callout', price: 'AED 130', notes: 'Deducted from repair if work proceeds' },
      { item: 'Single MCB / Circuit Breaker Replacement', price: 'From AED 150', notes: 'Includes genuine Hager / Schneider breaker' },
      { item: 'Main RCD / Earth Leakage Breaker Replacement', price: 'From AED 250', notes: 'High-sensitivity life-safety breaker with test certificate' },
      { item: 'Standard Ceiling Light / Spotlight Replacement', price: 'From AED 80 / point', notes: 'LED energy-saving warm white / cool white' },
      { item: 'Heavy Chandelier Installation (Up to 4m height)', price: 'From AED 350', notes: 'Includes heavy-duty toggle anchor bolting' },
      { item: 'Dedicated 32A Appliance Circuit Cable Run', price: 'From AED 450', notes: 'For electric oven, dryer, or high-power AC' }
    ],
    faqs: [
      {
        question: 'Why does my main circuit breaker keep tripping in my Dubai home?',
        answer: 'Circuit breakers trip when there is an earth leakage fault, a short circuit, or an overloaded circuit. In Dubai homes, failing water heater elements, outdoor lights exposed to humidity, or power-hungry kitchen appliances frequently cause tripping. Our electrician pinpoints the exact circuit in minutes.'
      },
      {
        question: 'Are your electrical services in Dubai compliant with DEWA regulations?',
        answer: 'Yes. All electrical installations, distribution board modifications, and wiring carried out by Fix Dubai adhere to DEWA (Dubai Electricity and Water Authority) technical and life-safety standards.'
      },
      {
        question: 'What should I do if I detect a burning plastic smell near my electrical box?',
        answer: 'Turn off your main circuit breaker switch immediately and do not touch the distribution board! A burning plastic smell signals that an electrical terminal is loose and arcing, creating intense heat that can spark a fire. Contact our emergency electrical hotline immediately.'
      },
      {
        question: 'Can you install smart light switches if my Dubai home has no neutral wire in the switch box?',
        answer: 'Yes. We can pull an auxiliary neutral line through existing conduits or install certified no-neutral smart switch modules with bypass capacitors that maintain 100% flicker-free lighting control.'
      },
      {
        question: 'Can you hang heavy chandeliers in high-ceiling Dubai villas?',
        answer: 'Yes. We regularly assemble, lift, and mount multi-tier crystal and modern ring chandeliers in villas across Arabian Ranches, Dubai Hills, and Palm Jumeirah using safety-certified scaffolding and heavy-duty ceiling anchors.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
    relatedSlugs: ['/home-maintenance', '/ac-repairing-Installation', '/plumbing-works']
  },

  '/home-maintenance': {
    slug: '/home-maintenance',
    aliases: ['/annual-maintenance-contract', '/amc', '/general-maintenance', '/handyman'],
    serviceId: 'home-maintenance',
    title: 'Home Maintenance Services in Dubai',
    metaTitle: 'Home Maintenance Services in Dubai | Fix Dubai',
    metaDescription: 'Complete home maintenance services in Dubai for villas, apartments and properties. Fix Dubai provides reliable maintenance and repair solutions.',
    keywords: [
      'home maintenance Dubai',
      'home maintenance services Dubai',
      'villa maintenance Dubai',
      'apartment maintenance Dubai',
      'property maintenance Dubai'
    ],
    h1: 'Home Maintenance Services in Dubai',
    h1Subtitle: 'Complete property maintenance, villa AMC packages, quarterly preventive servicing, and skilled on-demand handyman solutions across Dubai, UAE.',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional home maintenance technician performing routine villa and property inspection in Dubai',
    category: 'Proactive Property Maintenance & AMC',
    priceStartingAED: 'From AED 180 / Visit',
    responseTime: '45-Min Emergency / Scheduled Timeslots',
    warranty: 'Comprehensive Service & Parts Guarantee',
    emergencyAvailable: true,
    overview: [
      'Maintaining a property in Dubai requires proactive care to withstand intense desert heat, fine sand accumulation, and high seasonal humidity. Fix Dubai provides complete home maintenance services in Dubai for villas, apartments, holiday homes, and commercial properties.',
      'Our solutions combine scheduled preventive maintenance visits with 24/7 emergency repair support. We integrate all essential home systems under one professional team—coordinating AC servicing, plumbing maintenance, electrical safety audits, carpentry repairs, and painting touch-ups without the hassle of dealing with multiple contractors.',
      'Whether you are an owner-occupier seeking peace of mind through an Annual Maintenance Contract (AMC), a landlord preparing for tenancy handover, or an Airbnb holiday home operator in Dubai Marina or Downtown, Fix Dubai ensures your property operates smoothly year-round.'
    ],
    internalLinks: [
      {
        prefixText: 'Our home maintenance plans seamlessly connect with our specialized divisions including',
        route: '/ac-repairing-Installation',
        anchorText: 'AC Repair & Installation Services in Dubai',
        suffixText: ', ensuring ice-cold airflow during hot summer months.'
      },
      {
        prefixText: 'We also coordinate with our dedicated teams for',
        route: '/plumbing-works',
        anchorText: 'Plumbing Services in Dubai',
        suffixText: 'and certified electrical safety inspections.'
      },
      {
        prefixText: 'For structural renewals, flooring, or full room makeovers, explore our',
        route: '/home-repair-renovation',
        anchorText: 'Home Repair & Renovation Services in Dubai',
        suffixText: 'with turnkey project management.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Villa & Apartment Annual Maintenance Contracts (AMC)',
        description: 'Comprehensive annual maintenance plans featuring unlimited emergency callouts, scheduled quarterly deep servicing, and priority response.'
      },
      {
        title: 'Quarterly Planned Preventive Maintenance (PPM)',
        description: 'Systematic inspection of all AC filters, coil cleaning, refrigerant levels, water heater valves, booster pumps, and electrical distribution boards.'
      },
      {
        title: 'On-Demand Handyman Services',
        description: 'Skilled drilling, heavy TV wall mounting with cable concealment, curtain tracks, roller blinds, mirror hanging, and shelf installations.'
      },
      {
        title: 'Holiday Home & Airbnb Turnaround Maintenance',
        description: 'Rapid-response maintenance for short-term rental operators across Dubai Marina, Downtown, and Palm Jumeirah to protect 5-star guest reviews.'
      },
      {
        title: 'Pre-Tenancy & Pre-Purchase Property Snagging',
        description: 'Thorough inspection of AC cooling performance, hidden water leaks, electrical circuitry, and door/window mechanics before moving in or buying.'
      },
      {
        title: 'Weatherproofing & Balcony Seal Maintenance',
        description: 'Replacing worn rubber seals on sliding balcony doors and windows to keep desert dust, humidity, and external noise out of your home.'
      }
    ],
    whyChooseUs: [
      {
        title: 'Single Point of Contact for All Trades',
        description: 'One call or WhatsApp message coordinates HVAC, plumbing, electrical, carpentry, and painting professionals.'
      },
      {
        title: '24/7 Priority Emergency Support',
        description: 'Guaranteed 45-minute response times for critical home emergencies like complete cooling failure or burst pipes.'
      },
      {
        title: 'Photo Documentation Reports',
        description: 'Receive clear before-and-after photo records and technician notes directly on WhatsApp after every maintenance visit.'
      },
      {
        title: 'Trusted Across Leading Dubai Communities',
        description: 'Serving hundreds of families in Arabian Ranches, Dubai Hills, JVC, Springs, Meadows, and Palm Jumeirah.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Free Property Survey & Consultation',
        description: 'We evaluate your villa or apartment, check equipment counts, and discuss your maintenance requirements.'
      },
      {
        step: 2,
        title: 'Tailored AMC or On-Demand Booking',
        description: 'Select an annual maintenance contract or book a one-time handyman appointment with clear, transparent AED pricing.'
      },
      {
        step: 3,
        title: 'Comprehensive Initial Servicing Visit',
        description: 'Our team performs deep AC chemical washing, plumbing safety audits, electrical checkups, and fixes existing snags.'
      },
      {
        step: 4,
        title: 'Year-Round Priority Peace of Mind',
        description: 'Our emergency dispatch desk is on standby 24/7 whenever an unexpected leak, tripping breaker, or AC issue arises.'
      }
    ],
    pricingTable: [
      { item: 'On-Demand Handyman Service (First 2 Hours)', price: 'AED 180', notes: 'Includes drilling, TV mounting, curtain hanging, shelf fixing' },
      { item: 'Full Apartment Annual Maintenance Contract (AMC)', price: 'From AED 1,400 / Year', notes: '3 scheduled PPM visits + unlimited emergency callouts' },
      { item: 'Villa Annual Maintenance Contract (AMC - 3 to 5 Bed)', price: 'From AED 2,800 / Year', notes: '4 comprehensive quarterly visits + 24/7 priority emergency' },
      { item: 'Complete Property Snagging & Health Check Audit', price: 'AED 450', notes: 'Thermal imaging, moisture check, AC cooling audit with report' },
      { item: 'Window & Sliding Door Rubber Weatherproofing', price: 'From AED 200', notes: 'Stops fine dust ingress, AC air loss & howling wind noise' }
    ],
    faqs: [
      {
        question: 'What is included in a Fix Dubai annual home maintenance contract (AMC)?',
        answer: 'Our AMC packages include 3 to 4 scheduled quarterly preventive maintenance visits covering complete AC chemical cleaning, plumbing inspections, water heater safety checks, and electrical panel balancing, plus unlimited 24/7 emergency callouts with prioritized response times.'
      },
      {
        question: 'Can I book a handyman for small household tasks in Dubai?',
        answer: 'Yes! Fix Dubai provides on-demand handyman services for tasks such as hanging mirrors, mounting flat-screen TVs, assembling furniture, fixing curtain tracks, and repairing sticking doors.'
      },
      {
        question: 'Do you offer property maintenance services for Airbnb and short-term rentals in Dubai?',
        answer: 'Yes, we provide rapid-turnaround maintenance for holiday home operators in Downtown Dubai, Dubai Marina, JBR, and Palm Jumeirah, resolving guest issues such as locked safes, shower blockages, or AC cooling snags.'
      },
      {
        question: 'How do you handle gate passes and community access in Dubai?',
        answer: 'Fix Dubai holds valid commercial licensing and company credentials to obtain required work permits and gate passes for gated communities including Arabian Ranches, Emirates Living, Dubai Hills Estate, and Palm Jumeirah.'
      },
      {
        question: 'What payment options are available for home maintenance contracts?',
        answer: 'We accept bank transfers, credit/debit cards, and cash upon satisfactory completion of work. For Annual Maintenance Contracts, convenient installment schedules are available.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
    relatedSlugs: ['/ac-repairing-Installation', '/plumbing-works', '/electrical-work']
  },

  '/tiling-flooring': {
    slug: '/tiling-flooring',
    aliases: ['/tiling-flooring', '/tiling', '/flooring'],
    serviceId: 'tiling-flooring',
    title: 'Tiling & Flooring Services in Dubai',
    metaTitle: 'Tiling & Flooring Services in Dubai | Fix Dubai',
    metaDescription: 'Professional tiling and flooring services in Dubai. Fix Dubai provides tile installation, floor repairs and quality flooring solutions.',
    keywords: [
      'tiling services Dubai',
      'flooring services Dubai',
      'tile installation Dubai',
      'floor installation Dubai',
      'bathroom tiling Dubai'
    ],
    h1: 'Tiling & Flooring Services in Dubai',
    h1Subtitle: 'Professional tile installation, floor repairs, large-format porcelain, bathroom waterproofing, marble polishing, and quality flooring solutions across Dubai, UAE.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Skilled craftsman installing large format porcelain floor tiles and bathroom tiling in Dubai',
    category: 'Tiling & Flooring Solutions',
    priceStartingAED: 'From AED 45 / Sqm',
    responseTime: 'Next-Day Site Inspection',
    warranty: '2-Year Tile Adhesion & Leveling Warranty',
    emergencyAvailable: false,
    overview: [
      'Flooring forms the aesthetic foundation and durability benchmark of any residential or commercial interior. Poorly fixed tiles with lippage, hollow sounds underfoot, or crumbling grout lines detract from property value and can cause moisture penetration to underlying slabs. Fix Dubai delivers precision tiling and flooring services in Dubai for villas, apartments, and commercial venues.',
      'Our master tile setters have extensive experience installing large-format porcelain slabs, Italian ceramic tiles, natural marble, outdoor anti-slip patio pavers, and modern click-lock SPC waterproof parquet flooring. We use laser-guided alignment systems, mechanical leveling clips, and polymer-modified flexible adhesives (Mapei, Weber) suited to Dubai high temperatures and building expansion.',
      'From complete bathroom tiling with certified waterproofing membranes to living room marble diamond polishing, kitchen splashbacks, and balcony floor replacements, Fix Dubai ensures flat, elegant, and long-lasting surfaces.'
    ],
    internalLinks: [
      {
        prefixText: 'If your flooring project is part of a larger property makeover, explore our',
        route: '/home-repair-renovation',
        anchorText: 'Home Repair & Renovation Services in Dubai',
        suffixText: 'for complete turnkey interior transformations.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Large-Format Porcelain & Ceramic Tile Laying',
        description: 'Laser-guided installation of 60x120cm and 120x240cm porcelain slabs with zero lippage and narrow 1.5mm uniform grout lines.'
      },
      {
        title: 'Bathroom Waterproofing & Wall-to-Floor Tiling',
        description: 'Application of two-coat elastomeric waterproof membranes with 48-hour flood testing before laying bathroom and shower tiles.'
      },
      {
        title: 'Natural Marble Laying, Honing & Diamond Polishing',
        description: 'Restoring dull or scratched marble to a high-gloss mirror finish using multi-stage diamond resin pads and crystallization compounds.'
      },
      {
        title: 'Waterproof SPC Vinyl Parquet Flooring',
        description: 'Stone-plastic composite (SPC) wood-look flooring with acoustic underlay that is 100% waterproof, scratch-resistant, and quick to install.'
      },
      {
        title: 'Balcony & Outdoor Patio Anti-Slip Tiling',
        description: 'Weatherproof exterior tile laying with correct slope grading toward scuppers to prevent standing water and thermal buckling.'
      },
      {
        title: 'Hollow & Cracked Tile Repair without Demolition',
        description: 'Surgical replacement of broken tiles and low-viscosity epoxy resin injection to fix hollow drumming sounds without breaking adjacent tiles.'
      }
    ],
    whyChooseUs: [
      {
        title: 'Zero-Lippage Mechanical Leveling',
        description: 'Every tile is secured with precision leveling wedges until the adhesive cures, ensuring an entirely smooth, flat plane.'
      },
      {
        title: 'Certified Waterproofing Testing',
        description: 'We perform 48-hour standing water tests on bathroom membranes before tiling to eliminate any risk of leak to lower floors.'
      },
      {
        title: 'Dust-Suppressed Diamond Cutting',
        description: 'We use wet tile saws and dust collection units to keep fine ceramic dust contained away from your living spaces.'
      },
      {
        title: 'Premium Polymer Adhesives',
        description: 'We exclusively use flexible Mapei and Weber tile adhesives engineered for thermal expansion and superior bond strength.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Subfloor Laser Check & Measurement',
        description: 'We inspect substrate levels, moisture content, and calculate tile layout patterns to avoid narrow border cuts.'
      },
      {
        step: 2,
        title: 'Subfloor Prep & Waterproofing Membrane',
        description: 'Existing surfaces are leveled or scarified, and liquid elastomeric waterproofing is applied in all wet areas.'
      },
      {
        step: 3,
        title: 'Precision Laying & Leveling Clips',
        description: 'Adhesive is combed, tiles are back-buttered, and leveled along 360-degree laser reference lines.'
      },
      {
        step: 4,
        title: 'Stain-Resistant Grouting & Buffing',
        description: 'Joints are packed with anti-fungal epoxy or polymer grout, thoroughly cleaned, and buffed to a spotless finish.'
      }
    ],
    pricingTable: [
      { item: 'Floor Tile Installation (Standard Sizes)', price: 'From AED 45 / Sqm', notes: 'Includes laser leveling, spacing, and standard grouting' },
      { item: 'Large-Format Slab Tile Fixing (60x120cm+)', price: 'From AED 75 / Sqm', notes: 'Dual suction-cup handling with zero-lippage clips' },
      { item: 'Bathroom Wet-Area Waterproofing Membrane', price: 'AED 35 / Sqm', notes: 'Two coats of flexible elastomeric liquid membrane + mesh' },
      { item: 'SPC Luxury Click-Lock Parquet Installation', price: 'From AED 30 / Sqm', notes: 'Includes acoustic underlay laying & transition trims' },
      { item: 'Bathroom Tile Deep Regrouting (Anti-Mold Epoxy)', price: 'From AED 450 / bathroom', notes: 'Old stained grout raked out and replaced with epoxy grout' },
      { item: 'Natural Marble Diamond Grinding & Mirror Polish', price: 'From AED 35 / Sqm', notes: 'Restores high gloss shine and removes surface scratches' }
    ],
    faqs: [
      {
        question: 'Can you install new tiles directly over old tiles in a Dubai apartment?',
        answer: 'Yes! Provided existing tiles are structurally sound, well-bonded, and free from hollow spots, we apply a high-grip bonding primer and install modern ultra-slim porcelain tiles or click-lock SPC parquet directly on top, saving demolition noise, dust, and time.'
      },
      {
        question: 'Why do balcony and patio tiles crack or lift in Dubai?',
        answer: 'Balconies in Dubai endure direct sun with surface temperatures exceeding 60°C. If the original installer neglected perimeter expansion joints or used rigid indoor adhesive, thermal expansion forces tiles to tent and crack. We install flexible exterior adhesives with proper expansion joints.'
      },
      {
        question: 'What is the most durable flooring for Dubai homes with pets or children?',
        answer: 'SPC (Stone Plastic Composite) luxury vinyl flooring is ideal. It provides the warm appearance of natural wood parquet but is 100% waterproof, highly scratch-resistant against pets, and easy to clean.'
      },
      {
        question: 'How do you waterproof bathroom floors and shower areas before tiling?',
        answer: 'We apply a continuous two-coat flexible elastomeric liquid membrane reinforced with fiberglass mesh at wall-floor corners, followed by a mandatory 48-hour flood test before setting tiles.'
      },
      {
        question: 'How long after tiling before the new floor can be walked on?',
        answer: 'With our rapid-setting flexible adhesives, light foot traffic is permitted after 16 to 24 hours. Full furniture placement is recommended after 48 hours following final grouting.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
    relatedSlugs: ['/home-repair-renovation', '/painting-ceiling', '/plumbing-works']
  },

  '/carpentry-works': {
    slug: '/carpentry-works',
    aliases: ['/carpentry', '/carpenter', '/woodwork'],
    serviceId: 'carpentry',
    title: 'Carpentry Services in Dubai | Carpentry Works',
    metaTitle: 'Carpentry Services in Dubai | Carpentry Works | Fix Dubai',
    metaDescription: 'Professional carpentry services in Dubai for home repairs, installations and custom woodwork. Reliable carpentry solutions by Fix Dubai.',
    keywords: [
      'carpenter Dubai',
      'carpentry services Dubai',
      'carpentry works Dubai',
      'custom carpentry Dubai',
      'furniture repair Dubai'
    ],
    h1: 'Carpentry Services in Dubai',
    h1Subtitle: 'Professional carpentry services, door repair and shaving, custom kitchen cabinets, built-in wardrobes, furniture repairs, and precision woodwork in Dubai, UAE.',
    heroImage: carpentryImg,
    imageAlt: 'Expert carpenter repairing wooden doors, custom cabinetry and wardrobes in Dubai',
    category: 'Custom Woodwork & Carpentry Repairs',
    priceStartingAED: 'AED 150',
    responseTime: 'Same-Day Service Available',
    warranty: '100% Fit & Finish Workmanship Guarantee',
    emergencyAvailable: false,
    overview: [
      'Wooden doors, kitchen cabinetry, and custom joinery in Dubai frequently experience environmental stress. Intense summer humidity and indoor air conditioning cause timber and composite doors to swell, jam against frames, and put strain on hinges and locks. Fix Dubai provides professional carpentry services in Dubai for homes, villas, and commercial spaces.',
      'Our skilled carpenters handle door shaving, realignment, smart digital lock installation, kitchen cabinet repairs, soft-close hinge upgrades, built-in wardrobes, and custom woodwork. We work with solid wood, MDF, and quality laminates to deliver durable, aesthetically pleasing results.',
      'We also restore outdoor timber structures—including sanding and protective marine staining for garden pergolas, wooden deck refurbishments, and precision flat-pack furniture assembly from leading retailers like IKEA.'
    ],
    internalLinks: [
      {
        prefixText: 'For ongoing routine maintenance across all household woodwork and fixtures, explore our',
        route: '/home-maintenance',
        anchorText: 'Home Maintenance Services in Dubai',
        suffixText: 'with on-demand handyman assistance.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Door Shaving, Realignment & Hinge Adjustment',
        description: 'Precision trimming of sticking or dragging wooden doors, realignment of warped frames, and installation of heavy-duty ball-bearing hinges.'
      },
      {
        title: 'Smart Digital Lock & Mortise Lock Installation',
        description: 'Surgical mortising and clean installation of smart keypad, fingerprint, and Bluetooth door locks (Yale, August, Samsung, Aqara) on wooden doors.'
      },
      {
        title: 'Kitchen Cabinet Repair & Soft-Close Upgrades',
        description: 'Fixing sagging cupboard doors, replacing broken hinges with hydraulic soft-close mechanisms, and repairing swollen sink base cabinets.'
      },
      {
        title: 'Custom Built-In Wardrobes & Closet Shelving',
        description: 'Bespoke bedroom wardrobes designed to ceiling height with internal LED lighting, organizers, velvet jewelry drawers, and sliding doors.'
      },
      {
        title: 'Outdoor Wooden Pergola & Deck Restoration',
        description: 'Sanding, structural reinforcement, and application of marine-grade UV-resistant wood stains to protect outdoor woodwork from Dubai sunlight.'
      },
      {
        title: 'Flat-Pack Furniture Assembly (IKEA & More)',
        description: 'Rapid, meticulous assembly of flat-pack beds, wardrobes (PAX), modular bookcases, and desks with wall anchoring for child safety.'
      }
    ],
    whyChooseUs: [
      {
        title: 'Master Craftsmen with Extensive Experience',
        description: 'Skilled joiners who understand wood grain, moisture tolerances, and proper structural fastenings for durable furniture.'
      },
      {
        title: 'Heavy-Duty German Hardware',
        description: 'We install Blum, Hettich, and Hafele hardware that ensures smooth drawer gliding and silent cabinet door closing.'
      },
      {
        title: 'Clean, Dust-Controlled Work',
        description: 'We perform planer shaving and cutting with attached vacuum collection or in designated exterior areas to keep your home tidy.'
      },
      {
        title: 'Child-Safe Wall Anchoring Included',
        description: 'All tall dressers and bookcases assembled by our team include complimentary anti-tip wall brackets for safety.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'On-Site Inspection & Measurement',
        description: 'We inspect door gaps, hinge wear, or space dimensions using digital calipers and precision measuring tools.'
      },
      {
        step: 2,
        title: 'Hardware Selection & Clear Quote',
        description: 'We recommend suitable hardware (soft-close hinges, heavy-duty slides, or smart locks) and provide an upfront quote.'
      },
      {
        step: 3,
        title: 'Precision Carpentry Work',
        description: 'Doors are planed with micro-precision, pilot holes are drilled to prevent splitting, and fittings are securely anchored.'
      },
      {
        step: 4,
        title: 'Testing & Quality Finish',
        description: 'We test latch engagement, confirm zero rubbing against the floor, apply edge stain touchups, and clean up the work zone.'
      }
    ],
    pricingTable: [
      { item: 'Standard Door Realignment & Hinge Adjustment', price: 'AED 150', notes: 'Stops sticking, dragging, and frame friction' },
      { item: 'Door Shaving / Planing for Floor Clearance', price: 'From AED 180 / door', notes: 'Clean bottom cut with edge sealing to prevent humidity ingress' },
      { item: 'Smart Digital Lock Installation on Wooden Door', price: 'From AED 220', notes: 'Precision mortising, strike plate alignment & programming support' },
      { item: 'Kitchen Soft-Close Hinge Replacement (Set of 6)', price: 'From AED 200', notes: 'Includes premium hydraulic German hinges' },
      { item: 'IKEA / Flat-Pack Wardrobe Assembly (e.g. PAX 2m)', price: 'From AED 280', notes: 'Includes internal drawers, rail alignment & wall anchoring' },
      { item: 'Villa Garden Pergola Sanding & Protective Staining', price: 'From AED 950', notes: 'Marine-grade UV and moisture defense varnish' }
    ],
    faqs: [
      {
        question: 'Why do wooden doors in Dubai get stuck during humid summer months?',
        answer: 'During Dubai summer, humidity levels rise significantly. Unsealed solid wood and MDF door edges absorb ambient moisture, expanding by several millimeters and jamming against the frame. Fix Dubai carpenters shave the tight edge and seal the bare wood to prevent future expansion.'
      },
      {
        question: 'Can you install a smart digital lock on my wooden front door in Dubai?',
        answer: 'Yes. We use specialized wooden mortising router templates to cut precise pockets for the electronic lock body and strike plate, ensuring a factory-flush fit without damaging the door finish.'
      },
      {
        question: 'Can you fix kitchen cabinet doors where screws ripped out of particleboard?',
        answer: 'Yes. In moisture-prone sink areas, screws often pull out of swollen composite wood. We reinforce the cabinet frame with hardwood inserts or heavy-duty steel hinge repair plates that provide a bond stronger than the original factory fitting.'
      },
      {
        question: 'Do you build custom fitted wardrobes and garage storage shelving in Dubai?',
        answer: 'Yes. We fabricate and install moisture-resistant laminated MDF and solid timber shelving tailored to fit bedroom alcoves, laundry rooms, and under-stair storage spaces.'
      },
      {
        question: 'Can you assemble flat-pack furniture purchased from IKEA, Home Centre, or Pottery Barn?',
        answer: 'Yes. Our carpenters assemble all brands of flat-pack furniture daily. We ensure every drawer is squared, doors are aligned, and tall units are safely anchored to the wall.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
    relatedSlugs: ['/home-maintenance', '/home-repair-renovation', '/painting-ceiling']
  },

  '/home-repair-renovation': {
    slug: '/home-repair-renovation',
    aliases: ['/renovation', '/home-renovation', '/villa-renovation'],
    serviceId: 'renovation',
    title: 'Home Repair & Renovation Services in Dubai',
    metaTitle: 'Home Repair & Renovation Services in Dubai | Fix Dubai',
    metaDescription: 'Professional home repair and renovation services in Dubai. Fix Dubai handles property repairs, improvements and renovation projects.',
    keywords: [
      'home renovation Dubai',
      'home repair Dubai',
      'villa renovation Dubai',
      'property renovation Dubai',
      'home improvement Dubai'
    ],
    h1: 'Home Repair & Renovation Services in Dubai',
    h1Subtitle: 'Turnkey villa renovation, apartment remodeling, kitchen and bathroom makeovers, structural repairs, and property improvements across Dubai, UAE.',
    heroImage: renovationImg,
    imageAlt: 'Home renovation contractor remodeling villa interior and structural improvements in Dubai',
    category: 'Turnkey Remodeling & Property Renewal',
    priceStartingAED: 'Custom Project Quote (Free Survey)',
    responseTime: 'Same-Week Detailed Quotation',
    warranty: '5-Year Structural & Waterproofing Warranty',
    emergencyAvailable: false,
    overview: [
      'Whether you have purchased an older villa in established communities like The Springs, Meadows, Arabian Ranches, or Jumeirah, or wish to elevate your apartment to contemporary luxury standards, home renovation is the most effective way to enhance comfort and property resale value. Fix Dubai provides professional home repair and renovation services in Dubai.',
      'We manage the complete renovation lifecycle: architectural space planning, master developer NOC approvals (Emaar, Nakheel, Dubai Holding) and Dubai Municipality compliance, demolition, MEP (Mechanical, Electrical, Plumbing) engineering, and turnkey interior finishing.',
      'Our multidisciplinary teams handle kitchen remodeling, spa-like bathroom transformations, open-plan living layout expansions, and exterior villa upgrades with dedicated site supervision, strict dust containment, and milestone-based project management.'
    ],
    internalLinks: [
      {
        prefixText: 'Our full-scale renovation projects integrate our specialized divisions, including',
        route: '/painting-ceiling',
        anchorText: 'Painting & Ceiling Services in Dubai',
        suffixText: 'for pristine wall finishes and gypsum LED bulkheads.'
      },
      {
        prefixText: 'We also incorporate precision flooring craftsmanship from our',
        route: '/tiling-flooring',
        anchorText: 'Tiling & Flooring Services in Dubai',
        suffixText: 'with large-format porcelain and waterproof membranes.'
      },
      {
        prefixText: 'For custom walk-in closets, kitchen joinery, and certified electrical wiring, we feature our',
        route: '/carpentry-works',
        anchorText: 'Carpentry Services in Dubai',
        suffixText: 'and electrical engineering teams.'
      }
    ],
    detailedServicesList: [
      {
        title: 'Turnkey Full Villa & Apartment Renovation',
        description: 'Knocking down non-load-bearing partitions, opening living zones, reconfiguring room layouts, and modernizing interior aesthetics.'
      },
      {
        title: 'Luxury Kitchen Remodeling & Island Construction',
        description: 'Custom lacquer and veneer cabinetry, quartz and porcelain heat-resistant countertops, concealed pantries, and luxury appliance fitting.'
      },
      {
        title: 'Spa-Inspired Bathroom Transformations',
        description: 'Walk-in frameless glass showers, recessed wall niches, floating double vanities, linear drainage, and floor-to-ceiling porcelain tiling.'
      },
      {
        title: 'Developer NOC Approvals & Permitting Assistance',
        description: 'Preparation of structural schematics, MEP single-line diagrams, and submission assistance to Emaar, Nakheel, and Dubai Municipality.'
      },
      {
        title: 'Structural Crack Remediation & Damp Proofing',
        description: 'Structural crack stitching, high-pressure polyurethane foam injection, and damp-proof courses to resolve foundational moisture issues.'
      },
      {
        title: 'Villa Patio, Pergola & Outdoor Living Makeovers',
        description: 'Creating outdoor entertainment spaces with porcelain tiled terraces, aluminum pergolas, ambient lighting, and boundary wall finishes.'
      }
    ],
    whyChooseUs: [
      {
        title: 'Single Turnkey Contractor',
        description: 'Demolition, plumbing, electrical, tiling, false ceilings, and painting are managed by our in-house teams with zero subcontractor delays.'
      },
      {
        title: 'Transparent Fixed-Price Milestones',
        description: 'Clear scope of work with guaranteed fixed pricing. Payments are tied to inspected project completion milestones.'
      },
      {
        title: 'On-Time Completion Commitment',
        description: 'We respect your moving schedule with a written completion timeline and dedicated daily on-site project management.'
      },
      {
        title: 'Comprehensive 5-Year Warranty',
        description: '5-year warranty on all structural alterations and waterproofing membranes, alongside a 1-year general workmanship guarantee.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'On-Site Design & Feasibility Survey',
        description: 'We evaluate your property, discuss design preferences, inspect MEP conduits, and take 3D laser room measurements.'
      },
      {
        step: 2,
        title: 'Detailed BOQ & Permit Documentation',
        description: 'You receive an itemized cost breakdown for materials and labor. We assist with all community NOC and permit paperwork.'
      },
      {
        step: 3,
        title: 'Meticulous Execution & Daily Updates',
        description: 'Our tradesmen carry out demolition, MEP rough-ins, waterproofing, tiling, and joinery with regular WhatsApp progress updates.'
      },
      {
        step: 4,
        title: 'Snagging, Cleaning & Official Handover',
        description: 'We conduct deep site cleaning, run through a 100-point snag checklist with you, and deliver your completed project.'
      }
    ],
    pricingTable: [
      { item: 'Complete Luxury Bathroom Makeover (Turnkey)', price: 'From AED 14,000', notes: 'Includes demolition, waterproofing, luxury tiling, sanitary ware & plumbing' },
      { item: 'Full Kitchen Remodel (Custom Cabinetry + Quartz)', price: 'From AED 18,000', notes: 'Turnkey carpentry, quartz stone counters, plumbing & lighting' },
      { item: 'Living Room Space Opening (Wall Demolition + Beam)', price: 'From AED 4,500', notes: 'Includes engineer review, structural demolition & ceiling patching' },
      { item: 'Full 3-Bedroom Villa Turnkey Renovation', price: 'Custom Quote', notes: 'Comprehensive interior renewal with dedicated project manager' },
      { item: 'Balcony / Terrace Outdoor Living Makeover', price: 'From AED 6,500', notes: 'Porcelain anti-slip tiling, glass balustrade & architectural lights' }
    ],
    faqs: [
      {
        question: 'Do I need developer NOC approvals and permits for home renovation in Dubai?',
        answer: 'Yes. In Dubai, modifications involving tile removal, partition wall demolition, plumbing alterations, or electrical rewiring require an NOC (No Objection Certificate) from your master developer (such as Emaar, Nakheel, or Dubai Holding) and approval from Dubai Municipality. Fix Dubai assists with all required drawings and documentation.'
      },
      {
        question: 'How long does a complete kitchen or bathroom renovation take in Dubai?',
        answer: 'A complete bathroom remodel typically takes 10 to 14 working days, including 48-hour waterproofing flood testing and tile curing. A custom kitchen renovation usually takes 2 to 3 weeks depending on bespoke cabinetry fabrication and countertop fabrication.'
      },
      {
        question: 'Can renovation work proceed while my family is living in the villa?',
        answer: 'For localized projects like a single bathroom or kitchen remodel, yes. We install sealed floor-to-ceiling zippered dust barriers and exhaust ventilation to keep dust and noise strictly isolated from your living spaces.'
      },
      {
        question: 'What warranty do you provide on home renovation and remodeling work?',
        answer: 'We provide a 5-year warranty on all structural alterations and waterproofing membrane installations, along with a 1-year warranty covering joinery, plumbing, and electrical finishes.'
      },
      {
        question: 'Do you provide fixed-price quotes and turnkey project management in Dubai?',
        answer: 'Yes. Fix Dubai provides transparent, itemized Bills of Quantities (BOQ) with fixed milestone pricing, so you know exactly what is included with no unexpected hidden costs.'
      }
    ],
    coverageAreas: DUBAI_AREAS,
    relatedSlugs: ['/painting-ceiling', '/tiling-flooring', '/carpentry-works', '/electrical-work']
  }
};

/** Helper to find a service page by path, case-insensitively, handling aliases */
export function getServicePageByRoute(pathname: string): ServicePageData | null {
  const normalized = pathname.trim().replace(/\/+$/, '') || '/';
  const lower = normalized.toLowerCase();

  for (const key of Object.keys(SERVICE_PAGES)) {
    const page = SERVICE_PAGES[key];
    if (page.slug.toLowerCase() === lower) {
      return page;
    }
    for (const alias of page.aliases) {
      if (alias.toLowerCase() === lower) {
        return page;
      }
    }
  }

  return null;
}
