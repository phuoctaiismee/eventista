import CategoriesFeature from "./categories";
import ExploreSection from "./explore";
import { NewFeedFeature } from "./feed";
import HeroSection from "./hero";
import PreviousNews from "./previous";

const NewsFeatues = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExploreSection />
      <div className="grid grid-cols-12 w-full z-10 divide-x divide-neutral-50/[16%] lg:py-8 px-4 lg:px-[120px]">
        <div className="md:col-span-8 col-span-12 divide-y divide-neutral-50/[16%]">
          <div className="p-0 md:p-4 lg:p-6">
            <NewFeedFeature />
          </div>
          <div className="p-0 md:p-4 lg:p-6">
            <PreviousNews />
          </div>
        </div>
        <div className="md:col-span-4 hidden md:block p-0 md:p-4 lg:p-6">
          <CategoriesFeature />
        </div>
      </div>
    </div>
  );
};

export default NewsFeatues;
