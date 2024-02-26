"use client";
import React from "react";
import { EvervaultCard } from "./ui/evervault-card";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const achievementData = [
  {
    id: 1,
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97df81646fbcc3fa10f668960b7188c160531b5c1a90b5aef5eee588db5acb6a?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    id: 2,
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95cbfa96d7a87a147cdb1eb82b0607605cb29c503875dcf35b92bc299798d84f?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    id: 3,
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ab0d663bb1855aae058a5b1a8357f590936de3889e82a9c5d54e37cd71553?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    id: 4,
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97bfb94a436a3fb5f287d7b44e22654ae0db00b995f27f9ad6a3021ed5225761?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    id: 5,
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb503ee7b918f6bc3cefbb997b2813298ab843cf2033cfc77db8654f53942?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    id: 6,
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83c3e7782373f5b59f9a6d02138c0216f757966132cf6ba076faa1d7a1682192?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
];

const Achievement = () => {
  return (
    <>
      <div className="self-stretch mt-40 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden rl-green-border  relative flex-col grow justify-center items-center px-0 py-11 whitespace-nowrap fill-neutral-900 min-h-[143px] stroke-[1px] stroke-lime-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/618e27b6a06327eea908cf7c3128bd8df14cb3a7afbb3e313ff9e502bd6bb8d1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="object-cover absolute inset-0 size-full"
              /> */}

              {/* <div className="flex relative flex-col">
                <div className="text-4xl font-extrabold leading-7 text-lime-400">
                  50+
                </div>
                <div className="mt-4 text-base font-medium leading-7 text-center text-white">
                  games listed
                </div>
              </div> */}
              <EvervaultCard text="50+" description="games listed" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden rl-green-border relative flex-col grow justify-center items-center px-0 py-11 whitespace-nowrap fill-neutral-900 min-h-[143px] stroke-[1px] stroke-lime-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c54441946ab71fc155e638b47b9b0eb3664b498aa2f56a05116c8078c708e904?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="object-cover absolute inset-0 size-full"
              /> */}
              {/* <div className="flex relative flex-col">
                <div className="self-center text-4xl font-extrabold leading-7 text-lime-400">
                  100+
                </div>
                <div className="mt-4 text-base font-medium leading-7 text-center text-white">
                  guilds across the games
                </div>
              </div> */}
              <EvervaultCard
                text="100+"
                description="guilds across the games"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden rl-green-border relative flex-col grow px-0 py-11 whitespace-nowrap fill-neutral-900 min-h-[143px] stroke-[1px] stroke-lime-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/396bd8410d74c7b9c7f4ad416dc586d8c06b36760237545c6a6a5fd9bdc801b0?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="object-cover absolute inset-0 size-full"
              /> */}
              {/* <div className="relative self-center text-4xl font-extrabold leading-7 text-lime-400">
                10M+
              </div>
              <div className="relative mt-8 text-base font-medium text-center text-white">
                monthly active gamers across these games
              </div> */}
              <EvervaultCard
                text="10M+"
                description="monthly active gamers across these games"
              />
            </div>
          </div>
        </div>
      </div>
      <InfiniteMovingCards
        direction="right"
        speed="normal"
        items={achievementData}
      />
    </>
  );
};

export default Achievement;
