---
page: engagement-summaries
---
DONE 2026-07-13: Dedicated training banner shipped — src/assets/svc-training.webp
(1600x1067 WebP from user-supplied Pexels photo), wired into the training entry
in src/data/servicePages.js.

NEXT TASK: the /clients "Anonymized Engagement Summaries" section is currently
commented out in src/pages/Clients.jsx pending real content. When CRF supplies
real anonymized engagement summaries (service + institution size + state +
outcome, no client names), update src/data/engagements.js with them, re-enable
the section and its ENGAGEMENTS import in Clients.jsx, remove the placeholder
warning note, and add Review/CaseStudy JSON-LD consideration in routesMeta.js.

**DESIGN SYSTEM (REQUIRED):**
Institutional precision, not marketing warmth. Navy #1B2B5E primary, accent
blue #2563EB, neutrals #F8F9FA / #E9ECEF / #4B5563 / #111827. Playfair Display
for H1 ONLY; Inter for everything else. Engagement cards: 3px blue left border,
1px gray-200 border, radius 8px, category badge (blue-light bg, blue text,
11px tracked), 2-col desktop / 1-col mobile.
