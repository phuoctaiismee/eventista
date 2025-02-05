import React from "react";

const ShareIcon = ({ className }: { className?: string }) => {
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
        id="mask0_39_78651"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_39_78651)">
        <path
          d="M8.5 14H10.5V12C10.5 11.7167 10.5958 11.4792 10.7875 11.2875C10.9792 11.0958 11.2167 11 11.5 11H13.5V13L16.5 10L13.5 7V9H11.5C10.6667 9 9.95833 9.29167 9.375 9.875C8.79167 10.4583 8.5 11.1667 8.5 12V14ZM4.5 18C3.95 18 3.47917 17.8042 3.0875 17.4125C2.69583 17.0208 2.5 16.55 2.5 16V5C2.5 4.45 2.69583 3.97917 3.0875 3.5875C3.47917 3.19583 3.95 3 4.5 3H20.5C21.05 3 21.5208 3.19583 21.9125 3.5875C22.3042 3.97917 22.5 4.45 22.5 5V16C22.5 16.55 22.3042 17.0208 21.9125 17.4125C21.5208 17.8042 21.05 18 20.5 18H4.5ZM4.5 16H20.5V5H4.5V16ZM1.5 21V19H23.5V21H1.5Z"
          fill="#B1B1B1"
        />
      </g>
    </svg>
  );
};

export default ShareIcon;
