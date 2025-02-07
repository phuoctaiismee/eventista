"use client";
import { useGetNewsBySlugQuery } from "@/stores/features/news";
import React from "react";
import { BlogDetailContent } from "./content";
import PostHeader from "./header";
import { useNewsActions } from "@/actions/news";
import ListNewCard from "./list-new-card";
import MoreBlog from "./more-blog";

const MainContainer = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useGetNewsBySlugQuery({ slug });
  const { data: news } = useNewsActions();
  return (
    <div className="grid grid-cols-12 gap-4 w-full z-10 lg:py-8 lg:px-[120px]">
      <div className="lg:col-span-8 col-span-12 ">
        <div className="flex flex-col w-full gap-12">
          <PostHeader
            title={data?.title || ""}
            date={data?.created_at || ""}
            author={data?.authors || ""}
          />
          <BlogDetailContent content={data?.html || ""} />
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-4 col-span-12">
        <div className="relative w-full h-full flex flex-col gap-4 ">
          <h2 className="text-xl text-white uppercase font-unbounded">
            may be interested
          </h2>
          <ListNewCard news={news?.result || []} />
        </div>
      </div>
      <div className="col-span-12">
        <MoreBlog />
      </div>
    </div>
  );
};

export default MainContainer;
