import { API_URL, CONTENT_KEY } from "@/configs";
import NewDetails from "@/features/new-details";
import { IResponse } from "@/stores";
import {
  IPostDetailResponse,
  IPostsResponse,
  Post,
} from "@/stores/features/news";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const article = await fetch(
    `${API_URL}/ghost/api/content/posts/slug/${slug}?key=${CONTENT_KEY}`
  )
    .then((res) => res.json())
    .then((res: { posts: Post[] }) => res.posts[0]);



  if (!article) {
    notFound();
  }

  const articleTitle = article?.title;


  const { title, description, openGraph } = await parent;

  return {
    title:
      `${articleTitle} - Miss Tourism Mister tourism world press release` ||
      title,
    description: `${articleTitle}` || description,
    openGraph: {
      images: [...(openGraph?.images || [])],
      title: articleTitle || "Miss Tourism Mister tourism world press release",
      description:
        articleTitle || "Miss Tourism Mister tourism world press release",
      url: `/${slug}`,
      locale: "en-US",
      siteName: "Miss Tourism Mister tourism world press release",
      type: "article",
    },
    alternates: {
      canonical: `/news/${slug}`,
    },
    twitter: {
      title: `${articleTitle} - Miss Tourism Mister tourism world press release`,
      description: "Miss Tourism Mister tourism world press release",
      images: [...(openGraph?.images || [])],
      card: "summary_large_image",
    },
  };
}

export async function generateStaticParams() {
  try {
    const response = await fetch(
      `${API_URL}/ghost/api/content/posts/?key=${CONTENT_KEY}`
    );
    const json: IPostsResponse = await response.json();

    const articles = json?.posts;

    if (!Array.isArray(articles)) {
      console.error("API response is not an array:", articles);
      return [];
    }

    return articles
      .filter((article: Post) => article?.slug)
      .map((article: Post) => ({
        slug: article.slug,
      }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

const NewDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  return <NewDetails slug={slug} />;
};

export default NewDetailPage;
