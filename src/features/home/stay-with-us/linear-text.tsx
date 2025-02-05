import { cn } from "@/lib/utils";
import React from "react";

type LinearTextProps = {
  text: string;
  className?: string;
};

export const LinearText = ({ text, className }: LinearTextProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </span>
  );
};
