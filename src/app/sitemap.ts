import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stuttgartfoodiealex.de";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/restaurant-guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/rezepte`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ueber-mich`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
