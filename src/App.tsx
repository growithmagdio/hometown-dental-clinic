import { useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ScrollTrigger, scrollToHash, startSmoothScroll } from "./lib/gsap";
import { nav } from "./data/site";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Doctor, Emergency, NewPatients, Reviews, Services, Team, Values } from "./components/Sections";
import { Contact, Footer } from "./components/Contact";
import ImplantScroll from "./components/ImplantScroll";

export default function App() {
  useEffect(() => {
    const stop = startSmoothScroll();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href")!;
      if (hash.length < 2) return;
      e.preventDefault();
      scrollToHash(hash);
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      stop();
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-ivory">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Values />
        <ImplantScroll />
        <About />
        <Services />
        <Doctor />
        <Team />
        <Reviews />
        <NewPatients />
        <Emergency />
        <Contact />
      </main>
      <Footer nav={nav} />
    </LazyMotion>
  );
}
