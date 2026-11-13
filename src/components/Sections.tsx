import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, CreditCard, Download, FileText, HandHeart, Heart, Home, Phone, Scale, ShieldCheck, Smile, Stethoscope } from "lucide-react";
import { asset, doctor, emergencyQuote, reviews, services, site, team } from "../data/site";
import { Stars } from "./Brand";
import { Reveal } from "./Reveal";
import { ParallaxImage, Rise, SplitReveal } from "./ui";

const Eyebrow = ({ children, light = false }: { children: string; light?: boolean }) => (
  <p className={`eyebrow flex items-center gap-3 ${light ? "text-gold" : "text-gold-ink"}`}>
    <span className={`h-px w-8 ${light ? "bg-gold" : "bg-gold"}`} /> {children}
  </p>
);

/* 3 · Values */
export function Values() {
  const items = [
    { icon: Heart, t: "Kindness", c: "An atmosphere of kindness from the front desk to the chair." },
    { icon: Scale, t: "Honesty", c: "Open, honest communication and straight answers." },
    { icon: HandHeart, t: "Respect", c: "Your time, your comfort and your choices come first." },
    { icon: Home, t: "Hometown Feeling", c: "That small town feeling we all know and love." },
  ];
  return (
    <section aria-labelledby="values-title" className="border-y border-forest/10 bg-white">
      <h2 id="values-title" className="sr-only">Our values</h2>
      <ul className="mx-auto grid max-w-[1360px] grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, t, c }, i) => (
          <li key={t} className={`border-forest/10 px-5 py-10 md:px-8 md:py-14 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
            <Rise delay={i * 0.08}>
              <Icon className="h-6 w-6 text-gold-ink" strokeWidth={1.4} />
              <h3 className="display mt-5 text-2xl text-forest md:text-[1.7rem]">{t}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal/70">{c}</p>
            </Rise>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* 4 · About */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-[1360px] items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-6">
          <Reveal>
            <ParallaxImage src={asset("dr-hoopes-standing")} w={1000} alt="Dr. Ethan Hoopes outside the practice" sizes="(min-width: 1024px) 46vw, 92vw" className="aspect-[4/5] w-full rounded-[28px]" />
          </Reveal>
          <div className="absolute -bottom-8 -right-2 hidden w-[42%] md:block lg:-right-10">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-2 rounded-[22px] bg-ivory p-2">
                {["team-tammy", "team-teresa", "team-gabby", "team-amber"].map((t) => (
                  <img key={t} src={asset(`${t}-sm.webp`)} alt="" loading="lazy" className="aspect-[4/5] w-full rounded-[16px] object-cover object-top" />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Rise><Eyebrow>About Hometown Dental</Eyebrow></Rise>
          <SplitReveal id="about-title" text="Care That Feels Like Home." italic={["Home"]} className="display mt-6 text-[2.7rem] text-forest sm:text-6xl lg:text-[4.3rem]" />
          <Rise delay={0.1}>
            <p className="lede mt-7 text-charcoal/75">
              Hometown Dental runs on our core values: kindness, honesty, respect, and maintaining that small town, hometown feeling we all know and love.
            </p>
            <p className="mt-5 text-[15.5px] leading-relaxed text-charcoal/70">
              We seek to continually improve the oral health of the people of Sheridan (and beyond!) because we care. By providing excellence in dental treatment, an atmosphere of kindness, and open honest communication with our patients, we are able to take care of all your dental needs while making you feel right at home.
            </p>
            <a href="#team" className="btn btn-outline mt-9">Meet Our Team <ArrowRight className="h-4 w-4" /></a>
          </Rise>
        </div>
      </div>
    </section>
  );
}

/* 5 · Services */
export function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Rise><Eyebrow>Dental Services</Eyebrow></Rise>
            <SplitReveal id="services-title" text="Gentle, complete care for the whole family." italic={["whole", "family."]} className="display mt-6 text-[2.6rem] text-forest sm:text-6xl lg:text-[4rem]" />
          </div>
          <Rise delay={0.1} className="md:justify-self-end">
            <p className="lede max-w-md text-charcoal/70">From routine cleanings to crowns, implants and same-day emergencies, here are the general dentistry services we offer.</p>
          </Rise>
        </div>

        {/* Desktop: list + image that follows your pointer */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-12">
          <ol className="lg:col-span-6">
            {services.map((sv, i) => (
              <li key={sv.title} className="border-t border-forest/10 last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-expanded={active === i}
                  className="group flex w-full items-baseline gap-6 py-5 text-left"
                >
                  <span className={`w-8 text-[13px] font-semibold tabular-nums transition-colors ${active === i ? "text-gold-ink" : "text-charcoal/65"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className={`display block text-[1.9rem] transition-colors duration-500 ${active === i ? "text-forest" : "text-charcoal/55 group-hover:text-forest"}`}>{sv.title}</span>
                    <AnimatePresence initial={false}>
                      {active === i && (
                        <m.span className="block overflow-hidden" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                          <span className="block max-w-lg pt-3 text-[15px] leading-relaxed text-charcoal/70">{sv.copy}</span>
                        </m.span>
                      )}
                    </AnimatePresence>
                  </span>
                  <ArrowRight className={`h-5 w-5 shrink-0 transition-all duration-500 ${active === i ? "translate-x-0 text-forest opacity-100" : "-translate-x-2 opacity-0"}`} />
                </button>
              </li>
            ))}
          </ol>
          <div className="lg:col-span-6">
            <div className="sticky top-28 aspect-[3/2] overflow-hidden rounded-[28px] bg-sage">
              <AnimatePresence mode="popLayout" initial={false}>
                <m.img
                  key={s.img}
                  src={asset(`${s.img}.webp`)}
                  alt={s.alt}
                  loading="lazy" className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-forest backdrop-blur">{s.title}</span>
            </div>
          </div>
        </div>

        {/* Mobile & tablet: image cards */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {services.map((sv, i) => (
            <li key={sv.title}>
              <Rise delay={(i % 2) * 0.08}>
                <details className="group overflow-hidden rounded-[22px] border border-forest/10 bg-ivory">
                  <summary className="cursor-pointer list-none">
                    <img src={asset(`${sv.img}-sm.webp`)} alt={sv.alt} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                    <span className="flex items-center justify-between gap-4 px-5 py-4">
                      <span className="display text-[1.5rem] text-forest">{sv.title}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-forest transition-transform group-open:rotate-180" />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-charcoal/70">{sv.copy}</p>
                </details>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 6 · Dr. Hoopes */
export function Doctor() {
  return (
    <section aria-labelledby="doctor-title" className="bg-sage/60 px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <img src={asset("dr-hoopes-portrait.webp")} srcSet={`${asset("dr-hoopes-portrait-sm.webp")} 560w, ${asset("dr-hoopes-portrait.webp")} 1000w`} sizes="(min-width: 1024px) 38vw, 92vw" alt="Portrait of Dr. Ethan Hoopes, DDS" loading="lazy" width={1000} height={1500} className="aspect-[4/5] w-full rounded-[28px] object-cover object-top" />
            </Reveal>
            <Rise className="mt-6 flex items-center justify-between">
              <div>
                <p className="display text-2xl text-forest">{doctor.name}</p>
                <p className="text-[14px] text-charcoal/70">{doctor.role} · University of Wyoming, B.S. Physiology</p>
              </div>
              <Stethoscope className="h-6 w-6 text-gold-ink" strokeWidth={1.4} />
            </Rise>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Rise><Eyebrow>Meet Dr. Ethan Hoopes</Eyebrow></Rise>
          <SplitReveal id="doctor-title" text="Back home, helping his hometown smile." italic={["smile."]} className="display mt-6 text-[2.6rem] text-forest sm:text-6xl lg:text-[4rem]" />
          <Rise delay={0.1}><p className="lede mt-7 text-charcoal/75">{doctor.bio}</p></Rise>
          <div className="mt-12 space-y-10">
            {doctor.qa.map((x) => (
              <Rise key={x.q}>
                <figure className="border-l-2 border-gold pl-6">
                  <p className="eyebrow text-forest">{x.q}</p>
                  <blockquote className="display mt-4 text-[1.35rem] leading-[1.45] text-charcoal/85 md:text-[1.55rem]">“{x.a}”</blockquote>
                </figure>
              </Rise>
            ))}
          </div>
          <Rise><a href="#team" className="btn btn-forest mt-12">Meet the Team <ArrowRight className="h-4 w-4" /></a></Rise>
        </div>
      </div>
    </section>
  );
}

/* 7 · Team */
export function Team() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="team" aria-labelledby="team-title" className="bg-ivory px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Rise><Eyebrow>Our Team</Eyebrow></Rise>
            <SplitReveal id="team-title" text="You're in good hands." italic={["good", "hands."]} className="display mt-6 text-[2.6rem] text-forest sm:text-6xl lg:text-[4rem]" />
          </div>
          <Rise delay={0.1} className="md:justify-self-end">
            <p className="lede max-w-md text-charcoal/70">Our team is dedicated to providing you with the best care and experience. When you come to our office, you'll know you're in good hands!</p>
          </Rise>
        </div>
        <ul className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((p, i) => (
            <li key={p.name}>
              <Rise delay={i * 0.06}>
                <div className="group overflow-hidden rounded-[22px] bg-sage">
                  <img src={asset(`${p.img}-sm.webp`)} srcSet={`${asset(`${p.img}-sm.webp`)} 560w, ${asset(`${p.img}.webp`)} 800w`} sizes="(min-width: 1024px) 19vw, (min-width: 640px) 46vw, 92vw" alt={`${p.name}${p.role ? `, ${p.role}` : ""}`} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" />
                </div>
                <p className="display mt-5 text-[1.45rem] text-forest">{p.name}</p>
                {p.role && <p className="text-[13.5px] font-medium text-gold-ink">{p.role}</p>}
                <p className={`mt-3 text-[14.5px] leading-relaxed text-charcoal/70 ${open === p.name ? "" : "line-clamp-3"}`}>{p.bio}</p>
                <button type="button" onClick={() => setOpen(open === p.name ? null : p.name)} className="mt-2 text-[13.5px] font-semibold text-forest underline-offset-4 hover:underline" aria-expanded={open === p.name}>
                  {open === p.name ? "Show less" : "Read more"}
                </button>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 8 · Reviews */
export function Reviews() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="reviews-title" className="bg-forest px-5 py-24 text-ivory md:px-8 md:py-36">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Rise><Eyebrow light>Happy Patients</Eyebrow></Rise>
            <SplitReveal id="reviews-title" text="100+ five-star reviews, one small town." italic={["small", "town."]} accent="text-gold" className="display mt-6 text-[2.6rem] sm:text-6xl lg:text-[4rem]" />
          </div>
          <Rise delay={0.1} className="flex flex-wrap gap-3 md:justify-self-end">
            <a href={site.googleReview} target="_blank" rel="noopener noreferrer" className="btn btn-ivory">Review us on Google</a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Facebook</a>
          </Rise>
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <m.li
              key={r.name}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[24px] border border-ivory/12 bg-forest-2/60 p-7 md:p-9"
            >
              <Stars />
              <blockquote className="display mt-5 flex-1 text-[1.3rem] leading-[1.45] text-ivory/95 md:text-[1.45rem]">“{r.quote}”</blockquote>
              <p className="mt-6 text-[14px] font-semibold text-gold">{r.name}</p>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 9 · New Patients */
export function NewPatients() {
  const steps = [
    { icon: FileText, t: "New patient paperwork", c: "Download the paperwork, print it, fill it out, and bring it along with you to your first visit." },
    { icon: ShieldCheck, t: "Dental insurance", c: "Bring your insurance card. We are providers for Delta Dental, BCBS, Cigna, and Wyoming Medicaid, and we accept most dental insurances. Call us with any questions." },
    { icon: CreditCard, t: "Payment", c: "Payment is due at the time of service, including any coinsurance, copay or deductible. We accept credit/debit cards, cash, checks and Care Credit. Payment plans are not offered at this time." },
    { icon: Stethoscope, t: "Your first visit", c: "For new patients who are not experiencing a dental emergency, we would love to have you in for a comprehensive oral exam, x-rays and a dental cleaning." },
    { icon: Smile, t: "Dental anxiety?", c: "We offer some comforts for those who experience dental anxiety. We want you to feel as comfortable as possible during your visit." },
  ];
  return (
    <section id="new-patients" aria-labelledby="np-title" className="bg-white px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Rise><Eyebrow>New Patients</Eyebrow></Rise>
            <SplitReveal id="np-title" text="Your First Visit, Made Simple." italic={["Made", "Simple."]} className="display mt-6 text-[2.6rem] text-forest sm:text-6xl lg:text-[4rem]" />
            <Rise delay={0.1}>
              <p className="lede mt-7 max-w-md text-charcoal/70">We're accepting new patients and would be more than happy to address your dental needs. Let us be your new dental home!</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={site.newPatientForm} download className="btn btn-forest"><Download className="h-4 w-4" /> New Patient Information</a>
                <a href="#contact" className="btn btn-outline">Schedule Your Visit</a>
              </div>
              <p className="mt-4 text-[13px] text-charcoal/60">The new patient form is a PDF you can print and bring with you.</p>
            </Rise>
          </div>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {steps.map(({ icon: Icon, t, c }, i) => (
            <li key={t} className="border-t border-forest/10 py-8 last:border-b">
              <Rise className="flex gap-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sage text-forest"><Icon className="h-5 w-5" strokeWidth={1.6} /></span>
                <div>
                  <p className="text-[12.5px] font-semibold tabular-nums text-gold-ink">0{i + 1}</p>
                  <h3 className="display mt-1 text-[1.75rem] text-forest">{t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-charcoal/70">{c}</p>
                </div>
              </Rise>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 10 · Emergency */
export function Emergency() {
  return (
    <section id="emergency" aria-labelledby="em-title" className="bg-ivory px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 overflow-hidden rounded-[32px] border border-forest/10 bg-white p-7 md:p-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Rise><Eyebrow>Dental Emergencies</Eyebrow></Rise>
          <SplitReveal id="em-title" text="Tooth Pain? We're Here to Help." italic={["Help."]} className="display mt-6 text-[2.5rem] text-forest sm:text-6xl lg:text-[3.8rem]" />
          <Rise delay={0.1}>
            <p className="lede mt-6 max-w-xl text-charcoal/75">Our goal is to see you as quickly as possible and help alleviate your pain and discomfort. We are oftentimes able to address your needs the same day, so don't hesitate to call.</p>
            <ul className="mt-7 grid max-w-md grid-cols-2 gap-3 text-[15px] text-charcoal/80">
              {["Severe toothaches", "Swelling", "Broken tooth", "Lost fillings"].map((x) => (
                <li key={x} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{x}</li>
              ))}
            </ul>
            <a href={site.phoneHref} className="btn btn-forest mt-9"><Phone className="h-4 w-4" /> Call {site.phoneDisplay}</a>
          </Rise>
        </div>
        <Rise delay={0.15} className="lg:col-span-5">
          <figure className="rounded-[24px] bg-sage/70 p-7 md:p-9">
            <blockquote className="display text-[1.3rem] leading-[1.45] text-charcoal/85">“{emergencyQuote}”</blockquote>
            <figcaption className="mt-5 text-[14px] font-semibold text-forest">Happy patient</figcaption>
          </figure>
        </Rise>
      </div>
    </section>
  );
}

