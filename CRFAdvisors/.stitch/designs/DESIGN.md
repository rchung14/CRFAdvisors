# CRF Advisors — Design System
> Version 2.0 | 2026-06-15
> Visual direction for all pages. Stitch loop reference. Generated from UX audit.

---

## Design Philosophy

**Institutional precision. Not marketing warmth.**

The audience — CFOs, CROs, chief credit officers, bank examiners — responds to signals of rigor
and domain expertise, not friendly gradients and icon grids. Every visual decision should answer
the question: does this look like it belongs in a regulatory briefing room, or a startup landing page?

The site's visual identity lives at the intersection of a Moody's analytics report and a
Lincoln Center program booklet. Structured. Spare. Authoritative. One moment of character
(the hero serif), precision everywhere else.

---

## Color Palette

```css
/* Primary — Navy */
--color-navy:        #1B2B5E;   /* Primary brand: nav bg, footer bg, hero overlay base */
--color-navy-dark:   #131F45;   /* Hover states, deep bg */
--color-navy-mid:    #243670;   /* Approach section bg, CTA banner */
--color-navy-overlay: rgba(19, 31, 69, 0.74); /* Hero photo overlay — min 70% for legibility */

/* Accent — Blue */
--color-blue:        #2563EB;   /* Links, card accents, category badges, service numbers */
--color-blue-hover:  #1D4ED8;   /* Hover state on blue elements */
--color-blue-light:  #EFF6FF;   /* Badge bg, pill hover bg */
--color-blue-mid:    #BFDBFE;   /* Badge border */

/* Neutral */
--color-white:       #FFFFFF;
--color-gray-50:     #F8F9FA;   /* Alternate section bg (off-white sections) */
--color-gray-100:    #F1F3F5;   /* Card bg, default pill bg */
--color-gray-200:    #E9ECEF;   /* Borders, dividers, card borders */
--color-gray-400:    #9CA3AF;   /* Meta text: location in pills, timestamps */
--color-gray-600:    #4B5563;   /* Body text secondary */
--color-gray-900:    #111827;   /* Body text primary, headings on light bg */

```

---

## Typography

**Rule:** Playfair Display for H1 only. Inter for everything else. No exceptions.

Using Playfair on H2+ dilutes hierarchy and reads as a template site. One serif moment —
the page H1 — creates gravity without letting decoration overpower content.

```css
/* Font stacks */
--font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Scale — fluid type with clamp() */
--text-hero:    clamp(2.25rem, 5vw, 3.5rem);    /* H1 only: Playfair Display */
--text-h2:      clamp(1.625rem, 3.5vw, 2.25rem); /* Inter 500, tight tracking */
--text-h3:      clamp(1.125rem, 2vw, 1.375rem);  /* Inter 500 */
--text-h4:      1rem;                             /* Inter 600 */
--text-body:    1rem;                             /* Inter 400, line-height 1.7 */
--text-body-lg: 1.125rem;                         /* Inter 400 — hero sub-copy */
--text-small:   0.875rem;                         /* Inter 400 — card body, meta */
--text-label:   0.6875rem;                        /* Inter 500, tracked — badges only */

/* Letter spacing */
--tracking-tight:   -0.02em;   /* H2, H3 */
--tracking-tighter: -0.03em;   /* Hero H1 on large viewports */
--tracking-normal:   0;
--tracking-wide:     0.06em;   /* Category badges, service numbers */
```

### Type usage rules

- **H1:** Playfair Display, --text-hero, color: white (hero) / --color-navy (light bg), tracking: --tracking-tighter
- **H2:** Inter 500, --text-h2, tracking: --tracking-tight, color: --color-gray-900
- **H3:** Inter 500, --text-h3, tracking: -0.01em, color: --color-gray-900
- **Body:** Inter 400, --text-body, line-height: 1.7, color: --color-gray-600
- **Service numbers (01–05):** Inter 600, --text-label, tracking: --tracking-wide, color: --color-blue
- **Category badges:** Inter 500, --text-label, tracking: --tracking-wide
- **Section eyebrows:** REMOVED. No all-caps section labels. H2 anchors each section on its own.
  If a visual separator is needed: a 32px wide, 2px tall rule in --color-blue above the H2.

---

## Spacing System

Base unit: 4px (0.25rem)

```css
--space-1:    4px;    /* 0.25rem */
--space-2:    8px;    /* 0.5rem  */
--space-3:    12px;   /* 0.75rem */
--space-4:    16px;   /* 1rem    */
--space-5:    20px;   /* 1.25rem */
--space-6:    24px;   /* 1.5rem  */
--space-8:    32px;   /* 2rem    */
--space-10:   40px;   /* 2.5rem  */
--space-12:   48px;   /* 3rem    */
--space-16:   64px;   /* 4rem    */
--space-20:   80px;   /* 5rem    */
--space-24:   96px;   /* 6rem    */

/* Section vertical rhythm */
--section-py-mobile:    56px;
--section-py-desktop:   96px;
--section-py-wide:      120px;

/* Container */
--container-max:  1200px;
--container-px-mobile:  20px;
--container-px-tablet:  32px;
--container-px-desktop: 48px;
```

---

## Grid System

```css
/* Homepage / interior pages */
.grid-services  { grid-template-columns: repeat(3, 1fr); gap: 24px; }
.grid-pills     { grid-template-columns: repeat(3, 1fr); gap: 12px; }
.grid-process   { grid-template-columns: repeat(4, 1fr); gap: 32px; }
.grid-team      { grid-template-columns: repeat(3, 1fr); gap: 32px; }
.grid-cases     { grid-template-columns: repeat(2, 1fr); gap: 24px; }

/* Tablet (768px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid-services  { grid-template-columns: repeat(2, 1fr); }
  .grid-pills     { grid-template-columns: repeat(2, 1fr); }
  .grid-process   { grid-template-columns: repeat(2, 1fr); }
  .grid-team      { grid-template-columns: repeat(2, 1fr); }
  .grid-cases     { grid-template-columns: 1fr; }
}

/* Mobile (<768px) */
@media (max-width: 767px) {
  .grid-services,
  .grid-pills,
  .grid-process,
  .grid-team,
  .grid-cases     { grid-template-columns: 1fr; }
}

/* Wide desktop (>1280px) */
@media (min-width: 1280px) {
  .grid-pills     { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Component Library

### 1. Navigation

```
[CRF Advisors, Inc.]          [Consulting Services] [Clients] [About Us] [Contact Us]  [Get Started]
```

- Background: --color-navy, sticky
- Logo: Inter 600, 18px, white. "CRF Advisors, Inc." — no changes
- Nav links: Inter 500, 13px, rgba(255,255,255,0.82), sentence case (NOT ALL CAPS in content)
- Active state: 2px rgba(255,255,255,0.50) bottom border
- CTA button: white bg, --color-navy text, 8px radius, Inter 600, 13px, px 18px py 8px
- Mobile (<768px): hamburger (3 lines), slide-in drawer from right, full-width links, 48px tap targets

---

### 2. Homepage Hero

```
┌──────────────────────────────────────────────────────────────────┐
│ [Architectural photo — navy overlay rgba(19,31,69,0.74)]         │
│                                                                  │
│          Independent Loan Review and Credit Risk                 │  ← H1: Playfair Display
│           Management for Financial Institutions                  │    clamp(2.25,5vw,3.5rem)
│                                                                  │    white, centered
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ "Based on our experience servicing financial institutions  │  │  ← Quote card
│  │  in the Tri-State area... credit risk management is more  │  │    rgba(255,255,255,0.13) bg
│  │  than just an assertion that a loan is properly           │  │    1px rgba(255,255,255,0.22) border
│  │  classified..."                                           │  │    16px radius
│  │                                                           │  │
│  │  Ted Ahn, Team Leader, CRF Advisors                       │  │    attribution: Inter 400, 14px
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│      44+ Clients    ·    7 Service Lines    ·    Tri-State       │  ← Inline stats bar
│                                                                  │
│       [  Our Services  ]    [  View Clients  ]                   │  ← Dual CTAs (match original)
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Photo overlay:** `rgba(19, 31, 69, 0.74)` minimum. Text must be fully legible. Use higher opacity
if the photo is light-toned.

**Quote card:**
- Background: rgba(255,255,255,0.13)
- Border: 1px solid rgba(255,255,255,0.22)
- Border-radius: 16px
- Padding: 28px 32px
- Max-width: 760px, centered
- Quote text: Inter 400 (or light italic), 16px, rgba(255,255,255,0.92), line-height 1.7
- Opening/closing quotation marks: Playfair Display, 48px, rgba(255,255,255,0.25), decorative
- Attribution: Inter 500, 14px, rgba(255,255,255,0.65), margin-top 16px

**Inline stats bar (below quote card):**
- Single line of text, no boxes
- Format: `44+ Clients · 7 Service Lines · Tri-State & Beyond`
- Inter 500, 14px, rgba(255,255,255,0.70)
- Centered dot separators
- Mobile: stack vertically, one per line

**CTA buttons (dual — match original intent):**
- Primary: solid white bg, --color-navy text, Inter 600, 14px, padding 12px 28px, radius 8px
- Secondary: transparent bg, 1px solid rgba(255,255,255,0.40), white text, same sizing
- Gap: 12px
- Mobile: stack vertically, full-width

---

### 3. Service Cards (Numbered — no icons)

```
┌────────────────────────────────────────────────┐
│▌                                               │  ← 3px solid --color-blue left border
│  01                                            │  ← Inter 600, 11px, --color-blue, tracking: 0.06em
│                                                │
│  Loan Review                                   │  ← Inter 500, 20px, --color-gray-900
│                                                │
│  Independent assessment of loan portfolio      │  ← Inter 400, 14px, --color-gray-600
│  quality, underwriting standards, and risk     │    line-height: 1.6, max 3 lines
│  rating accuracy.                              │
│                                                │
│  Learn more →                                  │  ← Inter 500, 14px, --color-blue
└────────────────────────────────────────────────┘
```

- Background: white
- Border: 1px solid --color-gray-200
- Left border accent: 3px solid --color-blue (overrides the left side of the outer border)
- Border-radius: 8px
- Padding: 28px 24px 24px 24px (extra top for number)
- Hover: box-shadow: 0 4px 20px rgba(0,0,0,0.08); translateY(-2px) transition 180ms ease
- 7 cards (01–07): desktop 3-col grid, lone last-row card centered via :last-child:nth-child(3n+1) { grid-column: 2 }

**Mobile (< 768px):**
- Full-width single column
- Same padding
- Tap anywhere on card navigates to service page

---

### 4. Client Pill Grid (Trust Bar)

```
┌─────────────────────────────┐  ┌─────────────────────────────┐  ┌─────────────────────────────┐
│  Customers Bank             │  │  Parke Bank                 │  │  Artisans Bank              │
│  Philadelphia, PA           │  │  Mount Laurel, NJ           │  │  Wilmington, DE             │
└─────────────────────────────┘  └─────────────────────────────┘  └─────────────────────────────┘
```

- Pill: white bg, 1px solid --color-gray-200, border-radius: 8px
- Padding: 14px 18px
- Institution name: Inter 500, 14px, --color-gray-900
- Location: Inter 400, 12px, --color-gray-400
- Hover: border-color --color-blue, background --color-blue-light, transition 150ms
- Show 12 of 33 on homepage; all 33 on /clients
- "View all 33 clients →" below grid: Inter 500, 14px, --color-blue
- Mobile: 1 column, slightly reduced padding
- Wide desktop (≥1280px): 4 columns

---

### 5. Page Hero (Interior Pages)

```
┌──────────────────────────────────────────────────────────────────┐
│ [Navy overlay on photo, rgba(19,31,69,0.74)]                     │
│                                                                  │
│  Home / Consulting Services / Independent Loan Review            │  ← breadcrumb
│  Independent Loan Review for Banks and Financial Institutions    │  ← H1: Playfair, white, left
│  [optional 1-line descriptor]                                    │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
└──────────────────────────────────────────────────────────────────┘
```

- Height: 280px desktop, 220px mobile
- H1: Playfair Display, white, left-aligned (NOT centered — homepage only centers)
- Breadcrumb: Inter 400, 13px, rgba(255,255,255,0.60), above H1, margin-bottom: 12px
- Optional descriptor: Inter 400, 18px, rgba(255,255,255,0.82), below H1

---

### 6. Process Steps

Desktop (horizontal):
```
 ①──────────────────②──────────────────③──────────────────④
 Portfolio          Risk Assessment    Findings &          Regulatory
 Understanding      & Rating           Reporting           Alignment
```

- Step circle: 40px, --color-navy bg, white Inter 700 14px number
- Connector line: 1px dashed --color-gray-200, between circles
- Title: Inter 600, 15px, --color-gray-900, mt 16px
- Body: Inter 400, 13px, --color-gray-600, mt 6px

Mobile (vertical):
```
 ①
 │  Portfolio Understanding
 │  We begin with your portfolio...
 ②
 │  Risk Assessment & Rating
 │  ...
```

- Left border: 2px solid --color-gray-200
- Circle offset left of border
- Stacks naturally, full width

---

### 7. Engagement / Case Cards (/clients page)

```
┌─────────────────────────────────────────────────────────────┐
│▌                                                            │
│  [LOAN REVIEW]                                              │  ← badge
│                                                             │
│  Independent Loan Review — $850M Community Bank, PA        │  ← Inter 600, 17px
│                                                             │
│  Portfolio of 4,200 loans reviewed across CRE, C&I,        │  ← Inter 400, 14px
│  and consumer segments. Identified $12M in credit          │    gray-600
│  classification discrepancies ahead of FDIC examination.   │
└─────────────────────────────────────────────────────────────┘
```

- Left border: 3px solid --color-blue (same as service cards)
- Badge: --color-blue-light bg, --color-blue text, Inter 500, 11px, 6px radius, px 8 py 3
- Border: 1px solid --color-gray-200, radius 8px
- Grid: 2-col desktop, 1-col mobile
- Padding: 24px

---

### 7b. Team Profile Rows (/about page — v2.1, 2026-07-10)

```
┌──────────────────────────────────────────────────────────────────┐
│ ┌──────────┐   Ted Ahn                          ← Inter 500, 22px │
│ │  photo   │   Team Leader                      ← Inter 600, 14px,│
│ │ 232×290  │                                      --color-blue    │
│ │ (4:5)    │   Full bio text flows here at max-width 72ch,        │
│ └──────────┘   line-height 1.7, always fully visible...           │
├───────────────── 1px solid --color-gray-200 ─────────────────────┤
│ next member...                                                    │
```

- One full-width row per member; NO card, NO Read more toggle
- Rationale: long bios must stay intact (firm requirement); a wide text column
  absorbs length gracefully where a narrow card cannot
- Photo: fixed 232px column (192px tablet, 176px stacked on mobile), aspect 4:5,
  object-fit cover, radius 8px, top-aligned
- Name: Inter 500 22px --color-gray-900 · Title: Inter 600 14px --color-blue
- Bio: Inter 400 15px, line-height 1.7, --color-gray-600, max-width 72ch
- Divider between rows: 1px solid --color-gray-200; rows padded 32px vertical
- Mobile (<640px): photo stacks above text at 176px wide
- Team leader is simply the first row — no special featured treatment

---

### 8. CTA Banner

```
┌──────────────────────────────────────────────────────────────────┐
│ [Navy gradient: --color-navy to --color-navy-mid]                │
│                                                                  │
│            Ready to strengthen your credit oversight?            │  ← Playfair Display, white
│     Talk with our team about loan review, CECL, or stress        │  ← Inter 400, 17px, 80% white
│                 testing for your institution.                     │
│                                                                  │
│                     [  Contact Us  ]                             │  ← white button, navy text
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
└──────────────────────────────────────────────────────────────────┘
```

- Background: `linear-gradient(135deg, --color-navy 0%, --color-navy-mid 100%)`
- Section py: 80px desktop, 56px mobile
- Text: centered

---

### 9. Footer

- Background: --color-navy-dark
- 3-column layout on desktop (stacks on mobile):
  - Col 1: Logo + descriptor (40% width)
  - Col 2: Navigation links
  - Col 3: Contact info (phone, email, address)
- Divider: 1px solid rgba(255,255,255,0.10)
- Copyright: Inter 400, 12px, rgba(255,255,255,0.40)
- Links: rgba(255,255,255,0.70) → white on hover, no underline
- Mobile: 1 column, stacked order: logo → contact → nav

---

### 10. Contact Page — Sidebar

Pull "responds within 1 business day" OUT of body text — make it a standalone badge:
```
┌────────────────────────────────────┐
│  Ted Ahn, President                │
│                                    │
│  ☎  (267) 816-4272                │
│  ✉  Tedahn@crfadvisors.com        │
│  ⊙  Philadelphia, PA              │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ ✓ Responds within 1 business │  │  ← green-tinted trust badge
│  │   day                        │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

Trust badge: --color-success text, light green bg (rgba(5,150,105,0.08)), 1px solid rgba(5,150,105,0.25)

---

## Motion & Interaction

```css
/* Global transition defaults */
--transition-fast:   150ms ease;   /* color, border, background */
--transition-base:   200ms ease;   /* shadow, transform */
--transition-slow:   300ms ease;   /* section reveals */

/* Card hover */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

No parallax. No scroll-triggered JS animations above the fold. Keep it fast and accessible.

---

## Mobile-Specific Rules

- Minimum tap target: 44×44px
- Font: never below 14px (16px for body)
- Buttons: full-width on mobile for primary CTAs in hero and CTA banner
- Nav: hamburger at <768px, drawer z-index above content
- Hero stats: stack 3×1 vertically, reduce number size to 22px
- Process steps: vertical timeline with left-border
- Service cards: full-width, no grid, 16px gap

---

## Wide Desktop Rules (≥1280px)

- All containers: max-width 1200px, margin: 0 auto
- Client pills: 4-col grid
- Hero: H1 max-width 800px centered
- Stat boxes: max-width 480px row, centered
- Section padding: --section-py-wide (120px)
- Typography: clamp() values hit their maximum ceiling

---

## Anti-Patterns (Do Not Use)

| Pattern | Why banned |
|---------|------------|
| All-caps section eyebrows ("WHAT WE DO") | Template tell; removed in v2 |
| Icon squares for service cards | All 5 look identical; replaced by numbers |
| Quote card in homepage hero | Founder philosophy ≠ visitor conversion; moved to About |
| Playfair Display on H2+ | Dilutes hierarchy; Inter only below H1 |
| Multiple CTAs in hero | Split attention; one action in hero only |
| `ul` list for trust bar | Visually dead; replaced by pill grid |
| box-shadow heavier than `0 6px 24px rgba(0,0,0,0.12)` | Looks cheap |
| border-radius above 12px on cards | Off-brand for institutional |
| Rounded corners on single-side bordered elements | CSS error pattern |
| Visible placeholder text on live pages | Kills trust immediately |
