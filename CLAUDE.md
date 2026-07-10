# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing/lead-generation website for **Righttway**, a coaching (tutoring) centre in Kunnamkulam, Thrissur, Kerala. It is a static-content Next.js App Router site (no backend, no database, no API routes) — a multi-page brochure with an enquiry form and content pages for courses, results, and web coaching.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint (eslint-config-next)
```

There is no test suite.

## Architecture

- **Next.js 16 App Router + React 19 + TypeScript** (strict). Path alias `@/*` maps to the repo root.
- **`app/layout.tsx`** is the root shell: it renders `<Navbar>` + `{children}` + `<Footer>`, sets page metadata, and loads the Inter / DM Sans Google Fonts. Every route page returns only the content between navbar and footer.
- **Routes** are folders under `app/` (`about`, `courses`, `results`, `web-coaching`, `contact`), each a `page.tsx`. The home page composes `app/components/HomePage.tsx`. Shared UI lives in `app/components/` (`Navbar`, `Footer`, `HomePage`, `ScrollPopup`).
- **All pages/components with hooks, scroll listeners, or form state are Client Components (`'use client'`).** Server Components are essentially unused because the interactive pieces dominate.
- **Content is hardcoded in-file**, not fetched — course lists, testimonials, results, FAQs, and stats are plain arrays/constants at the top of each page/component. To change site copy or listings, edit these arrays directly.

## Styling conventions (important)

Styling is **inconsistent by design/history** — match whatever the file you're editing already uses:

1. **Inline `style={{...}}` objects** are the dominant approach (Navbar, HomePage, contact page, etc.). Colors are written as raw hex literals inline (`#020817`, `#2132B9`, `#EAB308`).
2. **Global utility classes** in `app/globals.css` (`.btn-primary`, `.btn-ghost-dark`, `.card`, `.badge`, `.badge-warning`, `.section-label`, `.input-field`, `.container-max`) — reuse these instead of re-styling buttons/cards from scratch. The brand palette is also defined here as CSS variables (`--brand-navy`, `--royal-blue`, `--warm-gold`, etc.) and the hero collage animations live here.
3. **Tailwind CSS v4** is installed (`@tailwindcss/postcss`) and used with utility classes in a few places (notably `ScrollPopup.tsx`). Note `tailwind.config.ts` defines a matching color theme (`navy`, `royal`, `gold`), but most code bypasses it in favor of inline hex.

Brand colors: navy `#020817`, royal blue `#2132B9`, warm gold `#EAB308`.

## Notable behaviors

- **`ScrollPopup`** (rendered inside `HomePage`) shows a full-screen student-achievements modal 3 seconds after load; dismissed state is component-local (re-appears on reload — no persistence).
- **Contact form** (`app/contact/page.tsx`) validates client-side (name required, 10-digit phone, grade required) and only sets a local `submitted` flag — **it does not send data anywhere.** Wiring up real submission requires adding a handler/endpoint.
- **Remote images**: `next.config.ts` allow-lists `github.com/user-attachments`, `*.githubusercontent.com`, and `*.s3.amazonaws.com`. Result/testimonial/popup images are hotlinked from GitHub user-attachments URLs; local images live in `public/images/`. Add any new remote image host to `remotePatterns` or the build/render will reject it.

## Deployment

Configured for Vercel (Vercel assets present). No environment variables are required.
