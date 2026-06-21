# Artsy Stories

A premium graphic design and digital art studio website — colorful,
comic/pop-art inspired, and built to feel fun without losing the trust a
client needs before placing a paid order.

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **lucide-react** for icons
- Self-hosted fonts via `@fontsource` (Lilita One, Plus Jakarta Sans, Space Mono) — no external font fetch needed at build time
- Dummy/mock data in `src/lib/data.ts` (swap for real API calls later)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

`npm run build` has been verified to complete successfully with no
TypeScript or ESLint errors.

## Project Structure

```
src/
  app/                 Route segments (App Router)
    page.tsx           Home
    portfolio/         Portfolio wall (search + category filters)
    services/          Business Design + Digital Art Studio services
    pricing/           Pricing tiers
    order/             Multi-step order form + live price estimate
    dashboard/         Client dashboard (orders, revisions, messages, invoices, downloads)
    admin/             Artist/Admin dashboard (clients, projects, deliverables, invoicing, analytics)
    about/             Story, mission, vision, values, process, AI policy
    faq/               FAQ accordion
    contact/           Contact form, email, social placeholders, business hours
  components/          Reusable UI components (Navbar, Footer, Hero, cards, dashboards, etc.)
  lib/
    data.ts            All dummy data: services, portfolio, pricing, testimonials, FAQ, dashboard mocks
    utils.ts           Small helpers (`cn`, `formatDate`)
```

## Design System

The visual language is a hand-drawn comic/pop-art system, defined as CSS
custom properties in `src/app/globals.css`:

- **Ink outlines + offset "pop" shadows** (`.comic-border`, `.shadow-pop`) instead of soft drop shadows
- **Stamp badges** (`.stamp`) — a recurring rotated rubber-stamp shape used for prices, status, and tags
- **Halftone dot texture** (`.halftone`) for panel backgrounds
- **Comic gutter dividers** (`.comic-gutter`) between major sections
- A floating star-mascot ("Coco") used in the hero and CTA sections
- All animation respects `prefers-reduced-motion`

Colors, fonts, and shadows are defined once as CSS variables / Tailwind v4
theme tokens, so the palette can be retuned from one place.

## Notes

- The **Order**, **Client Dashboard**, and **Artist/Admin Dashboard** pages
  are fully interactive on the frontend but are not wired to a backend —
  form submissions, file uploads, and status changes are mocked with
  in-memory React state, ready to be connected to real APIs later.
- Portfolio artwork is represented with stylized gradient + icon placeholders
  rather than real images, so the project runs with zero external image
  dependencies. Swap in real artwork via `next/image` when ready.
- Deployable to Vercel with no extra configuration.
