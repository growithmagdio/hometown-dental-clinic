import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "../lib/gsap";
import { asset } from "../data/site";

/*
 * Apple-style scroll scrub: a dental implant separates into crown, abutment and implant as you scroll.
 * Frames are small WebP stills drawn on a canvas. They only start loading when the section is near,
 * load coarse-to-fine (so scrubbing works right away), and phones get half the frames at a smaller size.
 */

// Frames are packed into a few sprite sheets (frame i lives on sheet i % sheets), so the first
// sheet alone already covers the whole animation coarsely and each extra sheet adds detail.
const SETS = {
  d: { count: 48, w: 720, sheets: 4, cols: 4 },
  m: { count: 30, w: 540, sheets: 3, cols: 5 },
} as const;

const steps = [
  { n: "01", t: "The implant", c: "A titanium post placed in the jaw that takes the place of the tooth root." },
  { n: "02", t: "The abutment", c: "A small connector that joins the implant to your new tooth." },
  { n: "03", t: "The crown", c: "A natural-looking tooth, shaped and shaded to match your smile." },
];

// Label positions (fraction of the square frame) for the fully separated parts.
const labels = [
  { t: "Crown", y: 0.13, from: 0.74 },
  { t: "Abutment", y: 0.44, from: 0.8 },
  { t: "Implant", y: 0.76, from: 0.86 },
];

export default function ImplantScroll() {
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sec = section.current!;
    const cv = canvas.current!;
    const ctx = cv.getContext("2d", { alpha: false })!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const set = window.innerWidth < 768 || conn?.saveData ? "m" : "d";
    const { count, w, sheets, cols } = SETS[set];
    const sheetImgs: (HTMLImageElement | null)[] = new Array(sheets).fill(null);
    const has = (i: number) => i >= 0 && i < count && !!sheetImgs[i % sheets];
    const stepEls = Array.from(sec.querySelectorAll<HTMLElement>("[data-step]"));
    const labelEls = Array.from(sec.querySelectorAll<HTMLElement>("[data-label]"));
    let p = 0;
    let drawn = -1;
    let size = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = cv.clientWidth;
      cv.width = cv.height = Math.round(size * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingQuality = "high";
      drawn = -1;
      draw();
    };

    const nearest = (i: number) => {
      for (let d = 0; d < count; d++) {
        if (has(i - d)) return i - d;
        if (has(i + d)) return i + d;
      }
      return -1;
    };

    // frames play between 6% and 82% of the section; the start and end hold still
    const frameFor = (q: number) => Math.round(Math.min(1, Math.max(0, (q - 0.06) / 0.76)) * (count - 1));

    const draw = () => {
      const k = nearest(frameFor(p));
      if (k < 0 || k === drawn || !size) return;
      drawn = k;
      const j = Math.floor(k / sheets);
      ctx.drawImage(sheetImgs[k % sheets]!, (j % cols) * w, Math.floor(j / cols) * w, w, w, 0, 0, size, size);
    };

    const ui = () => {
      const active = p < 0.36 ? 0 : p < 0.62 ? 1 : 2;
      stepEls.forEach((el, i) => el.toggleAttribute("data-active", i === active));
      labelEls.forEach((el, i) => el.toggleAttribute("data-on", reduced || p >= labels[i].from));
      if (bar.current) bar.current.style.transform = `scaleY(${p.toFixed(3)})`;
    };

    // Wait until the rest of the page has loaded, then fetch the sheets once the section is close.
    let started = false;
    let pageReady = document.readyState === "complete";
    let near = false;
    const load = () => {
      if (started || !pageReady || !near) return;
      started = true;
      let k = 0;
      const next = () => {
        if (k >= sheets) return;
        const idx = k++;
        const img = new Image();
        img.decoding = "async";
        img.src = asset(`implant/${set}-${idx}.webp`);
        img
          .decode()
          .then(() => {
            sheetImgs[idx] = img;
            drawn = -1;
            draw();
          })
          .catch(() => {})
          .finally(next);
      };
      next();
      next();
    };
    const onLoad = () => {
      pageReady = true;
      load();
    };
    if (!pageReady) window.addEventListener("load", onLoad, { once: true });

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          near = true;
          load();
        }
      },
      { rootMargin: "60% 0px" },
    );
    io.observe(sec);

    const trig = ScrollTrigger.create({
      trigger: sec,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        p = reduced ? 1 : self.progress;
        draw();
        ui();
      },
    });
    if (reduced) p = 1;
    resize();
    ui();
    const ro = new ResizeObserver(resize);
    ro.observe(cv);
    return () => {
      trig.kill();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <section ref={section} id="implants" aria-labelledby="implant-title" className="relative h-[300vh] bg-ivory md:h-[340vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="relative mx-auto grid w-full max-w-[1360px] items-center gap-5 px-5 pt-16 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-0">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="eyebrow flex items-center gap-3 text-gold-ink"><span className="h-px w-8 bg-gold" /> Dental Implants</p>
            <h2 id="implant-title" className="display mt-3 text-[2.1rem] text-forest sm:text-5xl lg:mt-5 lg:text-[3.6rem]">
              A new tooth, <span className="italic text-gold-ink">piece by piece.</span>
            </h2>
            <div className="relative mt-5 flex gap-5 lg:mt-10">
              <span className="relative hidden w-px shrink-0 bg-forest/15 sm:block">
                <span ref={bar} className="absolute inset-0 origin-top bg-gold" style={{ transform: "scaleY(0)" }} />
              </span>
              <ol className="grid gap-1 sm:gap-5">
                {steps.map((s) => (
                  <li key={s.n} data-step className="step">
                    <p className="flex items-baseline gap-3">
                      <span className="text-[12px] font-semibold tracking-[0.18em] text-gold-ink">{s.n}</span>
                      <span className="display text-[1.35rem] text-forest lg:text-[1.7rem]">{s.t}</span>
                    </p>
                    <p className="step-copy pl-[34px] text-[14.5px] leading-relaxed text-charcoal/75 lg:text-[15.5px]">{s.c}</p>
                  </li>
                ))}
              </ol>
            </div>
            <a href="#contact" className="link-line mt-5 hidden items-center gap-2 text-[15px] font-semibold text-forest sm:inline-flex lg:mt-10">
              Ask if implants are right for you <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <div className="relative mx-auto aspect-square w-full max-w-[min(100%,46svh)] lg:max-w-[min(100%,82svh)]">
              <canvas
                ref={canvas}
                role="img"
                aria-label="A dental implant separating into its three parts: crown, abutment and implant post"
                className="absolute inset-0 h-full w-full rounded-[28px]"
                style={{ backgroundImage: `url(${asset("implant/poster.webp")})`, backgroundSize: "cover" }}
              />
              {labels.map((l) => (
                <span key={l.t} data-label className="implant-label absolute left-[64%] flex items-center gap-2" style={{ top: `${l.y * 100}%` }}>
                  <span className="h-px w-6 bg-forest/40 sm:w-12" />
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-forest shadow-sm backdrop-blur sm:text-[13px]">{l.t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
