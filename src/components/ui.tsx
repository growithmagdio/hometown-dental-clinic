import { useEffect, useRef, type ReactNode } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "../lib/gsap";

/** Words rise out of a mask, one after another, when scrolled into view. */
export function SplitReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  italic = [],
  id,
  accent = "text-gold-ink",
}: {
  accent?: string;
  id?: string;
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  italic?: string[];
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = m[Tag];
  return (
    <MotionTag
      id={id}
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ staggerChildren: reduce ? 0 : 0.06, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top">
          <m.span
            className={`inline-block ${italic.includes(w.replace(/[.,]/g, "")) ? `italic ${accent}` : ""}`}
            variants={{
              hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
              show: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </m.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Fade-and-rise for blocks of content. */
export function Rise({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

/** Image that drifts against the scroll inside its frame. */
export function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 10,
  sizes = "100vw",
  priority = false,
  w = 1344,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  sizes?: string;
  priority?: boolean;
  w?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!wrap.current || !img.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      img.current,
      { yPercent: -strength },
      {
        yPercent: strength,
        ease: "none",
        scrollTrigger: { trigger: wrap.current, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [strength]);
  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <img
        ref={img}
        src={`${src}.webp`}
        srcSet={`${src}-sm.webp 720w, ${src}.webp ${w}w`}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.22] object-cover"
      />
    </div>
  );
}

/** Button that leans toward the cursor. */
export function Magnetic({
  href,
  children,
  className = "",
  external = false,
  strength = 0.35,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const reduce = useReducedMotion();
  return (
    <m.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </m.a>
  );
}

export function refreshScroll() {
  ScrollTrigger.refresh();
}
