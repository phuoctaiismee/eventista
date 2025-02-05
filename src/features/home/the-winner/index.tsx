import { Bounded } from "@/components/common/containers";
import NextImage from "next/image";
import { Image } from "@/components/common/images";

const TheWinner = () => {
  return (
    <Bounded className="h-[375px] md:min-h-[750px] md:h-screen py-0 md:py-16 relative flex items-center justify-center">
      <div className="absolute inset-x-0 top-0 z-10 h-[43px] md:h-[250px] bg-gradient-to-b from-[#030815] to-[#03081500]/0" />
      <div className="z-10 absolute inset-x-0 top-5 md:top-12 flex items-center justify-center">
        <p className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent text-[13px] md:text-lg font-semibold uppercase text-center">
          The <br />
          winner
        </p>
      </div>
      <div className="z-10 absolute inset-x-0 top-5 md:top-12 flex items-center justify-center">
        <Image
          src="/images/home/winer/2024.svg"
          alt="2024"
          className="max-h-[175px] md:max-h-[350px] h-[175px] md:h-[350px] max-w-[447px] md:max-w-[895px]"
          classNameImage="object-contain"
        />
      </div>
      <div className="z-[11] absolute inset-x-0 bottom-4 md:bottom-6 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-base md:text-5xl font-bold text-center text-white uppercase leading-[22px] md:leading-[67.2px]">
            The King of the <br />{" "}
            <span className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent">
              Mister Tourism World
            </span>
          </h1>
          <p className="text-white text-[13px] leading-[18px] md:text-lg uppercase text-center">
            hung nguyen <br /> vietnam
          </p>
        </div>
      </div>
      <div className="z-10 absolute inset-0 flex items-center justify-center">
        <img
          src="/images/home/winer/vector.svg"
          alt="The winner"
          className="max-h-[200px] md:max-h-[419px]"
        />
      </div>
      <div className="z-10 absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/home/winer/winner.svg"
          alt="The winner"
          className="w-[180px] h-[250px] md:h-[444px] md:w-[320px]"
          classNameImage="object-contain"
        />
      </div>

      <Image
        src="/images/home/winer/bg-winner.png"
        className="w-full h-full absolute inset-0 z-0"
        classNameImage="object-fill"
        alt="The winner"
        loading="lazy"
      />
    </Bounded>
  );
};

export default TheWinner;
