import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Leaf } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About | Tasly Healthy Treats" }, { name: "description", content: "Get to know the idea behind Tasly Healthy Treats." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <main className="inner-page">
        <PageIntro eyebrow="About Tasly" title="Meet Tasly Healthy Treats." description="Tasly Healthy Treats is a café brand with a simple invitation: come discover the treats, the atmosphere and the story behind the name." />
        <section className="about-feature">
          <div className="about-feature__image about-feature__image--brand" aria-label="Tasly Healthy Treats brand panel">
            <span>TASLY</span><small>HEALTHY TREATS</small>
            <Leaf size={38} aria-hidden="true" />
          </div>
          <div className="about-feature__copy">
            <span className="about-leaf"><Leaf size={25} /></span>
            <p className="eyebrow">The Tasly feeling</p>
            <h2>Thoughtful details. Room to enjoy.</h2>
            <p>This space is designed to make discovering Tasly feel easy, from the first look at the menu to getting in touch with the team.</p>
            <p>The story, menu and contact details on this website will be updated with information supplied by Tasly, so every detail stays true to the business.</p>
            <Link to="/menu" className="text-link">Explore the menu <ArrowUpRight size={16} /></Link>
          </div>
        </section>
        <section className="about-principles">
          <div><span>01</span><h3>Fresh discovery</h3><p>A clear way to find the menu and learn what is currently available.</p></div>
          <div><span>02</span><h3>A welcoming feel</h3><p>Warm visuals and simple navigation across every screen size.</p></div>
          <div><span>03</span><h3>True to Tasly</h3><p>Business details are kept accurate and are never filled in with guesses.</p></div>
        </section>
        <section className="about-end">
          <h2>There’s more to discover.</h2>
          <Link to="/contact" className="button-link button-link--dark">Contact Tasly <ArrowUpRight size={17} /></Link>
        </section>
      </main>
    </SiteShell>
  );
}

