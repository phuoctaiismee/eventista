import { Image } from "@/components/common/images";

const HeroSection = () => {
  return (
    <section className="py-5 md:py-0 lg:min-h-[750px] lg:max-h-[80vh] relative">

      <div className="hidden lg:block">
        <Image
          src="/images/home/hero.png"
          className="w-full h-full"
          alt="Hero image"
          classNameImage="object-contain"
        />
      </div>
      <div className="md:hidden">
        <Image
          src="/images/home/hero/hero-mobile.png"
          className="w-full h-full"
          alt="Hero image"
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <Image
          src="/images/home/hero/hero-tablet.png"
          className="w-full h-full"
          alt="Hero image"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[250px] bg-gradient-to-t from-[#030815] to-[#03081500]/0" />
    </section>
  );
};

export default HeroSection;
