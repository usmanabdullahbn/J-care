# J-Kare Surgical — Website

A 4-page React site (Home, Manufacturing/About, Products, Contact) built for
J-Kare Surgical Store — an orthopedic support manufacturer and retailer in
Karachi, Pakistan.

Built with **React 18 + Vite + React Router + Tailwind CSS + Framer Motion**.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder to any static host (Netlify,
Vercel, Hostinger, cPanel, etc).

## Replace these placeholders before launch

Real business details weren't available from the Facebook page (it blocks
automated access), so the following are placeholders — search for them and
swap in real values:

- **Phone / WhatsApp number** — currently `+92 000 0000000` and
  `https://wa.me/920000000000` in `Navbar.jsx`, `Footer.jsx`, `Contact.jsx`,
  and `Products.jsx`.
- **Email** — currently `info@jkaresurgical.com` in `Footer.jsx` and
  `Contact.jsx`.
- **Address** — currently just "Karachi, Sindh, Pakistan" — add the street
  address in `Footer.jsx` and `Contact.jsx`.
- **Store hours** — placeholder in `Contact.jsx`.
- **Photos** — every dashed-border box labeled "photo placeholder" (in
  `About.jsx` and `Products.jsx`) is meant to be replaced with real product
  and workshop photos.
- **Product list & specs** — `Products.jsx` has 9 sample products with
  material/size/compression info based on typical orthopedic support
  categories. Confirm and edit against what you actually manufacture.
- **Google Map** — `Contact.jsx` has a placeholder box; replace with an
  `<iframe>` embed of your real location from Google Maps ("Share > Embed a
  map").
- **Contact form backend** — the form in `Contact.jsx` currently doesn't
  send anywhere. Wire it to Formspree, EmailJS, or your own API so
  submissions actually reach you.

## Project structure

```
src/
  components/   Navbar, Footer, animated diagram, reveal/marquee helpers
  pages/        Home.jsx, About.jsx, Products.jsx, Contact.jsx
  App.jsx       routes + page transitions
  index.css     Tailwind + global styles
tailwind.config.js   color, font and animation tokens
```

## Design notes

- **Palette**: ink navy, surgical teal, warm bandage off-white, steel grey,
  amber accent — evokes clinical trust plus a manufacturing floor.
- **Type**: Space Grotesk (headings), Inter (body), IBM Plex Mono (labels,
  specs — like a real spec sheet).
- **Signature motif**: a dashed "stitch line" divider and an animated
  technical-drawing style brace diagram in the hero, both referencing how
  the products are actually stitched together.
"# J-care" 
