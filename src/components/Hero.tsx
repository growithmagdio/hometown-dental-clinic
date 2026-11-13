import { useEffect, useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { gsap } from "../lib/gsap";
import { asset, site } from "../data/site";
import { Stars } from "./Brand";
import { Magnetic } from "./ui";

export default function Hero() {
  const sec = useRef<HTMLElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const st = { trigger: sec.current, start: "top top", end: "bottom top", scrub: true };
    const a = gsap.to(img.current, { yPercent: 10, scale: 1.12, ease: "none", scrollTrigger: st });
    const b = gsap.to(copy.current, { yPercent: -12, opacity: 0.2, ease: "none", scrollTrigger: st });
    return () => { a.scrollTrigger?.kill(); a.kill(); b.scrollTrigger?.kill(); b.kill(); };
  }, []);
  return (
    <section ref={sec} id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16">
        <div ref={copy} className="lg:col-span-6 xl:col-span-6">
          <p className="fade-up eyebrow flex items-center gap-3 text-gold-ink" style={{ animationDelay: "0.05s" }}>
            <span className="h-px w-8 bg-gold" /> {site.doctor} · Sheridan, Wyoming
          </p>
          <h1 id="hero-title" className="display mt-6 text-[2.9rem] text-forest sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
            <span className="block overflow-hidden pb-[0.06em]"><span className="rise-line block" style={{ animationDelay: "0.1s" }}>High Quality Dentistry.</span></span>
            <span className="block overflow-hidden pb-[0.1em]"><span className="rise-line block italic text-gold-ink" style={{ animationDelay: "0.22s" }}>A Small Town Feel.</span></span>
          </h1>
          <div className="fade-up" style={{ animationDelay: "0.5s" }}>
            <p className="lede mt-6 max-w-lg text-charcoal/75">Kindness, honesty, and personalized dental care, right here in Sheridan.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Magnetic href="#contact" className="btn btn-forest" strength={0.2}>
                <CalendarDays className="h-4 w-4" /> Schedule an Appointment
              </Magnetic>
              <Magnetic href="#services" className="btn btn-outline" strength={0.2}>
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Magnetic>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-forest/10 pt-6">
              <Stars />
              <p className="text-[14px] text-charcoal/75"><strong className="font-semibold text-forest">100+ five-star</strong> Google reviews</p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <div className="unveil relative aspect-[4/5] overflow-hidden rounded-t-[200px] bg-sage sm:rounded-t-[260px]" style={{ animationDelay: "0.15s" }}>
            <img
              ref={img}
              src={asset("dr-hoopes-outdoor.webp")}
              srcSet={`${asset("dr-hoopes-outdoor-xs.webp")} 420w, ${asset("dr-hoopes-outdoor-sm.webp")} 560w, ${asset("dr-hoopes-outdoor.webp")} 768w`}
              sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 44vw, 60vw"
              alt="Dr. Ethan Hoopes standing outdoors in Sheridan"
              width={768}
              height={1024}
              fetchPriority="high"
              className="h-full w-full object-cover object-[50%_30%]"
            />
          </div>
          <div className="fade-up absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white/95 p-4 shadow-[0_20px_50px_-25px_rgba(23,63,53,0.45)] backdrop-blur sm:left-auto sm:right-[-8px] sm:w-[300px] lg:-left-10 lg:right-auto" style={{ animationDelay: "0.9s" }}>
            <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage text-forest">
              <span className="absolute inset-0 animate-ping rounded-full bg-sage/70" style={{ animationDuration: "2.6s" }} />
              <span className="relative h-2.5 w-2.5 rounded-full bg-forest" />
            </span>
            <p className="text-[14px] leading-snug text-charcoal/80">
              <strong className="block font-semibold text-forest">Accepting new patients</strong>
              We're prompt in getting you on the schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
