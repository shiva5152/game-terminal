"use client";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    slug: "APIs and SDKs",
    slugIcon: "",
    title: "Game Integration APIs and SDKs",
    icon: "/images/computer.png",
    description:
      "Empower developers with our avant-garde APIs and SDKs, enabling seamless game embedding for unparalleled immersion.",
  },
  {
    slug: "Esports Management",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "Esports and Tournaments Management",
    icon: "/images/coin-cap.png",
    description:
      "Spearhead competitive gaming evolution with our state-of-the-art platform, facilitating seamless organization and management of diverse tournaments across myriad genres.",
  },
  {
    slug: "UGC Marketplace",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "UGC Marketplace and Modular Framework",

    icon: "/images/cart.png",
    description:
      "Unleash limitless creativity through our groundbreaking UGC marketplace and modular framework, empowering users to tailor gaming experiences to unprecedented levels of customization.",
  },
  {
    slug: "Nodes",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "Game Terminal Nodes",
    icon: "/images/wallet.png",
    description:
      "Ensure unparalleled network stability, security, and scalability with our decentralized infrastructure nodes, guaranteeing secure gameplay and fostering vibrant community engagement.",
  },
];

const WhatWeOffer = () => {
  const [currProduct, setCurrProduct] = useState(products[0]);
  const handleSelectProduct = (slug: string) => {
    setCurrProduct(products.find((data) => data.slug === slug) ?? products[0]);
  };
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
        What we <span className="text-lime-400">Offer!</span>
      </motion.div>

      <motion.div variants={item} className="_nav my-16 w-full">
        <ul className="flex mx-auto justify-between max-w-[75%]">
          {products.map((p) => (
            <li
              onClick={() => handleSelectProduct(p.slug)}
              className={cn(
                "cursor-pointer mx-auto gap-1 w-[220px] rounded-2xl flex justify-center items-center text-wrap neomorphic-eco py-[14px] px-[20px]",
                p.slug === currProduct.slug && "font-semibold text-lime-400"
              )}
              key={p.slug}
            >
              <span className="w-[20%]">
                <Image
                  height={25}
                  width={25}
                  className="w-[25px] h-[25px]"
                  alt={p.slug}
                  src={p.slugIcon}
                />
              </span>
              <span className="w-[80%] mx-auto">{p.slug}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        key={currProduct.slug}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div className=" flex justify-center w-1/2">
          <Image
            height={361}
            width={365}
            alt="ecosystem"
            loading="lazy"
            className="w-[365px] h-[361px] max-md:w-[200px] max-md:h-[200px] max-md:mt-10"
            src={currProduct.icon}
          />
        </div>
        <div className=" flex justify-center flex-col  w-1/2">
          <h3 className={cn(sectionHeading, " md:text-3xl text-start")}>
            {currProduct.title}
          </h3>
          <p className={cn(sectionSubHeading, "text-start max-w-[80%]")}>
            {currProduct.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhatWeOffer;
