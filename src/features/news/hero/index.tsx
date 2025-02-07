import { Image } from "@/components/common/images";

const HeroSection = () => {
  return (
    <section className="py-5 md:py-0 lg:h-[750px] relative">
      <Image
        src="/images/home/hero.png"
        className="w-full h-full"
        alt="Hero image"
        classNameImage="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 h-[67px] md:h-[160px] lg:h-[250px] bg-gradient-to-t from-[#030815] to-[#03081500]/0" />
    </section>
  );
};

export default HeroSection;
