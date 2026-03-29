import type { MetadataRoute } from "next";

const BASE_URL = "https://www.accurateautoworks.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/tinting/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/wraps/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/detailing/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ppf/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/print/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/tires/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/gallery/`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog/`, priority: 0.6, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog/spring-vehicle-maintenance-guide-stony-plain/`, priority: 0.5, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
