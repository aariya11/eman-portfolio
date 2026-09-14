import { MetadataRoute } from "next";
import { journalData } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://emantrades.com";

  const journalUrls = journalData.articles.map((article) => ({
    url: `${baseUrl}#journal`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const legalUrls = ["privacy", "terms", "cookies", "refund"].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...legalUrls,
    ...journalUrls,
  ];
}
