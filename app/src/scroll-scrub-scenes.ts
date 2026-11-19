import { Link } from "@tanstack/react-router";
import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#B7C96A",
  background: "#17251D",
  ink: "#FFFFFF",
  muted: "#F3F0E5",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "A welcoming place to discover Tasly Healthy Treats and explore the menu as it takes shape.",
    clip: "/assets/world/scene-01.mp4",
    id: "fresh-table",
    kicker: "TASLY HEALTHY TREATS",
    label: "The fresh table",
    poster: "/assets/world/scene-01-poster.png",
    title: "A fresher kind of treat.",
    scroll: 2.4,
    objectPosition: "50% 50%",
    actions: (
      <>
        <Link to="/menu" className="scrub-cta scrub-cta--primary">Explore the menu</Link>
        <Link to="/contact" className="scrub-cta scrub-cta--secondary">Contact Tasly</Link>
      </>
    ),
  },
];
