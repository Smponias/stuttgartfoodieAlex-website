import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { localBusinessSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stuttgartfoodiealex.de"),
  title: {
    default: "StuttgartFoodieAlex – Stuttgarts #1 Food Blog",
    template: "%s | StuttgartFoodieAlex",
  },
  description:
    "Alex zeigt dir die besten Restaurants, Rezepte & Food-Spots in Stuttgart. Authentische Swabian cuisine, versteckte Geheimtipps & virale Food-Content. Folge auf Instagram, TikTok & YouTube.",
  keywords: [
    "StuttgartFoodieAlex",
    "Stuttgart Restaurants",
    "Essen gehen Stuttgart",
    "Schwäbische Küche",
    "Stuttgart Food Blog",
    "Maultaschen Rezept",
    "Bohnenviertel Restaurants",
    "Stuttgart food guide",
    "Instagrammable restaurants Stuttgart",
    "Stuttgart Markthalle",
    "food blog Stuttgart",
    "Alex Stuttgart food",
  ],
  authors: [{ name: "Alex", url: "https://stuttgartfoodiealex.de/ueber-mich" }],
  creator: "StuttgartFoodieAlex",
  publisher: "StuttgartFoodieAlex",
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_GB",
    url: "https://stuttgartfoodiealex.de",
    siteName: "StuttgartFoodieAlex",
    title: "StuttgartFoodieAlex – Stuttgarts #1 Food Blog",
    description:
      "Alex zeigt dir die besten Restaurants, Rezepte & Food-Spots in Stuttgart. Folge auf Instagram, TikTok & YouTube.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StuttgartFoodieAlex – Stuttgarts bester Food Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StuttgartFoodieAlex – Stuttgarts #1 Food Blog",
    description: "Die besten Restaurants, Rezepte & Food-Spots in Stuttgart. Folge @stuttgartfoodiealex!",
    images: ["/og-image.jpg"],
    creator: "@stuttgartfoodiealex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://stuttgartfoodiealex.de",
    languages: {
      "de-DE": "https://stuttgartfoodiealex.de",
      "en-US": "https://stuttgartfoodiealex.de/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
