import type { Metadata } from "next";
import { siteConfig } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Stuttgart Restaurant Guide 2026 – Die besten Restaurants von Alex",
  description:
    "Der ultimative Stuttgart Restaurant Guide von StuttgartFoodieAlex. Alex' persönliche Top-Empfehlungen: Alte Kanzlei, CUBE, Délice, Markthalle und mehr. Von Fine Dining bis Streetfood — jetzt entdecken!",
  keywords: [
    "Stuttgart Restaurants 2026",
    "beste Restaurants Stuttgart",
    "Schwäbische Küche",
    "Fine Dining Stuttgart",
    "Bohnenviertel Restaurants",
    "Markthalle Stuttgart",
    "StuttgartFoodieAlex Restaurant Guide",
  ],
  alternates: { canonical: "https://stuttgartfoodiealex.de/restaurant-guide" },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Restaurants in Stuttgart – StuttgartFoodieAlex Guide 2026",
  description:
    "Alex' personally curated list of the best restaurants in Stuttgart, Germany — from traditional Swabian classics to modern fine dining.",
  url: "https://stuttgartfoodiealex.de/restaurant-guide",
  author: {
    "@type": "Person",
    name: "Alex",
    url: "https://stuttgartfoodiealex.de/ueber-mich",
  },
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Alte Kanzlei", url: "https://alte-kanzlei-stuttgart.de" },
    { "@type": "ListItem", position: 2, name: "CUBE Restaurant", url: "https://www.cube-restaurant.de" },
    { "@type": "ListItem", position: 3, name: "Restaurant Délice" },
    { "@type": "ListItem", position: 4, name: "Markthalle Stuttgart", url: "https://www.markthalle-stuttgart.de" },
    { "@type": "ListItem", position: 5, name: "Ochs'n Willi", url: "https://ochsn-willi.de" },
    { "@type": "ListItem", position: 6, name: "La Bruschetta" },
    { "@type": "ListItem", position: 7, name: "Sendo Matcha" },
    { "@type": "ListItem", position: 8, name: "Cinnamood" },
    { "@type": "ListItem", position: 9, name: "José y Josefina" },
  ],
};

const restaurants = [
  {
    name: "Alte Kanzlei",
    neighborhood: "Mitte",
    location: "Schillerplatz 5A",
    category: "Schwäbische Küche",
    vibe: "Grand Swabian classics in a centuries-old hall right opposite the Old Castle. The coffered ceilings, rotating menu and sun-drenched outdoor terrace facing Schillerplatz make this one of the most photogenic dining rooms in all of Stuttgart.",
    bestFor: ["Maultaschen", "Schwäbischer Sauerbraten", "Lokaler Wein"],
    emoji: "🏰",
    priceRange: "€€",
    tags: ["Must-Visit", "Traditional"],
    tagBg: "#CC5959",
    alexTake: "Wenn jemand zu Besuch kommt und fragt 'wo ist DAS Stuttgart?' — Alte Kanzlei. Immer.",
  },
  {
    name: "CUBE Restaurant",
    neighborhood: "Mitte",
    location: "Kleiner Schlossplatz 1",
    category: "Modern Fine Dining",
    vibe: "Stuttgart's most architecturally striking restaurant, perched atop the Kunstmuseum with a glass-walled terrace overlooking Schlossplatz. The sleek minimalist interior and city-panorama backdrop were literally designed to be photographed.",
    bestFor: ["Panoramablick", "Date Night", "Content Creation"],
    emoji: "🔲",
    priceRange: "€€€",
    tags: ["Instagrammable", "Fine Dining"],
    tagBg: "#4E342E",
    alexTake: "Das Abendlicht auf dem Schlossplatz von hier oben? Unvergesslich. Und die Küche hält mit.",
  },
  {
    name: "Restaurant Délice",
    neighborhood: "Mitte / Bohnenviertel",
    location: "Hauptstätter Str. 61",
    category: "French Fine Dining",
    vibe: "An intimate French-leaning fine-dining gem known for sophisticated tasting menus in a candlelit setting. Perfect for date-night editorial content with a refined, luxury aesthetic.",
    bestFor: ["Tasting Menu", "Weinbegleitung", "Besondere Anlässe"],
    emoji: "✨",
    priceRange: "€€€€",
    tags: ["Michelin-Worthy", "Romantic"],
    tagBg: "#6D4C41",
    alexTake: "Eines meiner liebsten Restaurants in ganz Deutschland. Buchung weit im Voraus.",
  },
  {
    name: "Markthalle Stuttgart",
    neighborhood: "Mitte",
    location: "Dorotheenstraße 4",
    category: "Market & Street Food",
    vibe: "The 1914 Art Nouveau covered market hall with stalls selling global produce, fresh pasta, cheeses, spices, and street food under ornate arched ceilings. The upper-gallery view over the trading floor is the best interior shot in Stuttgart.",
    bestFor: ["Frische Produkte", "Streetfood", "Architektur-Content"],
    emoji: "🏺",
    priceRange: "€",
    tags: ["Iconic", "Must-Photograph"],
    tagBg: "#E6B35A",
    alexTake: "Samstagmorgens zur Markthalle — das ist mein Stuttgart-Ritual. Frühstücken, shoppen, filmen.",
  },
  {
    name: "Ochs'n Willi",
    neighborhood: "Mitte",
    location: "Kleiner Schlossplatz 4",
    category: "Schwäbisch-Bayrisch",
    vibe: "The quintessential Swabian-Bavarian tavern for hearty Maultaschen, pork knuckle, and local wine in a rustic interior with a sun-drenched patio. Every Stuttgart food story starts here.",
    bestFor: ["Maultaschen", "Schweinshaxe", "Weißbier"],
    emoji: "🍻",
    priceRange: "€€",
    tags: ["Swabian Soul", "Locals' Favourite"],
    tagBg: "#4E342E",
    alexTake: "Touristisch? Egal. Der Maultaschen-Teller ist eine Offenbarung. Punkt.",
  },
  {
    name: "La Bruschetta",
    neighborhood: "Bohnenviertel",
    location: "Bohnenviertel",
    category: "Italienisch",
    vibe: "A hidden Italian trattoria tucked into a cobblestone side alley of the Bohnenviertel. Handmade pasta and wood-fired pizza served in a gallery-adjacent space. The 'secret alley find' framing plays extremely well on Reels and TikTok.",
    bestFor: ["Hausgemachte Pasta", "Pizze al forno", "Geheimtipp-Flair"],
    emoji: "🍝",
    priceRange: "€€",
    tags: ["Hidden Gem", "Bohnenviertel"],
    tagBg: "#CC5959",
    alexTake: "Den Ort findet man nur, wenn man weiß, wo man suchen muss. Oder mir folgt. 😏",
  },
  {
    name: "Sendo Matcha",
    neighborhood: "Mitte",
    location: "Königsstraße-Bereich",
    category: "Japanese Specialty",
    vibe: "A Japanese matcha specialist that grew from a viral pop-up to a permanent shop, offering ceremonial-grade matcha drinks and workshops. The minimal green aesthetic and whisk-pour videos are native social content.",
    bestFor: ["Ceremonial Matcha", "Matcha-Workshops", "Ästhetik-Content"],
    emoji: "🍵",
    priceRange: "€",
    tags: ["Trending", "Viral"],
    tagBg: "#556B2F",
    alexTake: "Mein Go-to für kreative Food-Content-Ideen. Der Whisk-Pour ist immer gut.",
  },
  {
    name: "Cinnamood",
    neighborhood: "Nord",
    location: "Milaneo Shopping Center",
    category: "Bakery & Desserts",
    vibe: "A cinnamon roll concept shop with a rotating menu of creative filled and frosted rolls. The close-up pull-apart shot is a proven format for food TikTok and Instagram Reels engagement.",
    bestFor: ["Signature Rolls", "Pull-Apart-Content", "Sweet Treats"],
    emoji: "🌀",
    priceRange: "€",
    tags: ["TikTok Viral", "Sweet"],
    tagBg: "#010101",
    alexTake: "Der beste Ort in Stuttgart, um Views zu generieren und gleichzeitig glücklich zu sein.",
  },
  {
    name: "José y Josefina",
    neighborhood: "Stuttgart-West",
    location: "Stuttgart-West",
    category: "Spanische Tapas",
    vibe: "Vibrant Spanish tapas bar with warm terracotta interiors bringing authentic Iberian flavors to Stuttgart-West. Strong 'neighborhood gem' storytelling angle for content.",
    bestFor: ["Tapas", "Spanische Weine", "Abendstimmung"],
    emoji: "🫙",
    priceRange: "€€",
    tags: ["Stuttgart-West", "Neighbourhood Gem"],
    tagBg: "#CC5959",
    alexTake: "Der West ist sowieso mein Lieblingsstation für Dining-Content. Die Atmosphäre hier — top.",
  },
];

export default function RestaurantGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1C1917 0%, #4E342E 100%)",
          padding: "8rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              border: "1px solid rgba(230,179,90,0.35)",
              background: "rgba(230,179,90,0.07)",
              color: "#E6B35A",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Von Alex persönlich empfohlen
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              fontWeight: 800,
              color: "#F5F0E8",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Stuttgart Restaurant
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #E6B35A, #CC5959)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Guide 2026
            </span>
          </h1>
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "1.05rem", lineHeight: 1.65 }}>
            Meine persönlich getesteten und empfohlenen Restaurants in Stuttgart —
            von der authentischen Schwäbischen Weinstube bis zum ikonischen Fine-Dining am Schlossplatz.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#E6B35A", padding: "2rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ fontWeight: 600, color: "#1C1917", fontSize: "1rem" }}>
            Alle Spots selbst besucht · Content auf{" "}
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#4E342E" }}>
              Instagram
            </a>
            {" · "}
            <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: "#4E342E" }}>
              TikTok
            </a>
            {" · "}
            <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "#4E342E" }}>
              YouTube
            </a>
          </p>
        </div>
      </section>

      {/* Restaurant List */}
      <section style={{ padding: "5rem 1.5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {restaurants.map((r, i) => (
              <article
                key={r.name}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 2px 20px rgba(78,52,46,0.07)",
                  border: "1px solid rgba(78,52,46,0.06)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.5rem",
                }}
              >
                {/* Number + emoji */}
                <div style={{ textAlign: "center", minWidth: "60px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #E6B35A, #CC5959)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#fff",
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ fontSize: "1.75rem" }}>{r.emoji}</div>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#1C1917",
                        margin: 0,
                      }}
                    >
                      {r.name}
                    </h2>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {r.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "0.2rem 0.65rem",
                            borderRadius: "9999px",
                            background: r.tagBg,
                            color: r.tagBg === "#E6B35A" ? "#1C1917" : "#fff",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#CC5959", fontWeight: 600 }}>📍 {r.neighborhood}</span>
                    <span style={{ fontSize: "0.8rem", color: "rgba(28,25,23,0.5)", fontWeight: 500 }}>{r.category}</span>
                    <span style={{ fontSize: "0.8rem", color: "rgba(28,25,23,0.5)", fontWeight: 600 }}>{r.priceRange}</span>
                  </div>

                  <p style={{ color: "rgba(28,25,23,0.7)", lineHeight: 1.65, fontSize: "0.9rem", marginBottom: "1rem" }}>
                    {r.vibe}
                  </p>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    {r.bestFor.map((b) => (
                      <span
                        key={b}
                        style={{
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          background: "rgba(78,52,46,0.07)",
                          color: "#4E342E",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Alex's take */}
                  <div
                    style={{
                      background: "rgba(230,179,90,0.1)",
                      borderLeft: "3px solid #E6B35A",
                      padding: "0.75rem 1rem",
                      borderRadius: "0 8px 8px 0",
                      fontSize: "0.875rem",
                      color: "#4E342E",
                      fontStyle: "italic",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontStyle: "normal", color: "#1C1917" }}>Alex says: </span>
                    {r.alexTake}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1C1917 0%, #4E342E 100%)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#F5F0E8",
              marginBottom: "0.75rem",
              fontWeight: 700,
            }}
          >
            Neue Spots täglich auf Social Media
          </h2>
          <p style={{ color: "rgba(245,240,232,0.65)", marginBottom: "2rem" }}>
            Der Guide wird ständig aktualisiert. Folge Alex für Live-Updates und neue Geheimtipps.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { href: siteConfig.instagram, label: "📸 Instagram", bg: "linear-gradient(135deg, #f09433,#dc2743,#bc1888)" },
              { href: siteConfig.tiktok, label: "🎬 TikTok", bg: "#333" },
              { href: siteConfig.youtube, label: "▶️ YouTube", bg: "#FF0000" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  background: s.bg,
                  color: "#fff",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
