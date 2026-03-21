# TenGoals — Website Specification

> **Version:** 1.0  
> **Date:** March 21, 2026  
> **Author:** Product & Design Spec  
> **Status:** Draft for Review

---

## 1. Project Overview

### 1.1 Purpose

A simple, fast, SEO-optimized static website that serves as the primary web presence for TenGoals — Daily Goal Journal (iOS). The site drives App Store downloads and captures organic search traffic across goal-setting and manifestation keywords.

### 1.2 Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Architecture | Single-page scrollable with anchor sections | Simpler than multi-page for a single-product app; all content on one URL concentrates SEO authority; still navigable via anchor links in the header |
| Tech stack | Static HTML/CSS/JS (vanilla) | Zero build step, instant deploy to GitHub Pages / Netlify / Vercel, maximum performance, no framework overhead for a marketing page |
| Hosting | GitHub Pages (recommended) | Free, pairs with existing GitHub workflow, custom domain support, HTTPS included |
| Privacy Policy | External link to `https://taraschernysh.github.io/GoalsManifestationPrivacyPolicyWeb/` | Already exists — no need to duplicate |
| Email capture | None | App Store download CTA only |
| Visual direction | Light + amber/gold matching app UI | Consistent brand experience from web → App Store → app |

### 1.3 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | > 95 | Automated CI check |
| Lighthouse SEO | > 95 | Automated CI check |
| Core Web Vitals (LCP) | < 2.5s | Google Search Console |
| App Store click-through | Track via UTM | `https://apps.apple.com/app/id{APP_ID}?pt=&ct=website&mt=8` |
| Organic search impressions | Baseline → growth | Google Search Console |
| Bounce rate | < 60% | Analytics (Plausible or GA4) |

---

## 2. Information Architecture

### 2.1 Single-Page Section Map

The page is structured as a vertical scroll with anchored sections. The navigation bar links to each section via smooth-scroll anchor IDs.

```
┌─────────────────────────────────────────┐
│  STICKY NAV BAR                         │
│  Logo · Features · How It Works ·       │
│  Pricing · FAQ · [Download CTA]         │
├─────────────────────────────────────────┤
│                                         │
│  §1 HERO                                │
│  Headline + subheadline + App Store     │
│  badge + hero screenshot (phone mockup) │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  §2 SOCIAL PROOF BAR                    │
│  Star rating · "Featured in" badges     │
│  (or key stat: "10,000+ goals written") │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  §3 PAIN → SOLUTION                     │
│  3-column grid: problem → how TenGoals  │
│  solves it (from ABOUT.md pain points)  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  §4 FEATURES                            │
│  Alternating screenshot + text sections │
│  (5 key features with app screenshots)  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  §5 HOW IT WORKS                        │
│  3-step flow: Morning → Evening →       │
│  AI Report (timeline or step cards)     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  §6 PRICING / FREE VS PRO              │
│  Two-column comparison card             │
│  (Free tier vs Pro tier)                │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  §7 FAQ                                 │
│  Accordion-style Q&A (SEO-rich)         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  §8 FINAL CTA                           │
│  Headline + App Store badge             │
│  (repeat conversion opportunity)        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  FOOTER                                 │
│  © 2026 · Privacy Policy link ·         │
│  Contact email · Social links           │
│                                         │
└─────────────────────────────────────────┘
```

### 2.2 Navigation

Sticky top nav, transparent on hero then solid white on scroll (with subtle shadow). Contents:

- **Left:** TenGoals logo (app icon + wordmark)
- **Center/Right links:** Features · How It Works · Pricing · FAQ
- **Right CTA:** "Download" button (amber, links to App Store)
- **Mobile:** Hamburger menu with the same links

---

## 3. Section-by-Section Specification

### §1 — Hero

**Goal:** Communicate what the app does + primary emotional benefit within 3 seconds.

**Layout:** Two-column on desktop (text left, phone mockup right). Stacked on mobile (text top, phone below).

**Content:**

| Element | Copy | Notes |
|---------|------|-------|
| Headline (H1) | `Write 10 Goals Every Day. Transform Your Life.` | Primary SEO target keyword: "daily goal journal" |
| Subheadline | `The goal-setting app that forces clarity — write from memory, pick your #1 priority, and let AI reveal your patterns.` | Secondary keywords woven in |
| CTA | Apple App Store badge (official asset) | Links to App Store with UTM: `?ct=website_hero` |
| Visual | Phone mockup showing "Today's Goals" screen (Image 2) | Use the uploaded `first.png` (Today's Goals screen) in a device frame |

**Alternative headline candidates (A/B test later):**
- `Your Goals Deserve Better Than a Notes App`
- `10 Goals. Every Morning. From Memory.`
- `The Daily Habit That Rewires Your Brain for Success`

---

### §2 — Social Proof Bar

**Goal:** Build trust instantly below the hero.

**Layout:** Centered horizontal bar, light amber background tint.

**Content options (use what's available):**

| Priority | Element | Example |
|----------|---------|---------|
| 1 (if available) | App Store rating | ★★★★★ 4.9 on the App Store |
| 2 (if available) | Download count | "5,000+ goals written this month" |
| 3 (always available) | Key differentiator stats | "30-day lockout · AI-powered insights · Built on proven methodology" |

> **Note:** Until real reviews/stats exist, use the differentiator stats version. Never fabricate numbers.

---

### §3 — Pain → Solution

**Goal:** Create recognition — "that's exactly my problem" — then position the app as the fix.

**Layout:** 3-card grid (desktop), vertical stack (mobile). Each card has an icon, pain point, and solution.

**Content (derived from ABOUT.md):**

| # | Icon | Pain Point | TenGoals Solution |
|---|------|------------|-------------------|
| 1 | 🔄 | **Mindless copying** — You reread yesterday's goals and write the same thing without thinking | **30-day lockout** — Past entries are hidden. You write from memory, which forces genuine reassessment of what matters. |
| 2 | 🎯 | **No real priority** — Every goal feels equally important, so nothing gets real focus | **Magic Wand** — Each morning, you pick the ONE goal that would have the greatest impact right now. |
| 3 | 📊 | **No insight into patterns** — You journal daily but have no idea what your patterns reveal | **AI Monthly Report** — After 10 days, AI analyzes your goals and shows your top priorities, categories, and trends. |

---

### §4 — Features

**Goal:** Showcase the 5 most compelling features with app screenshots.

**Layout:** Alternating rows — screenshot left / text right, then screenshot right / text left. On mobile, always image on top, text below.

**Feature blocks:**

#### Feature 1: Daily Goal Entry
- **Headline:** Write 10 Goals Every Morning
- **Body:** Start each day by writing up to 10 goals in affirmation format — as if they're already achieved. No reviewing yesterday. No copying. Pure clarity from memory.
- **Screenshot:** Today's Goals screen (`first.png`)
- **Badge:** "Core Feature"

#### Feature 2: Magic Wand
- **Headline:** Pick Your #1 Priority
- **Body:** After writing your goals, the Magic Wand asks: "Which ONE goal would have the greatest positive impact on your life right now?" This single decision drives focus and feeds into your AI analysis.
- **Screenshot:** Magic Wand selection sheet (`fifth.png`)
- **Badge:** "Daily Focus"

#### Feature 3: Progress & Streaks
- **Headline:** Track Your Consistency
- **Body:** Watch your streak grow day by day. The monthly dot grid shows your commitment at a glance — every filled dot is proof that you showed up. Track goal streaks and gratitude streaks side by side.
- **Screenshot:** Progress screen (`third.png`)
- **Badge:** "Motivation"

#### Feature 4: Gratitude Journaling
- **Headline:** Gratitude Built In, Not Bolted On
- **Body:** Write daily gratitude entries alongside your goals. A 7-day lockout on past reflections prevents hedonic adaptation — a psychology-backed approach that keeps gratitude meaningful, not mechanical.
- **Screenshot:** Today screen scrolled to Gratitude section (`forth.png`)
- **Badge:** "Wellness"

#### Feature 5: Wins & Achievements
- **Headline:** Celebrate What You've Achieved
- **Body:** Mark your wins across life categories — Finance, Health, Career, Learning, Lifestyle, and Relationships. Your badge collection becomes a visual map of growth.
- **Screenshot:** Wins screen (`second.png` — note: this is actually Image 1)
- **Badge:** "Achievements"

> **Screenshot mapping clarification:** Match uploaded files to correct screens based on content, not filename order. The images show: Wins (Image 1), Today's Goals (Image 2), Progress (Image 3), Gratitude section (Image 4), Magic Wand sheet (Image 5).

---

### §5 — How It Works

**Goal:** Show the daily workflow is simple — 3 steps, 5 minutes.

**Layout:** Horizontal 3-step timeline (desktop), vertical steps (mobile). Each step has a number, icon, title, and description.

**Content:**

| Step | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | ☀️ | **Morning — Write** | Open TenGoals. Write up to 10 goals from memory. Add gratitude entries. Pick your Magic Wand goal. Takes 3–5 minutes. |
| 2 | 🌙 | **Evening — Review** | Between 8–11 PM, re-read your goals in a calm, read-only view. No editing. Let them settle into your subconscious before sleep. |
| 3 | 📈 | **Monthly — Discover** | After 10 days, your first AI report arrives. See your top goals, category patterns, and personalized insights. Compare reports month over month. |

**Connecting visual:** A subtle dashed line or arrow connecting the three steps to show flow.

---

### §6 — Pricing / Free vs Pro

**Goal:** Show generous free tier → make Pro feel like a natural upgrade, not a gate.

**Layout:** Two-column comparison card with a subtle amber highlight on the Pro column.

**Content:**

| Feature | Free | Pro |
|---------|------|-----|
| Daily goal entry (10 goals) | ✅ | ✅ |
| Daily gratitude journaling | ✅ | ✅ |
| Magic Wand daily priority | ✅ | ✅ |
| Evening read-only review | ✅ | ✅ |
| Streak tracking | ✅ | ✅ |
| Progress calendar | ✅ | ✅ |
| First AI report | ✅ | ✅ |
| 30-day free trial of Pro | ✅ | — |
| Full report history | — | ✅ |
| Weekly micro-insights | — | ✅ |
| Gratitude weekly reflections | — | ✅ |
| Goals × Gratitude cross-analysis | — | ✅ |
| PDF export | — | ✅ |

**Pricing line below the Pro column:**
`Starting at $6.99/month · $49.99/year (save 40%)`

**CTA:** "Try Free for 30 Days" → App Store link

---

### §7 — FAQ

**Goal:** Answer objections + capture long-tail SEO keywords via question-format content.

**Layout:** Accordion (click to expand). Uses `<details>/<summary>` HTML elements for zero-JS, SEO-friendly implementation. Add `FAQPage` structured data (JSON-LD) for Google rich results.

**Questions:**

| # | Question | Answer |
|---|----------|--------|
| 1 | **What is the 10-goals method?** | It's a proven goal-setting technique where you write 10 goals every day from memory, in affirmation format — as if they're already achieved. Writing from memory (not copying) forces you to genuinely reassess what matters most, rather than mindlessly repeating yesterday's list. This daily practice rewires your focus toward your true priorities. |
| 2 | **Why can't I see my past goals?** | TenGoals locks your past entries for 30 days on purpose. When you can see yesterday's goals, you copy them without thinking. The lockout forces you to write from memory, which means you only write down what genuinely matters to you right now. After 30 days, entries unlock for reflection. |
| 3 | **What is the Magic Wand goal?** | Each day after writing your goals, TenGoals asks: "If you could only achieve ONE of these goals right now, which would have the greatest positive impact?" This daily prioritization exercise builds focus and feeds directly into your AI analysis, revealing which goals consistently matter most. |
| 4 | **How does the AI report work?** | After 10 days of consistent entries, TenGoals generates your first AI-powered report. It analyzes your goal patterns, identifies your top recurring goals, breaks down which life categories you focus on, and provides personalized insights about your priorities and trends. Monthly reports get richer over time. |
| 5 | **What is the evening review?** | Between 8–11 PM (configurable), TenGoals unlocks a read-only view of your day's goals. No editing allowed. The purpose is subconscious programming — re-reading your goals before sleep lets them settle into your mind overnight. Research suggests this primes your brain to work on solutions while you rest. |
| 6 | **How does gratitude journaling work in TenGoals?** | Alongside your daily goals, you can write 1–5 things you're grateful for. Past gratitude entries are locked for 7 days to prevent hedonic adaptation — a psychological phenomenon where reflecting too often on the same things makes you take them for granted. Weekly reflections with AI-powered insights are available for Pro users. |
| 7 | **Is TenGoals free?** | Yes — daily goal entry, gratitude journaling, the Magic Wand, evening review, streaks, progress tracking, and your first AI report are all free. Pro unlocks full report history, weekly insights, gratitude reflections, cross-analysis, and PDF export. There's a 30-day free trial of Pro so you can experience everything before deciding. |
| 8 | **Does TenGoals sync across devices?** | Yes. TenGoals uses iCloud to automatically sync your goals, gratitude entries, and reports across all your Apple devices. No account creation required — it uses your existing iCloud account. |

---

### §8 — Final CTA

**Goal:** Catch users who scrolled the full page — they're highly interested.

**Layout:** Full-width amber-tinted background section. Centered text + App Store badge.

**Content:**

| Element | Copy |
|---------|------|
| Headline | `Start Writing Your Future Today` |
| Subheadline | `Free to use. 30-day Pro trial included. No account needed.` |
| CTA | App Store badge (same as hero) with UTM: `?ct=website_footer` |

---

### Footer

**Layout:** Simple, minimal. Dark text on light background.

**Content:**
- `© 2026 TenGoals` 
- Links: Privacy Policy (external URL) · Support (mailto link) · App Store
- Optional: Social media icons (if accounts exist)

---

## 4. SEO Strategy

### 4.1 Target Keywords

The keyword strategy covers both the goal-setting and manifestation/affirmation search spaces, organized by intent and priority.

#### Primary Keywords (target in H1, title tag, meta description)

| Keyword | Monthly Search Volume (est.) | Difficulty | Intent |
|---------|------------------------------|------------|--------|
| daily goal journal | Medium | Low-Med | Transactional |
| goal setting app | High | Medium | Transactional |
| daily goal app | Medium | Low | Transactional |
| 10 goals a day | Low-Med | Low | Informational → Transactional |
| write goals every day app | Low | Very Low | Transactional (long-tail) |

#### Secondary Keywords (target in H2s, feature sections, FAQ)

| Keyword | Section |
|---------|---------|
| daily manifestation journal | Hero subheadline, FAQ |
| affirmation goal tracker | Features section |
| morning goal routine app | How It Works |
| AI goal tracking | Features (AI Report) |
| goal journaling with AI | Features, FAQ |
| evening review goals | How It Works, FAQ |
| magic wand goal priority | Features, FAQ |
| gratitude and goal journal | Features (Gratitude) |
| goal streak tracker | Features (Progress) |
| subconscious goal programming | How It Works (evening) |

#### Long-Tail / FAQ Keywords

| Keyword phrase | Captured in |
|----------------|-------------|
| why should I write goals every day | FAQ #1 |
| what is the 10 goals method | FAQ #1 |
| why can't I see past journal entries | FAQ #2 |
| best app for daily goal setting | Meta description, hero |
| goal setting app with AI insights | Features section |
| how to manifest goals daily | FAQ, How It Works |
| daily affirmation journal app ios | Title tag variant |

### 4.2 On-Page SEO Requirements

#### Meta Tags

```html
<title>TenGoals — Daily Goal Journal App | Write 10 Goals Every Day</title>
<meta name="description" content="Write 10 goals every morning from memory. Pick your #1 priority. Get AI-powered insights into your patterns. The daily goal-setting and manifestation journal for iOS.">
<meta name="keywords" content="daily goal journal, goal setting app, 10 goals a day, manifestation journal, affirmation tracker, AI goal insights, morning routine app">
<link rel="canonical" href="https://tengoals.app/">
```

#### Open Graph / Social

```html
<meta property="og:title" content="TenGoals — Write 10 Goals Every Day">
<meta property="og:description" content="The daily goal journal that forces clarity. Write from memory, pick your priority, get AI insights.">
<meta property="og:image" content="/og-image.png"> <!-- 1200x630 social card -->
<meta property="og:url" content="https://tengoals.app/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TenGoals — Write 10 Goals Every Day">
<meta name="twitter:description" content="The daily goal journal that forces clarity. Write from memory, pick your priority, get AI insights.">
<meta name="twitter:image" content="/og-image.png">
```

#### Structured Data (JSON-LD)

Two schema types for rich results:

**1. SoftwareApplication** (App Store rich result):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TenGoals — Daily Goal Journal",
  "operatingSystem": "iOS",
  "applicationCategory": "LifestyleApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Write 10 goals every morning from memory. Pick your #1 priority. Get AI-powered monthly insights into your goal patterns.",
  "screenshot": "https://tengoals.app/screenshots/today-goals.png",
  "url": "https://apps.apple.com/app/id{APP_ID}"
}
```

**2. FAQPage** (FAQ rich snippets):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the 10-goals method?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's a proven goal-setting technique where you write 10 goals every day from memory..."
      }
    }
  ]
}
```

#### Technical SEO Checklist

- [ ] Semantic HTML: one `<h1>`, logical `<h2>`–`<h3>` hierarchy per section
- [ ] All images have descriptive `alt` text with keywords where natural
- [ ] Lazy-load images below the fold (`loading="lazy"`)
- [ ] Preload hero image and critical CSS
- [ ] `robots.txt` allowing all crawlers
- [ ] `sitemap.xml` (even for single page — helps indexing)
- [ ] Canonical URL set
- [ ] HTTPS enforced
- [ ] Mobile-first responsive (Google's mobile-first indexing)
- [ ] Page speed: no render-blocking JS, inline critical CSS, compressed images (WebP with PNG fallback)
- [ ] Apple Smart App Banner meta tag: `<meta name="apple-itunes-app" content="app-id={APP_ID}">`

---

## 5. Design System

### 5.1 Color Tokens

Derived from the app's design tokens to ensure brand consistency.

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| Brand Primary | `#F59E0B` | `--color-brand` | CTAs, highlights, accent elements, icons |
| Brand Primary Hover | `#D97706` | `--color-brand-hover` | Button hover states |
| Brand Background | `rgba(245, 158, 11, 0.08)` | `--color-brand-bg` | Section tints, pill backgrounds, social proof bar |
| Brand Background Strong | `rgba(245, 158, 11, 0.15)` | `--color-brand-bg-strong` | Pro column highlight, feature badges |
| Gratitude Coral | `#E87D6A` | `--color-coral` | Gratitude section accents |
| Gratitude Background | `rgba(232, 125, 106, 0.10)` | `--color-coral-bg` | Gratitude feature card tint |
| Text Primary | `#111827` | `--color-text` | Headlines, body text |
| Text Secondary | `#6B7280` | `--color-text-secondary` | Subheadlines, descriptions |
| Text Tertiary | `#9CA3AF` | `--color-text-tertiary` | Footer links, captions |
| Surface | `#FFFFFF` | `--color-surface` | Cards, nav background |
| Background | `#FAFAFA` | `--color-bg` | Page background |
| Background Alt | `#F3F4F6` | `--color-bg-alt` | Alternating feature sections |
| Border | `#E5E7EB` | `--color-border` | Card borders, dividers |

### 5.2 Typography

System font stack matching the app's SF Pro usage. Falls back gracefully on non-Apple devices.

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
}
```

| Style | Size (desktop) | Size (mobile) | Weight | Line Height | Usage |
|-------|----------------|---------------|--------|-------------|-------|
| Hero H1 | 56px | 36px | 700 | 1.1 | Hero headline |
| Section H2 | 40px | 28px | 700 | 1.2 | Section titles |
| Feature H3 | 24px | 20px | 600 | 1.3 | Feature headlines |
| Body Large | 20px | 18px | 400 | 1.6 | Hero subheadline, lead paragraphs |
| Body | 17px | 16px | 400 | 1.6 | Feature descriptions, FAQ answers |
| Body Small | 14px | 13px | 400 | 1.5 | Captions, footer text |
| Label | 13px | 12px | 600 | 1.4 | Feature badges, uppercase labels |

### 5.3 Spacing Scale

Consistent with the app's `DesignTokens.Spacing` system, scaled up for web.

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| xs | 4px | `--space-xs` | Icon gaps |
| sm | 8px | `--space-sm` | Tight padding |
| md | 16px | `--space-md` | Card padding, element gaps |
| lg | 24px | `--space-lg` | Section inner padding |
| xl | 32px | `--space-xl` | Between cards |
| 2xl | 48px | `--space-2xl` | Between elements within sections |
| 3xl | 64px | `--space-3xl` | Vertical section padding (mobile) |
| 4xl | 96px | `--space-4xl` | Vertical section padding (desktop) |

### 5.4 Border Radius

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| Small | 8px | `--radius-sm` | Buttons, badges |
| Medium | 12px | `--radius-md` | Cards, FAQ items |
| Large | 16px | `--radius-lg` | Feature cards, phone mockup frame |
| Pill | 9999px | `--radius-pill` | Nav CTA button, tags |

### 5.5 Shadows

| Level | Value | Usage |
|-------|-------|-------|
| Subtle | `0 1px 3px rgba(0,0,0,0.06)` | Cards at rest |
| Medium | `0 4px 12px rgba(0,0,0,0.08)` | Cards on hover, nav on scroll |
| Strong | `0 8px 30px rgba(0,0,0,0.12)` | Phone mockup, modal-like elements |

### 5.6 Component Patterns

#### Primary CTA Button
```
Background: var(--color-brand)
Text: white, 17px, weight 600
Padding: 14px 28px
Border-radius: var(--radius-pill)
Hover: var(--color-brand-hover), translateY(-1px), shadow medium
Transition: all 0.2s ease
```

#### Card
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: var(--radius-md)
Padding: var(--space-lg)
Shadow: subtle → medium on hover
```

#### Feature Badge
```
Background: var(--color-brand-bg-strong)
Text: var(--color-brand), 12px, weight 600, uppercase
Padding: 4px 12px
Border-radius: var(--radius-pill)
```

#### FAQ Accordion Item
```
Border-bottom: 1px solid var(--color-border)
Padding: var(--space-lg) 0
Summary: 18px, weight 600, cursor pointer
Answer: 16px, weight 400, color text-secondary
Chevron: rotates 180° on open (CSS transition)
```

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked sections, hamburger nav, reduced typography |
| Tablet | 640–1024px | Two-column features, condensed nav |
| Desktop | > 1024px | Full layout, alternating feature rows, side-by-side hero |
| Max width | 1200px | Content container max-width, centered |

---

## 7. Image & Asset Requirements

### 7.1 Screenshots

Process the 5 uploaded screenshots into device-framed mockups:

| Screenshot | Content | Section Used In |
|------------|---------|-----------------|
| Image 1 (`fifth.png`) | Wins & Badges screen | §4 Feature 5 |
| Image 2 (`first.png`) | Today's Goals (top) | §1 Hero, §4 Feature 1 |
| Image 3 (`third.png`) | Progress screen | §4 Feature 3 |
| Image 4 (`forth.png`) | Gratitude section + Weekly Reflection | §4 Feature 4 |
| Image 5 (`second.png`) | Magic Wand selection sheet | §4 Feature 2 |

**Processing:**
- Wrap each screenshot in an iPhone device frame (CSS-only or pre-rendered PNG)
- Export at 2x resolution for Retina displays
- Provide WebP format with PNG fallback
- Compress aggressively (target < 150KB per image)

### 7.2 Other Assets Needed

| Asset | Format | Source | Notes |
|-------|--------|--------|-------|
| App icon | PNG, 512x512 | Existing asset | For nav logo + favicon |
| Favicon | ICO + PNG (32, 180, 192, 512) | Derived from app icon | Include `apple-touch-icon` |
| OG social card | PNG, 1200x630 | Create new | Hero headline + phone mockup + App Store badge |
| App Store badge | SVG | Apple's official "Download on the App Store" badge | Must use official asset per Apple guidelines |

---

## 8. Performance Budget

| Metric | Target |
|--------|--------|
| Total page weight | < 500KB (first load) |
| HTML | < 30KB (gzipped) |
| CSS | < 15KB (gzipped, single file) |
| JS | < 10KB (gzipped, only for nav toggle + FAQ accordion + smooth scroll) |
| Images | < 400KB total (WebP, lazy-loaded below fold) |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Time to Interactive | < 3s |

---

## 9. Analytics & Tracking

### 9.1 Recommended: Plausible Analytics

Lightweight (< 1KB), privacy-friendly, no cookies (no cookie banner needed), GDPR compliant by default. Alternative: Fathom, or GA4 if deeper funnel analysis is needed.

### 9.2 Events to Track

| Event | Trigger | Purpose |
|-------|---------|---------|
| `app_store_click_hero` | Click App Store badge in hero | Measure hero conversion |
| `app_store_click_pricing` | Click CTA in pricing section | Measure pricing conversion |
| `app_store_click_footer` | Click App Store badge in final CTA | Measure footer conversion |
| `faq_expand` | Click FAQ question | Understand what objections matter |
| `section_scroll` | Scroll into each section viewport | Measure engagement depth |

### 9.3 UTM Strategy

All App Store links use campaign tracking:

```
https://apps.apple.com/app/id{APP_ID}?pt={PROVIDER_TOKEN}&ct=website_{section}&mt=8
```

Where `{section}` is: `hero`, `pricing`, `footer`, `nav`

---

## 10. Technical Implementation

### 10.1 File Structure

```
tengoals-website/
├── index.html              # Single-page site
├── css/
│   └── style.css           # All styles (inline critical CSS in <head>)
├── js/
│   └── main.js             # Nav toggle, FAQ accordion, smooth scroll, scroll spy
├── images/
│   ├── screenshots/        # Device-framed app screenshots (WebP + PNG)
│   ├── icon/               # Favicons, apple-touch-icon
│   ├── og-image.png        # Social sharing card
│   └── app-store-badge.svg # Official Apple badge
├── robots.txt
├── sitemap.xml
├── CNAME                   # Custom domain (when ready)
└── 404.html                # Simple 404 page
```

### 10.2 Deployment

**GitHub Pages** (recommended):
1. Create repo `tengoals-website`
2. Push static files to `main` branch
3. Enable GitHub Pages from Settings → Pages → Source: `main` / root
4. Add `CNAME` file when domain is ready
5. HTTPS auto-enabled via GitHub

**Alternative:** Netlify or Vercel for instant preview deploys on PR.

### 10.3 No-JS Fallback

The site must be fully functional without JavaScript:
- Navigation links work as standard anchor links
- FAQ uses `<details>/<summary>` (native HTML, no JS needed)
- Images load normally (no JS-dependent lazy loading — use `loading="lazy"` attribute)
- Only progressive enhancements need JS: smooth scroll behavior, nav scroll spy, mobile menu toggle

---

## 11. Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Keyboard navigation | All interactive elements focusable, visible focus ring |
| Screen readers | Semantic HTML, ARIA labels on nav toggle, `aria-expanded` on FAQ |
| Color contrast | WCAG AA minimum (4.5:1 for text, 3:1 for large text) — amber on white needs care |
| Reduced motion | `prefers-reduced-motion` media query disables animations |
| Alt text | All images have descriptive alt text |
| Skip link | "Skip to content" link as first focusable element |
| Font sizing | `rem`-based, respects browser font size settings |

> **Note on amber accessibility:** `#F59E0B` on white fails WCAG AA for small text (contrast ratio ~2.8:1). Use it only for large text, icons, and decorative elements. For amber buttons, use white text on amber background (passes). For amber text, use `#B45309` (darker amber) for AA compliance.

---

## 12. Content Assets to Create

| Asset | Description | Priority |
|-------|-------------|----------|
| Hero headline & subheadline | Final copy for H1 + subtitle | P0 |
| Feature section copy | 5 feature blocks (headline + description) | P0 |
| How It Works copy | 3-step descriptions | P0 |
| FAQ content | 8 Q&A pairs | P0 |
| OG social card | 1200x630 image for link sharing | P1 |
| Device-framed screenshots | 5 screenshots in iPhone frames | P1 |
| Favicon set | Multi-size from app icon | P1 |
| App Store badge | Official Apple SVG | P1 |

---

## 13. Launch Checklist

### Pre-Launch
- [ ] All copy written, reviewed, and spell-checked
- [ ] Screenshots device-framed and compressed
- [ ] Lighthouse score > 95 (Performance, Accessibility, SEO)
- [ ] All links working (App Store, Privacy Policy, anchors)
- [ ] Structured data validated (Google Rich Results Test)
- [ ] OG image renders correctly (Facebook Sharing Debugger, Twitter Card Validator)
- [ ] Mobile responsiveness tested on real devices
- [ ] Apple Smart App Banner tested on iOS Safari
- [ ] `robots.txt` and `sitemap.xml` in place
- [ ] Analytics snippet installed and events firing

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Submit sitemap
- [ ] Request indexing of homepage
- [ ] Monitor Core Web Vitals
- [ ] Set up Google Alerts for "TenGoals" brand mentions
- [ ] Add website URL to App Store listing
- [ ] Add website URL to all social media profiles

---

## 14. Future Expansion Opportunities

These are **not in scope for v1** but the single-page architecture should be designed to allow easy extraction into multi-page if needed:

| Expansion | Trigger | Implementation |
|-----------|---------|----------------|
| Blog | When content marketing begins | Add `/blog/` directory with static pages or Eleventy/Astro |
| Changelog | After multiple app updates | Add `/changelog/` page |
| Multi-language | When expanding to non-English markets | Create localized copies of `index.html` or use i18n solution |
| Testimonials | When App Store reviews accumulate | Add testimonials section between Pricing and FAQ |
| Press kit | If media outreach begins | Add `/press/` page with assets, screenshots, founder bio |

---

## Appendix A: Competitor Website Audit Notes

The website should differentiate from competitors in the goal-setting app space by:

1. **Not looking like a generic SaaS template** — Most goal apps use blue/purple gradients and stock imagery. TenGoals' warm amber + light background is distinctive.
2. **Leading with methodology, not features** — The "write from memory" and "30-day lockout" mechanics are the story, not a feature list.
3. **Showing real app UI** — Screenshots of the actual app (not mockups or illustrations) build trust and set accurate expectations.
4. **SEO-first FAQ** — Most competitor sites skip FAQ. This is free long-tail traffic.
5. **No bloat** — No animations library, no video backgrounds, no chat widgets. Fast, clean, focused.
