# Interactive Partner Network Map

A portfolio-friendly static HTML/CSS/JavaScript version of an interactive partner network map.

## Files

- `index.html` — page shell
- `styles.css` — all styling
- `script.js` — map data, filters, pins, modals, and interactions
- `assets/world-map-transparent-2x.png` — map image
- `assets/Gotham-Medium.otf` — font file

## Setup

1. Put `index.html`, `styles.css`, and `script.js` in the root of your GitHub Pages repo.
2. Put your map and font in `/assets/`.
3. Confirm these paths exist:
   - `./assets/world-map-transparent-2x.png`
   - `./assets/Gotham-Medium.otf`
4. Turn on GitHub Pages from the repository settings.

## Adding partners

Open `script.js`, search for `const PARTNERS = [`, then copy and edit one partner object.
