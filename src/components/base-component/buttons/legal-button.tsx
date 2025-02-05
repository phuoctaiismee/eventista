import {Button} from "@/components/ui/button";
import {STYLES} from "@/configs";
import React, {FC, HTMLAttributes} from "react";

type LegalButtonProps = {
  type: "gold-fill" | "gold-outline" | "white-fill" | "outline";
  className?: string;
  childClass?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const LegalButton: FC<LegalButtonProps> = ({
  type,
  className,
  childClass,
  children,
}) => {
  if (type === "gold-fill")
    return (
      <Button
        className={`${STYLES.disableFocusVisible} rounded-full h-[28px] text-black w-[63px] bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] px-4 ${className}`}
      >
        {children}
      </Button>
    );

  if (type === "gold-outline")
    return (
      <Button
        className={`${STYLES.disableFocusVisible} rounded-full h-[28px] w-[63px] relative overflow-hidden box-border bg-gradient-to-r from-[#7b6e5d] to-[#7c6635] before:absolute before:rounded-full before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:left-[1px] before:top-[1px] before:z-[2] before:bg-gradient-to-r before:from-[#E6CAA4]/50 before:to-[#E9B84E]/50 px-4 ${className}`}
      >
        <div
          className={`relative z-[3] bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text ${childClass}`}
        >
          {children}
        </div>
      </Button>
    );

  if (type === "white-fill")
    return (
      <Button
        className={`${STYLES.disableFocusVisible}  rounded-full text-black h-[28px] w-[63px] bg-white hover:bg-white px-4 ${className}`}
      >
        {children}
      </Button>
    );

  return (
    <Button
      className={`${STYLES.disableFocusVisible} rounded-full h-[28px] text-white w-[63px] hover:bg-transparent border-[rgba(255, 255, 255, 0.16)] bg-transparent px-4 ${className}`}
    >
      {children}
    </Button>
  );
};
