import type { Metadata } from "next";
import { siteConfig } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Über Alex – StuttgartFoodieAlex",
  description:
    "Lerne Alex kennen — Stuttgarts führender Food-Creator auf Instagram, TikTok & YouTube. Entdecke die Geschichte hinter StuttgartFoodieAlex und wie du mit Alex zusammenarbeiten kannst.",
  alternates: { canonical: "https://stuttgartfoodiealex.de/ueber-mich" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex",
  alternateName: "StuttgartFoodieAlex",
  description:
    "Stuttgart-based food influencer and blogger. Content creator on Instagram, TikTok, and YouTube specializing in Stuttgart restaurants, Swabian cuisine, and food culture.",
  url: "https://stuttgartfoodiealex.de/ueber-mich",
  image: "https://stuttgartfoodiealex.de/images/alex-portrait.jpg",
  jobTitle: "Food Influencer & Content Creator",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stuttgart",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  knowsAbout: ["Schwäbische Küche", "Stuttgart Restaurants", "Food Photography", "Content Creation"],
  sameAs: [siteConfig.instagram, siteConfig.tiktok, siteConfig.youtube],
};

const stats = [
  { label: "Instagram", handle: "@stuttgartfoodiealex", icon: "📸", bg: "linear-gradient(135deg, #f09433,#dc2743,#bc1888)", href: siteConfig.instagram },
  { label: "TikTok", handle: "@stuttgartfoodiealex", icon: "🎬", bg: "#010101", href: siteConfig.tiktok },
  { label: "YouTube", handle: "@StuttgartFoodieAlex", icon: "▶️", bg: "#FF0000", href: siteConfig.youtube },
];

const timeline = [
  { year: "2023", event: "StuttgartFoodieAlex gegründet", detail: "Erste Posts auf Instagram — die Markthalle war der erste Spot." },
  { year: "2024", event: "TikTok & YouTube gestartet", detail: "Short-form Video explodierte — Maultaschen-Video wird viral." },
  { year: "2025", event: "Erste Brand-Kooperationen", detail: "Zusammenarbeit mit Stuttgarter Restaurants und regionalen Food-Brands." },
  { year: "2026", event: "Website Launch", detail: "stuttgartfoodiealex.de — die Heimat des Stuttgart Food Universums." },
];

const values = [
  { icon: "🎯", title: "Authentizität", text: "Keine bezahlten Empfehlungen ohne Kennzeichnung. Ich teile nur, was ich wirklich gut finde." },
  { icon: "📍", title: "Lokal", text: "Stuttgart ist meine Stadt. Ich kenne jeden Winkel — und zeige dir die Spots, die du sonst nicht findest." },
  { icon: "🎬", title: "Content-First", text: "Jeder Post ist durchdacht. Die Kamera kommt raus, wenn das Essen und das Licht stimmen." },
  { icon: "🤝", title: "Community", text: "Die Community macht es aus. Eure DMs, Empfehlungen und Reaktionen sind der Motor." },
];

export default function UeberMichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1C1917 0%, #4E342E 100%)",
          padding: "8rem 1.5rem 5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {/* Avatar placeholder */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #E6B35A, #CC5959)",
              margin: "0 auto 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              boxShadow: "0 0 0 4px rgba(230,179,90,0.3), 0 0 0 8px rgba(230,179,90,0.1)",
            }}
          >
            👨‍🍳
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
              fontWeight: 800,
              color: "#F5F0E8",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Hallo, ich bin{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E6B35A, #CC5959)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Alex
            </span>
          </h1>
          <p
            style={{
              color: "#E6B35A",
              fontWeight: 600,
              fontSize: "1.05rem",
              marginBottom: "1.25rem",
              letterSpacing: "0.02em",
            }}
          >
            StuttgartFoodieAlex · Food Creator · Stuttgart
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: "580px",
              margin: "0 auto 2.5rem",
            }}
          >
            Ich bin der Typ, der in jedem Restaurant als Erstes die Kamera rausholt —
            und der dir danach sagt, ob es das wirklich wert war.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  background: s.bg,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                }}
              >
                {s.icon} {s.label}
                <span style={{ opacity: 0.75, fontWeight: 400, fontSize: "0.75rem" }}>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "5rem 1.5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#1C1917",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Die Geschichte
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "2.5rem",
              boxShadow: "0 4px 24px rgba(78,52,46,0.08)",
              marginBottom: "3rem",
            }}
          >
            <p style={{ color: "rgba(28,25,23,0.75)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
              Alles begann mit einer einfachen Frage: <strong style={{ color: "#1C1917" }}>&bdquo;Warum redet niemand über die gute Küche in Stuttgart?&ldquo;</strong>
              Die Stadt ist die Heimat der Schwäbischen Küche — Maultaschen, Spätzle, Zwiebelrostbraten —
              und hat gleichzeitig eine der spannendsten Restaurant-Szenen Deutschlands.
              Aber im Netz war davon kaum etwas zu sehen.
            </p>
            <p style={{ color: "rgba(28,25,23,0.75)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
              Also habe ich angefangen, selbst zu posten. Erst auf Instagram,
              dann auf TikTok, dann auf YouTube. Keine Strategie, kein Plan —
              nur die Kamera, die Küche und das ehrliche Feedback nach dem ersten Bissen.
            </p>
            <p style={{ color: "rgba(28,25,23,0.75)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Heute ist <strong style={{ color: "#1C1917" }}>StuttgartFoodieAlex</strong> Stuttgarts führende Food-Plattform.
              Jeden Tag teile ich neue Restaurants, Rezepte und Momente — immer authentisch,
              immer mit dem Herz eines echten Stuttgart-Fans.
            </p>
          </div>

          {/* Timeline */}
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#1C1917",
              marginBottom: "1.5rem",
            }}
          >
            Die Zeitlinie
          </h3>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            <div
              style={{
                position: "absolute",
                left: "0.5rem",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(to bottom, #E6B35A, #CC5959)",
                borderRadius: "1px",
              }}
            />
            {timeline.map((t, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "2rem" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-1.625rem",
                    top: "0.25rem",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#E6B35A",
                    border: "2px solid #F5F0E8",
                    boxShadow: "0 0 0 2px #E6B35A",
                  }}
                />
                <div style={{ background: "#fff", borderRadius: "12px", padding: "1.25rem 1.5rem", boxShadow: "0 2px 12px rgba(78,52,46,0.07)" }}>
                  <div style={{ color: "#CC5959", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{t.year}</div>
                  <div style={{ fontWeight: 700, color: "#1C1917", marginBottom: "0.25rem" }}>{t.event}</div>
                  <div style={{ fontSize: "0.875rem", color: "rgba(28,25,23,0.6)" }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 700,
              color: "#1C1917",
              marginBottom: "2.5rem",
              textAlign: "center",
            }}
          >
            Was mich antreibt
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#FDFCFA",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  border: "1px solid rgba(78,52,46,0.08)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#1C1917", marginBottom: "0.5rem", fontSize: "1rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(28,25,23,0.6)", lineHeight: 1.6 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collab CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #4E342E 0%, #1C1917 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#F5F0E8",
              marginBottom: "1rem",
            }}
          >
            Zusammenarbeiten?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1rem",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            Ich arbeite mit Restaurants, Brands und Food-Unternehmen zusammen,
            die zur Stuttgarter Food-Szene und meiner Community passen.
            Schreib mir eine DM auf Instagram oder per Mail.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #f09433,#dc2743,#bc1888)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              📸 DM auf Instagram
            </a>
            <a
              href="mailto:kontakt@stuttgartfoodiealex.de"
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                border: "2px solid rgba(245,240,232,0.25)",
                color: "#F5F0E8",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              ✉️ E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
