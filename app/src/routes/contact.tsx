import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { InstagramLink, PageIntro, SiteShell } from "@/components/site-shell";
import { BUSINESS_CONFIG } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact & Order | Tasly Healthy Treats" }, { name: "description", content: "Contact Tasly Healthy Treats and find out how to ask about ordering." }] }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please add a message.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("Please review the highlighted fields.");
      return;
    }
    setStatus("Your details are valid. This form is not connected to a Tasly inbox yet, so please use Instagram to send your enquiry.");
  }

  function openWhatsApp() {
    if (!BUSINESS_CONFIG.whatsappNumber) {
      setStatus("WhatsApp ordering is ready to activate once Tasly supplies its official number.");
      return;
    }
    const text = encodeURIComponent("Hello Tasly Healthy Treats, I would like to ask about the current menu and ordering.");
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumber.replace(/\D/g, "")}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <SiteShell>
      <main className="inner-page">
        <PageIntro eyebrow="Contact & order" title="Contact Tasly Healthy Treats." description="Questions about the menu or getting in touch? Use the details below, or send a message through Tasly’s Instagram profile." />
        <section className="contact-layout">
          <div className="contact-side">
            <div className="contact-card contact-card--green">
              <span className="contact-card__icon"><MessageCircle size={23} /></span>
              <p className="eyebrow eyebrow--light">Ordering</p>
              <h2>Ask about what’s available.</h2>
              <p>The WhatsApp order link will be activated when Tasly’s official business number is added.</p>
              <button type="button" className="button-link button-link--light" onClick={openWhatsApp}>Order on WhatsApp <ArrowUpRight size={17} /></button>
            </div>
            <div className="contact-card contact-card--plain">
              <p className="eyebrow">Follow along</p>
              <h2>Stay connected with Tasly.</h2>
              <InstagramLink />
            </div>
            {(BUSINESS_CONFIG.email || BUSINESS_CONFIG.phone || BUSINESS_CONFIG.address || BUSINESS_CONFIG.openingHours) && (
              <div className="contact-details">
                {BUSINESS_CONFIG.email && <a href={`mailto:${BUSINESS_CONFIG.email}`}>{BUSINESS_CONFIG.email}</a>}
                {BUSINESS_CONFIG.phone && <a href={`tel:${BUSINESS_CONFIG.phone}`}>{BUSINESS_CONFIG.phone}</a>}
                {BUSINESS_CONFIG.address && <p>{BUSINESS_CONFIG.address}</p>}
                {BUSINESS_CONFIG.openingHours && <p>{BUSINESS_CONFIG.openingHours}</p>}
              </div>
            )}
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="contact-form__heading"><p className="eyebrow">Send a note</p><h2>What would you like to know?</h2></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" required aria-required="true" value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
            {errors.name && <span className="field-error" id="contact-name-error">{errors.name}</span>}
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" type="email" required aria-required="true" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
            {errors.email && <span className="field-error" id="contact-email-error">{errors.email}</span>}
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" rows={5} required aria-required="true" value={message} onChange={(event) => setMessage(event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
            {errors.message && <span className="field-error" id="contact-message-error">{errors.message}</span>}
            <button className="button-link button-link--dark" type="submit">Validate enquiry <ArrowUpRight size={17} /></button>
            {status && <p className="form-status" role="status"><CheckCircle2 size={17} /> {status}</p>}
            <p className="form-note">This form currently checks your details in the browser only. It does not send or store messages.</p>
          </form>
        </section>
      </main>
    </SiteShell>
  );
}

