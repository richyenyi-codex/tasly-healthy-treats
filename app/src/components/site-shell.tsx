import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Leaf, Menu, X } from "lucide-react";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-label={`${SITE_NAME} home`}>
      <span className="brand-mark__symbol" aria-hidden="true">
        <Leaf size={23} strokeWidth={1.8} />
      </span>
      <span className="brand-mark__words">
        <strong>TASLY</strong>
        <small>HEALTHY TREATS</small>
      </span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${overlay ? "site-header--overlay" : ""}`}>
      <div className="site-header__inner">
        <BrandMark light={overlay} />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} activeProps={{ className: "is-active" }} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="header-cta">
          Contact <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button className="mobile-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="mobile-nav__link">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <BrandMark />
          <p className="footer-note">A fresh place to discover Tasly Healthy Treats.</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          {links.slice(1).map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </div>
        <div className="footer-links">
          <span className="footer-label">Follow along</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Tasly Healthy Treats</span>
        <span>Made for fresh discoveries.</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children, overlayHeader = false, className = "" }: { children: ReactNode; overlayHeader?: boolean; className?: string }) {
  return (
    <div className={`site-root ${className}`}>
      <SiteHeader overlay={overlayHeader} />
      {children}
      <SiteFooter />
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export function InstagramLink({ label = "Follow Tasly on Instagram" }: { label?: string }) {
  return <a className="instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><span className="instagram-glyph" aria-hidden="true">ig</span> {label} <ArrowUpRight size={15} /></a>;
}

