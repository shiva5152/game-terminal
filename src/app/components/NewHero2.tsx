"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className=" min-h-[80vh]   md:h-auto flex flex-row items-center justify-center mb-16 md:mb-24 relative">
      <div className="w-1/2 relative z-10 bg-transparent text-7xl  font-bold text-start text-white max-md:mt-10 max-lg:mt-40 max-md:max-w-full max-md:text-4xl">
        <h2>
          Multitude of trending <span className="text-lime-400">Web3 </span>
        </h2>
        <h2>
          games on one <span className=" text-lime-400">platform</span>
        </h2>
        {/* <p className="p-6 md:p-[2.5rem] text-xl font-light leading-5 tracking-wide text-center text-zinc-600 max-md:max-w-full  max-md:text-[1rem]">
          Game Terminal is a Web3 aggregator between gaming creators and gamers
          on
          <br className="hidden md:block" />a solitary gaming platform bridging
          the gap between Web2 and Web3.
        </p> */}
        <motion.button
          whileHover={{
            y: -10,
            transition: { duration: 0.3, type: "spring", stiffness: 300 },
          }}
          className="overflow-hidden button-bg md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-4 md:mt-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 "
        >
          Explore Games
        </motion.button>
      </div>
      <div className="w-1/2">
        <div className="video-container rounded-2xl">
          <video className="rounded-2xl" autoPlay muted loop>
            <source
              // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              src="/v2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
