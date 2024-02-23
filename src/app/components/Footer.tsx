import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center self-stretch px-14  py-9 mt-0 text-base leading-6 bg-neutral-900 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full  text-zinc-600 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/652ef0bd8b29068a9dd31b8d437c7d8d5d11e13b8637e42b96d1226f4bc908c4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="aspect-square w-[92px]"
        />
        <div className="flex flex-col flex-1 mt-2.5 whitespace-nowrap">
          <div className="text-2xl font-bold text-white">PRODUCT</div>
          <div className="mt-8">GAMES</div>
          <div className="mt-5">NFT MARKETPLACE</div>
          <div className="mt-5">LEADERBOARD</div>
          <div className="mt-5">UGC MARKETPLACE</div>
        </div>
        <div className="flex flex-col flex-1 mt-2.5">
          <div className="text-2xl font-bold text-white">PRODUCT</div>
          <div className="mt-8">ABOUT US</div>
          <div className="mt-5">TEAM</div>
          <div className="mt-5">ADVISORS</div>
          <div className="mt-5">PARTNERS</div>
          <div className="mt-5">BACKERS</div>
        </div>
        <div className="flex flex-col flex-1 mt-2.5">
          <div className="text-2xl font-bold text-white">LEGAL</div>
          <div className="mt-8 whitespace-nowrap">PRIVACY POLICY</div>
          <div className="mt-5 whitespace-nowrap">TERMS OF SERVICE</div>
          <div className="mt-5">FAQs</div>
          <div className="mt-5">LEARN MORE</div>
        </div>
        <div className="flex flex-col flex-1 mt-2.5 whitespace-nowrap">
          <div className="text-2xl font-bold text-white">COMMUNITY</div>
          <div className="mt-8">TWITTER</div>
          <div className="mt-5">TELEGRAM</div>
          <div className="mt-5">DISCORD</div>
          <div className="mt-5">YOUTUBE</div>
          <div className="mt-5">MEDIUM</div>
          <div className="mt-5">LINKEDIN</div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4191b9d9412efba6de765885009f6306bcee59d425a8230636eeff2112e2258f?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        className="self-stretch mt-14 w-full stroke-[2px] stroke-white max-md:mt-10 max-md:max-w-full"
      />
      <div className="mt-9 text-white whitespace-nowrap">
        © 2024 GameTerminal.com. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
