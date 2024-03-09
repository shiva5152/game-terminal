"use client";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Accordion from "./ui/accordion";
import Link from "next/link";

const footerData = [
  {
    id: 1,
    title: "PRODUCT",
    description: [
      { tag: "GAMES", link: "/games" },
      { tag: "NFT MARKETPLACE", link: "/nft-marketplace" },
      { tag: "LEADERBOARD", link: "/leaderboard" },
      { tag: "UGC MARKETPLACE", link: "/ugc-marketplace" },
    ],
  },
  {
    id: 2,
    title: "COMPANY",
    description: [
      { tag: "ABOUT US", link: "/about-us" },
      { tag: "PRESS KIT", link: "/press-kit" },
    ],
  },
  {
    id: 3,
    title: "LEGAL",
    description: [
      { tag: "PRIVACY POLICY", link: "/privacy-policy" },
      { tag: "TERMS OF SERVICE", link: "/terms-of-service" },
    ],
  },
  {
    id: 4,
    title: "COMMUNITY",
    description: [
      { tag: "TWITTER", link: "https://twitter.com" },
      { tag: "TELEGRAM", link: "https://telegram.org" },
      { tag: "DISCORD", link: "https://discord.com" },
      { tag: "YOUTUBE", link: "https://youtube.com" },
      { tag: "MEDIUM", link: "https://medium.com" },
      { tag: "LINKEDIN", link: "https://linkedin.com" },
    ],
  },
];

const Footer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="flex relative flex-col items-center self-stretch px-14  py-0 mt-10  text-base leading-6 bg-[#161616] rounded-[30px] max-md:px-0 max-md:mt-14 max-md:max-w-full">
      <div className="hidden  md:grid grid-cols-5 grid-rows-1 gap-4 w-full  text-zinc-600 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/652ef0bd8b29068a9dd31b8d437c7d8d5d11e13b8637e42b96d1226f4bc908c4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="aspect-square w-[92px]"
        />
        {footerData.map((data, index) => (
          <div
            key={data.id}
            className="flex flex-col flex-1 mt-2.5 whitespace-nowrap"
          >
            <div className="text-2xl font-bold text-white">{data.title}</div>
            {data.description.map((desc, index) => (
              <Link
                href={desc.link}
                key={desc.tag}
                className={cn(
                  "hover:text-lime-400 transition-colors duration-200 mt-2",
                  index === 0 && "mt-5"
                )}
              >
                {desc.tag}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <img
        loading="lazy"
        src="/images/white-line.svg"
        className="hidden md:block self-stretch mt-14 w-full stroke-[2px] stroke-white max-md:mt-10 max-md:max-w-full"
      />

      <div className=" flex md:hidden flex-col justify-center px-5 pt-5 pb-10 text-base font-bold leading-9 text-white whitespace-nowrap rounded-2xl bg-neutral-900 w-full">
        {footerData.map((data, index) => (
          <Accordion key={data.id} data={data} />
        ))}
      </div>
      <div className="mt-9 text-xs md:text-[1rem] text-white font-thin tracking-wide whitespace-nowrap">
        © 2024 GameTerminal.com. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
