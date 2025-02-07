import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Flag, Frown } from "lucide-react";

const items = [
  {
    avatar: "/avatars/mr1.png",
    name: "Mr Tourism World",
    verified: true,
    username: "@mrtourismworld",
  },
  {
    avatar: "/avatars/mr2.png",
    name: "Mister Tourism World",
    verified: true,
    username: "@mrtourismworld",
  },
  {
    avatar: "/avatars/mr3.png",
    name: "Mr Tourism World (Offical)",
    verified: true,
    username: "@mrtourismworld",
  },
  {
    avatar: "/avatars/mr4.png",
    name: "Mr World",
    verified: true,
    username: "@mrworld",
  },
  {
    avatar: "/avatars/mr1.png",
    name: "Mister World",
    verified: true,
    username: "@mrworld",
  },
];

const Following = () => {
  return (
    <div className="flex flex-col gap-3 p-4 border border-[#6D6D6D] bg-white backdrop-blur-lg bg-opacity-[6%] rounded-2xl">
      <h2 className="text-white text-sm uppercase font-bold">What Happening</h2>
      <div className="h-[1px] bg-white/10 w-full" />
      <div className="flex flex-col gap-3 h-[260px] scrollbar-none overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between border-b border-white/10 pb-3"
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={item.avatar} />
                <AvatarFallback>
                  {item.name.charAt(0)}
                  {item.name.charAt(item.name.length - 1)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="text-white text-sm font-bold">{item.name}</h3>
                <p className="text-white/80 text-xs">{item.username}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full h-7 border border-white text-white text-xs"
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Following;
