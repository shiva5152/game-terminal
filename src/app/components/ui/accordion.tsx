"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

interface IAccordionItem {
  id: number;
  title: string;
  description: string[];
}

const Accordion = ({ data }: { data: IAccordionItem }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <div key={data.id}>
        <div
          onClick={toggle}
          className="flex gap-5 justify-between px-2 py-5 border-b border-solid border-b-[color:var(--Dark-Dark-Gray,#292929)]"
        >
          <div className="self-start mt-2">{data.title}</div>
          <img
            loading="lazy"
            src={
              !open
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/a0d5654704f78b3f123a332459caebe1ed13f05038d7d4cd6f92f64d0ec9fad2?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/cf69defd937026d2506c196aad9adcb2ce2d62375dc9bea2cb327611c1697c30?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            }
            className="w-5 aspect-square"
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-col flex gap-1"
            >
              {data.description.map((desc, index) => (
                <div
                  key={index}
                  className={cn(
                    "mt-1 ml-4 text-[0.85rem] text-zinc-600",
                    index === 0 && "mt-3"
                  )}
                >
                  {desc}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Accordion;
