// /* eslint-disable @next/next/no-img-element */
// "use client";
// import {cn} from "@/lib/utils";
// import {Icon} from "@iconify/react/dist/iconify.js";
// import React, {useState} from "react";

// const Notifications = () => {
//   const [currentTab, setCurrentTab] = useState("all");
//   return (
//     <div style= className="w-full relative z-10">
//       <div className="flex w-full gap-3 px-3">
//         <span
//           onClick={() => setCurrentTab("all")}
//           className={cn(
//             "cursor-pointer h-6 relative border-b text-center box-border text-nowrap border-b-transparent select-none bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent text-[13px] font-medium w-full before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:to-[#E9B84E] before:bottom-0 before:left-0",
//             currentTab === "all" ? "before:opacity-100" : "before:opacity-0"
//           )}
//         >
//           All Notification
//         </span>
//         <span
//           onClick={() => setCurrentTab("confirm")}
//           className={cn(
//             "cursor-pointer h-6 relative border-b text-center box-border border-b-transparent select-none bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent text-[13px] font-medium w-full before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[#E6CAA4] before:to-[#E9B84E] before:bottom-0 before:left-0",
//             currentTab === "confirm" ? "before:opacity-100" : "before:opacity-0"
//           )}
//         >
//           Confirmed
//         </span>
//         <span
//           onClick={() => setCurrentTab("mention")}
//           className={cn(
//             "cursor-pointer h-6 relative border-b text-center box-border border-b-transparent select-none bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] bg-clip-text text-transparent text-[13px] font-medium w-full before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[#E6CAA4] before:to-[#E9B84E] before:bottom-0 before:left-0",
//             currentTab === "mention" ? "before:opacity-100" : "before:opacity-0"
//           )}
//         >
//           Mention
//         </span>
//       </div>
//       <div className="flex flex-col w-full relative z-10">
//         {Array.from({length: 3}).map((_, index) => (
//           <NotificationItem key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notifications;

// const NotificationItem = () => {
//   return (
//     <div className=" flex w-full gap-3  p-4 border-b border-b-[#222]">
//       <Icon icon="ph:star-four-fill" fontSize={16} color="#E9B84E" />
//       <img
//         src="/logos/logo.svg"
//         alt="logo"
//         className="min-w-8 h-8 aspect-square rounded-full"
//       />
//       <div className="flex flex-col gap-1">
//         <div className="flex items-center gap-2 text-[13px] font-medium text-white">
//           Mr Tourism World{" "}
//           <Icon icon="tabler:rosette-discount-check-filled" fontSize={14} />
//         </div>
//         <span className="text-[13px] font-normal text-[#222]">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//           voluptates.
//         </span>
//       </div>
//     </div>
//   );
// };
import React from "react";

export default function Notifications() {
  return <div>Notifications</div>;
}
