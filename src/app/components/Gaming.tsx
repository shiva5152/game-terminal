"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";

const Gaming = () => {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(gameRef, { once: true, margin: "-200px" });

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
      className="self-stretch md:container max-md:mx-3 mx-auto max-md:mb-4 mt-10 max-md:mt-6 "
    >
      <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0 max-md:">
        <div className="flex flex-col items-center justify-center w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col   font-bold max-md:mt-6 max-md:max-w-full">
            <motion.div
              variants={item}
              className={cn(
                sectionHeading,
                "md:text-start normal-case md:text-5xl"
              )}
            >
              Play, win and make your own{" "}
              <span className="text-lime-400">Gaming Identity</span>
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
              whileHover={{
                y: -10,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              className="overflow-hidden max-md:max-w-[118px] max-md:text-[10px] button-bg mx-auto md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-4 md:mt-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 "
            >
              Create Profile Now
            </motion.button>
            {/* <button className="overflow-hidden button-bg relative  flex-col justify-center items-center px-16 py-7 mt-48  max-w-full text-[0.5rem] md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 max-md:mt-4  w-full">
              Create Your Profile Now
            </button> */}
          </div>
        </div>
        <motion.div
          // initial={{ scale: 0.9, z: -15 }}
          // animate={isInView ? { scale: 1, z: 0 } : { scale: 0.9, z: -10 }}
          // transition={{ type: "spring", stiffness: 200 }}
          variants={item}
          className="flex flex-col ml-5 w-6/12 rounded-2xl max-md:ml-0 max-md:w-full"
        >
          <img
            loading="lazy"
            src="/images/stack.png"
            className="grow w-[100%] aspect-[1.92] object-cover object-top md:object-center rounded-2xl md:aspect-square max-md:max-w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gaming;
