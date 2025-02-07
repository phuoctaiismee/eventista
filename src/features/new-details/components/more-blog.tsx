import { Image } from "@/components/common/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAppSelector } from "@/stores";
import CardNewFeed from "./card-square";

const MoreBlog = () => {
  const { posts } = useAppSelector((state) => state.newsSlice);
  const items = posts?.map((post) => (
    <CarouselItem
      key={post.id}
      className="md:basis-1/3 basis-full lg:basis-1/4"
    >
      <CardNewFeed item={post} />
    </CarouselItem>
  ));
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-white uppercase font-unbounded">More news</h2>
      <div className="hidden md:block">
        <Carousel
          opts={{
            dragFree: true,
          }}
        >
          <CarouselContent>{items}</CarouselContent>
        </Carousel>
      </div>
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-4">
          {posts?.map((item) => (
            <CardNewFeed key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreBlog;
