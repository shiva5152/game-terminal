"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";

const Gaming = () => {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(gameRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: gameRef,
    offset: ["0 1", "1.5 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

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
      ref={gameRef}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : ""}
      // style={{ opacity, scale }}
      id="gaming"
      className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 font-bold max-md:mt-6 max-md:max-w-full">
            <motion.div
              variants={item}
              className={cn(sectionHeading, "md:text-start md:text-5xl")}
            >
              PLAY, WIN AND MAKE YOUR OWN{" "}
              <span className="text-lime-400">GAMING IDENTITY</span>
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "text-justify")}
            >
              Game Terminal provides a unified gaming identity system, allowing
              users to maintain a single identity across all games. This
              simplifies the gaming experience by eliminating the need for
              multiple In-Game Names (IGNs) and offers opportunities to rank up
              on the ecosystem leaderboard.
            </motion.div>
            <motion.button
              variants={item}
              className="overflow-hidden button-bg mx-auto md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-4 md:mt-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 "
            >
              Launch App
            </motion.button>
            {/* <button className="overflow-hidden button-bg relative  flex-col justify-center items-center px-16 py-7 mt-48  max-w-full text-[0.5rem] md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 max-md:mt-4  w-full">
              Create Your Profile Now
            </button> */}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 rounded-2xl max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="grow w-full aspect-[1.92] object-cover object-top md:object-center rounded-2xl md:aspect-square max-md:max-w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Gaming;
