# Personal Website — Bertin Iradukunda

Static personal portfolio site (Home, Projects, Resume, Contact) for an ML/CS
student. Built with Astro (static output), Tailwind CSS, and a handful of
React islands for interactive ML-concept demos.

## Tech stack

- **Astro 5** (`output: 'static'`) — pages/layouts in `src/pages`, `src/layouts`
- **Tailwind CSS 3** — utility classes everywhere; dark mode via `class` (site is hard-set to `<html class="dark">` in `BaseLayout.astro`, so it currently always renders dark regardless of OS theme — `ThemeToggle.astro` exists to flip this client-side)
- **React 18** islands (`@astrojs/react`) — only for the interactive demo charts under `src/components/visual/*.tsx`, hydrated with `client:load`
- **D3** and **KaTeX** are dependencies for those visual/math demos
- No test suite, no linter config, no CMS/backend — content lives in `src/data/*.ts`

## Commands

```bash
npm install
npm run dev       # astro dev
npm run build     # astro build -> dist/
npm run preview   # astro preview
```

## Structure

```
src/
  layouts/BaseLayout.astro     # <html>, header/nav, ThemeToggle, page shell
  pages/
    index.astro                # Home: LandingIntro (hero + NodeNetwork) + FeaturedWork + CTAs + StatsPanel
    projects/index.astro       # ProjectCarousel fed by data/projects.ts
    resume/index.astro         # ResumePanel fed by data/resume.ts
    services/index.astro       # ServicesPanel: service cards deep-linking to projects/roles
    skills/index.astro         # redirects to /resume/ (skills live inside Resume page)
    contact/index.astro        # Formspree-backed contact form
  components/                  # Astro components (see "Live vs. orphaned" below)
  components/visual/*.tsx      # React islands: bias-variance, overfitting, precision-recall, decision boundary
  data/projects.ts             # Project entries (title, description, techStack, github link)
  data/resume.ts                # education, experience, languages, aboutMe (incl. Google Doc full-resume link)
  data/skills.ts                # skill name/category/level/tooltip, used by ResumePanel
  styles/global.css             # theme CSS vars, fonts, custom animations/keyframes
  types/index.ts
public/                         # favicon.svg, profile-avatar.webp (nav), project-images/*.webp, CNAME
docs/CLOUDFLARE_522_CHECKLIST.md  # DNS/proxy runbook for the custom domain
.github/workflows/deploy-pages.yml # builds with BASE_PATH=/ and deploys dist/ to GitHub Pages
```

### Live vs. orphaned components

Only some `src/components/*.astro` files are actually imported by a page:

- **Live:** `CognitiveLoader`, `ThemeToggle` (via `BaseLayout`); `LandingIntro`,
  `FeaturedWork`, `StatsPanel` (via `pages/index.astro`), `NodeNetwork`
  (canvas hero background, via `LandingIntro`); `ProjectCarousel`
  (via `pages/projects`); `ResumePanel` (via `pages/resume`);
  `ServicesPanel` (via `pages/services`).
- **Not currently wired into any page:** `SkillsSection.astro`,
  `TrajectorySection.astro`, `ExperimentsSection.astro`, `HumanModelCard.astro`,
  `VisualIntuitionSection.astro` (the wrapper for the four React ML-demo
  islands), `NeuralBackground.astro`, `NeuralStatsLink.astro`. Before editing
  one of these expecting it to affect the live site, check whether it's
  actually imported — grep for the component name under `src/pages`.

## Design system

- **Colors** are CSS custom properties in `src/styles/global.css`, swapped by
  the `.dark` class: `--surface`, `--ink`, `--accent` (`#00BFA6` teal, same in
  both themes), `--accent-muted`, `--muted`. Use `--accent-text` (not `--accent`) for teal text/icons:
  `#00BFA6` is only 2.2:1 on the light surface. The shared `--ds-*` panel tokens have
  light-mode values under `:root:not(.dark)`; translucent tints use
  `rgba(var(--ds-accent-rgb), a)` so they follow the theme. Tailwind's `tailwind.config.mjs`
  also defines `surface`/`ink`/`accent` (teal/blue/coral) and `sans`/`mono`
  font families, but in practice components use the CSS vars directly
  (`text-[var(--ink)]`, `bg-[var(--accent-muted)]`) rather than the Tailwind
  color tokens — follow that existing convention for consistency.
- **Fonts:** Inter (sans, body) and JetBrains Mono (`.font-mono`, used for
  small uppercase labels), loaded via Google Fonts `@import` in `global.css`.
- **Visual voice:** dark-first, minimal, rounded-2xl cards, soft teal glow/hover
  states (`card-hover`, `.cta-build-with-me` pulse, `.profile-hero-ring`),
  subtle float/fade keyframe animations, all respecting
  `prefers-reduced-motion`.
- **Layout conventions:** `max-w-4xl`/`max-w-5xl`/`max-w-xl` centered
  containers per section; mobile-first with `min-h-[44px]` touch targets and
  `env(safe-area-inset-*)` padding for notched devices; horizontal scroll-snap
  carousel pattern (see `ProjectCarousel.astro`) rather than a JS carousel lib.
- Nav lives in `BaseLayout.astro`: Home / Projects / Resume / "Build with me"
  (→ `/contact/`, styled as a highlighted CTA, not a plain nav link).

## Content

- **Identity:** Bertin Iradukunda — CS + Math/Economics minor student at NYU
  Abu Dhabi (expected grad 2028), plus MIT (remote coursework) and CodePath
  (technical interview prep, applied AI engineering) listed under education.
- **Experience:** Research Analyst Intern (Mentora), Technical Interview
  Scholar (CodePath), Library Reference Assistant (NYUAD), Field Monitor
  (Areco Rwanda Nziza) — all in `data/resume.ts`.
- **Projects:** 6 entries in `data/projects.ts`, each linking out to a GitHub
  repo under `github.com/Bertin-Ir/*` (no case-study pages on this site —
  cards link straight to GitHub).
- **Skills:** flat list with 0–100 `level` values in `data/skills.ts`
  (Languages / Web / Tools / ML-Data categories), rendered by `ResumePanel`.
- **Contact:** form posts to a Formspree endpoint hardcoded in
  `pages/contact/index.astro` (`FORM_ENDPOINT`), notifications go to
  `bi2067@nyu.edu`; page also links GitHub, email, and LinkedIn directly.
- To update resume/project/skill content, edit the relevant file in
  `src/data/` — no rebuild-of-content-model needed, pages just map over the
  arrays.

## Deployment

- GitHub Actions (`.github/workflows/deploy-pages.yml`) builds on every push
  to `main` and deploys `dist/` to GitHub Pages via `actions/deploy-pages`.
  `BASE_PATH` is set to `/` in that workflow because the site is served at a
  **custom domain root** (`bertin.ira.dev`, via `CNAME`/`public/CNAME`), not
  under a `/Personal_website/` subpath.
- DNS/CDN is Cloudflare in front of GitHub Pages. `docs/CLOUDFLARE_522_CHECKLIST.md`
  is the runbook for diagnosing 522 errors (DNS-only vs. proxied CNAME, SSL
  mode, GitHub Pages "Enforce HTTPS") — consult it first if the custom domain
  is down but `*.github.io` works.
