"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const tabs = [
  { label: "For you", value: 1 },
  { label: "Following", value: 2 },
];

const MenuTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="grid grid-cols-2 w-full border-b border-white border-opacity-5 place-items-center transition-all duration-300">
      {tabs.map((tab) => {
        return (
          <div key={tab.value} className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "text-neutral-400 font-semibold py-2 px-3 text-[17px] leading-[25.5px]",
                activeTab === tab.value &&
                  "transition-all duration-300 bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent"
              )}
            >
              {tab.label}
            </button>
            {activeTab === tab.value && (
              <div className="transition-all duration-300 h-[2px] w-full  bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuTab;
