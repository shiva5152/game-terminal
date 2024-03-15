"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    srcSet: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-[90vw] pb-20 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          // <li
          //   key={item.id}
          //   className="flex gap-4 h-full justify-between self-stretch px-px mt-10 max-md:flex-wrap max-md:max-w-full"
          // >
          //   <div className="flex flex-1 justify-center neomorphic-card   items-center px-12 py-6  rl-green-border stroke-[1px] stroke-lime-400 bg-[#161616] max-md:px-5">
          //     <img
          //       loading="lazy"
          //       srcSet={item.srcSet}
          //       className="aspect-[5.88] w-[115px]"
          //     />
          //   </div>
          // </li>
          <li
            className="w-[213px] max-w-full relative rounded-2xl  flex-shrink-0"
            // style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            // }}
            key={item.id}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-fit"
              ></div>
              <div
                key={item.id}
                className="flex gap-4 h-full justify-between self-stretch px-px mt-10 max-md:flex-wrap max-md:max-w-full"
              >
                <div className="flex flex-1 rounded-xl justify-center neomorphic-eco   items-center px-12 py-6  achievement-mar-border stroke-[1px] stroke-lime-400 bg-[#161616] max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet={item.srcSet}
                    className=" aspect-[5.8]"
                  />
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
