import type { MetadataRoute } from "next";
import { services } from "./services/servicesData";
import { postsData } from "./blog/[slug]/postsData";

const BASE_URL = "https://heroy.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/portfolio`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${BASE_URL}/case-studies`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/testimonials`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/industries`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${BASE_URL}/careers`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${BASE_URL}/consultation`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = Object.keys(postsData).map(
    (slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...staticPages, ...servicePages, ...blogPages];
}
