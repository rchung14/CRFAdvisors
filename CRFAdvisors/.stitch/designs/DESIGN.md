# CRF Advisors, Inc. — Design System

> Design direction for the Stitch-Loop rebuild of crf-advisors.vercel.app
> Vibe: Institutional · Authoritative · Precise · Trustworthy
> Theme: Keep existing navy/blue palette — elevate execution quality
> Reference site: https://crf-advisors.vercel.app

---

## Brand Snapshot

**Company:** CRF Advisors, Inc.
**Industry:** Credit Risk Management / Financial Institution Consulting
**Audience:** CFOs, CROs, Chief Credit Officers, Compliance Officers, Bank Examiners, Audit Committees at community banks, savings institutions, FCUs
**Tone:** Expert, institutional, direct. No marketing fluff. This audience trusts precision over personality.
**Design goal:** Same color DNA as the existing Vercel site — deep navy, blue gradient, white — but rebuilt with proper hierarchy, spacing, typography, and component polish. Think McKinsey microsite meets modern SaaS documentation.

---

## Color Palette

Extracted from existing site + refined:

| Token                | Hex        | Usage                                                        |
|----------------------|------------|--------------------------------------------------------------|
| `--navy`             | `#1B2A6B`  | Primary. Nav, footer, hero overlay, CTA bg, section accents  |
| `--navy-dark`        | `#111E52`  | Hover states, deep footer bg                                 |
| `--blue-mid`         | `#3B5BDB`  | Accent. Active nav underlines, link hovers, icon fills       |
| `--blue-light`       | `#4C6EF5`  | Gradient partner. Approach section bg, CTA banner gradient   |
| `--blue-gradient`    | `linear-gradient(135deg, #1B2A6B 0%, #3B5BDB 100%)` | Hero overlay, CTA banners, section dividers |
| `--white`            | `#FFFFFF`  | Page backgrounds, card surfaces, text on navy                |
| `--off-white`        | `#F8F9FC`  | Alternating section backgrounds                              |
| `--black`            | `#0D0D0D`  | Body text, headings on white                                 |
| `--gray-mid`         | `#6B7280`  | Subtext, captions, metadata                                  |
| `--gray-light`       | `#E5E7EB`  | Borders, dividers, table lines                               |
| `--gray-bg`          | `#F1F3F5`  | Card backgrounds on light sections                           |
| `--accent-steel`     | `#CBD5E1`  | Subtle dividers on dark backgrounds                          |

**Color rules:**
- Navy is dominant. The existing site's blue gradient is its identity — keep it.
- White + off-white alternate section backgrounds to create rhythm without using color blocking.
- `--blue-mid` (#3B5BDB) is the one interactive color: links, active states, icon accents, underlines.
- Never use teal, green, orange, or warm tones — this is an institutional brand.
- On dark (navy) backgrounds: white text only. Never gray.
- Hero overlay: dark photo + `rgba(27, 42, 107, 0.72)` overlay — lets photo breathe while keeping text readable.

---

## Typography

### Typeface Roles

| Role           | Family              | Source       |
|----------------|---------------------|--------------|
| Display / Hero | `Playfair Display`  | Google Fonts |
| Body / UI      | `Inter`             | Google Fonts |
| Labels / Caps  | `Inter` uppercase   | Google Fonts |

**Rationale:** The existing site uses a clean sans-serif. Introducing Playfair Display for display headings signals authority and prestige — appropriate for a firm advising institutions on hundreds of millions in loan portfolios. Inter keeps body and UI clean, readable, and professional.

### Type Scale

| Level       | Font        | Size    | Weight | Line Height | Usage                            |
|-------------|-------------|---------|--------|-------------|----------------------------------|
| `display`   | Playfair    | 52–64px | 700    | 1.1         | Hero headline                    |
| `h1`        | Playfair    | 40px    | 700    | 1.2         | Page titles                      |
| `h2`        | Playfair    | 30px    | 600    | 1.25        | Section headings                 |
| `h3`        | Inter       | 20px    | 600    | 1.3         | Card titles, service names       |
| `h4`        | Inter       | 16px    | 600    | 1.4         | Sub-section labels               |
| `body-lg`   | Inter       | 18px    | 400    | 1.7         | Hero subtext, intro paragraphs   |
| `body`      | Inter       | 16px    | 400    | 1.65        | General body text                |
| `small`     | Inter       | 14px    | 400    | 1.5         | Captions, metadata, card details |
| `label`     | Inter       | 11px    | 600    | 1.4         | ALL CAPS, 0.1em tracking. Eyebrows, tags, nav links |

**Rules:**
- Nav links: Inter 13px, 600, ALL CAPS, letter-spacing 0.08em — matches existing site feel
- Service section H2s: Playfair Display — signals expertise, gives each service gravitas
- Body copy: left-aligned always. Never center body paragraphs.
- Pull quote (Ted Ahn hero): Playfair Display italic or regular, 22–28px, centered — this is the one exception to left-align rule

---

## Spacing System

Base: `8px`

| Token     | Value | Usage                               |
|-----------|-------|-------------------------------------|
| `--sp-1`  | 8px   | Inline gaps, icon padding           |
| `--sp-2`  | 16px  | Internal component padding          |
| `--sp-3`  | 24px  | Card padding, form field gaps       |
| `--sp-4`  | 32px  | Between related elements            |
| `--sp-6`  | 48px  | Section internal padding            |
| `--sp-8`  | 64px  | Section vertical rhythm (desktop)   |
| `--sp-12` | 96px  | Major section breaks                |
| `--sp-16` | 128px | Hero padding                        |

---

## Layout

### Grid
- **Desktop:** 12-column, 1280px max-width container, 24px gutters
- **Tablet:** 8-column, fluid, 20px gutters
- **Mobile:** 4-column, 16px gutters, 16px horizontal padding

### Breakpoints
| Name    | Width       |
|---------|-------------|
| mobile  | < 640px     |
| tablet  | 640–1024px  |
| desktop | 1024–1440px |
| wide    | > 1440px    |

### Container
- Content: `1280px` max-width, centered
- Text blocks: `740px` max-width
- Hero content: `860px` max-width, centered

---

## Components

### Navigation
```
Height: 68px desktop / 60px mobile
Background: #1B2A6B (navy)
Logo: White text, Inter 700 or Playfair Display
Nav links: White, Inter 13px 600, ALL CAPS, letter-spacing 0.08em, 28px gap
Active: 2px white underline bottom
CTA button: White bg + navy text (#1B2A6B), Inter 13px 600, 36px height, 16px h-padding, border-radius 4px
Sticky: yes — stays solid navy, no shadow change
Mobile: hamburger (3-line icon → X), slide-down or full-height drawer, navy bg
```

### Hero (Home)
```
Layout: Full-width. Dark architectural/financial photo. Semi-transparent navy overlay (rgba 0.72).
Content: Centered quote block in a subtle border/card — frosted glass or rgba(255,255,255,0.08) bg, 1px rgba(255,255,255,0.15) border
Quote: Playfair Display 20px, white, line-height 1.7, max-width 760px
Attribution: Inter 14px, rgba(255,255,255,0.75), margin-top 16px
CTAs below quote: Primary white pill + ghost white-outline pill
Min-height: 520px desktop / 380px mobile
```

### Page Hero (Interior Pages)
```
Background: linear-gradient(135deg, #1B2A6B 0%, #3B5BDB 100%)
Height: 180px desktop / 140px mobile
H1: Playfair Display 40px, white
Breadcrumb: Inter 13px, rgba(255,255,255,0.6) — Home / Page Name
Padding: 0 40px, vertically centered
```

### Service Cards
```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 6px
Padding: 32px
Hover: box-shadow 0 4px 20px rgba(27,42,107,0.10), translateY(-2px), 200ms ease
Icon: 44x44px, background #1B2A6B, border-radius 8px, white Lucide icon inside
H3: Inter 600, 18px, #0D0D0D
Body: Inter 16px, #6B7280, line-height 1.65
Link: #3B5BDB, Inter 14px 600, "Learn more →", underline on hover
Service grid: 3-col desktop, 2-col tablet, 1-col mobile
```

### Team Member Cards (About Page)
```
Layout: 3-col desktop, 2-col tablet, 1-col mobile
Card bg: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 8px
Overflow: hidden

Image placeholder:
  - Aspect ratio: 1:1 (square)
  - Background: linear-gradient(135deg, #1B2A6B, #3B5BDB)
  - Centered initials or person icon (white, 48px)
  - Label: "[First Last] — Photo" in small white text
  - Do NOT use avatar illustrations

Content area padding: 24px
Name: Inter 600, 18px, #0D0D0D
Title: Inter 500, 14px, #3B5BDB (blue accent)
Bio: Inter 400, 14px, #6B7280, line-height 1.6, clamped to 4 lines with "Read more" expand
LinkedIn: icon-only link, bottom right, #CBD5E1 default → #3B5BDB hover
```

### Client List (Clients Page)
```
Layout: 3-col grid desktop, 2-col tablet, 1-col mobile
Each entry: simple card or list item
Institution name: Inter 600, 15px, #0D0D0D
Location: Inter 400, 13px, #6B7280
Card: white bg, 1px #E5E7EB border, 6px radius, 16px 20px padding
No logos (don't have them) — clean text-only list reads more professional than empty logo boxes
Optional: state grouping with sticky section labels (PA / NJ / DE / MD / Other)
```

### Process Steps (Timeline)
```
Layout: Horizontal 4-step on desktop, vertical stack on mobile
Connector: 1px #E5E7EB line between steps (desktop only)
Step number: 32x32px circle, bg #1B2A6B, white Inter 700 14px
Step title: Inter 600, 16px, #0D0D0D
Step body: Inter 400, 14px, #6B7280
```

### Approach Cards (3-col)
```
Background: #F8F9FC (off-white) OR inside a blue gradient section (navy bg, white text)
Icon: 40px, stroke style (Lucide), #3B5BDB on light bg / white on navy bg
H3: Inter 600, 18px
Body: Inter 400, 15px, #6B7280 (light bg) / rgba(255,255,255,0.8) (navy bg)
No border on navy bg sections — let bg do the work
```

### Buttons
```
Primary:
  Background: #1B2A6B
  Text: #FFFFFF, Inter 600, 14px
  Padding: 12px 28px
  Border-radius: 4px
  Hover: #111E52
  Transition: 200ms ease

Ghost (on white bg):
  Border: 1.5px solid #1B2A6B
  Text: #1B2A6B
  Background: transparent
  Hover: bg #1B2A6B, text #FFFFFF

Ghost (on navy bg):
  Border: 1.5px solid rgba(255,255,255,0.6)
  Text: #FFFFFF
  Hover: bg rgba(255,255,255,0.15)

White (on navy bg):
  Background: #FFFFFF
  Text: #1B2A6B, Inter 600
  Hover: bg #F8F9FC
```

### Forms (Contact Page)
```
Label: Inter 13px 600, #0D0D0D, margin-bottom 6px
Input/Select: height 44px, bg #FFFFFF, border 1px solid #E5E7EB, border-radius 4px, padding 0 14px, Inter 15px
Textarea: min-height 120px, same styling
Focus: border-color #3B5BDB, box-shadow 0 0 0 3px rgba(59,91,219,0.12)
Error: border-color #DC2626, small error text below field
Submit: Primary button, full width on mobile, right-aligned on desktop
```

### CTA Banner
```
Background: linear-gradient(135deg, #1B2A6B 0%, #3B5BDB 100%)
H2: Playfair Display 34px, white
Subtext: Inter 17px, rgba(255,255,255,0.75)
Button: White bg + navy text
Padding: 80px 0
```

### Footer
```
Background: #111E52 (navy-dark)
Top section bg: #1B2A6B
Divider: 1px rgba(255,255,255,0.1)
Logo: white, Playfair Display or Inter 700
Nav links: rgba(255,255,255,0.65), Inter 13px, hover → white
Contact info: rgba(255,255,255,0.8), Inter 14px
Copyright: rgba(255,255,255,0.35), Inter 12px
Privacy/Terms: rgba(255,255,255,0.45), Inter 12px
Two-column: firm info + links left | contact right
```

---

## SEO Implementation Requirements

### Meta Tags (every page)
```html
<title>[Page Title] | CRF Advisors — Credit Risk & Loan Review Specialists</title>
<meta name="description" content="[60-160 char description with primary keyword]" />
<meta name="keywords" content="loan review, credit review, CECL, stress testing, ALLL, bank credit risk, FCU loan review, financial institution consulting" />
<link rel="canonical" href="https://crf-advisors.vercel.app/[page]" />

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="..." />

<!-- Twitter -->
<meta name="twitter:card" content="summary" />
```

### Structured Data (JSON-LD)

**Organization (all pages, in `<head>`):**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CRF Advisors, Inc.",
  "url": "https://crf-advisors.vercel.app",
  "telephone": "+12678164272",
  "email": "Tedahn@crfadvisors.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Philadelphia",
    "addressRegion": "PA",
    "addressCountry": "US"
  },
  "areaServed": ["PA", "NJ", "DE", "MD", "NY"],
  "description": "Independent loan review, credit risk management, CECL implementation, and portfolio stress testing for banks and financial institutions.",
  "knowsAbout": ["Loan Review", "CECL", "ALLL", "Portfolio Stress Testing", "Credit Risk Management", "Due Diligence"]
}
```

**Person schema — each team member (About page):**
```json
{
  "@type": "Person",
  "name": "Ted Ahn",
  "jobTitle": "President",
  "worksFor": { "@type": "Organization", "name": "CRF Advisors, Inc." }
}
```

### Content SEO Rules
- H1: one per page, contains primary keyword
- H2s: contain secondary keywords naturally — do not keyword-stuff
- Alt text on all images/placeholders: descriptive, includes keyword where natural
  - Example: `alt="Ted Ahn, President of CRF Advisors, credit risk management firm in Philadelphia PA"`
- Internal links: every page links to Consulting Services and Contact
- Page load: no blocking scripts, fonts preloaded via `<link rel="preload">`
- `robots.txt`: allow all pages, disallow `/api/`
- `sitemap.xml`: auto-generated with all 5 pages

---

## Iconography

- **Library:** Lucide Icons (outline, 24px default, 1.5px stroke)
- **On light backgrounds:** `#1B2A6B` (navy)
- **On dark/navy backgrounds:** `#FFFFFF`
- **Service icons (suggested):**
  - Loan Review → `file-search` or `clipboard-check`
  - Due Diligence → `search` or `zoom-in`
  - Stress Testing → `activity` or `trending-down`
  - ALLL → `calculator` or `percent`
  - CECL → `database` or `layers`

---

## Imagery Guidelines

- **Hero:** Architectural / financial district photography. Dark tones preferred. Avoid bright or warm-toned photos.
- **About page:** Professional headshot placeholders. Square crop, 1:1. Gradient bg with initials until real photos provided.
- **No:** Cartoon illustrations, stock handshake photos, generic business meeting clipart
- **Section images:** Financial documents, data/charts (abstract), cityscape — all dark-toned
- All image placeholders: navy-to-blue gradient bg + white label text showing what the image should be

---

## Motion

- Default transition: `200ms ease` on color, opacity, transform
- Card hover: `translateY(-2px)` + shadow in, `200ms ease`
- Page transitions: fade-in on load (opacity 0→1, 300ms)
- Scroll animations: subtle `translateY(16px) → 0` + opacity, triggered at viewport entry, `400ms ease-out`
- `prefers-reduced-motion`: disable all transitions and scroll animations
- No: parallax, auto-play video, heavy animation — this audience is not here for motion design

---

## Stitch Home Screen Component Inventory

Build order for the Loop:

1. `NavBar` — sticky, navy, logo + ALL CAPS links + CTA
2. `HeroQuote` — full-width photo + navy overlay + centered quote card + 2 CTAs
3. `ServicesGrid` — 5 service cards (3+2 layout), icon + title + body + link
4. `ApproachSection` — 3-col on blue-gradient bg, white text
5. `ProcessTimeline` — 4-step horizontal, navy numbered circles
6. `ClientTrustBar` — institution count stat + scrolling name strip or grid
7. `CTABanner` — gradient bg, Playfair headline, white button
8. `Footer` — dark navy, 2-col, links + contact

---

## Anti-Patterns (Do Not Do)

- ❌ Centered body text in paragraphs (fine for hero quote only)
- ❌ Teal, green, orange, or warm accent colors — not this brand
- ❌ Rounded corners > 8px — too playful, not institutional
- ❌ Drop shadows heavier than `0 4px 20px rgba(0,0,0,0.10)`
- ❌ More than 2 typefaces
- ❌ Empty logo boxes for client list — use clean text cards instead
- ❌ Decorative illustrations or icons that aren't Lucide
- ❌ Hero text without overlay — photo alone won't pass contrast ratios
- ❌ Team avatar illustrations — use initials on gradient until real photos arrive
- ❌ Auto-playing anything
- ❌ `X-Powered-By` header exposure (set `poweredByHeader: false` in next.config.js)
