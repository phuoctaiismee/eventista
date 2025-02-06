import React from "react";

const NewIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_40_609"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_40_609)">
        <path
          d="M7 17C7.28333 17 7.52083 16.9042 7.7125 16.7125C7.90417 16.5208 8 16.2833 8 16C8 15.7167 7.90417 15.4792 7.7125 15.2875C7.52083 15.0958 7.28333 15 7 15C6.71667 15 6.47917 15.0958 6.2875 15.2875C6.09583 15.4792 6 15.7167 6 16C6 16.2833 6.09583 16.5208 6.2875 16.7125C6.47917 16.9042 6.71667 17 7 17ZM6 13H8V7H6V13ZM11 17H18V15H11V17ZM11 13H18V11H11V13ZM11 9H18V7H11V9ZM4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4ZM4 19H20V5H4V19Z"
          fill="#B1B1B1"
        />
      </g>
    </svg>
  );
};

export default NewIcon;
