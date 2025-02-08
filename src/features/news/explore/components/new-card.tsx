import { Image } from "@/components/common/images";
import { Post } from "@/stores/features/news";
import { format } from "date-fns";
import Link from "next/link";

interface NewCardProps {
  blog: Post;
}

const NewCard = ({ blog }: NewCardProps) => {
  return (
    <Link
      href={`/news/${blog?.slug}`}
      className="grid grid-cols-12 gap-3 p-3 rounded-3xl bg-white bg-opacity-[6%] backdrop-blur-[50px] w-[280px] lg:w-full"
    >
      <div className="col-span-5 aspect-square lg:aspect-video h-[114px] w-full relative rounded-2xl overflow-hidden">
        <Image
          src={blog?.feature_image ?? undefined}
          alt={blog?.title ?? ""}
          className="w-full h-full"
        />
      </div>
      <div className="col-span-7">
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-montserrat line-clamp-1 font-semibold text-white">
              {blog?.title ?? ""}
            </h2>
            <p className="text-[13px] font-montserrat font-normal text-white">
              News - {format(blog?.created_at ?? new Date(), "PPP")}
            </p>
          </div>
          <p className="text-xs font-montserrat font-normal text-white line-clamp-3">
            {blog?.excerpt ?? ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewCard;
