# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

10 Goals Daily Writing - Tenly — a static marketing website for the 10 Goals Daily Writing - Tenly iOS app (daily goal journal). Single-page scrollable site driving App Store downloads and organic search traffic.

## Tech Stack

- **Vanilla HTML/CSS/JS** — no build step, no frameworks
- **Hosting target:** GitHub Pages (static files served from `main` branch)
- **Domain:** taraschernysh.github.io/DailyGoalsManifestationWeb

## File Structure (target)

```
index.html          — single-page site (all sections)
css/style.css       — all styles (inline critical CSS in <head>)
js/main.js          — nav toggle, FAQ accordion, smooth scroll, scroll spy
images/             — screenshots (WebP + PNG), favicons, og-image, App Store badge
robots.txt
sitemap.xml
```

## Development

No build tools. Open `index.html` in a browser or use any local server:

```
python3 -m http.server 8000
# or
npx serve .
```

## Key Constraints

- **No-JS fallback required:** site must be fully functional without JavaScript. FAQ uses native `<details>/<summary>`. JS is only for progressive enhancement (smooth scroll, scroll spy, mobile menu toggle).
- **Performance budget:** total page weight < 500KB, CSS < 15KB gzipped, JS < 10KB gzipped, images < 400KB total (WebP, lazy-loaded below fold). Target Lighthouse > 95 for Performance, Accessibility, and SEO.
- **Accessibility:** WCAG AA minimum. Amber `#F59E0B` on white fails AA for small text — use only for large text, icons, decorative elements. For amber text use `#B45309`. White text on amber buttons passes.
- **SEO:** semantic HTML (one `<h1>`, logical heading hierarchy), JSON-LD structured data (SoftwareApplication + FAQPage), `robots.txt`, `sitemap.xml`, canonical URL, Open Graph/Twitter meta tags.
- **Images:** WebP with PNG fallback, `loading="lazy"` for below-fold, compress < 150KB each.

## Design System

Brand colors: amber primary `#F59E0B`, hover `#D97706`, coral accent `#E87D6A`. Background `#FAFAFA`, surface `#FFFFFF`. All CSS variables defined as `--color-*`, `--space-*`, `--radius-*` tokens. System font stack (`-apple-system, BlinkMacSystemFont, 'SF Pro Display', ...`).

Full design spec including typography scale, spacing, shadows, and component patterns is in `WEBSITE_SPEC.md`.

## Git Workflow

- `main` — production (deploys to GitHub Pages)
- `develop` — active development branch
- PRs go from feature branches → `main`
