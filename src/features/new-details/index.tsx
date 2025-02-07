import React from "react";
import MainContainer from "./components/main-container";
const NewDetails = ({ slug }: { slug: string }) => {
  return (
    <div className="py-8 lg:px-[120px]">
      <MainContainer slug={slug} />
    </div>
  );
};

export default NewDetails;
