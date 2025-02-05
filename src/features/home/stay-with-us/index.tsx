import { Bounded } from "@/components/common/containers";
import { Image } from "@/components/common/images";
import React from "react";
import { Card } from "./card";
import { LinearText } from "./linear-text";
import { ArrowRightIcon } from "lucide-react";

const DATA = [
  {
    id: 1,
    image: "/images/home/stay-wu-1.png",
    date: "Jan 01,2025",
    title: "Mister tourism world press release",
    read: "5 min read",
  },
  {
    id: 2,
    image: "/images/home/stay-wu-2.png",
    date: "Jan 01,2025",
    title: "Official Announcement on Mister Tourism World Participation",
    read: "5 min read",
  },
  {
    id: 3,
    image: "/images/home/stay-wu-3.png",
    date: "Jan 01,2025",
    title: "Official Announcement on Mister Tourism World Participation",
    read: "5 min read",
  },
];

export const StayWithUs = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-20 md:px-24">
      <Image
        src={"/images/home/73192a80f0282f3bcf9c3a134e0ef350.jpg"}
        alt="stay-with-us"
        className="object-contain w-full h-full z-[1] absolute inset-0"
      />

      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <Bounded className="z-10">
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="text-white text-base md:text-2xl uppercase">Latest news</div>
            <div className="text-white text-xl md:text-5xl font-semibold uppercase">
              Stay <LinearText text="Ahead" /> with Us
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 w-full">
            {DATA?.map((item) => (
              <Card key={item?.id} card={item} />
            ))}
          </div>

          <div className="flex items-center gap-2 uppercase mx-auto">
            <LinearText text="View More" className="uppercase font-semibold text-base" />
            <ArrowRightIcon className="text-yellow-600 size-4" />
          </div>
        </div>
      </Bounded>
    </div>
  );
};
