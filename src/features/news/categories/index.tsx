import SearchInput from "@/components/common/input/search-input";
import React from "react";
import BecomeOurPartner from "./components/become-our-partner";
import WhatHappening from "./components/what-happening";
import Following from "./components/following";
import HeroNew from "./components/hero";

const CategoriesFeature = () => {
  return (
    <div className="flex flex-col gap-4">
      <SearchInput />
      <BecomeOurPartner />
      <WhatHappening />
      {/* <Following /> */}
      <HeroNew />
    </div>
  );
};

export default CategoriesFeature;
