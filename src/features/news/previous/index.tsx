"use client";
import { useNewsActions } from "@/actions/news";
import { Image } from "@/components/common/images";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  UserRoundSearch,
} from "lucide-react";
import React from "react";
import { Pagination } from "./components/pagination";
import CardSkeleton from "./components/card-skeleton";
import CardFeed from "./components/card-feed";

const PreviousNews = () => {
  const sampleFeed = [
    {
      title: "Mister tourism world press release",
      createdAt: "Jan 01, 2025",
      image: "/images/news/feed2.png",
      content:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
    },
    {
      title: "Mister tourism world press release",
      createdAt: "Jan 01, 2025",
      image: "/images/news/feed3.png",
      content:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
    },
  ];
  const {
    data,
    isLoading,
    isFetching,
    page,
    totalPages,
    handleNextPage,
    handlePrevPage,
    handlePagination,
  } = useNewsActions();
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-unbounded font-medium text-white uppercase">
          Previous news
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-white hover:text-black"
            >
              <SlidersHorizontal className="size-5 rotate-90" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            side="bottom"
            className="bg-[#8080804D]/30 w-[237px] text-white backdrop-blur border-none rounded-[20px] border border-white"
          >
            <DropdownMenuItem className="py-2 px-4 rounded-[20px] transition-all duration-300">
              <BadgeCheck className="size-5" />
              Press Release
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2 px-4 rounded-[20px] transition-all duration-300">
              <UserRoundSearch className="size-5" />
              Organization News
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {isLoading || isFetching ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {data?.result?.map((item, index) => (
              //   <GradientOutline key={index}  className="w-full">
              <CardFeed key={index} item={item} />
              //   </GradientOutline>
            ))}
          </>
        )}
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePagination={handlePagination}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default PreviousNews;
