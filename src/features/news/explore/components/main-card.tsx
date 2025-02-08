import { Image } from "@/components/common/images";
import { Button } from "@/components/ui/button";
import { Post } from "@/stores/features/news";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const MainCard = ({ blog }: { blog?: Post }) => {
  return (
    <Link href={`/news/${blog?.slug}`} className="relative w-full h-[350px] md:h-[446px] ">
      <Image
        src={blog?.feature_image ?? undefined}
        alt={blog?.title ?? ""}
        classNameImage="object-cover"
        className="w-full h-full rounded-3xl overflow-hidden"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 w-full h-[180px] rounded-b-3xl bg-gradient-to-b from-[#000000]/0 to-[#000000]/80" />
      <div className="absolute bottom-0 left-0 w-full h-full">
        <div className="flex items-end h-full">
          <div className="flex flex-col items-start justify-start gap-4 p-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-base font-montserrat font-semibold text-white">
                {blog?.title ?? ""}
              </h2>
              <p className="text-xs font-montserrat font-medium text-white">
                News - {format(blog?.created_at ?? new Date(), "PPP")}
              </p>
            </div>
            <p className="text-xs font-montserrat font-normal text-white  line-clamp-2">
              {blog?.excerpt ?? ""}
            </p>
            <Button
              title="Read More"
              variant="secondary"
              size="sm"
              className="text-[13px] w-full md:w-fit font-montserrat font-semibold rounded-full"
            >
              View More
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainCard;
