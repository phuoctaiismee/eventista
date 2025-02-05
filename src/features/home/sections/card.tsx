import { Image } from "@/components/common/images";
import React from "react";

type CardType = {
  id: number;
  image: string;
  date: string;
  title: string;
  read: string;
};

export const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="h-[250px]">
      <Image
        src={card?.image || "/images/home/stay-wu-1.png"}
        alt="stay with us 1"
        className="w-full h-full object-cover"
      />
      <div className="w-full flex flex-col items-start justify-start gap-1 mt-3">
        <div className="w-full flex justify-between items-center">
          <div className="text-sm text-neutral-400">{card?.date}</div>
          <div className="text-sm text-neutral-400">{card?.read}</div>
        </div>
        <div className="text-neutral-100 text-lg font-medium">
          {card?.title}
        </div>
      </div>
    </div>
  );
};
