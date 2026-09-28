# civoraxgroup.com

Static Astro site for **Civorax Group**, the parent company of [CivoraX Tech](https://civoraxtech.com) and [CivoraX Infra](https://civoraxinfra.com).
Design system: `stitch_system_design_documentation/DESIGN.md`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview
```

## Where to edit

| What | File |
|---|---|
| Company name, phone, email, address, hours, social profiles (`sameAs`) | `src/data/site.ts` |
| Companies, projects, stats, FAQ | `src/data/site.ts` |
| Photos (replace with real, ≥ 2400px wide, same filenames) | `src/assets/images/` |
| Design tokens (colours, fonts) | `src/styles/global.css` |
| Structured data (JSON-LD) | `src/data/schema.ts` |

## Deploying

Upload `dist/` to any static host (Cloudflare Pages, Netlify, Vercel, or cPanel). Make sure:

- `https://civoraxgroup.com` is the only live version. Redirect `www.` and `http://` to it with a 301.
- Pretty URLs are on, so `/about` serves `about.html`. Cloudflare, Netlify and Vercel do this by default. On Apache, add a rewrite rule.
- `404.html` is used as the not-found page.

## Brand-search SEO checklist (to rank #1 for "civorax")

The site handles the on-page side: titles, canonicals, Organization/LocalBusiness/Breadcrumb/FAQ JSON-LD, sitemap, robots, llms.txt, fast static HTML. The steps below are the off-site part:

1. **Google Search Console.** Verify the domain, submit `https://civoraxgroup.com/sitemap-index.xml`, and request indexing for the homepage.
2. **Bing Webmaster Tools.** Import from Search Console.
3. **Google Business Profile.** Create "Civorax Group" at the Itahari office. Name, address and phone must match `src/data/site.ts` exactly.
4. **Social profiles.** Create Facebook, LinkedIn company page, Instagram and YouTube, all named "Civorax Group" and all linking to civoraxgroup.com. Add each URL to `sameAs` in `src/data/site.ts`.
5. **Company sites.** civoraxtech.com and civoraxinfra.com should each link to civoraxgroup.com in their footer ("A Civorax Group company") and add `parentOrganization` to their own Organization JSON-LD.
6. **Directories.** List the company in Nepali business directories and on the chamber of commerce site with the same name, address and phone.
7. **Rich results.** Validate the pages at https://search.google.com/test/rich-results after launch.
