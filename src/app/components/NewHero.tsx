import React from "react";
import Header from "./Header";
import Link from "next/link";

const NewHero = () => {
  return (
    <>
      <div className="video-container">
        {/* <video autoPlay muted loop>
          <source
           
            src="/v2.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="mt-4">
          <Header />
        </div>
        <div className=" relative z-10 bg-transparent max-w-[100%] text-7xl mt-28  font-bold text-center ms-10 text-white max-md:mt-10 max-lg:mt-40 max-md:max-w-full max-md:text-4xl">
          <h2>
            Multitude of trending <span className="text-lime-400">Web3 </span>
            games
          </h2>
          <h2>
            on one <span className=" text-lime-400">platform</span>
          </h2>
          <p className="p-6 md:p-[2.5rem] text-xl font-light leading-5 tracking-wide text-center text-zinc-100 max-md:max-w-full  max-md:text-[1rem]">
            Game Terminal is a Web3 aggregator between gaming creators and
            gamers on
            <br className="hidden md:block" />a solitary gaming platform
            bridging the gap between Web2 and Web3.
          </p>
          <button className="overflow-hidden button-bg md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-4 md:mt-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 ">
            Explore Games
          </button>
        </div>
        {/* <div className=" relative z-10 bg-transparent text-7xl mt-20  font-bold text-start px-24 text-white max-md:mt-10 max-lg:mt-40 max-md:max-w-full max-md:text-4xl">
          <h2 className="p-0 m-0">
            <span className="text-[170px] flex flex-col justify-start text-white leading-3">
              WE MAKE{" "}
            </span>
            <span className="text-lime-400 flex justify-start items-center mt-14 ">
              <img
                src="./images/dragon-img.jpg"
                className=" rounded-[88px]"
                alt=""
              />
              <span
                className="text-[170px]"
                style={{
                  color: "transparent",
                  padding: "10px",
                  display: "inline-block",
                  WebkitTextStroke: "1px #8efe49",
                }}
              >
                GAMES
              </span>
            </span>
          </h2>

          <p className="p-6 md:p-[2.5rem] text-xl font-light leading-5 tracking-wide text-start text-zinc-100 max-md:max-w-full  max-md:text-[1rem]">
            Game Terminal is a Web3 aggregator between gaming creators and
            gamers on
            <br className="hidden md:block" />a solitary gaming platform
            bridging the gap between Web2 and Web3.
          </p>
          <button className="overflow-hidden button-bg md:mx-0 relative flex-col justify-center items-center self-start px-11 py-8 mt-2 md:mt-2 text-xs md:text-sm leading-7 text-black whitespace-nowrap aspect-[3.15] fill-lime-400 max-md:px-5 ">
            Explore Games
          </button>
        </div> */}
        {/* <Link
          href={"/#gaming"}
          className="flex  justify-center flex-col items-center"
        >
          <div className="mt-16 text-xs font-medium text-center text-white whitespace-nowrap max-md:mt-10">
            Scroll down
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3834bafc453b7a2088dd481e55deae2ed9d6a35d06f06cd9a3f19f28c396b635?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="mt-3 w-0.5 aspect-[0.1] fill-[linear-gradient(0deg,#FFF_0%,rgba(255,255,255,0.00)_100%)]"
          />
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9b4e35437f33e6f2eeb6eb256494afa65acf1b4824607ad731dd159379efd5?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="mt-1 w-6 aspect-square"
            />
          </div>
        </Link> */}
        {/* <div className="caption">
          <h2>Your caption here</h2>
        </div> */}
      </div>
    </>
  );
};

export default NewHero;
