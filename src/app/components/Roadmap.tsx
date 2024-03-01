"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "@/utils/cn";
import { BackgroundGradient } from "./ui/bg-gradient-roadmap";

const roadMapData = [
  {
    id: 1,
    title: "2022",
    description: [
      "Market research and product Idea",
      "Team Formation",
      "Core team building",
      "Enhanced game graphics and ux",
      "Release tokenomics",
    ],
  },
  {
    id: 2,
    title: "2023",
    description: [
      "Onboarding Advisors",
      "Sentinel striker Beta launch",
      "Multichain deployment",
      "Collaboration with GameFi projects",
      "Initiate waitlist for game launch",
      "Cultivate relationships with gaming guilds",
    ],
  },
  {
    id: 3,
    title: "H1 2024",
    description: [
      "FPS game Pre alpha release",
      "Acquire users for Sentinel Striker",
      "Competitive FPS tournaments",
      "Strategize expansion into gaming studios",
      "Expand the platform as a gaming aggregator",
      "New website and documentation design",
      "Onboard 50+ games to the ecosystem",
      "Launch NFT marketplace",
    ],
  },
  {
    id: 4,
    title: "H2 2024",
    description: [
      "Mobile version beta testing",
      "Launching three hyper casual games",
      "Game testing rewards and airdrops",
      "Token generation event",
      "Mobile version beta testing",
      "Launching three hyper casual games",
      "Game testing rewards and airdrops",
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
        <div className="flex flex-col md:flex-row   justify-between gap-4">
          {roadMapData.map((data, index) => (
            <BackgroundGradient key={data.id}>
              <div className="flex flex-col py-5 pr-9 pl-4 h-fit text-sm leading-6 text-white rounded-xl border border-lime-400 border-opacity-50 border-solid border-t-0 border-b-0 bg-neutral-900 ">
                <div className="text-3xl font-bold text-start text-lime-400">
                  {data.title}
                </div>
                {data.description.map((desc, index) => (
                  <div
                    key={desc}
                    className={cn(
                      "flex gap-2 justify-between mt-2 md:mt-5 ",
                      index === 0 && "mt-3 md:mt-8"
                      // desc.split(" ").length <= 3 ? "whitespace-nowrap" : ""
                    )}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="grow whitespace-nowrap text-white font-thin text-xs md:text-[0.9rem] tracking-wide">
                      {desc.split(" ").slice(0, 3).join(" ")} <br />
                      {desc.split(" ").slice(3).join(" ")}
                    </div>
                  </div>
                ))}
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

// {
//   roadMapData.map((data, index) => (
//     <React.Fragment key={data.id}>
//       <div className="mb-12">
//         <div className="flex flex-col ">
//           <div className="flex">
//             <div className="grow w-[119px] text-white whitespace-nowrap md:w-full flex mb-4 text-xl md:text-3xl font-bold text-center justify-center items-center md:px-16 px-4 py-4 h-fit rl-green-border rounded-xl  bg-neutral-900 max-md:px-5">
//               {data.title}
//             </div>
//             <div className="py-8 md:hidden mx-auto">
//               <img src="/images/green-line.png" alt="" />
//             </div>
//           </div>

//           {data.description.map((desc, index) => (
//             <div
//               key={desc}
//               className={cn(
//                 "flex gap-2 justify-between mt-2 md:mt-4 ",
//                 index === 0 && "mt-3 md:mt-5"
//                 // desc.split(" ").length <= 3 ? "whitespace-nowrap" : ""
//               )}
//             >
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
//                 className="w-6 aspect-square"
//               />
//               <div className="grow whitespace-nowrap text-white font-thin text-xs md:text-[0.9rem] tracking-wide">
//                 {desc.split(" ").slice(0, 3).join(" ")} <br />
//                 {desc.split(" ").slice(3).join(" ")}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {index !== roadMapData.length - 1 ? (
//         <div className="hidden md:block py-8 mx-auto">
//           <img src="/images/green-line.png" alt="hello" />
//         </div>
//       ) : null}
//     </React.Fragment>
//   ));
// }
export default Roadmap;
