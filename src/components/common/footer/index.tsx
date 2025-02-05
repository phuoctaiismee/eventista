/* eslint-disable @next/next/no-img-element */
import {COMMON} from "@/configs";
import {cn} from "@/lib/utils";
import {Dot} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full min-h-[824px] md:gap-0 pt-6 pb-6 md:pt-12 lg:py-16 px-4 md:px-[48px] lg:px-[120px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/images/footer.png")',
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
              className="text-gray-primary md:text-gray-primary md:text-sm md:font-semibold lg:text-xl lg:text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:py-[42px] gap-2 md:gap-3 items-start md:items-center lg:py-[32px] w-full">
          <img src="/images/name-logo.png" alt="name-logo" className="h-5" />
          <span className="font-light opacity-90 text-gray-primary text-left md:text-center leading-6 text-[13px] md:text-sm max-w-[886px] md:tracking-[-0.34px]">
            {COMMON.footer.second.describes}
          </span>
        </div>
        <div className="flex flex-wrap gap-6 lg:pt-12">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white text-base md:text-sm lg:text-xl">
              Support
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-gray-primary font-light text-[13px] md:text-sm text-nowrap">
                Email: Contact@eventista.vn
              </span>
              <span className="text-gray-primary font-light text-[13px] md:text-sm text-nowrap">
                Website: Eventista.vn
              </span>
              <span className="text-gray-primary font-light text-[13px] md:text-sm text-nowrap">
                Hotline: +84 90 1946686
              </span>
            </div>
          </div>
          {COMMON.footer.third.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 min-w-[300px]">
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
        <div className="flex flex-wrap gap-6 lg:pt-12">
          {COMMON.footer.fourth.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="font-semibold text-white text-base md:text-sm lg:text-xl">
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
