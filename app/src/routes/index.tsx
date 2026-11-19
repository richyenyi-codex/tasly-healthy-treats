import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Leaf } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tasly Healthy Treats | A fresher kind of treat" },
      { name: "description", content: "Discover Tasly Healthy Treats, explore the menu and get in touch." },
    ],
  }),
  component: HomePage,
});

const businessSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tasly-treats-studio.higgsfield.app/#organization",
      name: "Tasly Healthy Treats",
      url: "https://tasly-treats-studio.higgsfield.app/",
      description: "Tasly Healthy Treats is a café brand. Explore its menu and get in touch.",
      sameAs: ["https://www.instagram.com/taslyhealthytreats/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://tasly-treats-studio.higgsfield.app/#website",
      name: "Tasly Healthy Treats",
      url: "https://tasly-treats-studio.higgsfield.app/",
      publisher: { "@id": "https://tasly-treats-studio.higgsfield.app/#organization" },
    },
  ],
});

function HomePage() {
  return (
    <SiteShell overlayHeader>
      <main>
        <StructuredData json={businessSchema} />
        <section className="home-hero" aria-label="Tasly Healthy Treats introduction">
          <div className="home-hero__orb home-hero__orb--one" aria-hidden="true" />
          <div className="home-hero__orb home-hero__orb--two" aria-hidden="true" />
          <div className="home-hero__content">
            <p className="home-scrub__eyebrow"><span /> TASLY HEALTHY TREATS</p>
            <h1>A fresher kind<br />of <em>treat.</em></h1>
            <p>Good things are growing. Discover Tasly Healthy Treats.</p>
            <div className="home-hero__actions">
              <Link to="/menu" className="button-link button-link--light">Explore the menu <ArrowUpRight size={17} /></Link>
              <Link to="/about" className="hero-text-link">Our story <ArrowDownRight size={16} /></Link>
            </div>
          </div>
          <div className="home-hero__index" aria-hidden="true">FRESH / SIMPLE / TASLY</div>
        </section>

        <section className="home-manifesto section-pad">
          <div className="manifesto-mark"><Leaf size={26} /></div>
          <p className="eyebrow">A little more fresh</p>
          <h2>Good moments start at the table.</h2>
          <p className="manifesto-copy">A welcoming place to discover Tasly Healthy Treats. Explore the space, find the menu and get in touch with the team.</p>
          <Link to="/about" className="text-link">Get to know Tasly <ArrowUpRight size={17} /></Link>
        </section>

        <section className="home-image-band home-image-band--text" aria-label="The Tasly experience">
          <div className="home-image-band__caption">
            <span>THE TASLY FEEL</span>
            <p>Fresh details.<br />Easy moments.</p>
          </div>
          <div className="home-image-band__orbit" aria-hidden="true">T</div>
        </section>

        <section className="home-menu-callout section-pad">
          <div className="menu-callout-copy">
            <p className="eyebrow">Find your favourite</p>
            <h2>There’s something to discover.</h2>
            <p>The current menu is being prepared for this website. Check back for confirmed items, descriptions and prices.</p>
            <Link to="/menu" className="button-link button-link--dark">Explore the menu <ArrowUpRight size={17} /></Link>
          </div>
          <div className="menu-callout-note">
            <span className="note-number">T</span>
            <p>Every detail belongs to the Tasly story. The menu will be added once the official selections are confirmed.</p>
          </div>
        </section>

        <section className="home-contact-strip">
          <div>
            <p className="eyebrow eyebrow--light">Say hello</p>
            <h2>Let’s make your next visit a good one.</h2>
          </div>
          <Link to="/contact" className="button-link button-link--light">Contact Tasly <ArrowUpRight size={17} /></Link>
        </section>
      </main>
    </SiteShell>
  );
}
