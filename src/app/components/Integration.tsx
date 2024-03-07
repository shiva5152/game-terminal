"use client";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";
import React, { useEffect, useState, useRef } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const integrationData = [
  {
    id: 1,
    title: "Seamless Wallet Integration",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe5281419282242c5f6f4458c5c43661da975e42cc678d3e6326718f84cda7c9?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    description:
      "Gain entry into the ecosystem seamlessly by linking your digital wallet to Game Terminal, enabling participation in real-money competitions across an array of ecosystem games.",
  },
  {
    id: 2,
    title: "On-Chain Authentication",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/de971542778776dfb3a523e3193ccfa56cbce219f012c1b8d7248afe8e7eb4d0?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    description:
      "Leverage your player profile as an on-chain reputation mechanism, meticulously assessing performance to ensure integrity and credibility within the competitive landscape.",
  },
  {
    id: 3,
    title: "Streamlined Initiation",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f893ba971418f3e7b209069e0a30e109ac16933e22c3114d90b9640a1b0c6fc?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    description:
      "Game Terminal's player profile serves as a unified identity, simplifying verification for competitions and social gaming interactions within the protocol, eliminating cumbersome processes for instantaneous immersion.",
  },
  {
    id: 4,
    title: "Trust Oversight and Management",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/509606d6579b464da35c8b19f4bf6217c4f884bc5a8bb3d06811164c3069d8ea?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    description:
      "Take command of your gaming voyage with adjustable global maximum stakes, empowering exploration of instant, gasless competitions and rewards settlement for dynamic gaming endeavors.",
  },
];

const Integration = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        Unified Profile <span className="text-lime-400">Integration</span>
      </motion.div>
      <motion.div
        variants={item}
        className={cn(sectionSubHeading, "max-w-[70%]")}
      >
        {/* mt-6 text-xl font-light leading-7 max-w-[70%] text-center text-zinc-600 tracking-wide max-md:max-w-full */}
        Effortlessly synchronize your gaming journey through our unified profile
        system spanning all Game Terminal ecosystem games, elevating player
        reputation and streamlining competitive reward participation.
      </motion.div>
      <div className="flex justify-between flex-col items-center">
        <div className="self-stretch mx-0 md:mx-10 mt-16 max-md:mt-0 max-md:mr-0 max-md:max-w-full">
          <div className="flex gap-10 justify-between flex-wrap max-md:gap-0 ">
            {integrationData.map((data) => (
              <motion.div
                variants={item}
                key={data.id}
                className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full"
              >
                <div className="grow max-md:mt-2 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-row max-md:gap-3 max-md:">
                    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-fit">
                      {/* integration-border */}
                      <div className="flex neomorphic-eco rounded-2xl integration-border   justify-center w-[50px] h-[50px] items-center px-7 mx-auto  md:h-[102px] md:w-[95px] max-md:px-3 max-md:mt-5">
                        <img
                          loading="lazy"
                          className="w-full aspect-square"
                          src={data.src}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-4 max-md:max-w-full">
                        <div className="text-xs md:text-xl font-semibold leading-7 text-white max-md:max-w-full">
                          {data.title}
                        </div>
                        <div className="md:mt-5 mt-1 text-xs font-light leading-4 md:leading-5 tracking-wider text-zinc-600 max-md:max-w-full">
                          {data.description}
                        </div>
                      </div>
                    </div>
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

export default Integration;
