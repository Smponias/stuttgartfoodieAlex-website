"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/schema";

const navLinks = [
  { href: "/restaurant-guide", label: "Restaurant Guide" },
  { href: "/rezepte", label: "Rezepte" },
  { href: "/ueber-mich", label: "Über Alex" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(28,25,23,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(230,179,90,0.15)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.375rem",
            fontWeight: 700,
            color: "#E6B35A",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          StuttgartFoodie<span style={{ color: "#CC5959" }}>Alex</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#F5F0E8",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              {link.label}
            </Link>
          ))}
          {/* All three platforms visible in nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <NavSocialPill href={siteConfig.instagram} label="Instagram" bg="linear-gradient(135deg, #f09433,#dc2743,#bc1888)" />
            <NavSocialPill href={siteConfig.tiktok} label="TikTok" bg="#222" />
            <NavSocialPill href={siteConfig.youtube} label="YouTube" bg="#FF0000" />
          </div>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#F5F0E8",
            padding: "0.5rem",
            display: "none",
          }}
          className="show-mobile"
          aria-label="Menu öffnen"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(28,25,23,0.98)",
            backdropFilter: "blur(12px)",
            padding: "1.5rem",
            borderTop: "1px solid rgba(230,179,90,0.15)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#F5F0E8",
                textDecoration: "none",
                padding: "0.75rem 0",
                fontSize: "1.1rem",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <SocialLink href={siteConfig.instagram} color="#E1306C" label="Instagram" />
            <SocialLink href={siteConfig.tiktok} color="#010101" label="TikTok" />
            <SocialLink href={siteConfig.youtube} color="#FF0000" label="YouTube" />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function SocialLink({ href, color, label }: { href: string; color: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
        background: color,
        color: "#fff",
        fontWeight: 600,
        fontSize: "0.8rem",
        textDecoration: "none",
      }}
    >
      {label}
    </a>
  );
}

function NavSocialPill({ href, label, bg }: { href: string; label: string; bg: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.4rem 0.9rem",
        borderRadius: "9999px",
        background: bg,
        color: "#fff",
        fontWeight: 600,
        fontSize: "0.78rem",
        textDecoration: "none",
        transition: "opacity 0.2s, transform 0.2s",
        letterSpacing: "0.01em",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.85";
        e.currentTarget.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {label}
    </a>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}
