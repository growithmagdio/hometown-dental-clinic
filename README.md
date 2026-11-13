# Hometown Dental: Website

Premium redesign for Hometown Dental, Sheridan, WY (Dr. Ethan Hoopes, DDS).
Built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide icons. Pages are pre-rendered to static HTML.

## Run
```bash
npm install
npm run dev        # local dev
npm run build      # production build to dist/ (pre-rendered)
npm run preview    # serve dist/
```
Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages or Hostinger). Paths are relative, so it also works in a subfolder.

## Editing content
All practice details (phone, email, address, hours, services, team, reviews) live in **`src/data/site.ts`**. Also update the JSON-LD block in `index.html` if the address or phone changes.

## Appointment form
Set `VITE_FORM_ENDPOINT` to a form service URL (for example Formspree) before building:
```bash
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx npm run build
```
Without it, the form opens the visitor's email app with the request filled in, addressed to info@hometowndentalwyo.com.

## Assets
- Web images: `public/assets/hometown-dental/` (WebP, two sizes each)
- Untouched originals: `source-assets/originals/`
- Where every asset came from: `docs/ASSET_INVENTORY.md`
- Audit and QA checklist: `docs/AUDIT.md`
