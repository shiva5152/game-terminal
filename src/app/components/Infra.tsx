import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export default function BentoGridDemo() {
  return (
    <section className="mt-10 md:container mx-auto max-md:w-full max-md:px-3 ">
      <div className="my-10 text-5xl  font-bold text-center text-lime-400 whitespace-nowrap max-md:my-0 max-md:text-xl">
        Our <span className="text-lime-400">Infrastructure</span>
      </div>
      <BentoGrid className=" mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            item={item}
            className={cn(
              "bento-bg",
              i === 0 && "md:row-span-2 row-span-2 bento-bg-long",
              i === 5 && "md:col-span-2 bento-bg-wide"
            )}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Sentile Strike",
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
