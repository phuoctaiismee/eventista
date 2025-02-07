import { Image } from "@/components/common/images";
import React from "react";
import { LinearText } from "../home/stay-with-us/linear-text";
import { ArrowRightIcon } from "lucide-react";
import { Bounded } from "@/components/common/containers";

export const Highlight = () => {
  return (
    <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden flex items-center justify-center">
      <Image
        src={"/images/home/1b0f40d9f8744a003bdba7687d07fa33.jpg"}
        alt=""
        className="absolute inset-0 object-cover -mt-[600px]"
      />

      <div className="absolute inset-0 z-[2] bg-black/60"></div>

      <Bounded className="z-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="text-white text-sm md:text-2xl font-medium uppercase font-unbounded">
            highlight
          </div>
          <div className="text-white text-base md:text-5xl leading-6 font-semibold uppercase md:leading-[62px] font-unbounded">
            press <span className="text-[#02D4FD]">mister tourism world</span> <br /> {" "}
            release
          </div>
          <div className="text-neutral-300 text-base md:text-2xl uppercase mb-2">
            January 02, 2025
          </div>

          <div className="flex items-center gap-2 uppercase mx-auto">
            <LinearText
              text="View More"
              className="uppercase font-semibold text-sm md:text-base"
            />
            <ArrowRightIcon className="text-yellow-600 size-4" />
          </div>
        </div>
      </Bounded>
    </div>
  );
};
