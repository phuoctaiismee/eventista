import { Bounded } from "@/components/common/containers";
import { Image } from "@/components/common/images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const CollaborationAndSupport = () => {
  return (
    <Bounded className="min-h-[750px] lg:h-[80vh] relative flex items-center justify-center">
      <Image
        src="/images/home/collaboration/bg-collab.jpg"
        alt="Collaboration and Support"
        className="w-full h-full object-cover absolute inset-0 z-[0]"
      />
      <div className="sm:block hidden">
        <Image
          src="/images/home/collaboration/vector.svg"
          alt="Collaboration and Support"
          className="w-full h-full absolute inset-0 z-[1]"
          classNameImage="object-contain"
        />
      </div>
      <div className="sm:hidden block">
        <Image
          src="/images/home/collaboration/vector-mobile.svg"
          alt="Collaboration and Support"
          className="w-full h-full absolute inset-0 z-[1]"
          classNameImage="object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 z-10">
        <h3 className="text-xl uppercase text-center">
          <span className="text-[15px] lg:text-2xl font-medium leading-[24px] lg:leading-[38.4px]">
            from our heart
          </span>{" "}
          <br />{" "}
          <span className="font-bold text-[18px] lg:text-[32px] leading-[18px] lg:leading-[51.2px]">
            Thank you for
          </span>{" "}
          <br />{" "}
          <span className="text-[15px] lg:text-2xl font-medium leading-[24px] lg:leading-[38.4px]">
            collaboration and support
          </span>
        </h3>
        <h1 className="text-center text-[32px] lg:text-5xl font-bold uppercase">
          <span className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-opacity-20 bg-clip-text text-transparent">
            Charity
          </span>{" "}
          event <br /> in{" "}
          <span className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent">
            vietnam
          </span>
        </h1>
        <Button
          variant="ghost"
          className="uppercase hover:bg-transparent text-[13px] lg:text-base"
        >
          View all
          <ArrowRight className="size-4 lg:size-5" />
        </Button>
      </div>
    </Bounded>
  );
};

export default CollaborationAndSupport;
