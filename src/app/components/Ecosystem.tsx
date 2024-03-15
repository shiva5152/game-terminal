"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const ecosystemData = [
  {
    id: 1,
    title: "Player Engagement Framework",
    description:
      "Game Terminal employs a robust player incentivization framework, stimulating sustained engagement, diversified game exploration, and the organic expansion of community networks.",
    image: {
      src: "/images/player.svg",
      alt: "player",
    },
  },
  {
    id: 2,
    title: "Developer Reward Mechanism",
    description:
      "Innovators in game development are granted supplementary rewards correlated with the frequency and depth of engagements within their respective gaming domains, complemented by standard settlement fee allocations.",
    image: {
      src: "/images/developer.svg",
      alt: "developer",
    },
  },
  {
    id: 3,
    title: "Lifetime Incentives for Influencers",
    description:
      "Key Opinion Leaders (KOLs) and Ambassadors are offered perpetual incentives for each successfully onboarded player they refer, fostering enduring relationships and amplifying community growth trajectories.",
    image: {
      src: "/images/calander.svg",
      alt: "calendar",
    },
  },
  {
    id: 4,
    title: "Tokenized Rewards for Node Operators",
    description:
      "Node operators, serving as indispensable pillars of the ecosystem, are duly compensated for their pivotal role in facilitating gameplay and functioning ensuring the integrity and transparency of gaming operations across our ecosystem",
    image: {
      src: "/images/coin.svg",
      alt: "coin",
    },
  },
];

const Ecosystem = () => {
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
      className="self-stretch md:container mx-auto max-md:mx-3 mt-40 max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-2.5 max-md:mt-10 max-md:max-w-full">
            <motion.div
              variants={item}
              className={cn(sectionHeading, "md:text-start font-bold")}
            >
              {/* text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl */}
              Ecosystem
            </motion.div>
            <motion.div
              variants={item}
              className={cn(sectionSubHeading, "md:text-start")}
            >
              {/* mt-4 text-xl font-light leading-7 tracking-wide text-zinc-600 max-md:max-w-full */}
              Game Terminal focuses on rewarding all types of contributors in
              the ecosystem who are shaping the future of Web3 together.
            </motion.div>
            <motion.div
              variants={item}
              // animate={{ y: ["0%", "5%", "0%"] }}
              // transition={{ duration: 4.1, repeat: Infinity }}
            >
              <Image
                height={361}
                width={365}
                alt="ecosystem"
                loading="lazy"
                src={"/images/Icons-b/dashboard.png"}
                // src={"/images/computer.svg"}
                className="my-auto mx-auto md:mx-0 max-w-[60%] aspect-[1.01]"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow pt-2 md:pl-5 pl-0 w-full rounded-3xl bg-neutral-900 max-md:mt-10 max-md:max-w-full">
            {ecosystemData.map((data) => (
              <motion.div
                variants={item}
                key={data.id}
                className="md:py-3 md:pt-5 py-3 md:pl-5 ml-0 mt-4 px-4 md:px-0 text-justify rounded-3xl bg-[#161616] neomorphic-eco max-md:max-w-full"
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-2 max-md:max-w-full">
                      <div className="md:text-xl text-[0.88rem]  font-semibold leading-7 text-white max-md:max-w-full">
                        {data.title}
                      </div>
                      <div className="md:mt-4 mt-0 md:text-xs text-[0.65rem] font-light leading-4 tracking-wider text-zinc-600 max-md:max-w-full">
                        {data.description}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                    <Image
                      height={131}
                      width={131}
                      src={data.image.src}
                      alt={data.image.alt}
                      loading="lazy"
                      className="grow max-w-full aspect-[1.12] -mb-2 rounded-br-lg w-[127px] max-md:mt-3.5"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Ecosystem;
