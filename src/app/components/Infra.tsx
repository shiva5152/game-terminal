"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

export default function BentoGridDemo() {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(gameRef, { once: true, margin: "-200px" });

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const variant = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={gameRef}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : ""}
      className="mt-10 md:container mx-auto max-md:w-full max-md:px-3 "
    >
      <motion.div
        variants={variant}
        className="my-10 text-5xl  font-bold text-center text-lime-400 whitespace-nowrap max-md:mt-0 max-md:mb-10 max-md:text-xl"
      >
        Our <span className="text-lime-400">Infrastructure</span>
      </motion.div>
      <motion.div variants={variant}>
        <BentoGrid className=" mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              item={item}
              className={cn(
                "bento-bg",
                i === 0 && "md:row-span-2 row-span-2 bento-bg-long",
                i === 5 && "md:col-span-2 bento-bg-wide"
              )}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </motion.section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Sentinel Strike",
    button: "PLAY NOW",
    bg: "images/strike.png",
  },
  {
    title: "Game Terminal",
    button: "LOGIN",
    bg: "images/terminal.png",
  },
  {
    title: "Game Nodes",
    button: "OPERATE NODES",
    bg: "images/nodes.png",
  },
  {
    title: "Game Market",
    button: "VISIT MARKETPLACE",
    bg: "images/market.png",
  },
  {
    title: "Tournaments",
    button: "REGISTER NOW",
    bg: "images/tournaments.png",
  },
  {
    title: "Game Listing Platform",
    button: "ENTER PLATFORM",
    bg: "images/listing.png",
  },
  {
    title: "KOLs Marketplace",
    button: "EXPLORE NOW",
    bg: "images/kols.png",
  },
];
