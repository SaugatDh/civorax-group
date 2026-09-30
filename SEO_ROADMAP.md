# Civorax Group — Complete SEO Strategy & Roadmap

This document outlines the complete 3-Pillar SEO strategy for **Civorax Group** (`civoraxgroup.com`), including all implemented technical assets, immediate search engine registration steps, and long-term authority growth tactics.

---

## Pillar 1: Technical & On-Page Codebase SEO (Status: ✅ Implemented)

All on-page and technical code requirements have been implemented and verified in the codebase:

### 1. Crawlability & Indexing Architecture
- **Sitemap**: Automated XML sitemap generation via `@astrojs/sitemap` located at `https://civoraxgroup.com/sitemap-index.xml`.
- **Robots Directives**: `public/robots.txt` configured with unrestricted crawling for search engines and direct link to `sitemap-index.xml`.
- **Canonical URLs**: Self-referencing dynamic canonical tags on every page via `src/components/SEO.astro` to eliminate duplicate content issues.
- **HTML Compression & Clean Routing**: Clean, extensionless URLs (`trailingSlash: 'never'`, `compressHTML: true`).

### 2. Multi-Entity Structured Data (Schema.org / JSON-LD)
Implemented in `src/data/schema.ts` and emitted across all pages via `@graph`:
- **Parent Organization**: `Civorax Group` with brand alternates (`Civorax`, `CivoraX`, `CivoraxTech`, `CivoraxInfra`), official logo, founding year, area served, and contact point.
- **Sub-Organizations**: Child entities for `CivoraX Tech Pvt. Ltd.` and `CivoraX Infra Pvt. Ltd.` linked via `subOrganization` and `parentOrganization` relations.
- **LocalBusiness / ProfessionalService**: Head office entity with geographic coordinates (`26.6646, 87.2718`), street address, opening hours, and service areas.
- **Page-Specific Schemas**: `WebSite`, `WebPage`, `AboutPage`, `ContactPage`, `BreadcrumbList`, `FAQPage`, and `ItemList`.

### 3. OpenGraph & Social Cards
- Auto-generated 1200x630 social share images using Astro's image optimization pipeline.
- Twitter card markup (`summary_large_image`) on all routes.

### 4. Generative Engine Optimization (GEO / AEO)
- **`public/llms.txt`**: Standardized Markdown documentation tailored for AI search engines (**ChatGPT Search**, **Google Gemini / AI Overviews**, **Perplexity**).
- Includes entity disambiguation (differentiating Civorax Group from unrelated entities) and structured service descriptions.

### 5. Performance & Core Web Vitals
- **Self-Hosted Fonts**: Variable fonts loaded locally via `@fontsource-variable/manrope` and `@fontsource-variable/space-grotesk` (zero external render-blocking font requests).
- **Modern Media Formats**: Automated AVIF and WebP generation with responsive `srcset` and `fetchpriority="high"` on hero images.

---

## Pillar 2: Google & Search Engine Verification (Status: 📋 Immediate Action Items)

Complete these setup steps once deployed to your live domain:

### 1. Google Search Console (GSC)
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add Property: `https://civoraxgroup.com` (Domain or URL Prefix).
3. Verify ownership via DNS TXT record or HTML verification tag.
4. Navigate to **Sitemaps** in the sidebar and submit:
   ```text
   https://civoraxgroup.com/sitemap-index.xml
   ```

### 2. Google Business Profile (GBP) & Local SEO
1. Claim or create your Google Business Profile on [Google Business](https://www.google.com/business/).
2. Maintain exact **NAP (Name, Address, Phone)** consistency with the website:
   - **Name**: `Civorax Group` (or individual listings for `CivoraX Tech` and `CivoraX Infra`)
   - **Address**: `Itahari-04, Aaitabare, NTC Road, Sunsari, Koshi Province 56705, Nepal`
   - **Phone**: `+977 980-5309473`
   - **Website**: `https://civoraxgroup.com`
3. Update the exact GPS pin in `src/data/site.ts` (`geo: { lat: ..., lng: ... }`) once the Google Maps location is live.

### 3. Social Media Knowledge Graph Connections (`sameAs`)
In `src/data/site.ts`, uncomment and add live URLs for all active social media accounts:
```typescript
sameAs: [
  'https://civoraxtech.com',
  'https://civoraxinfra.com',
  'https://github.com/civorax-tech-pvt-ltd',
  'https://www.facebook.com/your-facebook-page',
  'https://www.linkedin.com/company/your-linkedin-page',
  'https://www.instagram.com/your-instagram-page',
]
```

### 4. Bing Webmaster Tools & IndexNow
1. Import your site from Google Search Console into [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Submit `https://civoraxgroup.com/sitemap-index.xml` for instant crawling on Bing, Yahoo, and DuckDuckGo.

---

## Pillar 3: Authority, Backlinks & Content Velocity (Status: 📈 Ongoing Growth)

### 1. Cross-Domain Synergy
- Ensure `civoraxtech.com` and `civoraxinfra.com` include backlink mentions in their headers/footers (e.g., *"A Civorax Group Company"* linking to `https://civoraxgroup.com`).

### 2. High-Quality Local Citations in Nepal
Submit the business profile to reputable directories and business registries:
- Yellow Pages Nepal / NepalYP
- Local Koshi Province / Itahari Chamber of Commerce directories
- Tech and Engineering business listings
- Crunchbase and GitHub organization profiles

### 3. Content Expansion & Case Studies
- As new software implementations (POS/ERP) or construction projects are completed, add structured case studies to `src/data/site.ts` (`PROJECTS` array) to target long-tail search queries.

---

## Keyword Target Matrix

| Cluster | Target Keywords | Primary Target Pages |
| :--- | :--- | :--- |
| **Brand & Entity** | `civorax`, `civorax group`, `civoraxtech`, `civorax infra`, `civorax nepal` | `/`, `/about`, `/companies` |
| **Tech & IT Services** | `IT services Nepal`, `software development Nepal`, `custom software development`, `tech company Nepal`, `web development Itahari`, `mobile app development Nepal`, `POS software Nepal`, `ERP development Nepal` | `/companies/civorax-tech`, `/projects` |
| **Infrastructure & Construction** | `infrastructure company Nepal`, `infra company`, `construction and design Nepal`, `construction company Itahari`, `building design Nepal`, `surveying DPR Nepal`, `property valuation Itahari`, `3D landscaping Nepal` | `/companies/civorax-infra`, `/projects` |
| **Local & Geographic** | `software company Itahari`, `construction Itahari`, `engineering Koshi Province`, `DPR surveying Sunsari` | `/contact`, `/about` |

---

*Generated by Claude SEO & Antigravity SEO Suite for Civorax Group.*
