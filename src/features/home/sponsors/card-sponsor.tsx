import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type CardSponsorType = {
  className?: string;
  image: string;
};

export const CardSponsor = ({ className, image }: CardSponsorType) => {
  return (
    <div
      className={cn(
        "bg-white/50 rounded-lg p-4 w-[310px] h-[180px] flex items-center justify-center",
        className
      )}
    >
      <Image
        src={image}
        alt="sponsor"
        width={233}
        height={135}
        className="object-contain w-full h-full"
      />
    </div>
  );
};
