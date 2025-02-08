"use client";
import React, { useMemo } from "react";
import MainCard from "./components/main-card";
import ListNewCard from "./components/list-new-card";
import { useGetListNewsQuery } from "@/stores/features/news";

const ExploreSection = () => {
  const { data, isLoading, isError } = useGetListNewsQuery({});

  const mainNews = useMemo(() => data?.posts[0], [data]);
  const news = useMemo(() => data?.posts.slice(1, data?.posts.length), [data]);

  //   const news = [
  //     {
  //       title: "Mister tourism world press release",
  //       createdAt: "Jan 01, 2025",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
  //       image: "/images/news/new1.png",
  //     },
  //     {
  //       title: "Mister tourism world press release",
  //       createdAt: "Jan 01, 2025",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
  //       image: "/images/news/new2.png",
  //     },
  //     {
  //       title: "Mister tourism world press release",
  //       createdAt: "Jan 01, 2025",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
  //       image: "/images/news/new3.png",
  //     },
  //     {
  //       title: "Mister tourism world press release",
  //       createdAt: "Jan 01, 2025",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
  //       image: "/images/news/new4.png",
  //     },
  //     {
  //       title: "Mister tourism world press release",
  //       createdAt: "Jan 01, 2025",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
  //       image: "/images/news/new4.png",
  //     },
  //     {
  //       title: "Mister tourism world press release",
  //       createdAt: "Jan 01, 2025",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
  //       image: "/images/news/new4.png",
  //     },
  //   ];

  return (
    <div className="flex flex-col justify-center items-center gap-6 lg:py-12 p-4 lg:px-[120px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-[13px] md:text-base lg:text-2xl font-medium font-unbounded text-white uppercase">
          news
        </h2>
        <h1 className="text-base md:text-2xl lg:text-5xl text-center font-bold font-unbounded text-white uppercase">
          Explore featured <span className="text-gradient-primary">news</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        <div className="lg:col-span-7 min-h-[350px]">
          <MainCard blog={mainNews} />
        </div>
        <div className="hidden md:block lg:col-span-5">
          <div className="relative w-full h-full">
            <ListNewCard news={news} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
