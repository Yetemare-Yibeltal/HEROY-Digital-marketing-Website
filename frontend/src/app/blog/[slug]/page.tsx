import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient, {
  type FullBlogPost,
  type RelatedPost,
} from "./BlogPostClient";
import { apiUrl } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<FullBlogPost | null> {
  try {
    const response = await fetch(apiUrl(`/api/blog/${slug}`), {
      cache: "no-store",
    });

    if (response.status === 404) return null;
    if (!response.ok) {
      console.error("Failed to fetch blog post:", response.status);
      return null;
    }

    const data = await response.json();
    return data.data as FullBlogPost;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}

async function getRelatedPosts(
  category: string,
  excludeId: string,
): Promise<RelatedPost[]> {
  try {
    const response = await fetch(
      apiUrl(`/api/blog?category=${encodeURIComponent(category)}&limit=4`),
      { cache: "no-store" },
    );

    if (!response.ok) return [];

    const data = await response.json();
    const posts = (data.data || []) as (RelatedPost & { _id: string })[];
    return posts.filter((p) => p._id !== excludeId).slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch related posts:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.category, post._id);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}