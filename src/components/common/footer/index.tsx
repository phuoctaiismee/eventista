/* eslint-disable @next/next/no-img-element */
import {COMMON} from "@/configs";
import {cn} from "@/lib/utils";
import {Dot} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="z-10 relative w-full min-h-[824px] md:gap-0 pt-6 pb-6 md:pt-12 lg:py-16 px-4 md:px-[48px] lg:px-[120px] font-montserrat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("/images/footer.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "130% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col gap-6">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 mx-auto gap-6">
          {COMMON.footer.first.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="text-gray-primary md:text-gray-primary md:text-sm md:font-semibold lg:text-xl md:text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:py-[42px] gap-2 md:gap-3 items-start md:items-center lg:py-[32px] w-full">
          <img
            src={COMMON.footer.second.logo}
            alt="name-logo"
            className="object-contain"
          />
          <span className="font-light opacity-90 text-gray-primary text-left md:text-center leading-6 text-[13px] md:text-sm max-w-[886px] md:tracking-[-0.34px]">
            {COMMON.footer.second.describes}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:flex-nowrap gap-6 lg:gap-0 lg:pt-12 w-full md:justify-between">
          <div className="flex flex-col gap-2 max-w-[300px] w-full">
            <span className="font-semibold text-white text-base md:text-sm lg:text-xl">
              Support
            </span>
            <div className="flex flex-col gap-2">
              {COMMON.footer.support.map((item, i) => (
                <span
                  key={i}
                  className="text-gray-primary font-light text-[13px] md:text-sm text-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:flex-nowrap gap-6 lg:gap-0 md:justify-between">
            {COMMON.footer.third.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 md:w-full">
                <span className="font-semibold text-white text-base md:text-sm lg:text-xl">
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
        <div className="flex lg:justify-between flex-wrap gap-6 md:pt-12 w-full">
          {COMMON.footer.fourth.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 md:max-w-[calc((100%/2)-48px)] lg:max-w-[calc((100%/3)-48px)]"
            >
              <span className="font-semibold text-white text-base md:text-sm lg:text-base">
                {item.name}
              </span>
              <div className="flex flex-col gap-2">
                {item.ls.map((l, i) => (
                  <div
                    key={i}
                    className="text-gray-primary font-light text-[13px] md:text-sm flex items-start"
                  >
                    <Dot size={16} strokeWidth={6} className="min-w-6" />
                    <span className="opacity-70">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <span className="mx-auto lg:pt-6 text-gray-primary opacity-70">
          {COMMON.footer.fifth}
        </span>
      </div>
    </div>
  );
};

export default Footer;
