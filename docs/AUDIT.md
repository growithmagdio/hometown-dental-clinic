# Hometown Dental: Website Audit (Phases 1 and 2)

Site audited: hometowndentalwyo.com (Hostinger Website Builder), November 2026.

## Phase 1: Content and structure
- **Duplicate pages:** /welcome-dentist and /new-patients-dentist carry nearly the same content. Merged into one New Patients section.
- **Navigation:** the menu is rendered twice in the page source (desktop and mobile copies), and there is no phone number in the header.
- **Weak calls to action:** buttons such as "Take me there!" say nothing about what happens next. Replaced with "Book an Appointment", "Call (307) 674-9661" and "New Patient Information".
- **Buried key facts:** the move to 1465 Burton St STE A (from January 1, 2027) and the "second floor, stairs only" access note were hard to find. Both now appear in the top banner, contact block and footer.
- **Copy errors fixed:** spelling slips such as "Jitzu" (Jiu-Jitsu) and "Hygenist" (Hygienist), plus small grammar fixes in bios. Meaning unchanged.
- **Reviews:** real reviews exist but sit low on the page. Now a dedicated section with links to leave a Google review and to Facebook.

## Phase 2: Visual audit
- **Hero:** a generic stock (Pexels) video with no people from the practice. Replaced by a real photo of Dr. Hoopes.
- **Brand:** the logo is only available as a PNG with large empty margins, so it showed small. Margins trimmed; a white version made for dark backgrounds.
- **Images:** service PNGs weighed 2 to 3 MB each. Converted to WebP at two sizes (most under 100 KB) with lazy loading.
- **Type and colour:** builder defaults with no clear hierarchy. New system: DM Serif Display + Inter; forest #173F35, ivory #FAF8F3, sage #DCE8DF, charcoal #252A27, gold #C7A66A.
- **Mobile:** long single columns with small tap targets. New layout uses 44px+ tap targets, a call button always in the header, and collapsible service cards.
- **Trust signals:** star rating, real team photos and reviews now appear early on the page.

## Phase 3: What the rebuild delivers
React + TypeScript + Tailwind + Framer Motion + Lucide, pre-rendered to static HTML for speed and SEO. It includes a Dentist JSON-LD schema, meta and Open Graph tags, a sitemap and robots.txt. Motion includes an Apple-style scroll-scrubbed implant section (canvas frame sequence that loads progressively and serves half the frames on phones) and a scroll parallax hero. Everything respects reduced-motion settings.

## QA checklist
- [x] Original logo used (header and footer)
- [x] Real photos of Dr. Hoopes and all five team members
- [x] All images load (0 broken in automated check)
- [x] Mobile crops checked at 390px; no horizontal scroll
- [x] CTA links: tel:+13076749661, #contact form, PDF download, Google review and Facebook
- [x] Nav anchors resolve to sections; mobile menu opens and closes
- [ ] Confirm "100+ five-star Google reviews" count with the practice
- [ ] Set VITE_FORM_ENDPOINT so form requests arrive by email (otherwise the form opens the visitor's email app)
- [ ] After January 1, 2027: switch `address` to the Burton St address in src/data/site.ts and index.html JSON-LD
