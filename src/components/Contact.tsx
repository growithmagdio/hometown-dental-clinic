import { useState, type FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone, Truck } from "lucide-react";
import { site } from "../data/site";
import { BrandIcon, Logo } from "./Brand";
import { Rise, SplitReveal } from "./ui";

type Status = "idle" | "sending" | "sent" | "mail" | "error";

/* 11 · Appointment CTA + contact form */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(d.get("first") || "").trim()) next.first = "Please add your first name.";
    if (!String(d.get("last") || "").trim()) next.last = "Please add your last name.";
    const email = String(d.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please add a valid email address.";
    if (!String(d.get("message") || "").trim()) next.message = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const r = await fetch(site.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } });
        if (!r.ok) throw new Error();
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }
    const body = [`Name: ${d.get("first")} ${d.get("last")}`, `Email: ${email}`, `Phone: ${d.get("phone") || "-"}`, `New patient: ${d.get("newPatient") ? "Yes" : "No"}`, "", String(d.get("message"))].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Appointment request")}&body=${encodeURIComponent(body)}`;
    setStatus("mail");
  };
  const err = (k: string) => errors[k] && <span id={`${k}-err`} className="mt-1.5 block text-[13px] text-[#b4402c]">{errors[k]}</span>;

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-forest px-5 py-24 text-ivory md:px-8 md:py-36">
      <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Rise><p className="eyebrow flex items-center gap-3 text-gold"><span className="h-px w-8 bg-gold" /> Book an Appointment</p></Rise>
          <SplitReveal id="contact-title" text="Let's Take Care of Your Smile." italic={["Your", "Smile."]} accent="text-gold" className="display mt-6 text-[2.7rem] sm:text-6xl lg:text-[4.2rem]" />
          <Rise delay={0.1}>
            <p className="lede mt-6 max-w-md text-ivory/75">Whether you have a question or you're looking to schedule an appointment, we're happy to hear from you. Or, better yet, give us a call!</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#appointment-form" className="btn btn-ivory">Schedule an Appointment</a>
              <a href={site.phoneHref} className="btn btn-outline-light"><Phone className="h-4 w-4" /> Call Our Office</a>
            </div>
          </Rise>
          <Rise delay={0.15}>
            <dl className="mt-12 space-y-6 border-t border-ivory/15 pt-10 text-[15px]">
              <div className="flex gap-4"><dt><MapPin className="mt-0.5 h-5 w-5 text-gold" aria-label="Address" /></dt><dd className="text-ivory/85">{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.zip}<br /><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-line mt-1 inline-block text-gold">Get directions</a></dd></div>
              <div className="flex gap-4"><dt><Truck className="mt-0.5 h-5 w-5 text-gold" aria-label="New address" /></dt><dd className="text-ivory/85"><strong className="font-semibold text-ivory">Moving {site.newAddress.from}</strong><br />{site.newAddress.street}, {site.newAddress.city}, {site.newAddress.region} {site.newAddress.zip}</dd></div>
              <div className="flex gap-4"><dt><Phone className="mt-0.5 h-5 w-5 text-gold" aria-label="Phone" /></dt><dd><a href={site.phoneHref} className="link-line text-ivory">{site.phoneDisplay}</a></dd></div>
              <div className="flex gap-4"><dt><Mail className="mt-0.5 h-5 w-5 text-gold" aria-label="Email" /></dt><dd><a href={`mailto:${site.email}`} className="link-line break-all text-ivory">{site.email}</a></dd></div>
              <div className="flex gap-4"><dt><Clock className="mt-0.5 h-5 w-5 text-gold" aria-label="Hours" /></dt><dd className="text-ivory/85">{site.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</dd></div>
            </dl>
            <p className="mt-8 max-w-md text-[13.5px] leading-relaxed text-ivory/65">{site.accessNote}</p>
          </Rise>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Rise delay={0.1}>
            <form id="appointment-form" noValidate onSubmit={onSubmit} className="rounded-[28px] bg-ivory p-6 text-charcoal md:p-10">
              <p className="display text-3xl text-forest">Request an appointment</p>
              <p className="mt-2 text-[14.5px] text-charcoal/65">We'll get back to you as soon as possible.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block text-[14px] font-medium">First name *<input id="c-first" name="first" autoComplete="given-name" className="field mt-2" aria-invalid={!!errors.first} aria-describedby={errors.first ? "first-err" : undefined} />{err("first")}</label>
                <label className="block text-[14px] font-medium">Last name *<input id="c-last" name="last" autoComplete="family-name" className="field mt-2" aria-invalid={!!errors.last} aria-describedby={errors.last ? "last-err" : undefined} />{err("last")}</label>
                <label className="block text-[14px] font-medium">Email *<input id="c-email" name="email" type="email" autoComplete="email" className="field mt-2" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />{err("email")}</label>
                <label className="block text-[14px] font-medium">Phone<input id="c-phone" name="phone" type="tel" autoComplete="tel" className="field mt-2" /></label>
                <label className="block text-[14px] font-medium sm:col-span-2">Message *<textarea id="c-message" name="message" rows={4} className="field mt-2 resize-none" placeholder="Preferred days or times, and how we can help" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />{err("message")}</label>
                <label className="flex items-center gap-3 text-[14.5px] sm:col-span-2"><input id="c-new" name="newPatient" type="checkbox" className="h-5 w-5 accent-[#173f35]" /> I'm a new patient</label>
              </div>
              <button type="submit" disabled={status === "sending"} className="btn btn-forest mt-8 w-full sm:w-auto disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send request"} <ArrowRight className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {status !== "idle" && status !== "sending" && (
                  <m.p role="status" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 flex items-start gap-3 rounded-xl bg-sage px-4 py-3 text-[14px] text-forest">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    {status === "sent" && "Thank you! Your request is in. We'll be in touch soon."}
                    {status === "mail" && `Your email app should open with your request filled in. Just press send. If nothing opened, email ${site.email}.`}
                    {status === "error" && `That didn't send. Please call ${site.phoneDisplay} and we'll help right away.`}
                  </m.p>
                )}
              </AnimatePresence>
            </form>
          </Rise>
        </div>
      </div>
    </section>
  );
}

/* 12 · Footer */
export function Footer({ nav }: { nav: readonly { label: string; href: string }[] }) {
  return (
    <footer className="border-t border-ivory/10 bg-[#12322a] px-5 pb-10 pt-20 text-ivory md:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="white" className="h-16" />
            <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-ivory/70">High quality dentistry with a small town feel. Dr. Ethan Hoopes, DDS, in historic downtown Sheridan.</p>
            <div className="mt-6 flex gap-3">
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Hometown Dental on Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-ivory/25 hover:border-gold hover:text-gold"><BrandIcon name="facebook" /></a>
              <a href={site.googleReview} target="_blank" rel="noopener noreferrer" aria-label="Review Hometown Dental on Google" className="grid h-11 w-11 place-items-center rounded-full border border-ivory/25 hover:border-gold hover:text-gold"><BrandIcon name="google" /></a>
            </div>
          </div>
          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="link-line text-ivory/85">{n.label}</a></li>)}
              <li><a href="#emergency" className="link-line text-ivory/85">Dental Emergencies</a></li>
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <p className="eyebrow text-gold">Visit</p>
            <address className="mt-5 space-y-3 text-[15px] not-italic text-ivory/85">
              <p>Hometown Dental<br />{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.zip}</p>
              <p className="text-ivory/70">From {site.newAddress.from}: {site.newAddress.street}, {site.newAddress.city}, {site.newAddress.region} {site.newAddress.zip}</p>
              <p><a href={site.phoneHref} className="link-line">307-674-9661</a></p>
              <p><a href={`mailto:${site.email}`} className="link-line break-all">{site.email}</a></p>
            </address>
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow text-gold">Hours</p>
            <ul className="mt-5 space-y-2 text-[15px] text-ivory/85">
              <li>Monday–Friday: 8:00 AM–4:00 PM</li>
              <li>Saturday–Sunday: Closed</li>
            </ul>
            <p className="mt-6 text-[13.5px] leading-relaxed text-ivory/65">Current office is on the second floor of a historic building, accessible by stairs only.</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-[13px] text-ivory/65 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Hometown Dental. All rights reserved.</p>
          <p>Designed &amp; Developed by <a href="https://www.magdio.com/" target="_blank" rel="noopener noreferrer" className="link-line text-ivory/85">Magdio</a></p>
        </div>
      </div>
    </footer>
  );
}
