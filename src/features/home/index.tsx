import CollaborationAndSupport from "./collab-and-support";
import HeroSection from "./hero";
import Introduction from "./introduction";
import TheWinner from "./the-winner";
const HomeFeatures = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TheWinner />
      <Introduction />
      <CollaborationAndSupport />
    </div>
  );
};

export default HomeFeatures;
