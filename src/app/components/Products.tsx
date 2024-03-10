"use client";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    title: "Unified Gamer Identity",
    icon: "/images/user-coin.png",
    description:
      "Seamlessly transition between games across our ecosystem, with a single gamer profile. Our unified identity system eliminates barriers, allowing you to move effortlessly between different titles without interruption.",
  },
  {
    title: "KOLs Marketplace",
    icon: "/images/doller.png",
    description:
      " Gain access to over 100 influential KOLs who can amplify your game's reach and exposure. Collaborate with these influencers to maximize your game's visibility.",
  },
  {
    title: "Gaming Guilds",
    icon: "/images/bit-coin.png",
    description:
      "Join forces with fellow players within our gaming guilds to create unstoppable teams. Whether you're a solo player or seeking companionship, our guilds provide a platform for camaraderie, strategy, and victory.",
  },
  {
    title: "Leaderboard",
    icon: "/images/msg.png",
    description:
      "Ascend the ranks of our single, universal leaderboard spanning all games in our ecosystem. Compete against friends and rivals alike, striving for the top spot to earn prestigious rewards and recognition",
  },
];

const Products = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : ""}
      className="flex flex-col items-center"
    >
      <motion.div
        variants={item}
        className={cn(
          sectionHeading,
          "mt-48 font-bold max-md:mt-10 max-md:max-w-full"
        )}
        // className="mt-48 text-5xl font-bold text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl"
      >
        Our <span className="text-lime-400">Products!</span>
      </motion.div>
      <div className="mt-14 w-full max-w-[1247px] max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-10 justify-between flex-wrap max-md:flex-col max-md:gap-4 ">
          {products.map((data) => (
            <motion.div
              key={data.title}
              variants={item}
              className="flex neomorphic-card w-[45%] terminal-bg rounded-3xl flex-col  max-md:ml-0 max-md:w-full"
            >
              <div className="flex  flex-col overflow-hidden grow justify-center items-start px-7 py-6 w-full text-xs font-bold rounded-3xl max-md:px-3 max-md:py-3 max-md:mt-2 max-md:max-w-full">
                <div className="flex  justify-center items-center gap-2 text-xl md:text-3xl leading-7 text-white whitespace-nowrap">
                  <div className="grow self-start mt-1.5">{data.title}</div>
                  <img
                    loading="lazy"
                    src={data.icon}
                    className="aspect-square w-[50px]"
                  />
                </div>
                <div className="self-stretch mt-4 text-xs font-light leading-5 tracking-wider text-zinc-600 max-md:max-w-full">
                  {data.description}
                </div>
                {/* <motion.div
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  className="overflow-hidden cursor-pointer text-[0.65rem] md:text-xs max-w-[118px] md:max-w-[159px] relative button-bg flex-col justify-center font-bold items-center px-8 py-8 mt-4 text-center text-black whitespace-nowrap aspect-[3.12] fill-lime-400 leading-[233%] max-md:px-5"
                ></motion.div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
