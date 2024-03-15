"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { achievementData } from "@/app/components/Achievement";

const Sponsorship = () => {
  return (
    <>
      <div className="flex  flex-col w-full px-2 max-md:flex-wrap">
        <div className="md:container mx-auto max-md:ms-0 ">
          <img
            className=" max-md:w-[100px] "
            src="/images/backers.svg"
            alt=""
          />
        </div>
      </div>
      <InfiniteMovingCards
        direction="right"
        speed="fast"
        items={achievementData}
      />
    </>
  );
};

export default Sponsorship;
