import type { MetadataRoute } from "next";
import { apiUrl } from "@/lib/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heroy.dev";

const serviceSlugs = [
  "digital-marketing",
  "seo",
  "web-development",
  "mobile-app-development",
  "android-development",
  "ui-ux-design",
  "graphics-design",
  "video-editing",
  "photography",
  "content-creation",
  "social-media-marketing",
  "ecommerce",
  "saas-development",
  "ai-solutions",
  "cloud-solutions",
  "cybersecurity",
  "erp-crm",
  "3d-experiences",
  "it-consulting",
];

const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.5, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/consultation", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

interface BlogSlugEntry {
  slug: string;
  updatedAt?: string;
  publishedAt?: string | null;
}

async function getBlogSlugs(): Promise<BlogSlugEntry[]> {
  try {
    const response = await fetch(apiUrl("/api/blog?limit=200"), {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const data = await response.json();
    return (data.data || []) as BlogSlugEntry[];
  } catch (error) {
    console.error("Failed to fetch blog slugs for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPosts = await getBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Note: /admin is deliberately excluded — it's disallowed in robots.ts
  // and should never be indexed or crawled.
  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
