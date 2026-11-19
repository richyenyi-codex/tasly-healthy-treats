import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Leaf } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { SiteShell } from "@/components/site-shell";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

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
        <section className="home-scrub" aria-label="Tasly Healthy Treats introduction">
          <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
          <div className="home-scrub__overlay">
            <p className="home-scrub__eyebrow"><span /> TASLY HEALTHY TREATS</p>
            <p className="home-scrub__hint">A fresher kind of treat <ArrowDownRight size={16} /></p>
          </div>
        </section>

        <section className="home-manifesto section-pad">
          <div className="manifesto-mark"><Leaf size={26} /></div>
          <p className="eyebrow">A little more fresh</p>
          <h2>Good moments start at the table.</h2>
          <p className="manifesto-copy">A welcoming place to discover Tasly Healthy Treats. Explore the space, find the menu and get in touch with the team.</p>
          <Link to="/about" className="text-link">Get to know Tasly <ArrowUpRight size={17} /></Link>
        </section>

        <section className="home-image-band" aria-label="Café atmosphere">
          <img src="/assets/images/tasly-cafe-wide.jpg" alt="A calm café corner with greenery and natural light" loading="lazy" />
          <div className="home-image-band__caption">
            <span>THE TASLY FEEL</span>
            <p>Fresh details. Easy moments.</p>
          </div>
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
