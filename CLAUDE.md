# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:8080
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint check
npm run test       # Run tests (vitest)
npm run test:watch # Run tests in watch mode
npm run preview    # Preview production build
```

Use `npm` (Node.js).

## Architecture

**Single-page React app** — insurance advisory landing page for PrimeCover Insurance Advisory (UAE market: Dubai, Abu Dhabi, Sharjah).

**Stack:** Vite + React 18 + TypeScript, shadcn-ui (Radix UI primitives), Tailwind CSS, TanStack React Query, React Hook Form + Zod.

**Routing:** React Router v6 with two routes: `/` (Index) and `*` (NotFound). `App.tsx` wraps everything in BrowserRouter, QueryClientProvider, HelmetProvider, TooltipProvider, and toast providers.

**Page structure** (`src/pages/Index.tsx`): Assembles 11 section components in order — Navbar, Hero, About, Services, WhyChooseUs, Comparison, Testimonials, CTA, Contact, Footer — plus a floating WhatsAppButton. The page also sets up Schema.org JSON-LD for SEO.

**Component layout:**
- `src/components/sections/` — full-page sections (Navbar, HeroSection, ContactSection, etc.)
- `src/components/ui/` — shadcn-ui primitives (60+ components, do not modify directly)
- `src/components/` — shared components like InsuranceCard, TestimonialCard, WhatsAppButton

**Path alias:** `@/` maps to `src/` (configured in vite.config.ts and tsconfig.app.json).

**Styling conventions:**
- Brand primary: navy `#1e2D5C`, accent: teal `#26d07c`
- Fonts: Inter (body), Playfair Display (headings) — defined in tailwind.config.ts
- Custom animations (`fade-in-up`, accordion) and glass-morphism effects (backdrop blur) are common patterns
- CSS variables for theming are in `src/index.css`

**Forms:** ContactSection uses React Hook Form + Zod for validation. No backend — form submissions are client-side only.

**Testing:** Vitest with jsdom environment. Setup file at `src/test/setup.ts` mocks `matchMedia`. Tests live in `src/test/`.
