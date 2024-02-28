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

const cardData = [
  {
    id: 1,
    text: "50+",
    description: "games listed",
  },
  {
    id: 2,
    text: "100+",
    description: "guilds across the games",
  },
  {
    id: 3,
    text: "10M+",
    description: "monthly active gamers across these games",
  },
];

const Achievement = () => {
  return (
    <>
      <div className="self-stretch mt-10 md:mt-40 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col ">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex overflow-hidden rl-green-border  relative flex-col grow justify-center items-center px-0 py-0 md:py-11 whitespace-nowrap fill-neutral-900 h-auto md:min-h-[143px] stroke-[1px] stroke-lime-400 max-md:px-5 max-md:mt-0 max-md:max-w-full">
                <EvervaultCard
                  text={card.text}
                  description={card.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <InfiniteMovingCards
          direction="right"
          speed="fast"
          items={achievementData}
        />
      </div>
    </>
  );
};

export default Achievement;
