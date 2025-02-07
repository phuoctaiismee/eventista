import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-12 w-full rounded-3xl bg-white bg-opacity-[6%] backdrop-blur-[50px] border border-white/10 p-3 gap-4">
      <div className="col-span-4 aspect-video">
        <Skeleton className="h-[158px]  rounded-xl overflow-hidden" />
      </div>
      <div className="flex flex-col gap-4 col-span-8">
        <div className="flex flex-col gap-2">
          <Skeleton className="text-white text-base font-montserrat font-semibold" />
          <Skeleton className="text-white text-xs font-montserrat font-light" />
        </div>
        <Skeleton className="text-white text-xs font-montserrat font-light line-clamp-3" />
        <Skeleton />
      </div>
    </div>
  );
};

export default CardSkeleton;
