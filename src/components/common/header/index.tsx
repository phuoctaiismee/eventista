/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Bounded } from "../containers";
import Link from "next/link";
import { COMMON, Languages, STYLES } from "@/configs";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { setLanguages } from "@/stores/features/languages";
import { cn } from "@/lib/utils";
import { LegalButton } from "@/components/base-component/buttons/legal-button";
import { ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { useWindowSize } from "@/hooks/window";

const Header = () => {
  const pathName = usePathname();
  const { lang } = useSelector((state: RootState) => state.languagesSlice);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [width, height] = useWindowSize();
  useEffect(() => {
    if (width < 1440) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [width]);

  const isNotificationsPage = pathName.includes("/notifications");
  const isNewsPage = pathName.includes("/news");

  return (
    <div className="h-[56px] md:h-[76px] lg:h-[88px]  w-full  font-sfprodisplay">
      <div className="relative w-full px-4 pt-2 lg:px-[120px] h-full flex items-start md:items-center justify-between lg:bg-[#06112f] z-10">
        <img
          src="/avatars/Avatar=Ava_Brooks.png"
          alt="image"
          className="size-7 aspect-square lg:hidden"
        />
        {!isNotificationsPage && (
          <>
            <img
              src="/logos/logo.svg"
              className="w-[45px] md:w-[50px] lg:w-[81px] h-10 md:h-[45px] lg:h-[72px]"
            />
            {(!isNewsPage || width > 1440) && (
              <div className="relative w-fit flex items-center flex-row-reverse">
                <Icon
                  icon="material-symbols:drag-handle"
                  fontSize={24}
                  color="#fff"
                  className="cursor-pointer lg:hidden"
                  onClick={() => setShow((prev) => !prev)}
                />
                {show && (
                  <div
                    className={cn(
                      " items-center justify-end gap-[42px] max-w-[711px] w-full transition-all duration-300",
                      width < 1440
                        ? "absolute flex flex-col right-0 bg-[#06112f] rounded-lg z-[50] gap-3 h-fit w-fit top-12 p-4 px-[42px]"
                        : "flex flex-row bg-transparent"
                    )}
                  >
                    <div className="flex items-center lg:gap-[24] flex-col lg:flex-row gap-3">
                      {COMMON.header_menus.map((menu, index) => (
                        <MenuItem
                          key={index}
                          label={menu.name}
                          to={menu.url}
                          active={pathName === menu.url}
                        />
                      ))}
                    </div>
                    <Select
                      onValueChange={(value) => dispatch(setLanguages(value))}
                    >
                      <SelectTrigger
                        className={cn(
                          STYLES.disableFocusVisible,
                          `min-w-[116px] text-white bg-transparent border-none`
                        )}
                      >
                        <img
                          src={`https://flagsapi.com/${lang}/flat/24.png`}
                          width={20}
                          height={20}
                          alt={lang}
                        />
                        <span className="font-semibold text-[15px]">
                          {Languages.find((l) => l.value === lang)?.name}
                        </span>
                      </SelectTrigger>
                      <SelectContent>
                        {Languages.map((language, index) => (
                          <SelectItem
                            key={index}
                            value={language.value}
                            className="flex items-center gap-2 text-black flex-nowrap"
                          >
                            <img
                              src={`https://flagsapi.com/${language.value}/flat/24.png`}
                              width={20}
                              height={20}
                              alt={language.value}
                            />
                            <span className="font-semibold text-[15px]">
                              {language.name}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <LegalButton
                      className="min-w-[113px] h-[41px] px-6 flex items-center text-[15px] font-semibold"
                      type="gold-fill"
                    >
                      <span className="text-transparent bg-gradient-to-r from-[#3F3A36] to-[#2A2927] font-semibold bg-clip-text">
                        Login
                      </span>{" "}
                      <ArrowRight className="h-[10px] w-[15px]" />
                    </LegalButton>
                  </div>
                )}
              </div>
            )}
          </>
        )}
        {isNotificationsPage && !isNewsPage && (
          <>
            <span className="block lg:hidden text-[15px] font-semibold text-white">
              Notifications
            </span>
            <Icon icon="tabler:settings" fontSize={24} color="#fff" />
          </>
        )}

        {isNewsPage && !isNotificationsPage && (
          <LegalButton
            type="gold-outline"
            className="h-7 w-[122px] flex justify-center text-[13px] capitalize items-center lg:hidden"
          >
            Become Partner
          </LegalButton>
        )}
      </div>
    </div>
  );
};

export default Header;

type MenuItemProps = {
  to?: string;
  label?: string;
  active?: boolean;
};
const MenuItem: FC<MenuItemProps> = ({ label, to = "##", active }) => {
  return (
    <Link
      href={to}
      className={`flex items-center w-fit h-10 justify-center cursor-pointer select-none relative before:absolute before:w-full before:opacity-0 before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-[#E6CAA4] before:to-[#E9B84E] before:h-[1px] ${
        active && "before:opacity-100"
      }`}
    >
      <span
        className={cn(
          "text-transparent bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E] font-semibold bg-clip-text text-[15px] text-nowrap",
          !active && "text-white"
        )}
      >
        {label}
      </span>
    </Link>
  );
};
