"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Gaming = () => {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: gameRef,
    offset: ["0 1", "1.5 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <motion.div
      ref={gameRef}
      style={{ opacity, scale }}
      className="self-stretch mt-44 max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 font-bold max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl text-white max-md:max-w-full max-md:text-4xl">
              PLAY, WIN AND MAKE YOUR OWN{" "}
              <span className="text-lime-400">GAMING IDENTITY</span>
            </div>
            <div className="mt-10 text-xl font-light leading-7 text-zinc-600 tracking-wide max-md:max-w-full">
              Game Terminal provides a unified gaming identity system, allowing
              users to maintain a single identity across all games. This
              simplifies the gaming experience by eliminating the need for
              multiple In-Game Names (IGNs) and offers opportunities to rank up
              on the ecosystem leaderboard.
            </div>
            <button className="overflow-hidden button-bg relative flex-col justify-center self-start px-11 py-8 mt-8 text-sm leading-7 text-black whitespace-nowrap aspect-[4] fill-lime-400 max-md:px-5">
              CREATE YOUR PROFILE NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/899539ab3b4c3c86a9870e601f66046034d3d780e29ebb0031d3f9f489a1d868?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="grow w-full aspect-square max-md:max-w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Gaming;
