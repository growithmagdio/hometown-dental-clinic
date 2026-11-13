# Hometown Dental: Asset Inventory

Every image and file on the new site comes from the practice's live site (hometowndentalwyo.com, downloaded November 2026). The only generated visual is a 3D render of a dental implant (an object, no people) used for the scroll animation. No stock people, AI-generated people, invented staff or invented reviews are used.

Originals are kept untouched in `source-assets/originals/`. Web versions (resized, WebP, plus a `-sm` mobile size) are in `public/assets/hometown-dental/`.

| File (public/assets/hometown-dental/) | Original URL | Type | Used on the new site |
|---|---|---|---|
| logo.png, logo.webp | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/hometown-dental--01-Aq2BjR4Q2zcDlKgn.png | Logo (PNG, transparent) | Header logo, JSON-LD logo. Empty transparent margin trimmed; artwork unchanged |
| logo-white.png | same as above | Logo, white version made from the original | Footer (dark background) |
| dr-hoopes-outdoor(.webp, -sm.webp, -xs.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/img_9930-dOq41VexNziM7W8B.jpg | Photo: Dr. Ethan Hoopes outdoors | Hero |
| dr-hoopes-standing(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/dr-stand-up-mjEG267znGckvn6y.JPG | Photo: Dr. Hoopes standing | About section |
| dr-hoopes-portrait(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/dr.-mP4MpVa79Li6bWk5.JPG | Photo: Dr. Hoopes portrait | Meet Dr. Hoopes |
| team-tammy(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/tammy-YleQMR3eBvsBnQrn.JPG | Team photo: Tammy D., RDH | Team, About collage |
| team-teresa(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/teresa-A1a5KMGOKatPDrx0.JPG | Team photo: Teresa S., RDH | Team, About collage |
| team-amber(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/pxl_20251219_235701323-BBaan5grRQdr2pb6.jpg | Team photo: Amber P. | Team, About collage |
| team-gabby(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/gabby-dOqDbGzMJKhjMyGb.JPG | Team photo: Gabby E., Dental Assistant | Team, About collage |
| team-rebecca(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/pxl_20251219_235650707-63yisEO1rUCEw5uB.jpg | Team photo: Rebecca A., Dental Assistant | Team |
| svc-fillings(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/3-YleMBPap16H6R0Qr.png | Service image (mirror and tooth) | Services: Fillings |
| svc-hygiene(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/2-m2W4eKL33nSWZypV.png | Service image (cleaning) | Services: Hygiene & Exams |
| svc-root-canal(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/4-mk3D1kBpBWSNWlBb.png | Service image (root model) | Services: Root Canals |
| svc-emergency(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/toothbrush-YZ92zyXxL7C9nBgZ.png | Service image (toothbrush) | Services: Emergency / Extractions |
| svc-bridges(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/2-AE0pw1NVEkUJ2QVm.png | Service image | Services: Bridges |
| svc-crowns(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/5-mnl3OMxpq4UZKxl6.png | Service image | Services: Crowns |
| svc-implants(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/3-YBgpW326KxFBB7Qe.png | Service image (smile) | Services: Implants |
| svc-dentures(.webp, -sm.webp) | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/4-YrDa5nxyLLfZw1ZP.png | Service image | Services: Dentures |
| new-patient-form.pdf | https://assets.zyrosite.com/AoPexkOl0RtZvJ2k/new-patient-form-1-AwvrNBy2oWHqEOaB.pdf | PDF: new patient form | New Patients download button |
| implant/d-0…d-3.webp, implant/m-0…m-2.webp, implant/poster.webp | Created for this site (Higgsfield: GPT Image 2 stills + Kling 3.0 animation) | 3D product render packed as sprite sheets for the scroll animation (no people) | "A new tooth, piece by piece" scroll section (desktop 48 frames in 4 files, ~310 KB; mobile 30 frames in 3 files, ~130 KB) |
| /favicon.png, /apple-touch-icon.png | made from the logo | Icons | Browser tab, iOS home screen |
| /og.jpg | screenshot of the new hero | Social share image | Open Graph / Twitter card |

## Text content
- Services copy, Dr. Hoopes bio and Q&A, team bios, emergency copy and the moving notice: taken from the live site. Only spelling fixes were made.
- Reviews: four real reviews shown on the live site (Nikki U., Hyrum R., Nancy D., Michael M.), quoted word for word.
- "100+ five-star Google reviews": from the brief. Please confirm the current count on the Google profile before launch.

## Downloaded but not used
- toothbrushtoothpaste-mk3D1ZLnqNHzq0WM.jpg (Insights page photo): kept in source-assets/originals/ only.

## Not available
- No SVG/vector logo exists on the live site, so the original PNG is used. A vector redraw is recommended if the practice has the source file.
- Amber P.'s role is not listed on the live site, so no title is shown for her.
