# Success Engineering Enterprises — Kortrijk Xpo Redesign

An ultra-modern, high-performance remake of [Success Engineering Enterprises](https://successengineering.in/) inspired by the award-winning design system and motion aesthetics of [Kortrijk Xpo](https://kortrijkxpo.com/en).

Built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**, fully optimized for static export and hosting on **GitHub Pages**.

---

## 🌟 Key Features & Animations Covered

### 1. Dual-Chevron Curtain Arrow Preloader (`c-banner-preloader`)
- Giant left and right red/coral chevron SVG arrows that sweep outwards like grand curtains on initial page load.
- Large architectural hero typography (*"WHEN PRECISION MEETS EXCELLENCE"*) that scales and fades into view.
- Floating mechanical background glyphs with parallax movement.
- Integrated **Replay** button to re-experience the entrance animation anytime.

### 2. High-End Navigation & Animated 4-Line Hamburger
- Sticky desktop header with multi-level dropdowns for all 5 manufacturing bays.
- Micro top-bar featuring ISO certification credentials, SIDCO Kakkalur location, and direct helpline.
- Full-screen slide-in mobile navigation drawer (`#page-overlay`) in signature brand red.
- Morphing 4-line hamburger icon matching Kortrijk Xpo's exact interaction.

### 3. Full-Site Search Modal Dialog
- Accessible search dialog with instant live filtering across capabilities, materials, tolerances, client partners, and certifications.
- Quick keyword suggestion chips (*"Precision Stamping"*, *"ISO 9001:2015"*, *"Stainless Steel SS304"*, etc.).

### 4. Capabilities Showcase with Dual-Image Hover
- Filter pills: *All*, *Fabrication*, *Metal Parts*, *Assembly*, *Design*, *Tools & Dies*.
- Cards featuring original image hover transitions (default image seamlessly cross-fading to alternate angle on hover).
- Technical specification modal detailing machine tonnage, tolerances, compatible alloys, and direct RFQ actions.

### 5. Arrow Cutout Media Banner (`c-banner-small-default`)
- Geometric chevron arrow SVG mask seamlessly bridging the high-resolution metal stamping imagery with the plant visit narrative.

### 6. Facility Tour Slider & Lightbox (`c-media-gallery`)
- Horizontal draggable/scrollable gallery showcasing production bays, CNC toolrooms, and welding cells.
- The iconic Kortrijk Xpo wiggling SVG mascot icon (`.h-animation-wiggle`).
- Lightbox modal with high-res zoom and captions.

### 7. Sticky Stacking Cards (`c-stacking-cards`)
- 4 sticky manufacturing pillars that stack smoothly over one another during scroll.
- Distinctive chevron SVG top/bottom connectors.

### 8. Infinite Typography Marquee (`c-branding-element`)
- Dual-track ticker tape running in opposing directions with bold filled and outlined typography.

### 9. ISO 9001:2015 Quality Section & Certificate Viewer
- Certified by **UCAS India Pvt. Ltd.**
- Interactive Certificate Dossier Modal with verification badge, registration details, and download trigger.

### 10. OEM Client Partner Ecosystem
- Authentic logos: **Godrej**, **Johnson Lifts**, **Schwing Stetter**, **Rane TRW**, **Lotte**, **Cooper Standard**, **Oilfield Instrumentation**, and **TL India**.
- Monochromatic-to-vibrant hover effects and component supply specifications.

### 11. Landscape News & Engineering Insights (`c-card-landscape`)
- Rich editorial cards with reading times, category tags, and modal article previews.

### 12. Interactive Request a Quote (RFQ) Modal
- Capability selector, contact fields, estimated annual batch size, material notes, and celebratory confirmation state.

### 13. Kortrijk Xpo-Inspired Footer
- Newsletter subscription box, direct Google Maps link to SIDCO Kakkalur, helpline, and dual email links.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ or v20+
- npm v9+

### Install Dependencies
```bash
npm install
```

### Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building & Hosting on GitHub Pages

This project is configured with `output: 'export'` in `next.config.mjs` and includes a `.nojekyll` file in `public/`.

### 1. Build Static Output
```bash
npm run build
```
This generates the optimized static site in the `./out` directory.

### 2. Automatic Deployment via GitHub Actions
A pre-configured GitHub Actions workflow is provided at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To activate automatic deployments:
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Remake Success Engineering website with Kortrijk Xpo animations and Next.js"
   git push origin main
   ```
2. Go to your repository settings on GitHub:
   **Settings** > **Pages** > **Build and deployment** > **Source**: Select **GitHub Actions**.
3. Every push to `main` will automatically build and publish the website live to your GitHub Pages URL!
