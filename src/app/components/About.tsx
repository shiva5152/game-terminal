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
            src="/images/coin-group.png"
            className="grow w-[75%] object-top mt-14 md:object-center rounded-2xl max-md:max-w-full"
          />
        </motion.div>
        {/* <div className="relative z-0">
          <img
            loading="lazy"
            className=" absolute top-[0%]"
            src="/images/layer1.webp"
          />
          <img
            loading="lazy"
            className="absolute top-[5%]"
            src="/images/layer2.webp"
          />
          <img
            loading="lazy"
            className="absolute top-[10%]"
            src="/images/layer3.webp"
          />
          <img
            loading="lazy"
            className="absolute top-[15%]"
            src="/images/base.webp"
          />
        </div> */}
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 font-bold max-md:mt-6 max-md:max-w-full">
            <motion.div
              variants={item}
              className={cn(sectionHeading, "md:text-start md:text-5xl")}
            >
              Who We <span className="text-lime-400">Are</span>
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "text-justify")}
            >
              Game Terminal, the visionary gaming studio at the forefront of
              integrating trending games into a unified platform.
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "text-justify")}
            >
              Game Terminal represents convergence of blockchain technology with
              the dynamic world of gaming, offering a paradigm shift in user
              experience and engagement with a competitive environment.
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
