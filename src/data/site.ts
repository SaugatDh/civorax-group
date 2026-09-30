/**
 * Single source of truth for brand, contact (NAP) and entity data.
 * Everything here feeds visible content AND JSON-LD, so keep it identical to the
 * Google Business Profile and every directory listing — consistency is a ranking signal.
 */

export const SITE = {
  name: 'Civorax Group',
  legalName: 'Civorax Group',
  alternateNames: [
    'CivoraX Group',
    'Civorax Group',
    'Civorax Groups',
    'CivoraX Groups',
    'Civora',
    'Civora Group',
    'Civorax',
    'CivoraX',
    'civoraxgroup',
    'civoraxgroups',
    'civorax',
    'CivoraxTech',
    'Civorax Tech',
    'CivoraX Tech',
    'civoraxtech',
    'CivoraxInfra',
    'Civorax Infra',
    'CivoraX Infra',
    'civoraxinfra',
    'Civorax IT',
    'Civorax Construction',
    'CivoraX IT Services',
    'CivoraX Infrastructure',
  ],
  url: 'https://civoraxgroup.com',
  tagline: 'The architecture of tomorrow',
  /** Brand name story: Civ (civilization) + Aura (energy) + X (future) */
  nameMeaning: [
    { part: 'Civ', word: 'Civilization', text: 'The people, communities and places we serve — everything humanity has built so far.' },
    { part: 'Aura', word: 'Energy & feeling', text: 'The spirit, ideas and feeling we bring to everything we create, through technology and infrastructure.' },
    { part: 'X', word: 'Future', text: 'Where we take it — tomorrow, the next generation, and what has not been built yet.' },
  ],
  description:
    'Civorax Group is a premier technology and infrastructure company in Nepal, managing CivoraX Tech (IT services, custom software development, web & mobile apps, cloud & AI) and CivoraX Infra (construction and design, infrastructure company, surveying & DPR, property valuation, 3D landscaping), headquartered in Itahari, Koshi Province.',
  foundingYear: '2019',
  logo: '/civorax-logo.png',
  locale: 'en_US',
  language: 'en',
  // TODO: confirm official group email; currently the one used on the Stitch design.
  email: 'info@civoraxinfra.com',
  phone: '+977-980-5309473',
  phoneDisplay: '+977 980-5309473',
  phoneHref: 'tel:+9779805309473',
  whatsapp: 'https://wa.me/9779805309473',
  address: {
    street: 'Itahari-04, Aaitabare, NTC Road',
    city: 'Itahari',
    district: 'Sunsari',
    region: 'Koshi Province',
    postalCode: '56705',
    country: 'NP',
    countryName: 'Nepal',
  },
  // TODO: replace with the exact map pin of the office.
  geo: { lat: 26.6646, lng: 87.2718 },
  hours: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    display: 'Sun – Fri, 9:00 AM – 6:00 PM NPT',
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: ['Nepal', 'Koshi Province', 'Itahari', 'Biratnagar', 'Dharan', 'Kathmandu', 'Pokhara'],
  /**
   * Official profiles → JSON-LD `sameAs`. This is how Google tells "Civorax Group"
   * apart from other brands using the word "CivoraX". Fill in every profile you own.
   */
  sameAs: [
    'https://civoraxtech.com',
    'https://civoraxinfra.com',
    'https://github.com/civorax-tech-pvt-ltd',
    // 'https://www.facebook.com/civoraxgroup',
    // 'https://www.linkedin.com/company/civoraxgroup',
    // 'https://www.instagram.com/civoraxgroup',
    // 'https://www.youtube.com/@civoraxgroup',
  ],
  // Profiles shown on the business cards — paste each URL to show the icon (empty = hidden).
  social: [
    { label: 'Facebook', href: '', icon: 'facebook' },
    { label: 'Instagram', href: '', icon: 'instagram' },
    { label: 'TikTok', href: '', icon: 'tiktok' },
    { label: 'YouTube', href: '', icon: 'youtube' },
    { label: 'Threads', href: '', icon: 'threads' },
    { label: 'LinkedIn', href: '', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/civorax-tech-pvt-ltd', icon: 'github' },
  ],
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Companies', href: '/companies' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

export type Company = {
  slug: 'civorax-tech' | 'civorax-infra';
  name: string;
  legalName: string;
  alternateNames: string[];
  url: string;
  domain: string;
  logo: string;
  short: string;
  /** Company expression of the group slogan "The architecture of tomorrow" */
  tagline: string;
  /** <title> for the company page — keep ≤ 60 characters */
  seoTitle: string;
  /** Motto from the business card */
  motto: string;
  headline: string;
  description: string;
  image: 'pos-dashboard' | 'tower' | 'design-studio';
  imageAlt: string;
  email: string;
  phones: { display: string; e164: string }[];
  services: { title: string; text: string; icon: string }[];
  keywords: string[];
};

export const COMPANIES: Company[] = [
  {
    slug: 'civorax-tech',
    name: 'CivoraX Tech',
    legalName: 'CivoraX Tech Pvt. Ltd.',
    alternateNames: [
      'CivoraX Tech',
      'Civorax Tech',
      'CivoraxTech',
      'civoraxtech',
      'civorax tech',
      'Civorax IT',
      'CivoraX IT',
      'CivoraX IT Services',
      'Civorax Technology',
    ],
    url: 'https://civoraxtech.com',
    domain: 'civoraxtech.com',
    logo: '/civorax-tech-logo.jpg',
    short: 'IT services, custom software development, web & mobile apps, cloud and AI in Nepal.',
    tagline: 'Energising civilization through technology.',
    seoTitle: 'CivoraX Tech | IT Services & Software Development Company Nepal',
    motto: 'Innovate Smarter. Build Digital. Shape Tomorrow.',
    headline: 'Innovate smarter. Build digital. Shape tomorrow.',
    description:
      'CivoraX Tech is a leading software development and IT services company in Nepal. We build websites, mobile apps, custom business software, POS & ERP systems, and deliver cloud and AI automation solutions.',
    image: 'pos-dashboard',
    imageAlt: 'Custom business software built by CivoraX Tech on a laptop and phone',
    email: 'info@civoraxtech.com',
    phones: [
      { display: '970-5890073', e164: '+9779705890073' },
      { display: '980-5309473', e164: '+9779805309473' },
    ],
    services: [
      { icon: 'code', title: 'Web & Mobile Development', text: 'Fast, search-friendly websites and Android / iOS apps built to scale.' },
      { icon: 'layers', title: 'Custom Software Solutions', text: 'POS, ERP and custom software solutions designed around your business workflows.' },
      { icon: 'cloud', title: 'Cloud & Digital Solutions', text: 'Cloud hosting, migration, backups and secure, always-on infrastructure.' },
      { icon: 'cpu', title: 'AI & Automation', text: 'Chatbots, smart workflows and AI automation that streamline operations.' },
      { icon: 'chat', title: 'IT Consulting', text: 'Independent advice on technology stacks, digital strategy and software roadmaps.' },
      { icon: 'spark', title: 'Digital Transformation', text: 'Moving paper and manual workflows to integrated digital platforms.' },
    ],
    keywords: [
      'Civorax Tech',
      'civoraxtech',
      'civorax',
      'civora',
      'IT services Nepal',
      'software development Nepal',
      'custom software development',
      'tech company Nepal',
      'web development Itahari',
      'mobile app development Nepal',
      'IT company Koshi Province',
      'cloud solutions Nepal',
      'AI automation Nepal',
      'POS software Nepal',
      'ERP development Nepal',
    ],
  },
  {
    slug: 'civorax-infra',
    name: 'CivoraX Infra',
    legalName: 'CivoraX Infra Pvt. Ltd.',
    alternateNames: [
      'CivoraX Infra',
      'Civorax Infra',
      'CivoraxInfra',
      'civoraxinfra',
      'civorax infra',
      'Civorax Construction',
      'CivoraX Construction',
      'Civorax Infrastructure',
      'CivoraX Infrastructure',
    ],
    url: 'https://civoraxinfra.com',
    domain: 'civoraxinfra.com',
    logo: '/civorax-infra-logo.jpg',
    short: 'Construction and design, infrastructure company, surveying & DPR, property valuation in Nepal.',
    tagline: 'Energising civilization through infrastructure.',
    seoTitle: 'CivoraX Infra | Construction and Design, Infrastructure Company Nepal',
    motto: 'Build Smarter, Design Better, Live Better.',
    headline: 'Build smarter, design better, live better.',
    description:
      'CivoraX Infra is a premier infrastructure company providing architectural design, structural engineering, building construction, land surveying, DPRs, interior renovation, 3D landscaping, and property valuation across Nepal.',
    image: 'tower',
    imageAlt: 'Modern building designed and built by CivoraX Infra at dusk',
    email: 'info@civoraxinfra.com',
    phones: [
      { display: '025-591006', e164: '+97725591006' },
      { display: '976-8688200', e164: '+9779768688200' },
    ],
    services: [
      { icon: 'building', title: 'Design & Construction', text: 'Architectural and earthquake-resistant structural design, municipality permits and turnkey construction.' },
      { icon: 'map', title: 'Surveying & DPR', text: 'Land and topographic surveys, contour mapping and Detailed Project Reports (DPR).' },
      { icon: 'sofa', title: 'Interior & Renovation', text: 'Modern interior design, fit-out and complete renovation of homes, offices and commercial spaces.' },
      { icon: 'tree', title: '3D Landscaping', text: '3D landscape design and exterior environmental planning for homes, resorts and public spaces.' },
      { icon: 'calc', title: 'BOQ & Property Valuation', text: 'Accurate bills of quantities (BOQ), cost estimation and certified property valuation reports.' },
      { icon: 'grad', title: 'Software Training', text: 'Professional training in AutoCAD, Revit, ETABS and civil engineering software.' },
    ],
    keywords: [
      'Civorax Infra',
      'civoraxinfra',
      'civorax',
      'civora',
      'infrastructure company Nepal',
      'infra company',
      'construction and design Nepal',
      'construction company Itahari',
      'building design Nepal',
      'surveying DPR Nepal',
      'property valuation Itahari',
      '3D landscaping Nepal',
      'architectural design Nepal',
      'structural engineering Koshi',
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  company: Company['slug'];
  location: string;
  category: string;
  year: string;
  image: Company['image'];
  imageAlt: string;
  summary: string;
  body: string[];
  results: { value: string; label: string }[];
};

// TODO: verify every figure below with the project team before launch.
export const PROJECTS: Project[] = [
  {
    slug: 'dharan-commercial-tower',
    title: 'Commercial Tower, Dharan',
    company: 'civorax-infra',
    location: 'Dharan, Sunsari',
    category: 'Commercial building',
    year: '2024',
    image: 'tower',
    imageAlt: 'Six-storey commercial tower in Dharan by CivoraX Infra',
    summary: 'A six-storey multi-tenant commercial building delivered ahead of schedule.',
    body: [
      'CivoraX Infra handled architecture, structural design and construction for a six-storey multi-tenant commercial building in Dharan.',
      'The structure was designed to the Nepal National Building Code for seismic zone requirements, with a flexible floor plate that lets tenants reconfigure offices without structural changes.',
    ],
    results: [
      { value: '6', label: 'Storeys' },
      { value: '45 days', label: 'Ahead of schedule' },
      { value: '0', label: 'Lost-time incidents' },
    ],
  },
  {
    slug: 'kathmandu-retail-cloud-pos',
    title: 'Multi-branch Cloud POS, Kathmandu',
    company: 'civorax-tech',
    location: 'Kathmandu',
    category: 'Retail software',
    year: '2024',
    image: 'pos-dashboard',
    imageAlt: 'Cloud POS dashboard deployed by CivoraX Tech for a Kathmandu retailer',
    summary: 'A cloud POS rollout that supported a retailer’s growth from one to five branches.',
    body: [
      'CivoraX Tech deployed a cloud point-of-sale and inventory platform for a Kathmandu retail chain, replacing disconnected spreadsheets and standalone billing machines.',
      'Stock, pricing and sales now sync across branches in real time, giving owners one live view of the business.',
    ],
    results: [
      { value: '5×', label: 'Branch expansion' },
      { value: '10,000+', label: 'Daily transactions' },
      { value: '1', label: 'Unified inventory' },
    ],
  },
  {
    slug: 'pokhara-smart-residence',
    title: 'Smart Residence, Pokhara',
    company: 'civorax-infra',
    location: 'Pokhara, Kaski',
    category: 'Residential',
    year: '2023',
    image: 'design-studio',
    imageAlt: 'Design team planning the Pokhara smart residence at CivoraX',
    summary: 'An earthquake-resistant family home with integrated energy automation.',
    body: [
      'A joint project between CivoraX Infra and CivoraX Tech: Infra designed and built the house, and Tech integrated sensors and automation for lighting, water heating and energy monitoring.',
      'The owners track consumption from their phone and have cut monthly energy costs substantially.',
    ],
    results: [
      { value: '38%', label: 'Lower energy cost' },
      { value: '2', label: 'Group companies involved' },
      { value: 'IoT', label: 'Home automation' },
    ],
  },
];

export const STATS = [
  { value: '2019', label: 'Founded', text: 'Founded in Itahari, Koshi Province' },
  { value: '30+', label: 'Projects', text: 'Software and building projects delivered' },
  { value: '7', label: 'Provinces', text: 'Provinces where our teams have delivered' },
  { value: '25+', label: 'Professionals', text: 'Architects, engineers and developers' },
] as const;

export const PROCESS = [
  { n: '01', title: 'Discover', text: 'We study the site or the business, define scope, budget and timeline, and check every regulatory requirement up front.' },
  { n: '02', title: 'Design', text: 'Drawings, 3D models and software prototypes you can review and approve before we commit a single rupee to build.' },
  { n: '03', title: 'Deliver', text: 'Construction and software rollout against fixed milestones, with a single accountable team and support after handover.' },
] as const;

export const SERVICES_INDEX = [
  { n: '01', title: 'Design & construction', company: 'civorax-infra' },
  { n: '02', title: 'Surveying, DPR & property valuation', company: 'civorax-infra' },
  { n: '03', title: 'Interior, renovation & 3D landscaping', company: 'civorax-infra' },
  { n: '04', title: 'Web, mobile & custom software', company: 'civorax-tech' },
  { n: '05', title: 'Cloud, AI & automation', company: 'civorax-tech' },
  { n: '06', title: 'IT consulting & digital transformation', company: 'civorax-tech' },
] as const;

export const FAQ = [
  {
    q: 'What is Civorax Group?',
    a: 'Civorax Group is a Nepali holding company headquartered in Itahari, Koshi Province. It owns two companies: CivoraX Tech, which builds websites, apps, custom software, cloud and AI solutions, and CivoraX Infra, which provides design and construction, surveying, interiors and property valuation.',
  },
  {
    q: 'What services does CivoraX Infra provide?',
    a: 'Design & Construction, Surveying & DPR, Interior & Renovation, 3D Landscaping, BOQ & Property Valuation, and Software Training. Contact: 025-591006, 976-8688200, info@civoraxinfra.com.',
  },
  {
    q: 'What services does CivoraX Tech provide?',
    a: 'Web & Mobile Development, Custom Software Solutions, Cloud & Digital Solutions, AI & Automation, IT Consulting and Digital Transformation. Contact: 970-5890073, 980-5309473, info@civoraxtech.com.',
  },
  {
    q: 'What does CivoraX mean?',
    a: 'CivoraX combines three ideas: Civ (civilization), Aura (energy and feeling) and X (the future). Civorax Group connects civilization with new energy and carries it into the future, through technology (CivoraX Tech) and infrastructure (CivoraX Infra). Our slogan is “The architecture of tomorrow.”',
  },
  {
    q: 'Which companies are part of Civorax Group?',
    a: 'CivoraX Tech (civoraxtech.com) and CivoraX Infra (civoraxinfra.com).',
  },
  {
    q: 'Where is Civorax Group located?',
    a: 'Our head office is at Itahari-04, Aaitabare, NTC Road, Sunsari, Koshi Province, Nepal. Our teams work on projects across all seven provinces.',
  },
  {
    q: 'Is Civorax Group related to Civora Nexus or the CivoraX internship programme?',
    a: 'No. Civorax Group is an independent Nepali company and is not affiliated with Civora Nexus or its CivoraX internship programme.',
  },
  {
    q: 'How do I start a project with Civorax Group?',
    a: 'For software, call CivoraX Tech on 980-5309473 or email info@civoraxtech.com. For design and construction, call CivoraX Infra on 025-591006 or email info@civoraxinfra.com. You can also use our contact page — we reply within one working day.',
  },
] as const;
