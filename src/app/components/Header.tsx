"use client";
import React from "react";
import UserDropDown from "./UserDropDown";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="relative w-full">
      <div className="hidden  md:block w-full">
        <div className="overflow-hidden header-bg self-stretch px-20 flex items-center w-full  stroke-[1px] stroke-lime-400 max-md:px-5 ">
          {/* <div className="flex gap-5 flex-row  max-md:gap-0 max-md:">
            
          </div> */}
          <div className="hidden md:flex flex-col w-[60%] md:ml-0 md:w-full">
            <div className="flex gap-12 justify-between self-stretch my-auto text-xs text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                alt="Game Terminal Logo"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8f243d9febcc8e464a8fd9568eaa354f8d4ea179818b187adb86ab1c136e82d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="max-w-full aspect-[4.55] w-[102px] sm:w-[188px]"
              />
              <div className=" hidden md:flex flex-col flex-1 self-start mt-3.5 font-thin text-gray-200">
                <div className="flex gap-10  justify-start">
                  <div className="cursor-pointer  leading-wide hover:text-lime-400">
                    Home
                  </div>
                  {/* is active-> font-medium text-lime-400 */}
                  <div className="cursor-pointer leading-wide hover:text-lime-400">
                    Games
                  </div>
                  <div className="cursor-pointer leading-wide hover:text-lime-400">
                    Marketplace
                  </div>
                  <div className="cursor-pointer leading-wide hover:text-lime-400">
                    Tournament
                  </div>
                  <div className="cursor-pointer leading-wide hover:text-lime-400">
                    Nodes
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 md:justify-end text-xs font-medium text-gray-200 whitespace-nowrap max-md:mt-10">
              {/* <div className=" hidden md:flex gap-2 w-[50%] font-thin py-1 my-auto border border-solid border-[color:var(--Dark-Dark-Gray,#292929)] rounded-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a552e136fc580f0eddb887f9032879991b6d46a79773ef459c42f60b6ef47ff?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="aspect-square w-[34px]"
                  />
                  <div className="flex-auto my-auto">Search...</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82790d8804b70cb598af07bdb0eed5f2979f1ec2fd09aac5c56bbc08e53ad1a8?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square w-[32px] sm:w-[50px]"
                /> */}
              <img
                onClick={toggle}
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="rounded-full cursor-pointer aspect-square w-[32px] sm:w-[50px] hover:border-lime-400 hover:border-2"
              />
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div className=" absolute z-10 right-[10%] min-w-[255px]">
          <UserDropDown />
        </div>
      ) : null}
      <div className="md:hidden w-full">
        <div className="flex overflow-hidden  relative flex-row gap-5 justify-between px-6 py-5  fill-neutral-900 w-full stroke-[1px] stroke-lime-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/951e956bdfee0945cf56c2cadd28bc1b091def606f87b6bebd0f542daa9b034a?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="object-cover absolute inset-0 w-full"
          />
          <div className="flex relative gap-3 ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e6db2180610d85e436c551ae5dc7877ef73d76c0dbb22103d3d80d7b5347c69?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d77c70157337c7ba979769eb2651a08a4d6b9f3a685164c56c08028c6f49748?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="my-auto max-w-full aspect-[4.55] w-[102px]"
            />
          </div>
          <div className="flex relative gap-3 justify-between">
            {/* <img
              loading="lazy"
              alt="Search Icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/82790d8804b70cb598af07bdb0eed5f2979f1ec2fd09aac5c56bbc08e53ad1a8?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-square w-[32px] sm:w-[50px]"
            /> */}
            <img
              // onClick={toggle}
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="rounded-full aspect-square w-[32px] sm:w-[50px] mr-3 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
