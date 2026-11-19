import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery | Tasly Healthy Treats" }, { name: "description", content: "Photos and videos shared by Tasly Healthy Treats on Instagram." }] }),
  component: GalleryPage,
});

const INSTAGRAM_POSTS = [
  { id: "Cx-oL1bIuG8", type: "reel", label: "Tasly Instagram Reel 1", url: "https://www.instagram.com/reel/Cx-oL1bIuG8/" },
  { id: "DfW3UwBkQy7", type: "p", label: "Tasly Instagram post 1", url: "https://www.instagram.com/p/DfW3UwBkQy7/" },
  { id: "Dfkf_COAmcU", type: "p", label: "Tasly Instagram post 2", url: "https://www.instagram.com/p/Dfkf_COAmcU/" },
  { id: "Dfl5QLUh81t", type: "reel", label: "Tasly Instagram Reel 2", url: "https://www.instagram.com/reel/Dfl5QLUh81t/" },
] as const;

function GalleryPage() {
  return (
    <SiteShell>
      <main className="inner-page">
        <PageIntro eyebrow="Gallery" title="Tasly Healthy Treats, in view." description="A collection of posts and Reels shared by Tasly. Each item is embedded from the original Instagram account." />
        <section className="instagram-gallery" aria-label="Tasly Instagram posts and Reels">
          {INSTAGRAM_POSTS.map((post) => (
            <article className="instagram-gallery__item" key={post.id}>
              <div className="instagram-gallery__frame">
                <iframe
                  src={`https://www.instagram.com/${post.type}/${post.id}/embed/`}
                  title={post.label}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <a href={post.url} target="_blank" rel="noreferrer" className="instagram-gallery__link">
                <Instagram size={16} /> View original on Instagram <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </section>
        <p className="instagram-gallery__note">If Instagram does not load an embed in your browser, use “View original on Instagram” to open the post directly.</p>
      </main>
    </SiteShell>
  );
}
