import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import { postsData } from "./postsData";

export function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData[slug];

  if (!post) {
    return {
      title: "Post Not Found | HEROY Digital Solutions",
      description: "The requested HEROY Digital Solutions article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://heroy.dev/blog/${slug}`;

  return {
    title: `${post.title} | HEROY Digital Solutions`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [
      {
        name: post.author,
        url: "https://heroy.dev",
      },
    ],
    creator: "HEROY Digital Solutions",
    publisher: "HEROY Digital Solutions",
    category: post.category,

    openGraph: {
      title: `${post.title} | HEROY Digital Solutions`,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "HEROY Digital Solutions",
      type: "article",
      locale: "en_US",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },

    twitter: {
      card: "summary_large_image",
      title: `${post.title} | HEROY Digital Solutions`,
      description: post.excerpt,
      creator: "@heroy_digital_solution2026",
    },

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!postsData[slug]) {
    notFound();
  }

  return <BlogPostClient slug={slug} />;
}