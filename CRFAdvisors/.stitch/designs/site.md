# CRF Advisors — Site Map & Keyword Architecture
> Version 2.0 | 2026-06-15
> Target domain: crfadvisors.com (pending migration from vercel.app subdomain)

---

## Audience & Conversion Goal

**Who visits:** CFOs, CROs, Chief Credit Officers, Compliance Officers at community banks,
savings institutions, and credit unions. Also bank examiners conducting pre-examination research.

**Job of the site:** Rank in Google for credit-risk service queries → convert qualified visitors
into contact form submissions. Content- and SEO-led. One conversion action per page.

**Decision timeline:** Long (weeks to months). Design must work for a first visit AND a return
visit after someone has read three pages and is ready to reach out.

---

## Responsive Breakpoints

| Name     | Viewport    | Grid            | Notes                                    |
|----------|-------------|-----------------|------------------------------------------|
| Mobile   | 375–767px   | 1 column        | All grids stack; hero stats 3×1 vertical |
| Tablet   | 768–1023px  | 2 columns       | Service cards 2×2 + 1 centered; pills 2×N |
| Desktop  | 1024–1279px | 3 columns       | Standard layout                          |
| Wide     | 1280px+     | 3–4 cols        | Container max-width 1200px, centered     |

All CSS: mobile-first. Desktop overrides via `min-width` media queries.

---

## Route Map (15 routes, 13 prerendered + SPA fallback)

---

### `/` — Homepage
**Purpose:** Primary landing. Convert search traffic into contact submissions.
**Primary keyword:** independent loan review
**Secondary keywords:** credit risk management, loan portfolio review, financial institutions, Tri-State
**H1:** Independent Loan Review and Credit Risk Management for Financial Institutions

**Page sections (in order):**
1. **Hero**
   - Background: architectural photo with navy overlay
   - H1 (Playfair Display, centered, white)
   - Ted Ahn quote card (glassmorphism panel, centered below H1)
   - Inline stats bar: `33+ Clients · 6 Service Lines · Tri-State & Beyond`
   - Dual CTAs: "Our Services" (solid white) + "View Clients" (outline white)

2. **Services grid** — "Credit Risk & Loan Review Services"
   - 6 numbered cards (01–06), no icon squares
   - Card anatomy: number badge · service title · 2-line description · "Learn more →"
   - Grid: 3-col desktop, 2-col tablet, 1-col mobile
   - Cards link to individual service pages

3. **Approach** — "Objective Insight, Consistent Methodology"
   - Navy/dark bg
   - 3 principles, horizontal on desktop, stacked on mobile

4. **Process** — "Our Loan Review Process"
   - 4-step numbered timeline, connected horizontally on desktop
   - Steps: Portfolio Understanding → Risk Assessment & Rating → Findings & Reporting → Regulatory Alignment
   - Stacks vertically on mobile with left-border connector line

5. **Trust bar** — "Trusted by 33+ banks, credit unions, and financial institutions"
   - Pill grid: institution name + city, state
   - 3-col desktop (12 institutions shown), 2-col tablet, 1-col mobile
   - "View all 33 clients →" link below grid

6. **CTA banner** — "Ready to strengthen your credit oversight?"
   - Navy gradient bg
   - Single CTA: "Contact Us" → /contact

**Primary CTA:** Schedule a Consultation → /contact
**Internal links:** All 6 service pages, /clients

---

### `/consulting-services` — Services Hub
**Purpose:** Overview of all services. Internal linking hub.
**Primary keyword:** credit risk consulting services, bank consulting services
**Secondary keywords:** loan review services, CECL consulting, stress testing bank
**H1:** Credit Risk & Loan Review Consulting Services

**Page sections:**
1. Page hero (H1 + descriptor)
2. 6 numbered service cards (same component as homepage, full description visible)
3. Approach — 3 principles (white bg, no navy)
4. Process timeline — 4 steps
5. CTA banner — "Talk to our team about scoping the right engagement."

**Internal links:** All 6 service pages

---

### `/consulting-services/loan-review` — Loan Review
**Primary keyword:** independent loan review
**Secondary:** loan portfolio review, credit review, risk rating validation, loan review bank
**H1:** Independent Loan Review for Banks and Financial Institutions
**Meta description:** CRF Advisors provides independent loan review for community banks and credit unions across the Tri-State area. Objective credit risk assessment aligned with regulatory expectations.

**Page sections:**
1. Page hero (breadcrumb · H1)
2. Service intro (~200 words, regulatory context)
3. What We Review — 6-step numbered methodology
4. What You Receive — 2-col bullet list
5. Approach — 4 principles (horizontal, white bg)
6. Why CRF — 3 differentiators
7. FAQ — 4 questions with expand/collapse (FAQPage JSON-LD)
8. Regulatory sources — FFIEC, OCC citations
9. CTA banner

---

### `/consulting-services/due-diligence` — Due Diligence
**Primary keyword:** credit due diligence
**Secondary:** loan portfolio due diligence, M&A credit review, whole bank acquisition due diligence
**H1:** Credit Due Diligence for Bank Acquisitions and Mergers
**Meta description:** CRF Advisors conducts credit due diligence for whole-bank acquisitions, branch purchases, and loan portfolio transactions in the Tri-State region.

**Page sections:** (same structure as loan-review)
1. Page hero
2. Service intro
3. What We Assess — methodology
4. What You Receive
5. Approach
6. Why CRF
7. FAQ
8. Regulatory sources
9. CTA banner

---

### `/consulting-services/stress-testing` — Portfolio Stress Testing
**Primary keyword:** loan portfolio stress testing
**Secondary:** credit stress test, portfolio risk analysis, bank stress test
**H1:** Loan Portfolio Stress Testing for Community Banks
**Meta description:** Scenario-based loan portfolio stress testing for commercial, residential, and consumer portfolios. CRF Advisors delivers capital impact analysis aligned with regulatory expectations.

---

### `/consulting-services/alll` — ALLL
**Primary keyword:** ALLL methodology review
**Secondary:** allowance for loan losses, ALLL compliance, FFIEC ALLL interagency policy
**H1:** ALLL Methodology Review and Implementation
**Meta description:** CRF Advisors reviews and implements ALLL methodology for community banks and credit unions in compliance with FFIEC Interagency Policy Statement and GAAP.

---

### `/consulting-services/cecl` — CECL Implementation & Modeling
**Primary keyword:** CECL implementation and modeling
**Secondary:** CECL compliance, CECL community banks, current expected credit loss, vintage / PD x LGD / DCF
**H1:** CECL Implementation and Modeling for Financial Institutions
**Meta description:** End-to-end CECL implementation and modeling. Vintage, PD x LGD, DCF, WARM, and loss rate methodologies for community banks and credit unions.
**Note (2026-07-10):** Split from a single CECL page into two per reference site
(crf.devjawn.com) to boost SEO. This page keeps the original indexed URL.

---

### `/consulting-services/cecl-acl-review` — CECL Methodology & ACL Review
**Primary keyword:** ACL review, CECL methodology review
**Secondary:** allowance for credit losses review, CECL model validation, ASU 2016-13, ASU 2022-02
**H1:** Independent CECL Methodology and ACL Review
**Meta description:** Independent review of the Allowance for Credit Losses (ACL) calculation and CECL methodology. Pool segmentation, GL reconciliation, PD x LGD and DCF recalculation, Q-factor review.
**Added 2026-07-10** — second half of the CECL split; content sourced from the
reference site's "CECL Methodology & (ACL) Review" service.

---

### `/clients` — Clients
**Purpose:** Social proof. Named institutions + anonymized engagement outcomes.
**Primary keyword:** loan review clients, bank loan review firm
**H1:** Financial Institutions We've Served

**Page sections:**
1. Page hero (H1 + founding stat descriptor — replace XX+ when confirmed)
2. Client roster — state-grouped institution cards
   - Pennsylvania (17), New Jersey, Delaware, Maryland, Beyond Tri-State (7)
   - Each card: institution name + city, state
   - Grid: 3-col desktop → 2-col tablet → 1-col mobile
3. Engagement summaries — "Representative Engagements"
   - 4 anonymized case cards: Loan Review | CECL | Stress Testing | Due Diligence
   - Card: category badge · title (service — size — geography) · 2–3 outcome sentences
   - REPLACE placeholders with real anonymized content before launch
4. "References available upon request." — italic note
5. CTA banner — "Join our client roster."

---

### `/about` — About
**Purpose:** Team credibility and firm positioning.
**Primary keyword:** credit risk advisory firm Philadelphia
**Secondary:** independent credit review firm, bank consultant Philadelphia
**H1:** About CRF Advisors, Inc.

**Page sections:**
1. Page hero
2. Firm overview — "Independent Credit Risk Management Since [YEAR]" — REPLACE 20XX
3. Team list (v2.1, 2026-07-10) — horizontal profile rows for all 5 members: fixed
   photo column (232px, 4:5, radius 8px) left, name/title/full bio right (max 72ch),
   1px dividers between rows. Full bios always visible — the old Read more toggle made
   long bios expand narrow cards awkwardly. Ted Ahn (Team Leader) is the first row.
5. Why CRF — "Why Institutions Choose CRF Advisors" — 6 differentiators
   - REPLACE "XX+ Years" with real figure
6. CTA banner

---

### `/contact` — Contact
**Purpose:** Primary conversion page.
**Primary keyword:** contact credit risk consultant Philadelphia
**H1:** Get in Touch

**Page sections:**
1. Page hero — H1 + "Looking to see if a CRF Advisors service is a good fit?"
2. Split layout (2 columns on desktop, stacked on mobile):
   - **Left (60%):** Form — Name, Institution, Title, Phone, Service (dropdown), Message
   - **Right (40%):** Direct Contact sidebar
     - "Ted Ahn, President"
     - Phone: (267) 816-4272
     - Email: Tedahn@crfadvisors.com
     - Location: Philadelphia, PA
     - "A senior credit professional responds within 1 business day." — pull this out prominently, not buried in body text
3. No CTA banner (page IS the CTA)

---

### `/privacy` — Privacy Policy
Boilerplate. Footer link only. No internal navigation.

### `/terms` — Terms of Service
Boilerplate. Footer link only. No internal navigation.

### `/consulting` → 301 redirect to `/consulting-services`
### `/services/*` → 301 redirect to `/consulting-services/*`
### `*` → redirect to `/`

---

## SEO Content Rules

- Every page: unique H1, unique `<title>` (pipe-separated: Page Topic | CRF Advisors), unique meta description
- Title pattern: `[Primary Keyword] | CRF Advisors`
- No duplicate H1s across pages
- Internal anchor text: use keyword phrases, not "click here" or "learn more" alone
- Service pages cross-link to each other where relevant
- `/clients` and `/about` link back to service pages with keyword anchors
- FAQ sections: FAQPage JSON-LD on all service pages
- No placeholder text (`XX+`, `20XX`, `[State]`, `[PLACEHOLDER]`) on live pages

---

## Content to Complete Before Launch (P0)

| File | What | Status |
|------|------|--------|
| `src/data/engagements.js` | 4 real anonymized engagement summaries | Placeholder |
| `src/data/team.js` | Replace XX+ tenure figure | Placeholder |
| `src/pages/About.jsx` | Replace "Independent Credit Risk Management Since 20XX" | Placeholder |
| `src/pages/Clients.jsx` | Replace "XX+ years" in hero descriptor | Placeholder |
| `src/seo/routesMeta.js` | Fix meta description with XX+ placeholder | Placeholder |
| `src/config.js` | Replace 20XX in foundingDate org schema | Placeholder |
| `src/data/servicePages.js` (SERVICE_SOURCES) | Verify regulatory deep-link URLs | TODO |
| `src/data/servicePages.js` (WHY_CRF) | Confirm firm-specific claims with Ted | TODO |
