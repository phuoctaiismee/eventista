"use client";
import React, { useRef } from "react";
import NewCard from "./new-card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Post } from "@/stores/features/news";

const ListNewCard = ({ news }: { news?: Post[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    if (!containerRef.current || itemsRef.current.length === 0) return;

    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    // Tìm item tiếp theo trong danh sách
    const nextItem = itemsRef.current.find(
      (item) => item && item.offsetTop > scrollTop + containerHeight * 0.1
    );

    if (nextItem) {
      container.scrollTo({
        top: nextItem.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <ScrollArea
        // ref={containerRef}
        className="relative gap-4 lg:h-[446px] w-full"
      >
        <div className="flex flex-col md:flex-row lg:flex-col gap-4 w-fit relative">
          {news?.slice(1).map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
            >
              <NewCard blog={item} />
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* <Button
        onClick={handleScroll}
        className="bg-white bg-opacity-[24%] backdrop-blur-[24px] rounded-full absolute lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-5 right-0 top-1/2 -translate-y-1/2 lg:top-auto"
        size="icon"
      >
        <ChevronDown className="-rotate-90 lg:rotate-0" />
      </Button> */}
    </>
  );
};

export default ListNewCard;
