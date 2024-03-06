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
    <div className="mx-auto min-h-[80vh] md:h-auto flex flex-col items-center justify-between relative mb-24">
      <div className="mt-20 text-7xl  font-bold text-center text-white max-md:mt-10 max-lg:mt-40 max-md:max-w-full max-md:text-5xl">
        <h2>
          Multitude of trending <span className="text-lime-400">Web3 </span>
        </h2>
        <h2>
          games on one <span className=" text-lime-400">platform</span>
        </h2>
        <p className="mt-7 text-xl font-light leading-7 tracking-wide text-center text-zinc-600 max-md:max-w-full  max-md:text-[1rem]">
          Game Terminal is a Web3 aggregator between gaming creators and gamers
          on
          <br className="hidden md:block" />a solitary gaming platform bridging
          the gap between Web2 and Web3.
        </p>
        <div className="mx-auto">
          <button className="overflow-hidden  button-bg md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-4 md:mt-8 text-[0.5rem] md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 ">
            Browse Games
          </button>
        </div>
      </div>
      <Link
        href={"/#gaming"}
        className="flex justify-center flex-col items-center"
      >
        <div className="mt-16 text-xs font-medium text-center text-white whitespace-nowrap max-md:mt-10">
          Scroll down
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3834bafc453b7a2088dd481e55deae2ed9d6a35d06f06cd9a3f19f28c396b635?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="mt-3 w-0.5 aspect-[0.1] fill-[linear-gradient(0deg,#FFF_0%,rgba(255,255,255,0.00)_100%)]"
        />
        <motion.div
          animate={{ y: ["0%", "-25%", "0%"] }}
          transition={{ duration: 3.1, repeat: Infinity }}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9b4e35437f33e6f2eeb6eb256494afa65acf1b4824607ad731dd159379efd5?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="mt-1 w-6 aspect-square"
          />
        </motion.div>
      </Link>
      <motion.div
        className="absolute top-[8.5%] -left-[18%] md:left-auto md:-top-[1%] md:-right-[10%]"
        animate={{ y: ["0%", "10%", "0%"] }}
        transition={{ duration: 5.5, repeat: Infinity }}
      >
        <Image
          src="/images/head-phone.svg"
          alt="headphone"
          width={201}
          height={201}
          className="w-[150px] md:w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-[10%] -right-[20%] md:-bottom-[5%] md:-right-[2%]"
        animate={{ y: ["0%", "-7%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Image
          src="/images/game.svg"
          className="w-[150px] md:w-auto h-auto"
          alt="game"
          width={201}
          height={201}
        />
      </motion.div>
      {isMounted && isDesktopOrLaptop ? (
        <>
          <motion.div
            className=" absolute top-[-8%] left-[17%]"
            animate={{ y: ["0%", "5%", "0%"] }}
            transition={{ duration: 4.1, repeat: Infinity }}
          >
            <Image
              src="/images/speaker.svg"
              alt="speaker"
              width={180}
              height={180}
            />
          </motion.div>
          <motion.div
            className="absolute  bottom-[10%] -left-[20%]"
            animate={{ y: ["0%", "-8%", "0%"] }}
            transition={{ duration: 3.4, repeat: Infinity }}
          >
            <Image
              src="/images/vr-box.svg"
              alt="vr-box"
              width={270}
              height={270}
            />
          </motion.div>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
