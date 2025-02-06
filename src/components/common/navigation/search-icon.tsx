import React from "react";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_39_78648"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <rect x="0.75" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_39_78648)">
        <path
          d="M20.35 21L14.05 14.7C13.55 15.1 12.975 15.4167 12.325 15.65C11.675 15.8833 10.9833 16 10.25 16C8.43333 16 6.89583 15.3708 5.6375 14.1125C4.37917 12.8542 3.75 11.3167 3.75 9.5C3.75 7.68333 4.37917 6.14583 5.6375 4.8875C6.89583 3.62917 8.43333 3 10.25 3C12.0667 3 13.6042 3.62917 14.8625 4.8875C16.1208 6.14583 16.75 7.68333 16.75 9.5C16.75 10.2333 16.6333 10.925 16.4 11.575C16.1667 12.225 15.85 12.8 15.45 13.3L21.75 19.6L20.35 21ZM10.25 14C11.5 14 12.5625 13.5625 13.4375 12.6875C14.3125 11.8125 14.75 10.75 14.75 9.5C14.75 8.25 14.3125 7.1875 13.4375 6.3125C12.5625 5.4375 11.5 5 10.25 5C9 5 7.9375 5.4375 7.0625 6.3125C6.1875 7.1875 5.75 8.25 5.75 9.5C5.75 10.75 6.1875 11.8125 7.0625 12.6875C7.9375 13.5625 9 14 10.25 14Z"
          fill="#B1B1B1"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
