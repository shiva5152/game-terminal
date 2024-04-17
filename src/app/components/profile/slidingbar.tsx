'use client'
import React from 'react';

const SlidingBar = () => {
  return (
    <div>
      <div className="flex gap-5 flex-row items-start sm:px-11 pt-12 sm:pb-7 w-full sm:overflow-hidden overflow overflow-x-auto mt-8 text-s sm:text-xl text-white  bg-neutral-900 px-2 ">
        <div className='hover:text-lime-400 cursor-pointer hover:text-bold relative'>
          Game Downloaded
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3dde745815f959f0df0dc0b0eaeeaacbd588e1a41a2c545638c1a1bb3e9ad3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 aspect-[3.57] fill-lime-400 w-[25px] opacity-0 transition-opacity duration-300"
          />
        </div>
        <div className="flex flex-col font-medium text-white relative">
          <div className='hover:text-lime-400 cursor-pointer hover:text-bold relative'>
            NFT collection
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3dde745815f959f0df0dc0b0eaeeaacbd588e1a41a2c545638c1a1bb3e9ad3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 aspect-[3.57] fill-lime-400 w-[25px] opacity-0 transition-opacity duration-300"
            />
          </div>
        </div>
        <div className="flex-auto max-md:max-w-full relative">
          <div className='hover:text-lime-400 cursor-pointer hover:text-bold relative'>
            Marketplace Activities
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3dde745815f959f0df0dc0b0eaeeaacbd588e1a41a2c545638c1a1bb3e9ad3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 aspect-[3.57] fill-lime-400 w-[25px] opacity-0 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .relative:hover img {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SlidingBar;
