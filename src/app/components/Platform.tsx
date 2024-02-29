"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";

const Platform = () => {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: gameRef,
    offset: ["0 1", "1.5 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <div
      ref={gameRef}
      // style={{ opacity, scale }}
      className="flex overflow-hidden relative flex-col items-center rounded-2xl self-stretch px-16 py-3 md:pb-0  md:pt-12 mt-40 font-bold h-auto  md:min-h-[485px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      // className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-12 mt-40 font-bold min-h-[485px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5ed2bc6dba8c9f9347d30a0ba85c83d5bd749f33dea36220ae9db8a42f03bae?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        className="hidden md:block object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src="/images/platform-mobile-bg.png"
        className="block md:hidden aspect-[1.27] w-full rounded-2xl absolute inset-0  min-h-[259px] size-full"
      />
      <div className="flex relative z-10 flex-col items-center mt-6 w-full max-w-[999px] max-md:max-w-full">
        <div className={cn(sectionHeading)}>
          Array of Games, One Dynamic{" "}
          <span className="text-lime-400">Platform</span>
        </div>
        <div className={cn(sectionSubHeading, "text-[#88888D] mt-3")}>
          {/* self-stretch mt-12 text-xl font-light leading-7 text-center  tracking-wide max-md:mt-10 max-md:max-w-full */}
          Dive into an immersive world of trending Web3 games and exclusive
          tournaments, curated for genuine gamers. Access gameplay, statistics,
          and personalized rewards, all centralized in one platform. Earn
          in-game points while journeying with friends through various gaming
          experiences. Discover a wide range of Web3 games with endless rewards
          and opportunities.
        </div>
        {/* <button className="overflow-hidden button-bg relative flex-col mx-auto md:mx-0 text-[0.5rem] justify-center items-center px-16 py-7 mt-24 w-56 max-w-full text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 max-md:mt-4 max-md:w-[158px]">
          Explore Games
        </button> */}
        <button className="overflow-hidden button-bg relative  flex-col justify-center items-center px-16 py-7 mt-48 w-56 max-w-full text-[0.5rem] md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 max-md:mt-4  max-md:w-[158px]">
          Explore Games
        </button>
      </div>
    </div>
  );
};

export default Platform;
