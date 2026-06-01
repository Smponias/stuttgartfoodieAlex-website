"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/schema";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1C1917",
        color: "#F5F0E8",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#E6B35A",
                marginBottom: "0.75rem",
              }}
            >
              Stuttgart<span style={{ color: "#CC5959" }}>FoodieAlex</span>
            </div>
            <p style={{ fontSize: "0.875rem", opacity: 0.7, lineHeight: 1.6, maxWidth: "220px" }}>
              Stuttgarts #1 Food-Creator. Jeden Tag die besten Restaurants, Rezepte & Food-Spots aus Stuttgart.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <SocialIcon href={siteConfig.instagram} label="Instagram" icon="ig" />
              <SocialIcon href={siteConfig.tiktok} label="TikTok" icon="tt" />
              <SocialIcon href={siteConfig.youtube} label="YouTube" icon="yt" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5 }}>
              Navigation
            </h4>
            {[
              { href: "/", label: "Home" },
              { href: "/restaurant-guide", label: "Restaurant Guide" },
              { href: "/rezepte", label: "Rezepte" },
              { href: "/ueber-mich", label: "Über Alex" },
            ].map((l) => (
              <div key={l.href} style={{ marginBottom: "0.5rem" }}>
                <Link href={l.href} style={{ color: "#F5F0E8", opacity: 0.7, textDecoration: "none", fontSize: "0.9rem", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Stuttgart Topics */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5 }}>
              Stuttgart Food
            </h4>
            {[
              "Schwäbische Küche",
              "Bohnenviertel",
              "Stuttgart-West",
              "Markthalle",
              "Weinstube",
              "Maultaschen",
            ].map((t) => (
              <div key={t} style={{ marginBottom: "0.5rem" }}>
                <span style={{ color: "#F5F0E8", opacity: 0.55, fontSize: "0.875rem" }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Follow CTA */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5 }}>
              Social Media
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <SocialButton href={siteConfig.instagram} label="Instagram" handle={siteConfig.instagramHandle} bg="#E1306C" />
              <SocialButton href={siteConfig.tiktok} label="TikTok" handle={siteConfig.tiktokHandle} bg="#010101" />
              <SocialButton href={siteConfig.youtube} label="YouTube" handle={siteConfig.youtubeHandle} bg="#FF0000" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(245,240,232,0.1)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.8rem", opacity: 0.4 }}>
            © {new Date().getFullYear()} StuttgartFoodieAlex. Alle Rechte vorbehalten.
          </p>
          <p style={{ fontSize: "0.8rem", opacity: 0.4 }}>
            Stuttgart · Baden-Württemberg · Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background: "rgba(245,240,232,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#F5F0E8",
        textDecoration: "none",
        fontSize: "0.7rem",
        fontWeight: 700,
        transition: "background 0.2s",
      }}
    >
      {icon === "ig" ? "IG" : icon === "tt" ? "TT" : "YT"}
    </a>
  );
}

function SocialButton({ href, label, handle, bg }: { href: string; label: string; handle: string; bg: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.625rem 1rem",
        borderRadius: "8px",
        background: bg,
        color: "#fff",
        textDecoration: "none",
        fontSize: "0.8rem",
        fontWeight: 600,
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <span>{label}</span>
      <span style={{ opacity: 0.8, fontSize: "0.75rem" }}>{handle}</span>
    </a>
  );
}
