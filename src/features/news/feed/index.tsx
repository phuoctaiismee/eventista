"use client";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck, SlidersHorizontal, UserRoundSearch } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Image } from "@/components/common/images";
import { useAppSelector } from "@/stores";
import CardNewFeed from "./components/card";
export const NewFeedFeature = () => {
  const { posts } = useAppSelector((state) => state.newsSlice);
 
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-unbounded font-medium text-white uppercase">
          Featured news
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.slice(0, 6).map((item, index) => (
            <CardNewFeed key={index} item={item} />
          ))
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-white text-base font-montserrat font-semibold">
              Loading...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
