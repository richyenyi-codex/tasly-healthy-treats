import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { GALLERY_ITEMS } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery | Tasly Healthy Treats" }, { name: "description", content: "A look at the atmosphere and visual world of Tasly Healthy Treats." }] }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const current = active === null ? null : GALLERY_ITEMS[active];

  useEffect(() => {
    if (active === null) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((v) => v === null ? null : (v + 1) % GALLERY_ITEMS.length);
      if (event.key === "ArrowLeft") setActive((v) => v === null ? null : (v + GALLERY_ITEMS.length - 1) % GALLERY_ITEMS.length);
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [active]);

  return (
    <SiteShell>
      <main className="inner-page">
        <PageIntro eyebrow="Gallery" title="Tasly Healthy Treats, in view." description="Photos and videos from Tasly’s Instagram will appear here. The gallery is being kept clear until the original posts are supplied." />
        <section className="gallery-grid" aria-label="Tasly gallery">
          {GALLERY_ITEMS.map((item, index) => (
            <button className="gallery-tile" type="button" key={item.src} onClick={() => setActive(index)} aria-label={`Open image: ${item.caption}`}>
              <img src={item.src} alt={item.alt} />
              <span>{item.caption}</span>
            </button>
          ))}
          <div className="gallery-note gallery-note--empty">
            <span>THE GALLERY</span>
            <p>Real Tasly moments, coming from Instagram.</p>
            <a href="https://www.instagram.com/taslyhealthytreats/" target="_blank" rel="noreferrer">View the Instagram account <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>
      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setActive(null)}>
          <button ref={closeRef} className="lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Close gallery"><X size={24} /></button>
          <button className="lightbox__arrow lightbox__arrow--left" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setActive((v) => v === null ? null : (v + GALLERY_ITEMS.length - 1) % GALLERY_ITEMS.length); }} disabled={GALLERY_ITEMS.length < 2}><ArrowLeft size={22} /></button>
          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>{current.caption}</figcaption>
          </figure>
          <button className="lightbox__arrow lightbox__arrow--right" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setActive((v) => v === null ? null : (v + 1) % GALLERY_ITEMS.length); }} disabled={GALLERY_ITEMS.length < 2}><ArrowRight size={22} /></button>
        </div>
      )}
    </SiteShell>
  );
}

