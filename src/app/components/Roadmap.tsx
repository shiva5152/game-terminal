import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "@/utils/cn";

const roadMapData = [
  {
    id: 1,
    title: "2022",
    description: [
      "Research on Web3 gaming",
      "Idea and conceptualisation",
      "Core team building",
      "Launch social handles",
      "Releasing tokenomics",
      "Pre seed round complete",
    ],
  },
  {
    id: 2,
    title: "2022",
    description: [
      "AAA game designing",
      "Growing users on social media",
      "WebGL version launch",
      "On-boarding advisors",
    ],
  },
  {
    id: 3,
    title: "2023",
    description: [
      "Release alpha version of game",
      "Gain live users on the game",
      "Custom character and skins building",
      "Arranging tournaments",
      "Private round complete",
    ],
  },
  {
    id: 4,
    title: "H2 2024",
    description: [
      "Release alpha version of game",
      "Gain live users on the game",
      "Custom character and skins building",
      "Arranging tournaments",
      "Private round complete",
    ],
  },
];

const Roadmap = () => {
  return (
    <div className="w-full flex flex-col items-center  overflow-x-hidden">
      <div className="mt-44 text-5xl font-bold text-center text-lime-400 whitespace-nowrap max-md:mt-10 max-md:text-4xl">
        Our <span className="text-lime-400">Roadmap</span>
      </div>
      <div className="mt-11 w-full max-w-[1247px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col md:grid md:grid-cols-4 lg:grid-cols-7 md:grid-rows-1 justify-start gap-4">
          {roadMapData.map((data, index) => (
            <>
              <div key={data.id} className="mb-12">
                <div className="flex flex-col ">
                  <div className="flex">
                    <div className="grow w-[119px] whitespace-nowrap md:w-full flex mb-4 text-xl md:text-3xl font-bold text-center justify-center items-center md:px-16 px-4 py-4 h-fit rl-green-border rounded-xl  bg-neutral-900 max-md:px-5">
                      {data.title}
                    </div>
                    <div className="py-8 md:hidden mx-auto">
                      <img src="/images/green-line.png" alt="" />
                    </div>
                  </div>

                  {data.description.map((desc, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex gap-2 justify-between mt-2 md:mt-4 ",
                        index === 0 && "mt-3 md:mt-5",
                        desc.split(" ").length <= 3 ? "whitespace-nowrap" : ""
                      )}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="w-6 aspect-square"
                      />
                      <div className="grow font-thin text-xs md:text-[0.9rem] tracking-wide">
                        {desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {index !== roadMapData.length - 1 ? (
                <div className="hidden md:block py-8 mx-auto">
                  <img src="/images/green-line.png" alt="" />
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
