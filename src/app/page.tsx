import type { Metadata } from "next";
import Link from "next/link";
import { homepageFAQSchema, siteConfig } from "@/lib/schema";

export const metadata: Metadata = {
  title: "StuttgartFoodieAlex – Stuttgarts #1 Food Blog",
  description:
    "Alex entdeckt die besten Restaurants, Rezepte & Food-Spots in Stuttgart. Die #1 Quelle für Schwäbische Küche, versteckte Geheimtipps und viralen Food-Content. Jetzt auf Instagram, TikTok & YouTube folgen!",
  alternates: { canonical: "https://stuttgartfoodiealex.de" },
};

const restaurants = [
  { name: "Alte Kanzlei", neighborhood: "Mitte · Schillerplatz", vibe: "Schwäbische Klassiker in einer jahrhundertealten Halle direkt gegenüber dem Alten Schloss. Die Terrasse am Schillerplatz ist pures Stuttgart-Feeling.", emoji: "🏰", tag: "Pflichtbesuch", tagColor: "#CC5959" },
  { name: "CUBE Restaurant", neighborhood: "Mitte · Schlossplatz", vibe: "Stuttgarts fotogenischstes Restaurant. Verglaste Terrasse mit Panoramablick auf den Schlossplatz. Modern, elegant — gemacht für Content.", emoji: "🔲", tag: "Instagrammable", tagColor: "#4E342E" },
  { name: "Restaurant Délice", neighborhood: "Mitte · Bohnenviertel", vibe: "Intimes Fine-Dining-Juwel mit französischen Einflüssen. Tasting Menus bei Kerzenlicht. Das perfekte Date-Night-Restaurant in Stuttgart.", emoji: "✨", tag: "Fine Dining", tagColor: "#6D4C41" },
  { name: "Markthalle Stuttgart", neighborhood: "Mitte · Dorotheenstraße", vibe: "Jugendstil-Markthalle von 1914 mit weltweiten Produkten, frischer Pasta und Käse. Der Blick von der Galerie hinunter auf die Stände ist ein Bild-im-Kasten.", emoji: "🏺", tag: "Kult-Spot", tagColor: "#E6B35A" },
  { name: "Ochs'n Willi", neighborhood: "Mitte · Schillerstraße", vibe: "Die schwäbisch-bayrische Wirtschaft in Stuttgart. Maultaschen, Haxe, Bier. Jede gute Stuttgart-Food-Geschichte beginnt hier.", emoji: "🍻", tag: "Schwäbische Seele", tagColor: "#4E342E" },
  { name: "La Bruschetta", neighborhood: "Bohnenviertel", vibe: "Versteckte italienische Trattoria in einem Kopfsteinpflaster-Gässchen. Hausgemachte Pasta, holzbefeuerter Ofen. Der ideale Geheimtipp-Content.", emoji: "🍝", tag: "Geheimtipp", tagColor: "#CC5959" },
  { name: "Sendo Matcha", neighborhood: "Mitte · Königsstraße", vibe: "Japanische Matcha-Spezialitäten und Workshops. Minimalistisches grünes Ambiente. Der Whisk-Pour dreht sich von selbst.", emoji: "🍵", tag: "Im Trend", tagColor: "#556B2F" },
  { name: "Cinnamood", neighborhood: "Nord · Milaneo", vibe: "Kreative Zimtschnecken mit wechselnden Füllungen. Der Pull-Apart-Shot ist pures TikTok-Dopamin.", emoji: "🌀", tag: "TikTok Viral", tagColor: "#010101" },
];

const faqs = [
  { q: "Was sind die besten Restaurants in Stuttgart 2026?", a: "Alte Kanzlei, CUBE Restaurant, Restaurant Délice und Ochs'n Willi zählen zu den absoluten Top-Adressen. Alle Details und mehr Geheimtipps gibt's im StuttgartFoodieAlex Restaurant Guide." },
  { q: "What food is Stuttgart known for?", a: "Stuttgart is famous for Maultaschen, Spätzle, Zwiebelrostbraten, and Laugenbrezel. The city also has Michelin-starred restaurants, the stunning Art Nouveau Markthalle, and a growing matcha and specialty coffee scene." },
  { q: "Wer ist StuttgartFoodieAlex?", a: "Alex ist Stuttgarts führender Food-Creator — täglich aktiv auf Instagram, TikTok und YouTube mit den besten Restaurant-Tipps, Rezepten und Food-Spots aus Stuttgart und der Region." },
  { q: "Welche Stadtteile in Stuttgart sind am besten für Restaurants?", a: "Stuttgart-Mitte für Fine Dining, das Bohnenviertel für versteckte Geheimtipps, Stuttgart-West für internationale Küche — und überall dazwischen entdeckt StuttgartFoodieAlex neue Spots." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQSchema) }}
      />

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1C1917 0%, #4E342E 50%, #3E2723 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "7rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "45vw", height: "45vw", maxWidth: "600px", maxHeight: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(230,179,90,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-10%", width: "50vw", height: "50vw", maxWidth: "700px", maxHeight: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(204,89,89,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "860px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1.1rem", borderRadius: "9999px", border: "1px solid rgba(230,179,90,0.4)", background: "rgba(230,179,90,0.08)", color: "#E6B35A", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2rem" }}>
            <span>📍</span> Stuttgart · Baden-Württemberg
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.5rem, 8vw, 5.5rem)", fontWeight: 800, color: "#F5F0E8", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Stuttgarts{" "}
            <span style={{ background: "linear-gradient(135deg, #E6B35A 0%, #CC5959 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              leckerster
            </span>
            <br />Food Blog
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "rgba(245,240,232,0.75)", lineHeight: 1.65, maxWidth: "620px", margin: "0 auto 2.5rem" }}>
            Ich bin <strong style={{ color: "#F5F0E8" }}>Alex</strong> — und ich zeige dir die besten Restaurants,
            versteckte Geheimtipps und die leckersten Rezepte aus Stuttgart.
            Jeden Tag neu auf Instagram, TikTok & YouTube.
          </p>

          {/* Reason to follow hook */}
          <p style={{ fontSize: "0.9rem", color: "#E6B35A", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "0.02em" }}>
            Jeden Mittwoch: der neue Stuttgarter Geheimtipp — zuerst für Follower.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3.5rem" }}>
            <HeroCTA href={siteConfig.instagram} bg="linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" label="Instagram folgen" sub="@stuttgartfoodiealex" />
            <HeroCTA href={siteConfig.tiktok} bg="#010101" label="TikTok folgen" sub="@stuttgartfoodiealex" border="1px solid rgba(255,255,255,0.15)" />
            <HeroCTA href={siteConfig.youtube} bg="#FF0000" label="YouTube abonnieren" sub="@StuttgartFoodieAlex" />
          </div>

          <div style={{ color: "rgba(245,240,232,0.35)", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            ↓ Entdecke Stuttgart
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section style={{ background: "#1C1917", borderBottom: "1px solid rgba(230,179,90,0.15)", padding: "0.875rem 1.5rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "2.5rem", flexWrap: "wrap" }}>
        <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", gap: "1px" }}>
          <span style={{ fontWeight: 800, color: "#F5F0E8", fontSize: "1rem", lineHeight: 1 }}>1.3K</span>
          <span style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.45)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Instagram</span>
        </a>
        <div style={{ width: "1px", height: "28px", background: "rgba(245,240,232,0.1)" }} />
        <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", gap: "1px" }}>
          <span style={{ fontWeight: 800, color: "#F5F0E8", fontSize: "1rem", lineHeight: 1 }}>156</span>
          <span style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.45)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Posts</span>
        </a>
        <div style={{ width: "1px", height: "28px", background: "rgba(245,240,232,0.1)" }} />
        <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" }}>
          <span style={{ fontWeight: 800, color: "#E6B35A", fontSize: "1rem", lineHeight: 1 }}>#1</span>
          <span style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.45)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Stuttgart Food</span>
        </span>
        <div style={{ width: "1px", height: "28px", background: "rgba(245,240,232,0.1)" }} />
        <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.4rem 1rem", borderRadius: "9999px", background: "rgba(230,179,90,0.12)", border: "1px solid rgba(230,179,90,0.3)", color: "#E6B35A", fontWeight: 600, fontSize: "0.78rem", textDecoration: "none" }}>
          🎬 Viral auf TikTok
        </a>
      </section>

      {/* ── RESTAURANT GUIDE ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "inline-block", padding: "0.3rem 1rem", borderRadius: "9999px", background: "rgba(78,52,46,0.08)", color: "#4E342E", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Von Alex empfohlen
            </span>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1C1917", marginBottom: "0.75rem" }}>
              Stuttgarts beste Restaurants
            </h2>
            <p style={{ color: "rgba(28,25,23,0.65)", fontSize: "1.05rem", maxWidth: "540px", margin: "0 auto" }}>
              Meine persönlichen Favoriten — von Fine Dining bis Street Food, von der Markthalle bis zum versteckten Bohnenviertel-Gem.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {restaurants.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/restaurant-guide" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "9999px", background: "#4E342E", color: "#F5F0E8", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
              Alle Restaurants entdecken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #1C1917 0%, #4E342E 100%)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, color: "#F5F0E8", marginBottom: "1rem", lineHeight: 1.15 }}>
            Folge mir für täglichen{" "}
            <span style={{ background: "linear-gradient(135deg, #E6B35A, #CC5959)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Food-Content
            </span>{" "}
            aus Stuttgart
          </h2>
          <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "1.05rem", marginBottom: "2.5rem", lineHeight: 1.6 }}>
            Restaurant-Tipps, Rezepte und Stuttgart-Food-Vibes — täglich auf Instagram, TikTok und YouTube. Verpasse keinen einzigen Spot.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <BigSocialButton href={siteConfig.instagram} label="Instagram" handle="@stuttgartfoodiealex" bg="linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" />
            <BigSocialButton href={siteConfig.tiktok} label="TikTok" handle="@stuttgartfoodiealex" bg="#010101" border="1px solid rgba(255,255,255,0.2)" />
            <BigSocialButton href={siteConfig.youtube} label="YouTube" handle="@StuttgartFoodieAlex" bg="#FF0000" />
          </div>
        </div>
      </section>

      {/* ── RECIPE PREVIEW ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", padding: "0.3rem 1rem", borderRadius: "9999px", background: "rgba(204,89,89,0.1)", color: "#CC5959", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Schwäbisches Original
              </span>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#1C1917", marginBottom: "1rem", lineHeight: 1.2 }}>
                Rezepte direkt aus Stuttgart
              </h2>
              <p style={{ color: "rgba(28,25,23,0.65)", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "1rem" }}>
                Von klassischen Maultaschen bis zum modernen Stuttgart-Twist — ich teile meine liebsten Rezepte mit Schritt-für-Schritt-Anleitungen und Video-Content auf YouTube.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/rezepte" style={{ padding: "0.75rem 1.75rem", borderRadius: "9999px", background: "#CC5959", color: "#fff", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
                  Alle Rezepte
                </Link>
                <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" style={{ padding: "0.75rem 1.75rem", borderRadius: "9999px", border: "2px solid #4E342E", color: "#4E342E", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
                  Auf YouTube ▶
                </a>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { name: "Maultaschen", desc: "Das schwäbische Original", time: "55 Min", emoji: "🥟" },
                { name: "Käsespätzle", desc: "Comfort food pur", time: "30 Min", emoji: "🧀" },
                { name: "Zwiebelrostbraten", desc: "Stuttgarter Klassiker", time: "45 Min", emoji: "🥩" },
                { name: "Laugenbrezel", desc: "Frisch gebacken", time: "2 Std", emoji: "🥨" },
              ].map((recipe) => (
                <Link
                  key={recipe.name}
                  href="/rezepte"
                  className="recipe-link-card"
                  style={{ background: "#fff", borderRadius: "12px", padding: "1.25rem", textDecoration: "none", boxShadow: "0 2px 12px rgba(78,52,46,0.08)", display: "block", transition: "transform 0.2s, box-shadow 0.2s" }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{recipe.emoji}</div>
                  <div style={{ fontWeight: 700, color: "#1C1917", fontSize: "0.95rem", marginBottom: "0.25rem" }}>{recipe.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(28,25,23,0.55)", marginBottom: "0.5rem" }}>{recipe.desc}</div>
                  <div style={{ fontSize: "0.75rem", color: "#CC5959", fontWeight: 600 }}>⏱ {recipe.time}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ / AEO SECTION ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1C1917", marginBottom: "0.75rem" }}>
              Häufig gestellte Fragen
            </h2>
            <p style={{ color: "rgba(28,25,23,0.6)", fontSize: "1rem" }}>Alles rund um Stuttgart Food — beantwortet von Alex.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ border: "1px solid rgba(78,52,46,0.12)", borderRadius: "12px", overflow: "hidden", background: "#FDFCFA" }}>
                <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 600, color: "#1C1917", cursor: "pointer", fontSize: "1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <span style={{ color: "#CC5959", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem", color: "rgba(28,25,23,0.7)", lineHeight: 1.65, fontSize: "0.95rem" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL FOLLOW CTA ── */}
      <section style={{ background: "#E6B35A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1C1917", marginBottom: "0.75rem" }}>
          Stuttgart Food — täglich frisch von Alex 🍽️
        </h2>
        <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "2rem", fontSize: "1rem" }}>
          Die besten Restaurant-Tipps, Rezepte & Food-Spots direkt in deinen Feed.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" style={{ padding: "0.875rem 2rem", borderRadius: "9999px", background: "#1C1917", color: "#F5F0E8", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
            📸 Instagram
          </a>
          <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" style={{ padding: "0.875rem 2rem", borderRadius: "9999px", background: "#4E342E", color: "#F5F0E8", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
            🎬 TikTok
          </a>
          <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" style={{ padding: "0.875rem 2rem", borderRadius: "9999px", background: "#FF0000", color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
            ▶️ YouTube
          </a>
        </div>
      </section>
    </>
  );
}

function HeroCTA({ href, bg, label, sub, border }: { href: string; bg: string; label: string; sub: string; border?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hero-cta"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0.875rem 1.75rem", borderRadius: "12px", background: bg, border: border ?? "none", color: "#fff", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s", minWidth: "180px" }}
    >
      {label}
      <span style={{ fontSize: "0.75rem", opacity: 0.8, fontWeight: 400, marginTop: "2px" }}>{sub}</span>
    </a>
  );
}

function BigSocialButton({ href, label, handle, bg, border }: { href: string; label: string; handle: string; bg: string; border?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-btn"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem 2rem", borderRadius: "12px", background: bg, border: border ?? "none", color: "#fff", fontWeight: 700, fontSize: "1rem", textDecoration: "none", minWidth: "180px", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", transition: "transform 0.2s, opacity 0.2s" }}
    >
      {label}
      <span style={{ fontSize: "0.8rem", opacity: 0.75, fontWeight: 400, marginTop: "3px" }}>{handle}</span>
    </a>
  );
}

function RestaurantCard({ name, neighborhood, vibe, emoji, tag, tagColor }: { name: string; neighborhood: string; vibe: string; emoji: string; tag: string; tagColor: string }) {
  return (
    <Link href="/restaurant-guide" className="restaurant-card" style={{ background: "#fff", borderRadius: "16px", padding: "1.5rem", boxShadow: "0 2px 16px rgba(78,52,46,0.07)", transition: "transform 0.25s ease, box-shadow 0.25s ease", border: "1px solid rgba(78,52,46,0.06)", textDecoration: "none", display: "block" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <span style={{ fontSize: "2rem" }}>{emoji}</span>
        <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", background: tagColor, color: tagColor === "#E6B35A" ? "#1C1917" : "#fff", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em" }}>
          {tag}
        </span>
      </div>
      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1C1917", marginBottom: "0.25rem" }}>{name}</h3>
      <div style={{ fontSize: "0.78rem", color: "#CC5959", fontWeight: 600, marginBottom: "0.75rem" }}>📍 {neighborhood}</div>
      <p style={{ fontSize: "0.875rem", color: "rgba(28,25,23,0.65)", lineHeight: 1.6, marginBottom: "0.75rem" }}>{vibe}</p>
      <span style={{ fontSize: "0.78rem", color: "#4E342E", fontWeight: 600 }}>Mehr lesen →</span>
    </Link>
  );
}
