import CollaborationAndSupport from "./collab-and-support";
import { Highlight } from "../highlight";
import HeroSection from "./hero";
import Introduction from "./introduction";
import TheWinner from "./the-winner";
import { Sponsors } from "./sponsors";
import { StayWithUs } from "./stay-with-us";

const HomeFeatures = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TheWinner />
      <Introduction />
      <CollaborationAndSupport />
      <StayWithUs />
      <Sponsors />
      <Highlight />
    </div>
  );
};

export default HomeFeatures;
