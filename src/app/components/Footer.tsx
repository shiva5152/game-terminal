import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Footer = () => {
  return (
    <div className="flex relative flex-col items-center self-stretch px-14  py-9 mt-0 text-base leading-6 bg-neutral-900 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="grid grid-cols-5 grid-rows-1 gap-4 w-full  text-zinc-600 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/652ef0bd8b29068a9dd31b8d437c7d8d5d11e13b8637e42b96d1226f4bc908c4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="aspect-square w-[92px]"
        />
        <div className="flex flex-col flex-1 mt-2.5 whitespace-nowrap">
          <div className="text-2xl font-bold text-white">PRODUCT</div>
          <div className="mt-5">GAMES</div>
          <div className="mt-2">NFT MARKETPLACE</div>
          <div className="mt-2">LEADERBOARD</div>
          <div className="mt-2">UGC MARKETPLACE</div>
        </div>
        <div className="flex flex-col flex-1 mt-2.5">
          <div className="text-2xl font-bold text-white">PRODUCT</div>
          <div className="mt-5">ABOUT US</div>
          <div className="mt-2">TEAM</div>
          <div className="mt-2">ADVISORS</div>
          <div className="mt-2">PARTNERS</div>
          <div className="mt-2">BACKERS</div>
        </div>
        <div className="flex flex-col flex-1 mt-2.5">
          <div className="text-2xl font-bold text-white">LEGAL</div>
          <div className="mt-5 whitespace-nowrap">PRIVACY POLICY</div>
          <div className="mt-2 whitespace-nowrap">TERMS OF SERVICE</div>
          <div className="mt-2">FAQs</div>
          <div className="mt-2">LEARN MORE</div>
        </div>
        <div className="flex flex-col flex-1 mt-2.5 whitespace-nowrap">
          <div className="text-2xl font-bold text-white">COMMUNITY</div>
          <div className="mt-5">TWITTER</div>
          <div className="mt-2">TELEGRAM</div>
          <div className="mt-2">DISCORD</div>
          <div className="mt-2">YOUTUBE</div>
          <div className="mt-2">MEDIUM</div>
          <div className="mt-2">LINKEDIN</div>
        </div>
      </div>
      <img
        loading="lazy"
        src="/images/white-line.svg"
        className="self-stretch mt-14 w-full stroke-[2px] stroke-white max-md:mt-10 max-md:max-w-full"
      />
      <div className="mt-9 text-white font-thin tracking-wide whitespace-nowrap">
        © 2024 GameTerminal.com. All Rights Reserved.
      </div>
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default Footer;
