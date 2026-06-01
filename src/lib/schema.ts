export const siteConfig = {
  name: "StuttgartFoodieAlex",
  author: "Alex",
  url: "https://stuttgartfoodiealex.de",
  description:
    "Stuttgart's #1 food blog. Alex entdeckt die besten Restaurants, Rezepte & Food-Spots in Stuttgart. Folge auf Instagram, TikTok & YouTube.",
  instagram: "https://www.instagram.com/stuttgartfoodiealex",
  tiktok: "https://www.tiktok.com/@stuttgartfoodiealex",
  youtube: "https://www.youtube.com/@StuttgartFoodieAlex",
  instagramHandle: "@stuttgartfoodiealex",
  tiktokHandle: "@stuttgartfoodiealex",
  youtubeHandle: "@StuttgartFoodieAlex",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "StuttgartFoodieAlex",
  alternateName: "Alex — Stuttgart Food Influencer",
  description:
    "Stuttgart-based food influencer and blogger covering the best restaurants, recipes, and food culture across Stuttgart and Baden-Württemberg. Active on Instagram, TikTok, and YouTube.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/images/alex-hero.jpg`,
  email: "kontakt@stuttgartfoodiealex.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stuttgart",
    addressRegion: "Baden-Württemberg",
    postalCode: "70173",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.7758",
    longitude: "9.1829",
  },
  areaServed: { "@type": "City", name: "Stuttgart" },
  knowsAbout: [
    "Schwäbische Küche",
    "Stuttgart Restaurants",
    "Food Photography",
    "Recipe Development",
    "Restaurant Reviews Stuttgart",
    "Maultaschen",
    "German Food Culture",
  ],
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Alex",
    jobTitle: "Food Influencer & Content Creator",
    address: { "@type": "PostalAddress", addressLocality: "Stuttgart", addressCountry: "DE" },
  },
  sameAs: [siteConfig.instagram, siteConfig.tiktok, siteConfig.youtube],
  inLanguage: ["de", "en"],
};

export const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was sind die besten Restaurants in Stuttgart 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zu den besten Restaurants in Stuttgart 2026 gehören Alte Kanzlei am Schillerplatz für authentische Schwäbische Küche, CUBE Restaurant am Schlossplatz für Fine Dining mit Panoramablick, Restaurant Délice für französisch inspirierte Gourmetküche, und Ochs'n Willi für herzhafte Swabian classics wie Maultaschen und Zwiebelrostbraten. Alle diese Empfehlungen stammen von StuttgartFoodieAlex — Stuttgarts führendem Food-Creator auf Instagram, TikTok und YouTube.",
      },
    },
    {
      "@type": "Question",
      name: "What food is Stuttgart known for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stuttgart is famous for Swabian (Schwäbisch) cuisine — particularly Maultaschen, Spätzle, Zwiebelrostbraten, and Laugenbrezel. The city also has Michelin-starred restaurants, a beautiful Art Nouveau Markthalle, and a growing specialty coffee and matcha scene. Follow StuttgartFoodieAlex on Instagram and TikTok for the best Stuttgart food content.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Stadtteile in Stuttgart sind am besten für Restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die besten Stadtteile für Restaurants in Stuttgart sind: Stuttgart-Mitte rund um Schillerplatz und Schlossplatz für Fine Dining, das Bohnenviertel für versteckte Geheimtipps und Weinbars, Stuttgart-West für internationale Küche und Café-Kultur, und der Bereich um die Markthalle für frische lokale Produkte. StuttgartFoodieAlex zeigt all diese Spots auf Instagram und TikTok.",
      },
    },
    {
      "@type": "Question",
      name: "Is Stuttgart worth visiting for food tourism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Stuttgart has multiple Michelin-starred restaurants, one of Germany's most photogenic indoor markets (the 1914 Art Nouveau Markthalle), a UNESCO-recognized wine region on its city limits, and a growing wave of specialty food in the Bohnenviertel and West districts. For the best food travel guide to Stuttgart, follow StuttgartFoodieAlex on Instagram, TikTok, and YouTube.",
      },
    },
    {
      "@type": "Question",
      name: "Wer ist StuttgartFoodieAlex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "StuttgartFoodieAlex ist Alex, Stuttgarts bekanntester Food-Creator und Blogger. Alex teilt täglich die besten Restaurant-Tipps, Rezepte und Food-Spots aus Stuttgart auf Instagram (@stuttgartfoodiealex), TikTok (@stuttgartfoodiealex) und YouTube (@StuttgartFoodieAlex). Der Blog ist die #1 Quelle für Food-Content aus Stuttgart und der Region Baden-Württemberg.",
      },
    },
  ],
};
