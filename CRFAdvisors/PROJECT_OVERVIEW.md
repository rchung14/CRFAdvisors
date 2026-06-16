# CRF Advisors — Project Overview

> Marketing/lead-generation website for **CRF Advisors, Inc.**, an independent credit risk management firm serving banks, credit unions, and financial institutions (Philadelphia, PA / Tri-State area).
> Live: https://crf-advisors.vercel.app
> Last updated: 2026-06-15

This document describes the project in detail — architecture, what's built, the honest strengths and weaknesses, and a prioritized list of what still needs work. It is meant as the single orientation doc for anyone (including future-you) picking this up.

---

## 1. What This Is

A fast, statically-prerendered marketing site whose job is to make CRF Advisors **rank in Google** for credit-risk service queries and **convert** qualified visitors (CFOs, CROs, chief credit officers, examiners) into contact-form submissions. It is content- and SEO-led, not an app. There is a small backend that only exists to deliver the contact form email.

The visual direction (navy/blue, Playfair Display + Inter, institutional tone) is defined in `.stitch/designs/DESIGN.md`; the page/keyword map is in `.stitch/designs/site.md`. All implementation follows those two documents.

---

## 2. Tech Stack & Architecture

### Frontend (`client/`)
- **Vite 7 + React 19 + React Router 7** — single-page app.
- **Plain CSS with design tokens** (CSS custom properties in `src/styles/Global.css`). Tailwind is installed but **not active** — styling is hand-written CSS that mirrors `DESIGN.md`. `tailwind.config.js` holds the color/font tokens for reference only.
- **lucide-react** for icons; no other UI dependencies.
- **Build-time prerendering (SSG):** `npm run build` runs `vite build`, then a second `vite build --ssr src/entry-server.jsx`, then `scripts/prerender.mjs`, which renders every route to a static `index.html` with full content, per-page `<title>`/meta/canonical/OG, and JSON-LD baked in. `src/main.jsx` **hydrates** that prerendered HTML in the browser. Unknown URLs fall back to `dist/spa-fallback.html`.
- **Why this matters:** crawlers get complete HTML without running JS, and users get instant first paint. This is the single most important architectural decision in the project.

### Backend (`server/`)
- **Express** API with one real endpoint: `POST /api/contact`.
- Sends mail via **Resend**. Hosted on **Render**.
- Hardened: security headers, `x-powered-by` off, CORS allowlist, 50 kb body limit, server-side validation mirroring the client, honeypot field, in-memory rate limiting (5/IP/15 min), generic error responses.

### Source of truth for content
Content lives in **data files**, not hardcoded in JSX, so it can be edited in one place:
- `src/data/services.js` — the five services (cards/summaries).
- `src/data/servicePages.js` — long-form content for the five dedicated service pages, plus `WHY_CRF` and `SERVICE_SOURCES`.
- `src/data/clients.js` — 33 institutions grouped by state.
- `src/data/team.js` — five team members + photos.
- `src/data/engagements.js` — **placeholder** engagement case studies.
- `src/seo/routesMeta.js` — per-route title/description/JSON-LD (consumed by both the runtime `Seo` component and the prerender script).
- `src/config.js` — `SITE_URL`, contact info (from env with fallbacks), org schema, breadcrumb/FAQ schema helpers.

~2,600 lines of source across `client/src`.

---

## 3. Site Structure (14 routes, 13 prerendered)

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Photo hero + Ted Ahn quote, services grid, approach, process timeline, client trust bar, CTA |
| `/consulting-services` | Services hub | 5 linked service cards + approach/process + CTA |
| `/consulting-services/loan-review` | Service page | ~1,099 words, FAQ, regulatory sources |
| `/consulting-services/due-diligence` | Service page | ~929 words |
| `/consulting-services/stress-testing` | Service page | ~911 words |
| `/consulting-services/alll` | Service page | ~927 words |
| `/consulting-services/cecl` | Service page | ~1,064 words |
| `/clients` | Clients | 33 institutions by state + **placeholder** "Representative Engagements" |
| `/about` | About | Firm overview, featured President card + team grid, Why CRF |
| `/contact` | Contact | Validated form + direct contact info + intro copy |
| `/privacy` | Privacy Policy | Generic boilerplate |
| `/terms` | Terms of Service | Generic boilerplate |
| `/consulting`, old `/services/*` | Redirects | 301-style client redirects to canonical URLs |
| `*` | Catch-all | Redirects to `/` |

Every page: one keyword-bearing H1, secondary-keyword H2/H3s, unique meta, prerendered.

---

## 4. SEO Implementation

- **Prerendered static HTML** for all routes (content visible to crawlers without JS).
- **Per-page metadata**: unique title (pipe-separated pattern), meta description, canonical, Open Graph + Twitter tags.
- **Structured data (JSON-LD)**: `ProfessionalService` (sitewide), `WebSite`, `BreadcrumbList`, `Person` (per team member), `Service` (per service page), and **`FAQPage`** (per service page — eligible for Google's expandable FAQ rich results).
- **Keyword coverage** across titles, H1/H2s, body prose, and internal anchor text for: independent loan review, credit review, loan portfolio review, CECL, ALLL, stress testing, due diligence, risk rating validation, FCU, Tri-State, etc.
- **Internal linking**: services interlink; hub links to all five; About/Clients/Home use keyword anchor text into service pages.
- **Outbound editorial citations** to primary regulators (FFIEC, FDIC, OCC, Federal Reserve, FASB) on service pages — an authority signal. `rel="noopener noreferrer"`, no `nofollow`.
- **Technical**: `robots.txt` (disallows `/api/`), `sitemap.xml` (all routes), self-hosted preloaded fonts, `fetchpriority` on the LCP hero image, immutable caching for hashed assets/fonts, `trailingSlash: false`.

---

## 5. Security Implementation

- **Headers** (Vercel + Express): HSTS, CSP (locked to `'self'`, no `unsafe-inline`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, COOP, CORP.
- **`x-powered-by` disabled**, error boundaries that expose no stack traces/paths.
- **Contact API**: server-side validation mirrors client, honeypot, in-memory rate limit, CORS allowlist, generic errors, body-size cap.
- **Secrets**: contact info and API keys in env vars; `.env` files gitignored.

---

## 6. Strengths (Pros)

1. **Genuinely strong technical SEO foundation.** Prerendered HTML + rich structured data + clean per-page metadata + a deep, keyword-aligned content set. This is well above what most small-firm sites ship and is the project's biggest asset.
2. **Real content depth.** Five service pages at ~900–1,100 words each, with methodology, regulatory context, and FAQs — not thin marketing fluff. Industry-accurate.
3. **Fast and light.** Static-first delivery, self-hosted fonts (no third-party requests), optimized WebP/AVIF imagery, vendor-chunk caching. Homepage JS is ~85 kB gzipped.
4. **Hardened for a static site.** Full modern security-header set on both the site and the API; the contact endpoint is defensively coded.
5. **Maintainable content model.** Nearly all copy lives in data files; the owner edits one file to change services, clients, team, or engagements without touching markup.
6. **Consistent, on-brand design.** Reuses a small set of components (PageHero, cards, CTA banner) and design tokens; no style drift.
7. **Accessible-leaning.** Semantic HTML, alt text on imagery, ARIA on nav/forms, `prefers-reduced-motion` respected, keyboard-usable.

---

## 7. Weaknesses / Limitations (Cons)

1. **Off-page SEO is entirely undone — and it's what actually moves rankings.** No Google Search Console verification, no sitemap submission, no Google Business Profile, no backlinks. The on-page work makes the site *eligible* to rank; without these, it largely won't. **This is the #1 gap.**
2. **Free `vercel.app` subdomain.** Hurts credibility with both Google and bank executives. The firm appears to own `crfadvisors.com` (used for email) — the site should live there.
3. **Placeholder content is shipping live.** `/clients` "Representative Engagements" are visibly labeled placeholders, and "XX+ years" / "20XX" placeholders appear in user-facing copy and even a meta description. Fine internally; **not fine for a public launch.**
4. **Generic stock photography.** Design brief warns against it; current imagery is tasteful Unsplash stock, not real CRF people/offices. Authentic photos would convert better and look less templated.
5. **Unverified regulatory deep-links.** Outbound citations currently point at authoritative *domain roots* with TODOs; the exact document URLs need confirming.
6. **Backend fragility.** Render free tier means **cold starts** (first contact submission after idle can take 30–60s or time out). The email "from" address and recipient depend on correctly-set Render env vars; if unset, the form silently fails.
7. **No analytics or conversion tracking.** No way to see traffic, queries, or whether the form is being used. Flying blind post-launch.
8. **No automated tests and no CI.** Verification is manual (build + lint + eyeballing). A broken data file or link is only caught by hand.
9. **Firm-specific claims need sign-off.** "Why CRF" asserts things ("we decline engagements where independence is compromised," "decades of experience," "senior-led"). Flagged with TODOs but not yet confirmed by the firm.
10. **Two URL systems linger.** Old `/services/*` paths redirect to the canonical `/consulting-services/*`; harmless but slightly untidy. The data files still carry both `id` and `slug` fields.
11. **Tailwind installed but unused** — dead dependency/config that can confuse a new developer.
12. **Privacy/Terms are generic boilerplate**, not reviewed by counsel.

---

## 8. What Needs Improvement (Prioritized)

### P0 — Before / at public launch
- [ ] **Point a real domain** (`crfadvisors.com`) at the Vercel project; update `SITE_URL` in `src/config.js` (cascades to canonicals, sitemap, JSON-LD).
- [ ] **Replace all `XX+` / `20XX` placeholders** with the real founding year and tenure (in `About.jsx`, `Clients.jsx`, `team.js`, `routesMeta.js`, `config.js`). Re-add `foundingDate` to the org schema.
- [ ] **Fill or remove the engagement placeholders** in `src/data/engagements.js` (keep anonymized; named cases need client permission).
- [ ] **Confirm firm-specific claims** in `WHY_CRF` (`servicePages.js`) or soften them.
- [ ] **Set Render env vars** (`RESEND_API_KEY`, `EMAIL_USER`, `CONTACT_RECIPIENT`, `ALLOWED_ORIGINS`) and **send a real test submission** end-to-end.
- [ ] **Verify the regulatory deep-link URLs** flagged `verify: true` in `SERVICE_SOURCES`.

### P1 — First weeks (this is what makes it rank)
- [ ] **Google Search Console**: verify the domain, submit `sitemap.xml`.
- [ ] **Google Business Profile**: create/claim (Philadelphia) — often the biggest local-visibility win for a niche B2B firm.
- [ ] **Backlinks**: state banking-association directories, LinkedIn company page, consultant directories, an industry article by Ted with a link back. PageRank is fundamentally off-page.
- [ ] **Add analytics** (privacy-friendly, e.g. Plausible/Vercel Analytics) and consider basic form-conversion tracking. Update CSP `connect-src` accordingly.

### P2 — Quality / durability
- [ ] **Real photography** of the team, office, or anonymized work settings to replace stock.
- [ ] **Counsel review** of Privacy Policy and Terms.
- [ ] **Add `Review`/`CaseStudy` JSON-LD** to `/clients` once real engagement content exists (TODO already noted).
- [ ] **A few smoke tests / link-check in CI** (e.g., assert every route prerenders a unique title + non-empty H1; check internal links resolve).
- [ ] **Upgrade Render plan** (or add a keep-warm ping) to kill contact-form cold starts.
- [ ] **Remove Tailwind** if it stays unused, or commit to using it — don't leave it dead.
- [ ] **Consider consolidating** the `id`/`slug` duplication and dropping the legacy `/services/*` redirects once confident nothing links to them.

---

## 9. Outstanding TODO / Placeholder Locations (quick reference)

| File | What |
|---|---|
| `src/data/engagements.js` | Placeholder engagement cards — replace with real anonymized cases |
| `src/data/servicePages.js` (`WHY_CRF`) | Firm-positioning claims to confirm |
| `src/data/servicePages.js` (`SERVICE_SOURCES`) | Deep regulatory URLs to verify (currently domain roots) |
| `src/pages/Clients.jsx` | `PLACEHOLDER SECTION` comment + future-schema TODO |
| `About.jsx`, `Clients.jsx`, `team.js`, `routesMeta.js`, `config.js` | `XX+` / `20XX` tenure & founding placeholders |

---

## 10. How to Run / Build / Deploy

```bash
# Frontend (client/)
npm install
npm run dev        # http://localhost:5173 (plain SPA, no prerender)
npm run build      # vite build + SSR bundle + prerender -> dist/
npm run preview    # serve the built, prerendered output
npm run lint

# Backend (server/)
npm install
npm run dev        # nodemon, port 10000
```

- **Frontend deploys to Vercel** (build command `npm run build`, output `dist/`, headers/rewrites in `client/vercel.json`).
- **Backend deploys to Render** (`npm start`); requires the env vars listed in P0.
- **Env files**: `client/.env.local` and `server/.env` are gitignored; `.env.example` files document the keys.

---

## 11. One-Paragraph Bottom Line

The site is **technically excellent and substantively complete on-page** — fast, secure, deeply optimized, and well-architected for a static marketing site. Its weaknesses are almost entirely **operational and content-finalization**, not code: it's on a free subdomain, ships visible placeholders, and — most importantly — has had **none of the off-page SEO work (Search Console, Business Profile, backlinks) that actually determines whether it ranks**. Close the P0 launch items and start the P1 off-page work, and this is a genuinely strong digital presence for the firm.
