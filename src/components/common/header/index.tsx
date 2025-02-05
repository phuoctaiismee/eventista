import {LegalButton} from "@/components/base-component/buttons/legal-button";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <LegalButton type="white-fill">test</LegalButton>
      <LegalButton type="gold-fill">test</LegalButton>
      <LegalButton type="gold-outline">test</LegalButton>
      <LegalButton type="outline">test</LegalButton>
    </div>
  );
};

export default Header;
