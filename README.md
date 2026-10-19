# Leez-Space

Homepage for **Leez Space**, a property platform for renting, buying and selling verified homes and commercial spaces in Noida, Greater Noida and Ghaziabad.

## Tech stack

| What | Used for |
| --- | --- |
| **React 18** | UI, built from function components and hooks (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`) |
| **Vite 5** + `@vitejs/plugin-react` | Dev server with hot reload, and the production build |
| **Plain CSS** (`src/styles.css`) | All styling: CSS variables for the colour palette, Grid/Flexbox layout, keyframe animations, responsive breakpoints |
| **IntersectionObserver** | Fading sections in on scroll, starting the count-up stats and the chart/route drawings |
| **requestAnimationFrame** | Number count-up, smooth scroll tracking for the parallax and progress bar |
| **Inline SVG** | All icons (`src/components/Icon.jsx`), the QR code, chart line, route path and success tick |
| **Google Fonts** | Plus Jakarta Sans (main text) and Caveat (handwritten tagline) |
| **Unsplash** | Placeholder property photos |

There are no UI libraries, animation libraries or icon packages; everything is hand-written.

## Project structure

```
src/
  main.jsx            React entry point
  App.jsx             Page layout, toast and back-to-top button
  data.js             Categories, ROI properties, builders, cities, etc.
  hooks.js            useInView, useCountUp, useScrollY, useClickOutside
  styles.css          All styles and animations
  components/
    Header.jsx        Sticky header, mobile menu, scroll progress bar
    Hero.jsx          Hero, cycling Rent/Buy/Sell, search with suggestions
    Explore.jsx       Feature strip, stats counters, category cards
    Roi.jsx           Best for ROI carousel, growth chart
    Builders.jsx      Builder marquee
    Locations.jsx     City cards and animated route
    AppDownload.jsx   App section with phone mock-ups
    Enquiry.jsx       Enquiry form with validation
    Footer.jsx        Footer
    Icon.jsx          SVG icon set
    ui.jsx            Reveal, Eyebrow, SectionTitle, Logo
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # production build in dist/
```

## Notes

- Property photos are Unsplash placeholders; replace them with real listing photos.
- Builder names are shown as styled text, not official logos.
- The enquiry form validates input but isn't connected to a backend yet.
