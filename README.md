# ML / AI / Data Science Portfolio

A modern, dark-first portfolio for ML Engineers and Data Scientists. Multi-page design with Home, Projects, Resume, and Contact.

## Stack

- **Astro** (static) + **TypeScript** + **Tailwind CSS**
- Deploy on Vercel, Netlify, or GitHub Pages

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

| Page | Content |
|------|---------|
| **Home** | Profile picture, intro, stats, CTAs, neural background flair |
| **Projects** | Swipeable card carousel with arrows |
| **Resume** | Vertical tabs: Experience, Education, Skills, Languages, About Me |
| **Contact** | Form (Formspree) + links |

## Customization

1. **Profile picture**: Add `public/profile.jpg` (200×200px recommended).

2. **Resume data**: Edit `src/data/resume.ts` (education, experience, languages, aboutMe) and `src/data/skills.ts`.

3. **Projects**: Edit `src/data/projects.ts`.

4. **Contact**: Replace `YOUR_FORM_ID` in `src/pages/contact/index.astro` with your [Formspree](https://formspree.io) form ID.

5. **Theme**: Dark mode default; toggle top-center. Colors in `src/styles/global.css`.
