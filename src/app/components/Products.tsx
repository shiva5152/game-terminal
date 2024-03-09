"use client";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    slug: "APIs and SDKs",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",
    title: "Game Integration APIs and SDKs",
    icon: "",
    description:
      "Empower developers with our avant-garde APIs and SDKs, enabling seamless game embedding for unparalleled immersion.",
  },
  {
    slug: "Esports Management",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "Esports and Tournaments Management",
    icon: "",
    description:
      "Spearhead competitive gaming evolution with our state-of-the-art platform, facilitating seamless organization and management of diverse tournaments across myriad genres.",
  },
  {
    slug: "UGC Marketplace",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "UGC Marketplace and Modular Framework",

    icon: "",
    description:
      "Unleash limitless creativity through our groundbreaking UGC marketplace and modular framework, empowering users to tailor gaming experiences to unprecedented levels of customization.",
  },
  {
    slug: "Nodes",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "Game Terminal Nodes",
    icon: "",
    description:
      "Ensure unparalleled network stability, security, and scalability with our decentralized infrastructure nodes, guaranteeing secure gameplay and fostering vibrant community engagement.",
  },
  {
    slug: "KOLs Marketplace",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "KOLs Marketplace",
    icon: "",
    description:
      "Access our exclusive network of over 100 Key Opinion Leaders (KOLs) and influencers via the Gamer's Pit, facilitating strategic partnerships and maximizing exposure within our dynamic ecosystem.",
  },
  {
    slug: "Gaming Guilds",
    slugIcon:
      "https://assets-global.website-files.com/648053f108a7fb99895764d6/65c0e793b9e4683ed4453f48_Players.svg",

    title: "Gaming Guilds",
    icon: "",
    description:
      "Forge formidable alliances within our guilds, where solo players converge to form unstoppable squads, competing and triumphing together in exhilarating games and tournaments.",
  },
];

const Products = () => {
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
        What We <span className="text-lime-400">Offer!</span>
      </motion.div>

      <motion.div variants={item} className="_nav my-16 w-full">
        <ul className="flex justify-between">
          {products.map((p) => (
            <li
              onClick={() => handleSelectProduct(p.slug)}
              className={cn(
                "cursor-pointer gap-2 rounded-2xl flex justify-center items-center text-wrap bg-black py-[14px] px-[25px]",
                p.slug === currProduct.slug &&
                  "bg-[#8EFE49] font-semibold text-black"
              )}
              key={p.slug}
            >
              <span className="">
                <Image height={25} width={25} alt={p.slug} src={p.slugIcon} />
              </span>
              <span className=" max-w-[50%]">{p.slug}</span>
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
            src={"/images/ecosystem.svg"}
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

export default Products;
