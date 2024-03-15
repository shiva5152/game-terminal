"use client";
import React from "react";
import Header from "./Header";
import Link from "next/link";
import { motion } from "framer-motion";

const NewHero = () => {
  return (
    <div className=" max-h-screen mx-auto max-md:mx-3 mt-3 md:mt-2 ">
      <div className=" md:container  mx-auto">
        <Header />
      </div>
      <div className="flex flex-col w-full md:mx-20 justify-between">
        <div className="flex justify-between items-center max-md:flex-col-reverse">
          <div className=" relative z-10 bg-transparent max-w-[60%%] mt-10 flex justify-center max-md:mt-0   items-center flex-col w-full  font-bold text-start  text-white">
            <h2 className="md:text-7xl text-3xl text-center md:text-start">
              Multitude of trending <span className="text-lime-400">Web3 </span>
              games on one <span className=" text-lime-400">platform</span>
            </h2>
            {/* <h2>
             
            </h2> */}
            <p className="py-3 md:py-[2.5rem] text-zinc-600 text-xl font-light leading-5 tracking-wide text-start max-md:text-center max-md:max-w-full  max-md:text-[1rem]">
              Game Terminal is a Web3 aggregator between gaming creators and
              gamers on
              <br className="hidden" />a solitary gaming platform bridging the
              gap between Web2 and Web3.
            </p>
            <button className="overflow-hidden max-md:max-w-[118px] max-md:mt-[-8px] max-md:text-[10px] max-md:mx-auto button-bg md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-0 md:mt-4 text-xs md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 ">
              Explore Games
            </button>
          </div>
          <div className=" max-w-[40%] max-md:max-w-[60%] flex justify-center items-center w-full ">
            <img src="/images/GT-Coin.png" className=" w-[75%] aspect-square" />
          </div>
        </div>
        <Link
          href={"/#gaming"}
          className="flex  justify-center flex-col items-center"
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
      </div>
    </div>
  );
};

export default NewHero;
