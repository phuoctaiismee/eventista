import { Bounded } from "@/components/common/containers";
import { Image } from "@/components/common/images";
import React from "react";

const HeroSection = () => {
  return (
    <Bounded className="min-h-[750px] max-h-[80vh] relative">
      <Image src="/images/home/hero.png" className="w-full h-full" alt="Hero image" />
      <div className="absolute inset-x-0 bottom-0 h-[250px] bg-gradient-to-t from-[#030815] to-[#03081500]/0" />
    </Bounded>
  );
};

export default HeroSection;
