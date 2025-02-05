/* eslint-disable @next/next/no-img-element */
import {COMMON} from "@/configs";
import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full min-h-[824px] tablet:gap-0 pt-6 pb-6 tablet:pt-12 desktop:py-16 px-4 tablet:px-[48px] desktop:px-[120px]"
      style={{
        backgroundImage: 'url("/images/footer.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col gap-6">
        <div className="w-full grid grid-cols-2 tablet:grid-cols-3 gap-6">
          {COMMON.footer.first.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="text-gray-primary tablet:text-gray-primary tablet:text-sm tablet:font-semibold desktop:text-xl"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col tablet:py-[42px] gap-2 tablet:gap-3 items-start tablet:items-center w-full">
          <img src="/images/name-logo.png" alt="name-logo" className="h-5" />
          <span className="font-light opacity-90 text-gray-primary text-left tablet:text-center leading-6 text-[13px] tablet:text-sm max-w-[886px] tablet:tracking-[-0.34px]">
            {COMMON.footer.second.describes}
          </span>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white text-base tablet:text-sm desktop:text-xl">
              Support
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-gray-primary font-light text-[13px] tablet:text-sm text-nowrap">
                Email: Contact@eventista.vn
              </span>
              <span className="text-gray-primary font-light text-[13px] tablet:text-sm text-nowrap">
                Website: Eventista.vn
              </span>
              <span className="text-gray-primary font-light text-[13px] tablet:text-sm text-nowrap">
                Hotline: +84 90 1946686
              </span>
            </div>
          </div>
          {COMMON.footer.third.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 min-w-[172px]">
              <span className="font-semibold text-white text-base tablet:text-sm desktop:text-xl">
                {item.name}
              </span>
              <div className="flex flex-row gap-1">
                {item.ls.map((l, i) => (
                  <img
                    key={i}
                    src={l}
                    alt="image"
                    className={cn(index === 0 ? "h-[31px]" : "h-6")}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
