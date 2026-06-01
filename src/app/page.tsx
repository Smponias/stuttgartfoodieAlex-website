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
  { name: "Alte Kanzlei", neighborhood: "Mitte", location: "Schillerplatz", vibe: "Schwäbische Klassiker in einer jahrhundertealten Halle direkt gegenüber dem Alten Schloss. Die Terrasse am Schillerplatz ist pures Stuttgart-Feeling.", tag: "Pflichtbesuch", accent: "#CC5959" },
  { name: "CUBE Restaurant", neighborhood: "Mitte", location: "Schlossplatz", vibe: "Stuttgarts fotogenischstes Restaurant. Verglaste Terrasse mit Panoramablick auf den Schlossplatz. Modern, elegant — gemacht für Content.", tag: "Instagrammable", accent: "#4E342E" },
  { name: "Restaurant Délice", neighborhood: "Bohnenviertel", location: "Hauptstätter Str.", vibe: "Intimes Fine-Dining-Juwel mit französischen Einflüssen. Tasting Menus bei Kerzenlicht. Das perfekte Date-Night-Restaurant.", tag: "Fine Dining", accent: "#6D4C41" },
  { name: "Markthalle Stuttgart", neighborhood: "Mitte", location: "Dorotheenstraße", vibe: "Jugendstil-Markthalle von 1914. Weltweite Produkte, frische Pasta, Käse. Der Blick von der Galerie hinunter — ein Bild-im-Kasten.", tag: "Kult-Spot", accent: "#B5622A" },
  { name: "Ochs'n Willi", neighborhood: "Mitte", location: "Kl. Schlossplatz", vibe: "Die schwäbisch-bayrische Wirtschaft in Stuttgart. Maultaschen, Haxe, Bier. Jede gute Stuttgart-Food-Geschichte beginnt hier.", tag: "Schwäbische Seele", accent: "#4E342E" },
  { name: "La Bruschetta", neighborhood: "Bohnenviertel", location: "Gässchen", vibe: "Versteckte italienische Trattoria in einem Kopfsteinpflaster-Gässchen. Hausgemachte Pasta, holzbefeuerter Ofen. Idealer Geheimtipp-Content.", tag: "Geheimtipp", accent: "#CC5959" },
  { name: "Sendo Matcha", neighborhood: "Mitte", location: "Königsstraße", vibe: "Japanische Matcha-Spezialitäten und Workshops. Minimalistisches grünes Ambiente. Der Whisk-Pour dreht sich von selbst.", tag: "Im Trend", accent: "#3D6B4A" },
  { name: "Cinnamood", neighborhood: "Nord", location: "Milaneo", vibe: "Kreative Zimtschnecken mit wechselnden Füllungen. Der Pull-Apart-Shot ist pures TikTok-Dopamin.", tag: "TikTok Viral", accent: "#222" },
];

const faqs = [
  { q: "Was sind die besten Restaurants in Stuttgart 2026?", a: "Alte Kanzlei, CUBE Restaurant, Restaurant Délice und Ochs'n Willi zählen zu den absoluten Top-Adressen. Alle Details und mehr Geheimtipps gibt's im StuttgartFoodieAlex Restaurant Guide." },
  { q: "What food is Stuttgart known for?", a: "Stuttgart is famous for Maultaschen, Spätzle, Zwiebelrostbraten, and Laugenbrezel. The city also has Michelin-starred restaurants, the stunning Art Nouveau Markthalle, and a growing matcha and specialty coffee scene." },
  { q: "Wer ist StuttgartFoodieAlex?", a: "Alex ist Stuttgarts führender Food-Creator — täglich aktiv auf Instagram, TikTok und YouTube mit den besten Restaurant-Tipps, Rezepten und Food-Spots aus Stuttgart und der Region." },
  { q: "Welche Stadtteile in Stuttgart sind am besten für Restaurants?", a: "Stuttgart-Mitte für Fine Dining, das Bohnenviertel für versteckte Geheimtipps, Stuttgart-West für internationale Küche — und überall dazwischen entdeckt StuttgartFoodieAlex neue Spots." },
];

const marqueeItems = [
  "Stuttgart", "Maultaschen", "Restaurant-Tipps", "TikTok", "Bohnenviertel",
  "Fressfluencer", "Fine Dining", "Geheimtipps", "Schwäbische Küche", "Reels",
  "Markthalle", "Viraler Content", "Food-Blog", "Schlossplatz", "Rezepte",
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0F0B09 0%, #1C1008 40%, #2E1B0E 70%, #4E342E 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative amber circle */}
        <div style={{
          position: "absolute", top: "-15%", right: "-10%",
          width: "55vw", height: "55vw", maxWidth: "720px", maxHeight: "720px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, rgba(230,179,90,0.18) 0%, rgba(204,89,89,0.08) 50%, transparent 72%)",
          pointerEvents: "none",
        }} />
        {/* Thin horizontal rule accent */}
        <div style={{
          position: "absolute", top: "50%", left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(230,179,90,0.12) 30%, rgba(230,179,90,0.12) 70%, transparent 100%)",
          transform: "translateY(-120px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          {/* Location badge */}
          <div className="animate-hero-1" style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.35rem 0.9rem", borderRadius: "9999px",
              border: "1px solid rgba(230,179,90,0.3)",
              background: "rgba(230,179,90,0.06)",
              color: "#E6B35A",
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "var(--font-syne), sans-serif",
            }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#E6B35A", animation: "pulse-dot 2s ease infinite" }} />
              Stuttgart · Baden-Württemberg
            </span>
          </div>

          {/* Headline — big editorial stack */}
          <h1 style={{ margin: 0 }}>
            <div className="animate-hero-2" style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              fontWeight: 800,
              color: "#F5F0E8",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              display: "block",
            }}>
              STUTTGARTS
            </div>
            <div className="animate-hero-3" style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              display: "block",
              background: "linear-gradient(135deg, #E6B35A 0%, #CC5959 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              LECKERSTER
            </div>
            <div className="animate-hero-4" style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              fontWeight: 800,
              color: "rgba(245,240,232,0.18)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              display: "block",
            }}>
              FOOD BLOG
            </div>
          </h1>

          {/* Bottom row */}
          <div className="animate-hero-5" style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "end",
          }}>
            <div style={{ maxWidth: "460px" }}>
              <p style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "rgba(245,240,232,0.65)",
                lineHeight: 1.65,
                marginBottom: "0.75rem",
                fontStyle: "italic",
              }}>
                Ich bin <strong style={{ color: "#F5F0E8", fontStyle: "normal" }}>Alex</strong> — Fressfluencer, Ehrlichkeits-Enthusiast
                und Stuttgarts inoffizieller Tester für alles zwischen Markthalle und Michelin-Stern.
              </p>
              <p style={{ fontSize: "0.82rem", color: "#E6B35A", fontWeight: 700, letterSpacing: "0.04em", fontFamily: "var(--font-syne), sans-serif" }}>
                Jeden Mittwoch: der neue Stuttgarter Geheimtipp — zuerst für Follower.
              </p>
            </div>

            {/* Stats column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "right" }}>
              {[
                { n: "1.3K", l: "Follower" },
                { n: "156", l: "Posts" },
                { n: "#1", l: "Stuttgart" },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#F5F0E8", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: "0.68rem", color: "rgba(245,240,232,0.4)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="animate-hero-6" style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <HeroCTA href={siteConfig.instagram} bg="linear-gradient(135deg,#f09433,#dc2743,#bc1888)" label="📸 Instagram" />
            <HeroCTA href={siteConfig.tiktok}    bg="#111" label="🎬 TikTok" border="1px solid rgba(255,255,255,0.15)" />
            <HeroCTA href={siteConfig.youtube}   bg="#FF0000" label="▶ YouTube" />
            <Link href="/restaurant-guide" className="hero-cta" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 1.5rem", borderRadius: "8px",
              border: "1px solid rgba(230,179,90,0.35)", background: "rgba(230,179,90,0.06)",
              color: "#E6B35A", fontWeight: 700, fontSize: "0.875rem",
              textDecoration: "none", fontFamily: "var(--font-syne), sans-serif",
              boxShadow: "none",
            }}>
              Restaurant Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div style={{ background: "#E6B35A", padding: "0.9rem 0", overflow: "hidden", borderTop: "1px solid rgba(78,52,46,0.15)", borderBottom: "1px solid rgba(78,52,46,0.15)" }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#1C1917",
                padding: "0 2.5rem",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: "2.5rem",
              }}>
                {item}
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4E342E", flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────────── */}
      <section style={{ background: "#0F0B09", padding: "0.875rem 1.5rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
        {[
          { href: siteConfig.instagram, label: "📸 Instagram", handle: "@stuttgartfoodiealex", bg: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)" },
          { href: siteConfig.tiktok,    label: "🎬 TikTok",    handle: "@stuttgartfoodiealex", bg: "#333" },
          { href: siteConfig.youtube,   label: "▶ YouTube",    handle: "@StuttgartFoodieAlex", bg: "#FF0000" },
        ].map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "9999px", background: s.bg, color: "#fff", fontWeight: 700, fontSize: "0.78rem", textDecoration: "none", fontFamily: "var(--font-syne), sans-serif" }}>
            {s.label} <span style={{ opacity: 0.7, fontWeight: 400, fontSize: "0.7rem" }}>{s.handle}</span>
          </a>
        ))}
      </section>

      {/* ── RESTAURANT GUIDE ─────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Section header */}
          <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-label" style={{ color: "#CC5959", marginBottom: "0.5rem" }}>01 — Von Alex persönlich getestet</div>
              <h2 style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#0F0B09",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                margin: 0,
              }}>
                Stuttgarts beste<br />Restaurants
              </h2>
            </div>
            <Link href="/restaurant-guide" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 1.5rem", borderRadius: "8px",
              border: "2px solid #0F0B09", color: "#0F0B09",
              fontWeight: 700, fontSize: "0.82rem", textDecoration: "none",
              fontFamily: "var(--font-syne), sans-serif", letterSpacing: "0.04em",
              transition: "background 0.2s, color 0.2s",
              background: "transparent",
            }}>
              Alle ansehen →
            </Link>
          </div>

          {/* Card grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {restaurants.map((r, i) => (
              <RestaurantCard key={r.name} {...r} delay={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL CTA ───────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg, #0F0B09 0%, #2E1B0E 60%, #4E342E 100%)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative large "ALEX" watermark */}
        <div aria-hidden style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          fontWeight: 800,
          color: "rgba(230,179,90,0.04)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}>ALEX</div>

        <div className="reveal" style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ color: "#E6B35A", marginBottom: "1.25rem" }}>02 — Täglich auf Social Media</div>
          <h2 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 800,
            color: "#F5F0E8",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}>
            Folge für täglichen<br />
            <span style={{ background: "linear-gradient(135deg, #E6B35A, #CC5959)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Stuttgart Food Content
            </span>
          </h2>
          <p style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "1.05rem",
            color: "rgba(245,240,232,0.6)",
            fontStyle: "italic",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}>
            Restaurant-Tipps, Rezepte und Stuttgart-Food-Vibes —<br />täglich auf Instagram, TikTok und YouTube.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <BigSocialButton href={siteConfig.instagram} label="Instagram" handle="@stuttgartfoodiealex" bg="linear-gradient(135deg,#f09433,#dc2743,#bc1888)" />
            <BigSocialButton href={siteConfig.tiktok}    label="TikTok"    handle="@stuttgartfoodiealex" bg="#111" border="1px solid rgba(255,255,255,0.18)" />
            <BigSocialButton href={siteConfig.youtube}   label="YouTube"   handle="@StuttgartFoodieAlex" bg="#FF0000" />
          </div>
        </div>
      </section>

      {/* ── RECIPE PREVIEW ───────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "#FAF7F0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>

            <div className="reveal">
              <div className="section-label" style={{ color: "#CC5959", marginBottom: "0.75rem" }}>03 — Schwäbisches Original</div>
              <h2 style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                color: "#0F0B09",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "1.25rem",
              }}>
                Rezepte direkt<br />aus Stuttgart
              </h2>
              <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", color: "rgba(15,11,9,0.6)", lineHeight: 1.75, marginBottom: "2rem", fontStyle: "italic", fontSize: "1.05rem" }}>
                Von klassischen Maultaschen bis zum modernen Stuttgart-Twist — mit Schritt-für-Schritt-Anleitungen und Video-Content auf YouTube.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/rezepte" style={{ padding: "0.875rem 1.75rem", borderRadius: "8px", background: "#0F0B09", color: "#F5F0E8", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem", fontFamily: "var(--font-syne), sans-serif" }}>
                  Alle Rezepte
                </Link>
                <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" style={{ padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #0F0B09", color: "#0F0B09", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem", fontFamily: "var(--font-syne), sans-serif" }}>
                  ▶ YouTube
                </a>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
              {[
                { name: "Maultaschen", time: "55 Min", emoji: "🥟", bg: "#4E342E", color: "#F5F0E8" },
                { name: "Käsespätzle", time: "30 Min", emoji: "🧀", bg: "#E6B35A", color: "#0F0B09" },
                { name: "Zwiebelrostbraten", time: "45 Min", emoji: "🥩", bg: "#CC5959", color: "#fff" },
                { name: "Laugenbrezel", time: "2 Std",  emoji: "🥨", bg: "#1C1917", color: "#F5F0E8" },
              ].map((r, i) => (
                <Link key={r.name} href="/rezepte" className={`recipe-link-card reveal reveal-delay-${i + 1}`}
                  style={{ display: "block", textDecoration: "none", background: r.bg, borderRadius: "12px", padding: "1.5rem 1.25rem", boxShadow: "0 2px 16px rgba(0,0,0,0.12)", transition: "transform 0.22s ease, box-shadow 0.22s ease" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{r.emoji}</div>
                  <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, color: r.color, fontSize: "0.95rem", lineHeight: 1.2, marginBottom: "0.4rem" }}>{r.name}</div>
                  <div style={{ fontSize: "0.72rem", color: r.color, opacity: 0.6, fontWeight: 700, letterSpacing: "0.06em" }}>⏱ {r.time}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ color: "#CC5959", marginBottom: "0.75rem" }}>04 — AEO</div>
            <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0F0B09", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
              Häufige Fragen
            </h2>
            <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", color: "rgba(15,11,9,0.55)", fontStyle: "italic" }}>
              Stuttgart Food — beantwortet von Alex.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} className={`reveal reveal-delay-${i + 1}`}
                style={{ border: "1px solid rgba(78,52,46,0.14)", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
                <summary style={{
                  padding: "1.25rem 1.5rem",
                  fontWeight: 700,
                  color: "#0F0B09",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-syne), sans-serif",
                }}>
                  {faq.q}
                  <span style={{ color: "#CC5959", fontSize: "1.25rem", flexShrink: 0, marginLeft: "1rem" }}>+</span>
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem", fontFamily: "var(--font-fraunces), Georgia, serif", color: "rgba(15,11,9,0.65)", lineHeight: 1.7, fontSize: "0.95rem", fontStyle: "italic" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ background: "#E6B35A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div className="reveal" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "#0F0B09", letterSpacing: "-0.025em", marginBottom: "0.5rem" }}>
            Stuttgart Food — täglich frisch von Alex
          </h2>
          <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", color: "rgba(15,11,9,0.65)", marginBottom: "1.75rem", fontStyle: "italic" }}>
            Die besten Restaurant-Tipps, Rezepte & Food-Spots direkt in deinen Feed.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { href: siteConfig.instagram, label: "📸 Instagram", bg: "#0F0B09" },
              { href: siteConfig.tiktok,    label: "🎬 TikTok",    bg: "#4E342E" },
              { href: siteConfig.youtube,   label: "▶ YouTube",    bg: "#FF0000" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ padding: "0.875rem 1.75rem", borderRadius: "8px", background: s.bg, color: "#F5F0E8", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem", fontFamily: "var(--font-syne), sans-serif" }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── SUBCOMPONENTS ─────────────────────────────────────────── */

function HeroCTA({ href, bg, label, border }: { href: string; bg: string; label: string; border?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hero-cta"
      style={{
        display: "inline-flex", alignItems: "center",
        padding: "0.875rem 1.5rem", borderRadius: "8px",
        background: bg, border: border ?? "none",
        color: "#fff", fontWeight: 700, fontSize: "0.875rem",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
        fontFamily: "var(--font-syne), sans-serif",
        letterSpacing: "0.01em",
      }}>
      {label}
    </a>
  );
}

function BigSocialButton({ href, label, handle, bg, border }: { href: string; label: string; handle: string; bg: string; border?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-btn"
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        padding: "1rem 2rem", borderRadius: "10px",
        background: bg, border: border ?? "none",
        color: "#fff", fontWeight: 700, fontSize: "0.95rem",
        textDecoration: "none", minWidth: "160px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
        fontFamily: "var(--font-syne), sans-serif",
      }}>
      {label}
      <span style={{ fontSize: "0.72rem", opacity: 0.7, fontWeight: 400, marginTop: "3px", letterSpacing: "0.02em" }}>{handle}</span>
    </a>
  );
}

function RestaurantCard({ name, neighborhood, location, vibe, tag, accent, delay }: {
  name: string; neighborhood: string; location: string; vibe: string;
  tag: string; accent: string; delay: number;
}) {
  return (
    <Link href="/restaurant-guide" className={`restaurant-card reveal reveal-delay-${(delay % 8) + 1}`}
      style={{
        display: "block", textDecoration: "none",
        background: "#fff", borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(78,52,46,0.08)",
        border: "1px solid rgba(78,52,46,0.07)",
      }}>
      {/* Coloured top bar */}
      <div style={{
        background: accent, padding: "1.25rem 1.25rem 1rem",
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.25rem" }}>
            {neighborhood} · {location}
          </div>
          <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.15rem", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>{name}</h3>
        </div>
        <span style={{ padding: "0.2rem 0.6rem", borderRadius: "9999px", background: "rgba(255,255,255,0.18)", color: "#fff", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", marginLeft: "0.5rem", marginTop: "2px" }}>
          {tag}
        </span>
      </div>
      {/* Body */}
      <div style={{ padding: "1.25rem" }}>
        <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "0.875rem", color: "rgba(15,11,9,0.62)", lineHeight: 1.65, marginBottom: "1rem", fontStyle: "italic" }}>{vibe}</p>
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.72rem", fontWeight: 700, color: accent, letterSpacing: "0.04em" }}>Mehr lesen →</span>
      </div>
    </Link>
  );
}
