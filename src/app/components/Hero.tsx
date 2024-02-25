"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mx-auto flex flex-col items-center relative">
      <div className="mt-40 text-7xl font-bold text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <p>
          Multitude of trending <span className="text-lime-400">Web3 </span>
        </p>
        <p>
          games on one <span className=" text-lime-400">platform</span>
        </p>
      </div>
      <div className="mt-7 text-xl font-light leading-7 tracking-wide text-center text-zinc-600 max-md:max-w-full">
        Game Terminal is a Web3 aggregator between gaming creators and gamers on
        <br />a solitary gaming platform bridging the gap between Web2 and Web3.
      </div>
      <button className="flex justify-center flex-col items-center">
        <div className="mt-16 text-xs font-medium text-center text-white whitespace-nowrap max-md:mt-10">
          Scroll down
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3834bafc453b7a2088dd481e55deae2ed9d6a35d06f06cd9a3f19f28c396b635?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="mt-3 w-0.5 aspect-[0.1] fill-[linear-gradient(0deg,#FFF_0%,rgba(255,255,255,0.00)_100%)]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9b4e35437f33e6f2eeb6eb256494afa65acf1b4824607ad731dd159379efd5?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="mt-1 w-6 aspect-square"
        />
      </button>
      {/* 3d models */}
      {/* <div className="absolute  top-0 left-[17%]">
        <Image
          src="/images/speaker.svg"
          alt="speaker"
          width={180}
          height={180}
        />
      </div>
      <div className="absolute  bottom-[10%] -left-[20%]">
        <Image src="/images/vr-box.svg" alt="vr-box" width={270} height={270} />
      </div>
      <div className="absolute -top-[1%] -right-[10%]">
        <Image
          src="/images/head-phone.svg"
          alt="headphone"
          width={201}
          height={201}
        />
      </div>
      <div className="absolute  -bottom-[5%] -right-[2%]">
        <Image src="/images/game.svg" alt="game" width={201} height={201} />
      </div> */}
      <motion.div
        className="absolute top-0 left-[17%]"
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
        className="absolute bottom-[10%] -left-[20%]"
        animate={{ y: ["0%", "-8%", "0%"] }}
        transition={{ duration: 3.4, repeat: Infinity }}
      >
        <Image src="/images/vr-box.svg" alt="vr-box" width={270} height={270} />
      </motion.div>
      <motion.div
        className="absolute -top-[1%] -right-[10%]"
        animate={{ y: ["0%", "10%", "0%"] }}
        transition={{ duration: 5.5, repeat: Infinity }}
      >
        <Image
          src="/images/head-phone.svg"
          alt="headphone"
          width={201}
          height={201}
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-[5%] -right-[2%]"
        animate={{ y: ["0%", "-7%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Image src="/images/game.svg" alt="game" width={201} height={201} />
      </motion.div>
    </div>
  );
};

export default Hero;
