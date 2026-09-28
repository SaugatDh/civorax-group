import { SITE, COMPANIES, FAQ, type Company, type Project } from './site';

export const ORG_ID = `${SITE.url}/#organization`;
export const LOCAL_ID = `${SITE.url}/#localbusiness`;
export const companyId = (c: Company) => `${c.url}/#organization`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

/**
 * Entity graph emitted on every page: the parent Organization, its two
 * subOrganizations (each on its own domain), and the Itahari office as a LocalBusiness.
 */
export function organizationGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      legalName: SITE.legalName,
      alternateName: SITE.alternateNames,
      url: `${SITE.url}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE.url}/#logo`,
        url: `${SITE.url}${SITE.logo}`,
        width: 512,
        height: 94,
        caption: SITE.name,
      },
      image: { '@id': `${SITE.url}/#logo` },
      description: SITE.description,
      slogan: SITE.tagline,
      foundingDate: SITE.foundingYear,
      email: SITE.email,
      telephone: SITE.phone,
      address: postalAddress,
      areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
      sameAs: SITE.sameAs,
      subOrganization: COMPANIES.map((c) => ({ '@id': companyId(c) })),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: SITE.phone,
          email: SITE.email,
          areaServed: 'NP',
          availableLanguage: ['English', 'Nepali'],
        },
      ],
    },
    ...COMPANIES.map((c) => ({
      '@type': 'Organization',
      '@id': companyId(c),
      name: c.name,
      legalName: c.legalName,
      url: c.url,
      logo: `${SITE.url}${c.logo}`,
      description: c.description,
      slogan: c.motto,
      email: c.email,
      telephone: c.phones.map((p) => p.e164),
      knowsAbout: c.services.map((s) => s.title),
      parentOrganization: { '@id': ORG_ID },
      address: postalAddress,
      sameAs: [c.url],
    })),
    {
      '@type': 'ProfessionalService',
      '@id': LOCAL_ID,
      name: `${SITE.name} — Itahari Head Office`,
      url: `${SITE.url}/contact`,
      image: `${SITE.url}${SITE.logo}`,
      telephone: SITE.phone,
      email: SITE.email,
      address: postalAddress,
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: SITE.hours.days,
          opens: SITE.hours.opens,
          closes: SITE.hours.closes,
        },
      ],
      parentOrganization: { '@id': ORG_ID },
      areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
      priceRange: '$$',
    },
  ];
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path === '/' ? `${SITE.url}/` : `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[] = FAQ) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function companyServicesSchema(c: Company) {
  return {
    '@type': 'ItemList',
    name: `${c.name} services`,
    itemListElement: c.services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.text,
        provider: { '@id': companyId(c) },
        areaServed: { '@type': 'Country', name: 'Nepal' },
      },
    })),
  };
}

export function projectSchema(p: Project, imageUrl: string) {
  const c = COMPANIES.find((x) => x.slug === p.company)!;
  return {
    '@type': 'CreativeWork',
    '@id': `${SITE.url}/projects/${p.slug}#project`,
    name: p.title,
    description: p.summary,
    image: imageUrl,
    dateCreated: p.year,
    locationCreated: { '@type': 'Place', name: `${p.location}, Nepal` },
    creator: { '@id': companyId(c) },
    publisher: { '@id': ORG_ID },
  };
}
