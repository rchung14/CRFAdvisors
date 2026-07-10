---
page: training
---
A "Training" service page for CRF Advisors (/consulting-services/training). The
reference site (crf.devjawn.com) lists Training as a sixth service — staff
education on credit risk processes — which this site does not yet cover. Desktop,
interior service-page layout: page hero (navy photo overlay, breadcrumb, Playfair
H1 left-aligned), intro paragraph, "What the Training Covers" list, methodology
steps, FAQ, CTA banner.

NOTE FOR NEXT ITERATION: the Stitch MCP server was not connected on 2026-07-10;
the About team redesign was implemented directly in React from DESIGN.md
(see Component 7b). Connect the Stitch MCP server before running this baton, or
implement directly in client/src following DESIGN.md. Adding /training also
requires: src/data/services.js + servicePages.js entries, sitemap.xml URL,
server + client contact-form service options, and updating the "6 Service Lines"
hero stat to 7.

**DESIGN SYSTEM (REQUIRED):**
Institutional precision, not marketing warmth — Moody's report meets Lincoln
Center program. Navy #1B2B5E primary (nav/footer/hero overlay rgba(19,31,69,0.74)),
accent blue #2563EB for links/badges/numbers, neutrals #F8F9FA / #E9ECEF /
#4B5563 / #111827. Playfair Display for H1 ONLY (clamp 2.25–3.5rem); Inter for
everything else (H2 Inter 500 clamp 1.625–2.25rem, body Inter 400 1rem lh 1.7).
No all-caps section eyebrows, no icon squares (numbered cards with 3px blue left
border, radius 8px), no border-radius above 12px, shadows no heavier than
0 6px 24px rgba(0,0,0,0.12). Container max 1200px. Cards hover translateY(-2px).
Mobile-first, hamburger under 768px.

**Page Structure:**
1. Page hero: breadcrumb "Home / Consulting Services / Training", H1 "Credit Risk
   Training for Financial Institution Staff", 280px, navy overlay
2. Intro: who it serves (credit departments, loan review staff, boards)
3. "What the Training Covers" — bulleted list (risk rating, underwriting review,
   ALLL/ACL basics, CECL concepts, examination readiness)
4. Numbered methodology (scoping → curriculum → delivery → follow-up)
5. FAQ (4–5 questions)
6. CTA banner: "Talk to our team about training your credit staff."
