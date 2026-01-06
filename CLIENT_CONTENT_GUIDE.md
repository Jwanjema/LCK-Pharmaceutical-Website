Client Content Update Guide

Overview

- This project is a static React app built with Create React App and Tailwind CSS.
- Content is stored directly in React components and page files under `src/pages` and `src/components`.

Where to update content

- Main pages: `src/pages/*` (HomePage.tsx, AboutPage.tsx, ContactPage.tsx, ServiceDetailsPage.tsx, ResourcesPage.tsx, ExpertisePage.tsx, TeamPage.tsx, CaseStudiesPage.tsx)
- Hero, sections and modular blocks: `src/components/home/*`, `src/components/about/*`, `src/components/contact/*`, `src/components/expertise/*`, `src/components/resources/*`
- Navigation labels: `src/components/Header.tsx` (update `navItems` array)
- Footer: `src/components/Footer.tsx`
- Images: replace `src` values in component image tags; many components use remote image URLs — replace with your assets or hosted URLs.
- Reusable text blocks or data arrays are often declared at top of components (e.g., `services` in `ServicesOverview.tsx`, `partners` in `TrustSection.tsx`).

Responsive notes

- The site uses Tailwind CSS responsive utilities. Mobile-first classes are used (e.g., `sm:`, `md:`).
- When updating large hero images or mockups, include `loading="lazy"` and `decoding="async"` where possible.

How to run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

- Dev server will be available at `http://localhost:3000` by default.

How to build for production

```bash
npm run build
```

Deploy the contents of the `build/` folder to your hosting provider.

When you send content (text/images)

- Provide a list of image files and preferred placement (e.g., Homepage hero, About Us team photo for `TeamSection`).
- Provide final copy in a single document, and indicate which page/section each paragraph belongs to.
- If large images are provided, specify preferred sizes/ratios; I recommend using responsive sizes (e.g., 16:9 or 3:4 for thumbnails).

Contact me

- If you'd like, I can integrate the provided content and run a review across common breakpoints (mobile/tablet/desktop) and generate a short QA report.
