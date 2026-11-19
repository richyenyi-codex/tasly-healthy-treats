import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { BUSINESS_CONFIG, MENU_ITEMS } from "@/lib/site-data";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [{ title: "Menu | Tasly Healthy Treats" }, { name: "description", content: "Explore the Tasly Healthy Treats menu. Current menu details will be added when confirmed." }] }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [orderNotice, setOrderNotice] = useState("");
  const categories = useMemo(() => ["All", ...Array.from(new Set(MENU_ITEMS.map((item) => item.category)))], []);
  const filtered = MENU_ITEMS.filter((item) => {
    const matchesQuery = [item.name, item.description, item.category].join(" ").toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (category === "All" || item.category === category);
  });

  return (
    <SiteShell>
      <main className="inner-page">
        <PageIntro eyebrow="The menu" title="Explore the Tasly menu." description="Explore the Tasly menu. Items, descriptions, ingredients and prices will appear here once the current menu is confirmed." />
        <section className="menu-explorer">
          <div className="menu-controls">
            <label className="search-field">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Search menu items</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the menu" />
            </label>
            <label className="filter-field">
              <SlidersHorizontal size={17} aria-hidden="true" />
              <span className="sr-only">Filter menu category</span>
              <select value={category} onChange={(event) => setCategory(event.target.value)}>
                {categories.map((item) => <option key={item} value={item}>{item === "All" ? "All categories" : item}</option>)}
              </select>
            </label>
          </div>
          {orderNotice && <p className="form-status" role="status">{orderNotice}</p>}
          {filtered.length > 0 ? (
            <div className="menu-grid">
              {filtered.map((item) => (
                <article className="menu-item" key={item.id}>
                  <div className="menu-item__visual"><span>{item.category}</span></div>
                  <div className="menu-item__content">
                    <div><h2>{item.name}</h2>{item.price && <strong>{item.price}</strong>}</div>
                    <p>{item.description}</p>
                    {item.ingredients?.length ? <p className="menu-ingredients">Ingredients: {item.ingredients.join(", ")}</p> : null}
                    <button className="text-link menu-order-link" type="button" onClick={() => {
                      if (!BUSINESS_CONFIG.whatsappNumber) {
                        setOrderNotice("WhatsApp ordering will be enabled when Tasly supplies its official business number.");
                        return;
                      }
                      const text = encodeURIComponent(`Hello Tasly Healthy Treats, I would like to order ${item.name}.`);
                      window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumber.replace(/\D/g, "")}?text=${text}`, "_blank", "noopener,noreferrer");
                    }}>Order on WhatsApp <ArrowUpRight size={16} /></button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="menu-empty">
              <span className="menu-empty__index">T / MENU</span>
              <h2>{query ? "No matching items yet." : "The menu is on its way."}</h2>
              <p>{query ? "Try another search, or clear the search field to see the full menu when it is added." : "We’re keeping this space ready for Tasly’s confirmed menu. No sample dishes or made-up prices have been added."}</p>
              <Link to="/contact" className="button-link button-link--dark">Ask about the menu <ArrowUpRight size={17} /></Link>
            </div>
          )}
        </section>
        <section className="menu-faq">
          <p className="eyebrow">Menu questions</p>
          <h2>Before you order.</h2>
          <div className="menu-faq__row"><h3>Where can I see current prices?</h3><p>Prices will be shown alongside each item once Tasly confirms the current menu.</p></div>
          <div className="menu-faq__row"><h3>Can I ask about ingredients?</h3><p>Ingredient details will be added only when the café supplies the confirmed information.</p></div>
          <div className="menu-faq__row"><h3>How do I place an order?</h3><p>The WhatsApp order link will be activated when the official business number is added.</p></div>
        </section>
        <section className="menu-bottom-note">
          <p>Have a question before ordering?</p>
          <Link to="/contact" className="text-link">Get in touch <ArrowUpRight size={16} /></Link>
        </section>
      </main>
    </SiteShell>
  );
}

