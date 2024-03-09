"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";

const About = () => {
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
      className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col-reverse items-center max-md:gap-0 max-md:">
        <motion.div
          initial={{ scale: 0.9, z: -15 }}
          animate={isInView ? { scale: 1, z: 0 } : { scale: 0.9, z: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col ml-5 w-6/12 rounded-2xl max-md:ml-0 max-md:w-full"
        >
          <img
            loading="lazy"
            src="/images/ecosystem.svg"
            className="grow w-full aspect-[1.92] object-cover object-top md:object-center rounded-2xl md:aspect-square max-md:max-w-full"
          />
        </motion.div>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 font-bold max-md:mt-6 max-md:max-w-full">
            <motion.div
              variants={item}
              className={cn(sectionHeading, "md:text-start md:text-5xl")}
            >
              WHO WE <span className="text-lime-400">ARE</span>
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "text-justify")}
            >
              At Game Terminal, we're fueled by our collective gaming zeal and a
              deep understanding of web3 dynamics. Recognizing the need for a
              game-changing approach, we've assembled a powerhouse team from
              diverse backgrounds.
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "text-justify")}
            >
              Armed with expertise and passion, we're forging groundbreaking
              solutions to simplify gaming complexities and amplify the fun
              factor. Join us in reshaping the gaming frontier!
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
