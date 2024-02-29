import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "@/utils/cn";
import Accordion from "./ui/accordion";

const footerData = [
  {
    id: 1,
    title: "PRODUCT",
    description: ["GAMES", "NFT MARKETPLACE", "LEADERBOARD", "UGC MARKETPLACE"],
  },
  {
    id: 2,
    title: "PRODUCT",
    description: ["ABOUT US", "TEAM", "ADVISORS", "PARTNERS", "BACKERS"],
  },
  {
    id: 3,
    title: "LEGAL",
    description: ["PRIVACY POLICY", "TERMS OF SERVICE", "FAQs", "LEARN MORE"],
  },
  {
    id: 4,
    title: "COMMUNITY",
    description: [
      "TWITTER",
      "TELEGRAM",
      "DISCORD",
      "YOUTUBE",
      "MEDIUM",
      "LINKEDIN",
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex relative flex-col items-center self-stretch px-14  py-0  text-base leading-6 bg-neutral-900 rounded-[30px] max-md:px-0 max-md:mt-0 max-md:max-w-full">
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
              <div key={desc} className={cn("mt-2", index === 0 && "mt-5")}>
                {desc}
              </div>
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
      {/* <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div> */}
    </div>
  );
};

export default Footer;
