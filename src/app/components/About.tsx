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
      className="self-stretch md:container mx-auto max-md:mx-3 mt-20 max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col-reverse items-center justify-center max-md:gap-0 max-md:">
        <motion.div
          initial={{ scale: 0.9, z: -15 }}
          animate={isInView ? { scale: 1, z: 0 } : { scale: 0.9, z: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col ml-5 w-6/12  rounded-2xl max-md:items-center max-md:ml-0 max-md:w-full"
        >
          <img
            loading="lazy"
            // src="/images/coin-group.png"
            src="/images/console.svg"
            className="grow w-[75%] object-top  max-md:ms-[-30px] md:mt-14 md:object-center rounded-2xl max-md:max-w-full"
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
          <div className="flex flex-col font-bold max-md:mt-6 max-md:max-w-full">
            <motion.div
              variants={item}
              className={cn(sectionHeading, "md:text-start md:text-5xl")}
            >
              We Are <span className="text-lime-400">Game Terminal</span>
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "text-justify")}
            >
              Game Terminal is a Web3 aggregator between gaming creators and
              gamers on a solitary gaming platform bridging the gap between Web2
              and Web3.
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "text-justify")}
            >
              Our platform boasts a diverse selection of blockchain games,
              catering to both hardcore and casual gamers. By fostering an
              inclusive ecosystem for gamers, creators, indie developers, node
              operators and KOLs, we offer not just entertainment but also
              sustainable income opportunities for everyone throughout the
              platform.
            </motion.div>
            <motion.button
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              className="overflow-hidden max-md:mx-auto max-md:max-w-[118px] max-md:text-[10px]  button-bg md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-4 md:mt-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 "
            >
              Launch App
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
