import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "../data/site";
import { Logo } from "./Brand";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Moving notice, as announced on the current site */}
      <p className="bg-forest px-5 py-2.5 text-center text-[13px] leading-snug text-ivory/90">
        <span className="font-semibold text-gold">We're moving!</span> From {site.newAddress.from}, find us at{" "}
        <span className="whitespace-nowrap">{site.newAddress.street}, {site.newAddress.city}, {site.newAddress.region}</span>
      </p>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          scrolled ? "border-b border-forest/10 bg-ivory/90 shadow-[0_8px_30px_-20px_rgba(23,63,53,0.35)] backdrop-blur-md" : "border-b border-transparent bg-ivory"
        }`}
      >
        <nav aria-label="Primary" className={`mx-auto flex max-w-[1360px] items-center justify-between px-5 transition-[height] duration-500 md:px-8 ${scrolled ? "h-[68px]" : "h-[84px]"}`}>
          <a href="#top" className="shrink-0" aria-label="Hometown Dental, back to top">
            <Logo className={`transition-[height] duration-500 ${scrolled ? "h-10 md:h-11" : "h-11 md:h-14"}`} />
          </a>
          <ul className="hidden items-center gap-7 xl:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-line pb-0.5 text-[14px] font-medium text-charcoal/80 hover:text-forest">{n.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 md:gap-3">
            <a href={site.phoneHref} className="hidden items-center gap-2 text-[14px] font-semibold text-forest lg:flex">
              <Phone className="h-4 w-4" /> Call {site.phoneDisplay}
            </a>
            <a href="#contact" className="btn btn-forest hidden !h-11 !px-5 sm:inline-flex">Book an Appointment</a>
            <a href={site.phoneHref} className="grid h-11 w-11 place-items-center rounded-full bg-forest text-ivory sm:hidden" aria-label={`Call ${site.phoneDisplay}`}>
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-0 z-40 flex flex-col bg-ivory px-6 pb-8 pt-[150px] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="divide-y divide-forest/10 border-y border-forest/10">
              {nav.map((n, i) => (
                <m.li key={n.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.05, duration: 0.5 }}>
                  <a href={n.href} onClick={() => setOpen(false)} className="display block py-4 text-3xl text-forest">{n.label}</a>
                </m.li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-forest w-full">Book an Appointment</a>
              <a href={site.phoneHref} className="btn btn-outline w-full"><Phone className="h-4 w-4" /> Call {site.phoneDisplay}</a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
