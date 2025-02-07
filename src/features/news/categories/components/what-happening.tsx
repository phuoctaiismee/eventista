import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Flag, Frown } from "lucide-react";

const items = [
  {
    title: "MisterTourismWorld",
    description: "Featured keywords are being searched the most",
    total_post: 12,
  },
  {
    title: "Mister",
    description: "Featured keywords are being searched the most",
    total_post: 12,
  },
  {
    title: "MisterTourismWorld",
    description: "Featured keywords are being searched the most",
    total_post: 12,
  },
  {
    title: "MisterTourismWorld",
    description: "Featured keywords are being searched the most",
    total_post: 12,
  },
  {
    title: "MisterTourismWorld",
    description: "Featured keywords are being searched the most",
    total_post: 12,
  },
  {
    title: "MisterTourismWorld",
    description: "Featured keywords are being searched the most",
    total_post: 12,
  },
];

const WhatHappening = () => {
  return (
    <div className="flex flex-col gap-3 p-4 border border-[#6D6D6D] bg-white backdrop-blur-lg bg-opacity-[6%] rounded-2xl">
      <h2 className="text-white text-sm uppercase font-bold">What Happening</h2>
      <div className="h-[1px] bg-white/10 w-full" />
      <div className="flex flex-col gap-3 h-[260px] scrollbar-none overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-sm font-bold">#{item.title}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Ellipsis className="size-5 text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  side="bottom"
                  className="bg-[#8080804D]/30 w-[237px] text-white backdrop-blur border-none rounded-[20px] border border-white"
                >
                  <DropdownMenuItem className="py-2 px-4 rounded-[20px] transition-all duration-300">
                    <Frown className="size-5" />
                    Not interested in this article
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-4 rounded-[20px] transition-all duration-300">
                    <Flag className="size-5" />
                    Report article
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-white/90 text-sm">{item.total_post} posts</p>
            <p className="text-white/90 text-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatHappening;
