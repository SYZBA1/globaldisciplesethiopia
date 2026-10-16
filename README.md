# Global Disciples Alliance Ethiopia — Official Website

This repository contains the complete, production-ready website for **Global Disciples Alliance Ethiopia**, developed in strict accordance with the **Global Disciples Alliance Ethiopia Website Product Requirements, UX/UI & Technical Development Specification v1.0**.

The website is closely inspired by the visual language, editorial typography, information hierarchy, and storytelling structure of [Global Disciples International](https://globaldisciples.org/), while using authentic Ethiopian ministry context, verified field data, and clearly marked organizational placeholders.

---

## 🌟 Key Features & Architecture

### 1. Visual & Design System (PRD Sections 6–10, 40)
- **Brand Palette:** Global Disciples Navy (`#0D2744`, `#081729`), Warm Ochre Accent (`#E28723`, `#C97116`), Cream and Stone surfaces (`#FAF7F2`, `#F4F5F7`), with subtle Ethiopian geometric motifs (`#1E6B38`, `#EAB308`, `#B91C1C`).
- **Typography:** Modern editorial styling pairing `Plus Jakarta Sans` for headlines, `Inter` for body text, and `Noto Sans Ethiopic` for upcoming Amharic localization.
- **Multilingual Ready:** Architecture prepared for Amharic with an interactive preview switcher in the header and mobile drawer.
- **Micro-Interactions & Animation:** Viewport-triggered animated impact counters (`0 → target`), sticky header scroll transitions, video storytelling modal, and accessible `@media (prefers-reduced-motion: reduce)` fallbacks.

### 2. Complete Sitemap & Pages (PRD Section 12)
- **Homepage (`/`):** Implements all 12 distinct sections specified in PRD Sections 13–24:
  1. *Hero* (Headline, supporting statement, primary & secondary CTAs, documentary video trigger)
  2. *Mission / Need* (The One-Third reality in Ethiopia)
  3. *Who We Are* (Ethiopian identity, alliance relationship, mission & vision)
  4. *Why Ethiopia / Least-Reached* (Verified census & research statistics `STAT_01`, `STAT_02`, `STAT_03`)
  5. *Our Approach* (Interactive 5-stage multiplying process: Equip → Train → Send → Multiply → Transform)
  6. *Programs* (Large editorial cards for core training curricula)
  7. *Impact* (Animated verified counters with defined reporting periods & source citations)
  8. *Stories* (Featured testimony + secondary dispatch cards)
  9. *Video / Documentary* (Immersive video block with interactive player modal)
  10. *Transformation* (3-step cycle of community and spiritual multiplication)
  11. *Get Involved* (Pray, Partner, Serve, Give action cards)
  12. *Final CTA* (Restrained, emotional invitation to partner)

- **About (`/about`, `/about/story`, `/about/vision-mission`, `/about/leadership`, `/about/partners`):**
  - Historical timeline from 1996 to 2026.
  - Core values, doctrinal foundations, and near-neighbor strategy.
  - Leadership directory with Board of Trustees and operational roles.
  - Partner church alliances (EFECO, EKHC, EECMY, Mulu Wengel, MKC, grassroots alliances).

- **Why Least-Reached (`/why/least-reached`, `/why/ethiopia-context`):**
  - Exploration of the global One-Third focus.
  - 5 strategic regional corridors: Afar, Somali borderlands, Benishangul-Gumuz, Gambella/South Omo, and rural Oromia.

- **Our Approach (`/approach`):**
  - Church clustering philosophy, church-based training, and tentmaking/small business sustainability.
  - Interactive process breakdown and model FAQs.

- **Programs (`/programs`, `/programs/:slug`):**
  - Dedicated pages for *Discipleship-Mission Training*, *Small Business Development*, *Leadership Development*, and *Church Multiplication*.
  - Standardized PRD Section 30 template: Hero → Why → What We Do → Who Participates → How Training Works → Impact → Story → CTA.

- **Stories & Testimonies (`/stories`, `/stories/:slug`):**
  - Filterable by categories (Testimony, Discipleship, Leadership, Church, Community) and search keywords.
  - Detailed reading layout with pull-quotes, field galleries, and related stories.

- **Events & Summits (`/events`, `/events/:slug`):**
  - National summits, master trainer cohorts, and prayer conferences.
  - Interactive delegate registration form with client-side validation and confirmation feedback.

- **Resource Library (`/resources`):**
  - Searchable publications: annual audited reports, pastoral cluster handbooks, 30-day prayer calendars, and training modules.

- **Get Involved (`/get-involved`, `/get-involved/pray`, `/get-involved/partner`, `/get-involved/volunteer`):**
  - Interactive tabs and dedicated forms for intercessors, church pastors, and vocational volunteers.

- **Give (`/give`):**
  - Ethiopian banking methods: Commercial Bank of Ethiopia (CBE), Telebirr, Dashen Bank, and international channels.
  - One-click copy-to-clipboard for account numbers and financial transparency pledge.

- **Contact (`/contact`):**
  - Interactive message form with client validation and anti-spam honeypot.
  - Physical office location in Bole Sub-City, Addis Ababa, official emails, phone numbers, office hours, and map.

- **FAQ (`/faq`):**
  - Categorized searchable accordions covering all aspects of the alliance.

- **Governance & Legal (`/privacy-policy`, `/terms`):**
  - Dedicated privacy policy with strict protection of frontline worker identity in sensitive regions.

---

## 🛡️ Compliance with PRD Content Rules (PRD Section 49, 58, 59)

In strict accordance with the project specification:
- **No invented statistics:** All figures include defined reporting periods and verified source attributions (e.g., Central Statistics Agency, Joshua Project, ECFE, Alliance Field Audits).
- **Clear Placeholder Markings:** Missing organizational decisions (exact office building suite, bank account numbers, specific appointed board names) are highlighted with reusable `PlaceholderBadge` components and explicit notices (`[PENDING OFFICIAL APPOINTMENT]`, `[PENDING CBE ACCOUNT #]`).

---

## 💻 Tech Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite 6
- **Routing:** React Router v6
- **Styling:** Tailwind CSS with centralized design tokens in `tailwind.config.js` and `index.css`
- **Icons:** Lucide React
- **Accessibility:** WCAG 2.2 AA compliant semantic HTML, keyboard focus states, skip-to-content links, ARIA attributes, and reduced motion styling.
- **SEO:** Dynamic head management (title, meta description, OpenGraph tags), `robots.txt`, and XML `sitemap.xml`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ (tested on Node v24)
- npm v9+

### Installation
```bash
# Clone the repository
cd globaldisciplesethiopia

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to view the website in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally.
