import { Bounded } from "@/components/common/containers";
import NextImage from "next/image";
import { Image } from "@/components/common/images";

const TheWinner = () => {
  return (
    <Bounded className="min-h-[750px] h-[80vh] py-16 relative flex items-center justify-center">
      <div className="absolute inset-x-0 top-0 z-10 h-[250px] bg-gradient-to-b from-[#030815] to-[#03081500]/0" />
      <div className="z-10 absolute inset-x-0 top-12 flex items-center justify-center">
        <p className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent text-lg font-semibold uppercase text-center">
          The <br />
          winner
        </p>
      </div>
      <div className="z-10 absolute inset-x-0 top-14 flex items-center justify-center">
        <Image
          src="/images/home/winer/2024.svg"
          alt="2024"
          className="max-h-[350px] h-[350px] max-w-[895px]"
          classNameImage="object-contain"
        />
      </div>
      <div className="z-[11] absolute inset-x-0 bottom-6 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-[763px]">
          <h1 className="text-5xl font-bold text-center text-white uppercase leading-[67.2px]">
            The King of the <br />{" "}
            <span className="bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent">
              Mister Tourism World
            </span>
          </h1>
          <p className="text-white text-lg uppercase text-center">
            hung nguyen <br /> vietnam
          </p>
        </div>
      </div>
      <div className="z-10 absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/home/winer/vector.svg"
          alt="The winner"
          className="max-h-[419px]"
        />
      </div>
      <div className="z-10 absolute inset-0 flex items-center justify-center">
        <NextImage
          src="/images/home/winer/winner.svg"
          alt="The winner"
          height={444}
          width={320}
        />
      </div>

      <Image
        src="/images/home/winer/bg-winner.png"
        className="w-full h-full absolute inset-0 z-0"
        alt="The winner"
        loading="lazy"
      />
    </Bounded>
  );
};

export default TheWinner;
