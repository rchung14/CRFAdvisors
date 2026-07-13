---
page: training-banner
---
DONE 2026-07-12: The Training service page shipped at /consulting-services/training
(implemented directly in React from DESIGN.md — Stitch MCP still not connected).
It currently REUSES the services-hub banner photo (src/assets/svc-hub.webp).

NEXT TASK: produce a dedicated banner image for the Training page — a classroom
or workshop scene consistent with the site's photographic style (institutional,
muted, suitable for the rgba(19,31,69,0.82) navy overlay). Deliver as WebP,
~1600px wide, saved to client/src/assets/svc-training.webp, then update the
`banner` import for the training entry in src/data/servicePages.js and its
bannerAlt text. If generating via Stitch/Higgsfield, keep people generic (no
identifiable faces needed) and composition dark enough for white H1 text.

**DESIGN SYSTEM (REQUIRED):**
Institutional precision, not marketing warmth — Moody's report meets Lincoln
Center program. Navy #1B2B5E primary (hero overlay rgba(19,31,69,0.74) min),
accent blue #2563EB, neutrals #F8F9FA / #E9ECEF / #4B5563 / #111827. Playfair
Display for H1 ONLY; Inter for everything else. No border-radius above 12px,
shadows no heavier than 0 6px 24px rgba(0,0,0,0.12). Photography: muted,
architectural/professional, must sit under a heavy navy overlay with fully
legible white text.
