import { Bounded } from "@/components/common/containers";
import { Image } from "@/components/common/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ReactLenis from "lenis/react";

const images = [
  "/images/home/introduction/Img.png",
  "https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop",
];
const Introduction = () => {
  const items = images.map((image, index) => (
    <div key={index} className="h-full overflow-hidden">
      <Image
        src={image}
        className="w-full h-full"
        alt="Introduction"
        loading="lazy"
      />
    </div>
  ));
  return (
    <Bounded className="relative">
      <Image
        src="/images/home/introduction/introduction.jpg"
        className="w-full h-full absolute inset-0 z-[0]"
        alt="Introduction"
        loading="lazy"
      />

      <ReactLenis root>
        <section className="text-white  w-full bg-slate-950  ">
          <div className="grid grid-cols-5">
            <div className="sticky top-0 h-screen flex items-center justify-center col-span-3">
              <div className="flex flex-col items-start justify-center p-16 z-10 gap-6">
                <h3 className="text-white text-xl uppercase">Introduction</h3>
                <h1 className="text-white text-5xl font-bold uppercase">
                  Mister{" "}
                  <span className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent">
                    Tourism
                  </span>{" "}
                  <br /> World{" "}
                  <span className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent">
                    2024
                  </span>
                </h1>
                <p className="text-white text-[15px] leading-[21px]">
                  The 8th edition of Mister Tourism World, scheduled to be held
                  in Vietnam, is expected to attract participants from 35
                  countries around the world, aiming to showcase the rich
                  culture and tourism of Vietnam. The event will contribute to
                  promoting Vietnamese tourism, cuisine, people, and culture,
                  ultimately helping to highlight the image of a dynamic,
                  modern, and friendly country to the international community.{" "}
                  <br /> <br />
                  Vietnam has previously sent three contestants to the
                  competition: Pham Xuan Hien (2016) and Tran Manh Kien (2017),
                  who did not achieve high rankings; Phung Phuoc Thinh (2022)
                  who won the title of 5th Runner-up; and Nguyen Quoc Tri (2023)
                  who secured the position of 3rd Runner-up. <br /> <br />
                  For the first time, Vietnam has been chosen to host the Mister
                  Tourism World competition, which will take place in February
                  2025, covering locations such as Ho Chi Minh City, Dong Nai,
                  Ba Ria - Vung Tau, Binh Thuan, and Ninh Thuan.
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex flex-col">{items}</div>
            </div>
          </div>
        </section>
      </ReactLenis>
    </Bounded>
  );
};

export default Introduction;
