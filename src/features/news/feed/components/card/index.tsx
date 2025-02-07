import React from "react";
import { Post } from "@/stores/features/news";
import { Image } from "@/components/common/images";
import Link from "next/link";

interface CardNewFeedProps {
  item: Post;
}

const CardNewFeed = ({ item }: CardNewFeedProps) => {
  return (
    <Link
      href={`/news/${item?.slug}`}
      className="flex flex-col rounded-3xl bg-white bg-opacity-[6%] backdrop-blur-[50px] border border-white/10 p-3 gap-4"
    >
      <Image
        src={item?.feature_image ?? undefined}
        alt={item?.title ?? ""}
        className="h-[200px] w-full rounded-xl overflow-hidden"
      />
      <div className="flex flex-col gap-2">
        <p className="text-white text-xs font-montserrat font-light">
          {item?.created_at}
        </p>
        <h4 className="text-white text-base font-montserrat font-semibold">
          {item?.title}
        </h4>
      </div>
    </Link>
  );
};

export default CardNewFeed;
