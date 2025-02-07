import { Image } from "@/components/common/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Ellipsis,
  Flag,
  Frown,
  Heart,
  MessageSquare,
  Undo2,
} from "lucide-react";
import { FeedItem } from "./type";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CardFeed = ({
  user,
  timestamp,
  content,
  mentions,
  links,
  media,
  engagement,
}: FeedItem) => {
  return (
    <div className="flex items-start justify-start w-full p-4 text-white gap-3 border-b  border-[#222222]">
      <Avatar className="size-10">
        <AvatarImage src={user.profileImage} />
        <AvatarFallback>
          {user.name.charAt(0).toUpperCase()}
          {user.name.charAt(1).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <p className="text-white text-[15px] leading-[22.5px] font-semibold">
                {user.name}
              </p>
              {user.verified && <VerifyIcon />}
            </div>
            <p className="text-neutral-300 text-[15px] leading-[22.5px]">
              @{user.username}
            </p>

            <p className="text-neutral-300  text-[15px] leading-[22.5px]">
              • {timestamp}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Ellipsis className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="bottom"
              className="bg-[#8080804D]/30 w-[237px] text-white backdrop-blur border-none rounded-[20px] border border-white"
            >
              <DropdownMenuItem className="py-2 px-4 rounded-[20px] transition-all duration-300">
                <Frown className="size-5" />
                Not interested in this article
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2 px-4 rounded-[20px] transition-all duration-300">
                <Flag className="size-5" />
                Report article
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {content && (
          <p className="text-white text-[15px] leading-[22.5px]">
            {content}
            {mentions && mentions.length > 0 && (
              <span className="text-[#02D4FD] text-[15px] leading-[22.5px]">
                {mentions.join(" ")}
              </span>
            )}
          </p>
        )}
        {media && media.length > 0 && (
          <Image
            src={media?.[0]?.url}
            alt="news"
            className="max-h-[450px] rounded-xl"
          />
        )}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Heart className="size-5 fill-rose-500 text-rose-500" />
              <p className="text-white text-[15px] leading-[22.5px]">
                1.2k
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="size-5" />
              <p className="text-white text-[15px] leading-[22.5px]">
                {engagement.comments}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Undo2 className="size-5 rotate-180" />
            </div>
            <div className="flex items-center gap-2">
              <Bookmark className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFeed;

const VerifyIcon = () => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5346 5.42643C12.4846 5.37789 12.4448 5.31985 12.4176 5.25573C12.3903 5.19162 12.3761 5.1227 12.3759 5.05304V3.57812C12.3754 3.19204 12.2218 2.82191 11.9488 2.54891C11.6758 2.27592 11.3057 2.12234 10.9196 2.12187H9.44469C9.37503 2.12157 9.30612 2.10738 9.24201 2.08013C9.1779 2.05288 9.11986 2.01312 9.0713 1.96318L8.03512 0.926999C7.75962 0.65349 7.38715 0.5 6.99894 0.5C6.61073 0.5 6.23826 0.65349 5.96276 0.926999L4.92659 1.96318C4.87802 2.01312 4.81999 2.05288 4.75587 2.08013C4.69176 2.10738 4.62285 2.12157 4.55319 2.12187H3.07827C2.69219 2.12234 2.32206 2.27592 2.04907 2.54891C1.77607 2.82191 1.62249 3.19204 1.62202 3.57812V5.05304C1.62175 5.1227 1.60757 5.19162 1.58032 5.25573C1.55307 5.31985 1.5133 5.37789 1.46333 5.42643L0.427152 6.46261C0.153552 6.73806 0 7.11055 0 7.49879C0 7.88703 0.153552 8.25951 0.427152 8.53497L1.46333 9.57114C1.5133 9.61969 1.55307 9.67772 1.58032 9.74184C1.60757 9.80596 1.62175 9.87487 1.62202 9.94454V11.4195C1.62249 11.8055 1.77607 12.1757 2.04907 12.4487C2.32206 12.7217 2.69219 12.8752 3.07827 12.8757H4.55319C4.62285 12.876 4.69176 12.8902 4.75587 12.9174C4.81999 12.9447 4.87802 12.9845 4.92659 13.0344L5.96276 14.0706C6.0988 14.2067 6.26033 14.3147 6.43812 14.3884C6.61592 14.4621 6.80649 14.5 6.99894 14.5C7.1914 14.5 7.38197 14.4621 7.55976 14.3884C7.73755 14.3147 7.89908 14.2067 8.03512 14.0706L9.0713 13.0344C9.11986 12.9845 9.1779 12.9447 9.24201 12.9174C9.30612 12.8902 9.37503 12.876 9.44469 12.8757H10.9196C11.3057 12.8752 11.6758 12.7217 11.9488 12.4487C12.2218 12.1757 12.3754 11.8055 12.3759 11.4195V9.94454C12.3761 9.87487 12.3903 9.80596 12.4176 9.74184C12.4448 9.67772 12.4846 9.61969 12.5346 9.57114L13.5707 8.53497C13.8443 8.25951 13.9979 7.88703 13.9979 7.49879C13.9979 7.11055 13.8443 6.73806 13.5707 6.46261L12.5346 5.42643ZM9.19265 6.58397L6.70956 9.07639C6.61971 9.16049 6.50124 9.20728 6.37817 9.20728C6.2551 9.20728 6.13663 9.16049 6.04678 9.07639L4.80523 7.82551C4.72002 7.73856 4.67257 7.6215 4.67318 7.49976C4.6738 7.37801 4.72243 7.26144 4.80852 7.17535C4.8946 7.08926 5.01118 7.04063 5.13292 7.04002C5.25466 7.0394 5.37173 7.08686 5.45868 7.17207L6.3735 8.08689L8.5392 5.92119C8.62658 5.83591 8.74383 5.78817 8.86593 5.78817C8.98802 5.78817 9.10528 5.83591 9.19265 5.92119C9.23698 5.96424 9.27222 6.01576 9.29628 6.07268C9.32035 6.1296 9.33275 6.19078 9.33275 6.25258C9.33275 6.31438 9.32035 6.37555 9.29628 6.43247C9.27222 6.48939 9.23698 6.54091 9.19265 6.58397Z"
        fill="#02D4FD"
      />
    </svg>
  );
};
