
import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const SITE_URL = "https://sezerdekorasyon.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projeler`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project) => ({
      url: `${SITE_URL}/projeler/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticPages, ...projectPages];
}
