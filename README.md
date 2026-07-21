# VilGrowth — Website

A premium, dark, automotive-inspired one-page website for VilGrowth, built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project structure

```
src/
  assets/
    vilius.png          — founder photo (used in Founder + Final CTA sections)
  components/
    UI.jsx               — shared buttons, section headings, cards, reveal animation
    Navbar.jsx
    Hero.jsx
    Trust.jsx
    Problem.jsx
    Solution.jsx
    Process.jsx
    WhyVilGrowth.jsx
    Founder.jsx
    FAQ.jsx
    FinalCTA.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
index.html
tailwind.config.js
postcss.config.js
vite.config.js
```

## Things to customize before launch

- **Booking link**: update `CALENDLY_LINK` in `src/components/UI.jsx`.
- **Contact email**: update `EMAIL` in `src/components/UI.jsx`.
- **Founder photo**: replace `src/assets/vilius.png` with an updated photo if needed (same filename, or update the import in `Founder.jsx` and `FinalCTA.jsx`).
- **Trust section logos**: `src/components/Trust.jsx` currently uses neutral placeholder marks (no real client names) — swap in real dealership logos once you have permission to display them.

## Deploying

This is a standard Vite + React app and deploys to any static host:

- **Vercel**: `vercel` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder after `npm run build`, or connect the repo
- **GitHub Pages**: build, then push `dist/` to a `gh-pages` branch

### Connecting a custom domain (e.g. via Namecheap)

1. Deploy to Vercel or Netlify and note the assigned URL.
2. In your hosting provider's dashboard, add your domain (e.g. `vilgrowth.com`).
3. In Namecheap, go to **Domain List → Manage → Advanced DNS**.
4. Add the DNS records your host provides (usually an `A` record for the root domain and a `CNAME` for `www`).
5. Wait for DNS propagation (up to 24–48 hours), then verify the domain in your host's dashboard.
