import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { format } from "date-fns";
interface PostHeaderProps {
  title: string;
  date: string;
  author: any;
}
const PostHeader = ({ title, date, author }: PostHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 w-full text-white font-unbounded">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-gradient-primary transition-all duration-300">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news" className="hover:text-gradient-primary transition-all duration-300">
              New
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gradient-primary line-clamp-1">
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-2xl leading-[33px] md:text-5xl md:leading-[67px] uppercase font-bold">
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-sm uppercase">
          News • <span className="text-neutral-400">{format(date || new Date(), "PPP")}</span>
        </p>
        <div className="flex items-center gap-2">
          <FacebookIcon />
          <TwitterIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;

const FacebookIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5199 24.7279V16.7671H20.1911L20.5911 13.6639H17.5191V11.6823C17.5191 10.7839 17.7679 10.1719 19.0575 10.1719H20.7007V7.39514C19.9056 7.31167 19.1066 7.27107 18.3071 7.27354C15.9383 7.27354 14.3159 8.71994 14.3159 11.3743V13.6631H11.6367V16.7663H14.3159V24.7279H17.5199Z"
        fill="url(#paint0_linear_194_6313)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_194_6313"
          x1="11.6367"
          y1="16.0007"
          x2="20.7007"
          y2="16.0007"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6CAA4" />
          <stop offset="1" stopColor="#E9B84E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_194_6319)">
        <path
          d="M7.14551 21.7067C9.11913 21.8178 10.845 21.3564 12.5281 20.1347C10.8279 19.8442 9.64886 19.0667 9.00807 17.4605C9.50361 17.3922 9.93935 17.5203 10.452 17.3153C8.77739 16.5805 7.69232 15.4784 7.6496 13.5732C8.17931 13.6159 8.58088 13.9662 9.21312 13.9149C7.67523 12.4112 7.20531 10.7709 8.17077 8.7802C9.77701 10.6256 11.6567 11.8815 13.955 12.4711C14.0831 12.5052 14.2027 12.5394 14.3309 12.565C14.9204 12.7017 15.621 12.9922 15.9798 12.9495C16.595 12.8726 15.9798 12.1635 16.1336 11.2408C16.6206 8.3701 19.7818 7.06293 22.1229 8.74603C22.8064 9.24156 23.3446 9.23301 24.0196 8.93399C24.3699 8.7802 24.7287 8.62641 25.1474 8.447C25.0534 9.26719 24.4211 9.72 23.9171 10.3266C24.4895 10.4548 24.9509 10.2924 25.4806 10.1216C25.3012 10.7111 24.8569 11.0443 24.4553 11.3689C24.0367 11.7021 23.8743 12.0524 23.8572 12.5992C23.6009 20.878 14.1942 27.2772 7.76067 22.1852C7.13697 21.6896 7.74358 22.1852 7.14551 21.7067Z"
          fill="url(#paint0_linear_194_6319)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_194_6319"
          x1="7.14551"
          y1="16"
          x2="25.4806"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6CAA4" />
          <stop offset="1" stopColor="#E9B84E" />
        </linearGradient>
        <clipPath id="clip0_194_6319">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ShareIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_194_6325)">
        <path
          d="M14.4631 20.7194L12.342 22.8404C11.4627 23.7198 10.0387 23.7198 9.16009 22.8406C8.28132 21.9618 8.28132 20.5377 9.15992 19.6591L13.4027 15.4163C14.2813 14.5377 15.7055 14.5377 16.584 15.4163C16.8769 15.7092 17.3518 15.7092 17.6447 15.4163C17.9376 15.1234 17.9376 14.6485 17.6447 14.3556C16.1803 12.8912 13.8064 12.8912 12.342 14.3556L8.09928 18.5984C6.63487 20.0628 6.63487 22.4367 8.09928 23.9011C9.56351 25.3662 11.9376 25.3662 13.4027 23.9011L15.5238 21.78C15.8167 21.4872 15.8167 21.0123 15.5238 20.7194C15.2309 20.4265 14.7559 20.4265 14.4631 20.7194Z"
          fill="url(#paint0_linear_194_6325)"
        />
        <path
          d="M23.9023 8.09831C22.4378 6.6339 20.0632 6.6339 18.5988 8.09831L16.054 10.6431C15.7611 10.936 15.7611 11.4109 16.054 11.7037C16.3469 11.9966 16.8218 11.9966 17.1147 11.7037L19.6595 9.15898C20.5381 8.28035 21.963 8.28035 22.8416 9.15898C23.7202 10.0376 23.7202 11.4617 22.8416 12.3403L18.1751 17.0069C17.2964 17.8855 15.8723 17.8855 14.9937 17.0069C14.7008 16.714 14.2259 16.714 13.933 17.0069C13.6402 17.2998 13.6402 17.7747 13.933 18.0676C15.3975 19.532 17.7713 19.532 19.2357 18.0676L23.9023 13.401C25.3667 11.9366 25.3667 9.56271 23.9023 8.09831Z"
          fill="url(#paint1_linear_194_6325)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_194_6325"
          x1="7.00098"
          y1="19.1286"
          x2="17.8644"
          y2="19.1286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6CAA4" />
          <stop offset="1" stopColor="#E9B84E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_194_6325"
          x1="13.7134"
          y1="13.0829"
          x2="25.0006"
          y2="13.0829"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6CAA4" />
          <stop offset="1" stopColor="#E9B84E" />
        </linearGradient>
        <clipPath id="clip0_194_6325">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
