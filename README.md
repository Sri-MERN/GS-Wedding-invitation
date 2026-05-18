# R. Gururajan & S. Shagathiya — Wedding Invitation

A cinematic, luxury single-page wedding invitation microsite built with **TanStack Start**, **React**, **Vite**, **Tailwind CSS v4**, and **Cloudflare Workers**.

> **Wedding Date:** June 7, 2026 | **Venue:** D.R. Mahal, Santhapet, Chennai

---

## Features

- **Cinematic Preloader & Intro** — Full-screen animated invitation overlay with monogram, floating particles, celebration burst, and background music
- **Parallax Hero** — Scrolling cinematic hero with shimmering typography, slow-floating portraits, and ambient glow
- **Live Countdown** — Real-time countdown to the wedding ceremony with glass-card tiles
- **3D Tilt Couple Portraits** — Asymmetrical editorial layout with spring-based mouse-tracking parallax, golden borders, and Tamil titles
- **Love Story Timeline** — Three chapters: Family Blessings, The Engagement, The Wedding
- **Premium Section Dividers** — Glowing gold lines with temple-inspired star motifs and pulsating accent dots
- **Events Cards** — Ceremony & Reception with date/time/venue, directions, and Google Calendar links
- **Photo Gallery** — Responsive masonry-like grid with 8 images and full-screen lightbox
- **Family Blessings** — Collapsible accordion cards for both families
- **RSVP Actions** — WhatsApp, Call, and Navigate buttons
- **Emotional Ending Section** — Cinematic closing with heartfelt message, glowing monogram, warm gold vignette, and floating particles
- **Background Audio** — Looping ambient music with elegant floating toggle button with animated soundwave bars
- **Mobile Perfection** — App-like, smooth, and luxurious on mobile with responsive typography, optimized touch targets, reduced particle counts for performance, and immersive full-screen sections
- **Atmosphere** — Floating golden petals, twinkling diya-like particles, grain texture overlay, warm gold ambient glow, cinematic lighting gradients

---

## Getting Started

### Prerequisites

- **Node.js** >= 20
- **npm** >= 10

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server at **http://localhost:8080** with Hot Module Replacement.

### Build

```bash
npm run build
```

Produces a production build (SSR + client bundles) in `dist/`.

### Preview

```bash
npm run preview
```

Preview the production build locally.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server (port 8080) |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint all files with ESLint |
| `npm run format` | Format all files with Prettier |

---

## Project Structure

```
src/
├── assets/                        # Images, audio (music.mp3, music.ogg)
│   ├── groom.jpg / groom.png
│   ├── bride.jpg / bride.png
│   ├── hero-bg.jpg
│   ├── gallery-1.jpg through gallery-6.jpg
│   ├── music.mp3 / music.ogg
├── components/
│   ├── ui/                        # ~38 shadcn/ui components (Button, Card, Dialog, etc.)
│   └── wedding/                   # Wedding-specific components
│       ├── Intro.tsx               # Full-screen invitation overlay
│       ├── Hero.tsx                # Parallax cinematic hero
│       ├── Countdown.tsx           # Live countdown timer
│       ├── Couple.tsx              # 3D tilt portrait cards
│       ├── Story.tsx               # Love story timeline
│       ├── Events.tsx              # Wedding ceremony & reception cards
│       ├── Gallery.tsx             # Photo grid with lightbox
│       ├── Family.tsx              # Collapsible family accordions
│       ├── RSVP.tsx                # RSVP action buttons
│       ├── Ending.tsx              # Emotional cinematic closing
│       ├── Footer.tsx              # Closing footer with monogram
│       ├── Celebration.tsx         # Full-screen celebration burst
│       ├── Monogram.tsx            # Animated G&S emblem
│       ├── Petals.tsx              # Floating golden petals
│       ├── Particles.tsx           # Twinkling diya particles
│       ├── Divider.tsx             # Premium section dividers
│       ├── Ornament.tsx            # Star/sparkle ornament
│       ├── Preloader.tsx           # Initial loading screen
│       └── Reveal.tsx              # Scroll-triggered fade-in wrapper
├── hooks/
│   └── use-mobile.tsx
├── lib/
│   ├── utils.ts                   # cn() utility (clsx + tailwind-merge)
│   ├── error-capture.ts           # Global SSR error capture
│   └── error-page.ts              # Error page HTML renderer
├── routes/
│   ├── __root.tsx                  # Root layout, head meta, error/404 pages
│   └── index.tsx                   # Single-page route composing all sections
├── routeTree.gen.ts               # Auto-generated router tree
├── router.tsx                     # TanStack Router + QueryClient setup
├── server.ts                      # Cloudflare Workers entry (fetch handler)
├── start.ts                       # TanStack Start instance
└── styles.css                     # Tailwind CSS v4 + custom theme
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **TanStack Start** v1.167 | Full-stack SSR framework |
| **TanStack Router** v1.168 | Type-safe routing |
| **React** v19 | UI framework |
| **Vite** v7 | Build tool & dev server |
| **Tailwind CSS** v4 | Utility-first styling |
| **Framer Motion** v12 | Animations, scroll effects, 3D tilt |
| **shadcn/ui** (Radix primitives) | Reusable UI components |
| **Cloudflare Workers** | Serverless deployment |
| **TypeScript** | Type safety |

---

## Deployment

This project is configured for **Cloudflare Workers** via `wrangler.jsonc`.

### Deploy to Cloudflare

```bash
npm run build
npx wrangler deploy
```

The worker entry point is `src/server.ts`.

---

## Configuration Files

| File | Purpose |
|---|---|
| `vite.config.ts` | Vite plugins, dev server, aliases |
| `tsconfig.json` | TypeScript settings |
| `wrangler.jsonc` | Cloudflare Workers config |
| `eslint.config.js` | ESLint + Prettier integration |
| `components.json` | shadcn/ui settings |

---

## Custom Theme

The app uses a **dark South Indian wedding color palette** (OKLCH) defined in Tailwind:

- **Maroon** (`--color-maroon`) — Primary background
- **Gold** (`--color-gold`) — Accent text & borders
- **Ivory** (`--color-ivory`) — Body text
- **Sandalwood** (`--color-sandalwood`) — Muted accents
- **Bronze** (`--color-bronze`) — Secondary accents

Custom gradients, glass effects, and animations (floating petals, diya flicker, shimmer, soundwave bars, gold pulse, vignette pulse, ambient float) are all in `src/styles.css`.

---

## Visual Design Highlights

- **Mobile-first luxury** — Responsive typography scaling, optimized touch targets, reduced particle counts on mobile, app-like smooth scrolling
- **Premium dividers** — Glowing gold gradient lines with temple-inspired star motifs and pulsing golden dot between every section
- **Cinematic ending** — Emotional closing section with "Your presence will make our celebration complete," glowing monogram, warm gold vignette, and floating particles
- **Performance optimized** — `will-change` hints for GPU-accelerated animations, reduced motion considerations, lazy-loaded gallery images
- **Typography** — Cormorant Garamond (display), Inter (body), Catamaran (Tamil) with careful tracking and leading

---

## License

Private — All rights reserved.
