import { Highlight } from "../highlight";
import HeroSection from "./hero";
import { Sponsors } from "./sponsors";
import { StayWithUs } from "./stay-with-us";

const HomeFeatures = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StayWithUs />
      <Sponsors />
      <Highlight />
    </div>
  );
};

export default HomeFeatures;
