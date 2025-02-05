import React from "react";

type LinearTextProps = {
  text: string;
  className?: string;
};

export const LinearText = ({ text, className }: LinearTextProps) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
};
