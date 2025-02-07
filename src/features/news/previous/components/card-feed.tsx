import { Image } from "@/components/common/images";
import React from "react";
import { Post } from "@/stores/features/news";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardFeedProps {
  item: Post;
}

const CardFeed = ({ item }: CardFeedProps) => {
  return (
    <Link
      href={`/news/${item?.slug}`}
      className="grid grid-cols-12 w-full rounded-3xl bg-white bg-opacity-[6%] backdrop-blur-[50px] border border-white/10 p-3 gap-4"
    >
      <div className="col-span-4 aspect-video">
        <Image
          src={item?.feature_image ?? undefined}
          alt={item?.title ?? ""}
          className="h-[158px]  rounded-xl overflow-hidden"
        />
      </div>
      <div className="flex flex-col gap-4 col-span-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-base font-montserrat font-semibold">
            {item.title}
          </h4>
          <p className="text-white text-xs font-montserrat font-light">
            {item.created_at}
          </p>
        </div>
        <p className="text-white text-xs font-montserrat font-light line-clamp-3">
          {item.title}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full h-7 border w-fit border-white text-white text-xs"
        >
          Read More
        </Button>
      </div>
    </Link>
  );
};

export default CardFeed;
