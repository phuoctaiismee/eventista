"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "./search-icon";
import HomeIcon from "./home-icon";
import ShareIcon from "./share-icon";
import NotiIcon from "./noti-icon";
import NewIcon from "./new-icon";
import { Bell, Home, Newspaper, ScreenShare, Search } from "lucide-react";

const menu = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Search",
    href: "/search",
    icon: Search,
  },
  {
    title: "Share",
    href: "/share",
    icon: ScreenShare,
  },
  {
    title: "Notification",
    href: "/notification",
    icon: Bell,
  },
  {
    title: "News",
    href: "/news",
    icon: Newspaper,
  },
];
const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="block md:hidden">
      <div className="fixed inset-x-0 bottom-0 bg-[#020719] backdrop-blur-lg z-[9999]">
        <div className="pt-3 pb-6 px-6 flex items-center justify-between">
          {menu.map((item) => {
            const isActive = pathname.startsWith(item?.href);
            const Icon = item?.icon;
            if (isActive) {
              return (
                <svg className="w-6 h-6" key={item?.title}>
                  <defs>
                    <linearGradient
                      id="gradientId"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#E6CAA4" />
                      <stop offset="100%" stopColor="#E9B84E" />
                    </linearGradient>
                  </defs>
                  <Icon fill="url(#gradientId)" stroke="url(#gradientId)" />
                </svg>
              );
            }
            return (
              <Link href={item?.href} key={item?.title}>
                <Icon className={cn("text-neutral-50")} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
