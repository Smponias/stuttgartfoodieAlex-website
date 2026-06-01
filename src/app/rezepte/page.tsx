import type { Metadata } from "next";
import { siteConfig } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Schwäbische Rezepte von Alex – Maultaschen, Spätzle & mehr",
  description:
    "Die besten Schwäbischen Rezepte von StuttgartFoodieAlex — Maultaschen, Käsespätzle, Zwiebelrostbraten und mehr. Schritt-für-Schritt-Anleitungen mit Video-Content auf YouTube.",
  keywords: [
    "Maultaschen Rezept",
    "Käsespätzle Rezept",
    "Schwäbische Rezepte",
    "Stuttgart Rezepte",
    "Zwiebelrostbraten",
    "Laugenbrezel backen",
    "StuttgartFoodieAlex Rezepte",
  ],
  alternates: { canonical: "https://stuttgartfoodiealex.de/rezepte" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stuttgartfoodiealex.de" },
    { "@type": "ListItem", position: 2, name: "Schwäbische Rezepte", item: "https://stuttgartfoodiealex.de/rezepte" },
  ],
};

const maultaschenSchema = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  name: "Klassische Maultaschen — Schwäbisches Original",
  description:
    "Authentic Swabian Maultaschen — Stuttgart's iconic pasta pockets filled with meat, spinach and herbs, served with crispy onions and pan gravy. By StuttgartFoodieAlex.",
  image: ["https://stuttgartfoodiealex.de/images/maultaschen-hero.jpg"],
  author: {
    "@type": "Person",
    name: "Alex",
    url: "https://stuttgartfoodiealex.de/ueber-mich",
  },
  publisher: {
    "@type": "Organization",
    name: "StuttgartFoodieAlex",
    logo: { "@type": "ImageObject", url: "https://stuttgartfoodiealex.de/logo.png" },
  },
  datePublished: "2026-03-15",
  dateModified: "2026-06-01",
  prepTime: "PT30M",
  cookTime: "PT25M",
  totalTime: "PT55M",
  recipeYield: "4 Portionen",
  recipeCategory: "Hauptgericht",
  recipeCuisine: "Schwäbisch",
  keywords: "Maultaschen, Schwäbische Küche, Stuttgart, traditionelles Rezept",
  recipeIngredient: [
    "500g frische Maultaschen",
    "2 große Zwiebeln, in Ringe geschnitten",
    "3 EL Butter",
    "200ml Rinderbrühe",
    "Salz und Pfeffer",
    "Frische Petersilie",
  ],
  recipeInstructions: [
    {
      "@type": "HowToStep",
      name: "Zwiebeln rösten",
      text: "Butter in einer Pfanne erhitzen. Zwiebelringe bei mittlerer Hitze 15 Minuten goldbraun rösten.",
    },
    {
      "@type": "HowToStep",
      name: "Maultaschen garen",
      text: "Maultaschen in leicht siedendem Salzwasser 8 Minuten ziehen lassen — nicht kochen.",
    },
    {
      "@type": "HowToStep",
      name: "Sauce fertigstellen",
      text: "Rinderbrühe zu den Zwiebeln geben, aufkochen und 3 Minuten einreduzieren. Abschmecken.",
    },
    {
      "@type": "HowToStep",
      name: "Anrichten",
      text: "Maultaschen anrichten, Sauce darüber und mit Petersilie garnieren.",
    },
  ],
  nutrition: {
    "@type": "NutritionInformation",
    calories: "420 Kalorien",
    servingSize: "1 Portion",
    proteinContent: "22g",
    carbohydrateContent: "45g",
    fatContent: "16g",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "147",
  },
};

const recipes = [
  {
    name: "Klassische Maultaschen",
    subtitle: "Das Schwäbische Original",
    description:
      "Die ultimativen Maultaschen — pasta pockets gefüllt mit Hackfleisch, Spinat und Kräutern. Serviert mit goldbraunen Zwiebeln in Rinderbrühe. Das Herzstück der Schwäbischen Küche.",
    time: "55 Min",
    difficulty: "Mittel",
    servings: "4 Personen",
    emoji: "🥟",
    categories: ["Schwäbisch", "Klassiker", "Hauptgericht"],
    accent: "#CC5959",
    featured: true,
    videoUrl: siteConfig.youtube,
    ingredients: [
      "500g frische Maultaschen",
      "2 Zwiebeln",
      "3 EL Butter",
      "200ml Rinderbrühe",
      "Salz, Pfeffer, Petersilie",
    ],
    steps: [
      "Zwiebeln in Butter 15 Min goldbraun rösten",
      "Maultaschen 8 Min in Salzwasser ziehen lassen",
      "Brühe zu Zwiebeln, 3 Min einkochen",
      "Anrichten und servieren",
    ],
  },
  {
    name: "Käsespätzle",
    subtitle: "Comfort Food pur",
    description:
      "Handgemachte Spätzle mit würzigem Bergkäse überbacken und mit goldbraunen Röstzwiebeln getoppt. Das absolute Comfort Food aus Schwaben.",
    time: "30 Min",
    difficulty: "Einfach",
    servings: "3-4 Personen",
    emoji: "🧀",
    categories: ["Schwäbisch", "Vegetarisch", "Comfort Food"],
    accent: "#E6B35A",
    featured: false,
    videoUrl: siteConfig.youtube,
    ingredients: [
      "500g Mehl",
      "5 Eier",
      "200g Bergkäse",
      "2 Zwiebeln",
      "Butter, Salz, Muskat",
    ],
    steps: [
      "Teig aus Mehl, Eiern, Salz und Wasser schlagen",
      "Spätzle durch die Presse in Salzwasser drücken",
      "Abwechselnd schichten mit geriebenem Käse",
      "Mit Röstzwiebeln toppen",
    ],
  },
  {
    name: "Zwiebelrostbraten",
    subtitle: "Stuttgarter Klassiker",
    description:
      "Zartes Roastbeef mit einer dicken Schicht knuspriger Röstzwiebeln — einer der definitiven Klassiker der Schwäbischen Gastro-Tradition, von Alex verfeinert.",
    time: "45 Min",
    difficulty: "Mittel",
    servings: "2 Personen",
    emoji: "🥩",
    categories: ["Schwäbisch", "Fleisch", "Klassiker"],
    accent: "#4E342E",
    featured: false,
    videoUrl: siteConfig.youtube,
    ingredients: [
      "2x 200g Roastbeef",
      "3 große Zwiebeln",
      "Bratöl, Butter",
      "Demi-Glace oder Kalbsfond",
      "Salz, Pfeffer",
    ],
    steps: [
      "Fleisch salzen, pfeffern und scharf anbraten",
      "Zwiebeln separat goldbraun frittieren",
      "Fond aufgießen und reduzieren",
      "Fleisch mit Sauce und Zwiebeln anrichten",
    ],
  },
  {
    name: "Laugenbrezel",
    subtitle: "Frisch aus dem Ofen",
    description:
      "Selbstgebackene Laugenbrezel mit perfekter dunkelbrauner Kruste, weicher Krume und grobem Salz — besser als jede Bäckerei.",
    time: "2 Std",
    difficulty: "Anspruchsvoll",
    servings: "8 Brezeln",
    emoji: "🥨",
    categories: ["Backen", "Deutsch", "Snack"],
    accent: "#6D4C41",
    featured: false,
    videoUrl: siteConfig.youtube,
    ingredients: [
      "500g Weizenmehl Type 550",
      "15g frische Hefe",
      "30g Butter",
      "Natronlösung (4% NaOH oder Natron)",
      "Grobes Salz",
    ],
    steps: [
      "Teig kneten und 1 Std gehen lassen",
      "Rollen, formen, 20 Min kalt stellen",
      "In Natronlösung tauchen",
      "Bei 220°C 18-20 Min backen",
    ],
  },
  {
    name: "Flädlesuppe",
    subtitle: "Schwäbische Pfannkuchensuppe",
    description:
      "Klare Rinderbrühe mit hauchdünnen, in feine Streifen geschnittenen Palatschinken — die elegante schwäbische Vorspeise für besondere Anlässe.",
    time: "25 Min",
    difficulty: "Einfach",
    servings: "4 Personen",
    emoji: "🥣",
    categories: ["Schwäbisch", "Suppe", "Vorspeise"],
    accent: "#CC5959",
    featured: false,
    videoUrl: siteConfig.youtube,
    ingredients: [
      "1L kräftige Rinderbrühe",
      "2 dünne Pfannkuchen",
      "Schnittlauch",
      "Muskat",
    ],
    steps: [
      "Pfannkuchen dünn ausbacken",
      "Aufgerollt in feine Streifen schneiden",
      "Brühe erhitzen und abschmecken",
      "Flädle in die heiße Brühe geben",
    ],
  },
  {
    name: "Windbeutel mit Sahne",
    subtitle: "Stuttgart Café-Klassiker",
    description:
      "Luftige Choux-Bällchen gefüllt mit frisch geschlagener Sahne und Puderzucker — das süße Stuttgart-Klassiker-Dessert für Social-Media-Momente.",
    time: "50 Min",
    difficulty: "Mittel",
    servings: "20 Stück",
    emoji: "🍮",
    categories: ["Backen", "Dessert", "Café"],
    accent: "#E6B35A",
    featured: false,
    videoUrl: siteConfig.youtube,
    ingredients: [
      "125ml Wasser + 125ml Milch",
      "80g Butter",
      "150g Mehl",
      "4 Eier",
      "400ml Sahne",
      "Puderzucker",
    ],
    steps: [
      "Brandteig kochen und Eier einrühren",
      "Mit Spritzbeutel auf Backblech setzen",
      "Bei 200°C 25 Min backen",
      "Aufschneiden und mit Sahne füllen",
    ],
  },
];

export default function RezeptePage() {
  const featured = recipes.find((r) => r.featured)!;
  const rest = recipes.filter((r) => !r.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maultaschenSchema) }}
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
            Schwäbische Küche & mehr
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
            Rezepte von{" "}
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
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "1.05rem", lineHeight: 1.65 }}>
            Authentische Schwäbische Rezepte und moderne Interpretationen — alle getestet,
            alle geliebt. Mit Video-Anleitungen auf YouTube.
          </p>
        </div>
      </section>

      {/* Featured Recipe */}
      <section style={{ padding: "5rem 1.5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.3rem 1rem",
                borderRadius: "9999px",
                background: "#CC5959",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ⭐ Featured Rezept
            </span>
          </div>

          <article
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "2.5rem",
              boxShadow: "0 4px 30px rgba(78,52,46,0.1)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* Left */}
            <div>
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{featured.emoji}</div>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#1C1917",
                  marginBottom: "0.25rem",
                }}
              >
                {featured.name}
              </h2>
              <p style={{ color: featured.accent, fontWeight: 600, marginBottom: "1rem", fontSize: "0.9rem" }}>
                {featured.subtitle}
              </p>
              <p style={{ color: "rgba(28,25,23,0.7)", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                {featured.description}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <Stat label="Zeit" value={featured.time} />
                <Stat label="Schwierigkeit" value={featured.difficulty} />
                <Stat label="Portionen" value={featured.servings} />
              </div>
              <a
                href={featured.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  background: "#FF0000",
                  color: "#fff",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                ▶ Video auf YouTube ansehen
              </a>
            </div>

            {/* Right — Ingredients + Steps */}
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontWeight: 700, color: "#1C1917", marginBottom: "0.75rem", fontSize: "1rem" }}>
                  Zutaten
                </h3>
                {featured.ingredients.map((ing) => (
                  <div key={ing} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0", borderBottom: "1px solid rgba(78,52,46,0.06)", fontSize: "0.875rem", color: "rgba(28,25,23,0.75)" }}>
                    <span style={{ color: "#E6B35A" }}>·</span> {ing}
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: "#1C1917", marginBottom: "0.75rem", fontSize: "1rem" }}>
                  Zubereitung
                </h3>
                {featured.steps.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#CC5959",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                      }}
                    >
                      {i + 1}
                    </span>
                    <p style={{ fontSize: "0.875rem", color: "rgba(28,25,23,0.75)", lineHeight: 1.55, margin: 0 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Recipe Grid */}
      <section style={{ padding: "0 1.5rem 5rem", background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#1C1917",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Alle Rezepte
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {rest.map((recipe) => (
              <article
                key={recipe.name}
                className="recipe-card"
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 16px rgba(78,52,46,0.07)",
                  border: "1px solid rgba(78,52,46,0.06)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>{recipe.emoji}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1C1917",
                    marginBottom: "0.25rem",
                  }}
                >
                  {recipe.name}
                </h3>
                <p style={{ color: recipe.accent, fontWeight: 600, fontSize: "0.8rem", marginBottom: "0.75rem" }}>
                  {recipe.subtitle}
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(28,25,23,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {recipe.description}
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <Stat label="Zeit" value={recipe.time} small />
                  <Stat label="Level" value={recipe.difficulty} small />
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                  {recipe.categories.map((c) => (
                    <span
                      key={c}
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        background: "rgba(78,52,46,0.07)",
                        color: "#4E342E",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "1rem", padding: "0.6rem 1rem", borderRadius: "8px", background: "rgba(255,0,0,0.07)", border: "1px solid rgba(255,0,0,0.15)", fontSize: "0.78rem", color: "#CC0000", fontWeight: 600, textAlign: "center" }}>
                  ▶ Video-Anleitung auf YouTube
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section
        style={{
          background: "#FF0000",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#fff",
              marginBottom: "0.75rem",
              fontWeight: 700,
            }}
          >
            Alle Rezepte als Video auf YouTube
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", fontSize: "0.95rem" }}>
            Schritt-für-Schritt-Videos für jedes Rezept. Abonniere den Kanal,
            damit du kein neues Video verpasst.
          </p>
          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              background: "#fff",
              color: "#FF0000",
              fontWeight: 800,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            ▶ Jetzt YouTube abonnieren
          </a>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontWeight: 700, color: "#1C1917", fontSize: small ? "0.8rem" : "0.95rem" }}>{value}</div>
      <div style={{ fontSize: "0.7rem", color: "rgba(28,25,23,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
    </div>
  );
}
