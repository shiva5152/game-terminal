'use client'
import React from 'react'
import { useState } from 'react';
import Header from '@/app/components/marketplace/weapons/header'
import Sidepropweapons from '@/app/components/marketplace/weapons/sidepropweapons'
import Weaponcard from '@/app/components/marketplace/weapons/weaponcard'
import Cardholder from '@/app/components/games/Cardholder'
import Test from '@/app/components/marketplace/weapons/weapondetails'

const page = () => {

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/330a9b03c6f9bc37f634334b78672df2ccc8f0daef72400edef5795e833f55f2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0c13aac9da2ce119ecd8351d46a0995a54773587951b6e2dab3c9ef616124e40?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    "/undead.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div className='sm:p-6 p-2'>
      <div className='flex sm:block justify-center'>
      <div className="sm:flex hidden overflow-hidden relative flex-col items-start pt-16 pr-20 mt-8 w-full min-h-[453px] max-md:pr-5 max-md:max-w-full">
        {/* image section */}
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a59a42f48d530e98c19df849d359a9638b5b8990efd4567b2a7cffe1f12d7a8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="object-cover rounded-3xl absolute inset-0 size-full"
      />
      <div className="flex relative flex-col ml-11 max-w-full font-bold w-[514px]">
        <div className="text-7xl text-white max-md:max-w-full max-md:text-4xl">
          Off The Grid
        </div>
        <div className="mt-8 text-xl leading-7 text-white text-opacity-50 max-md:max-w-full">
          Slash, bash, and shoot your way through an intense 150-player melee.
          Earn loot, trade items, and maybe, just maybe, you’ll make it to the
          top. Just don’t look down once you do — what you left behind ain’t
          pretty.
        </div>
        <div className="overflow-hidden relative flex flex-col justify-center self-start px-16 py-4 mt-10 text-sm leading-7 text-black whitespace-nowrap aspect-[3.4] fill-lime-400 max-md:pr-7 max-md:pl-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45ba01380bbd75d9f5e85510670d60c5475af5cdaba2beabd9285d483708222f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
         <a href="" className='relative flex justify-center'>Buy</a> 
        </div>
      </div>


      <div className="sm:flex hidden relative gap-3 mt-14 max-md:mt-10">
        {/* slider buttons */}

        {/* left button */}
        <button onClick={handlePrevClick}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/330a9b03c6f9bc37f634334b78672df2ccc8f0daef72400edef5795e833f55f2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-[1.47] w-[90px]"
        />
        </button>
        {/* right button */}
        <button onClick={handleNextClick}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c13aac9da2ce119ecd8351d46a0995a54773587951b6e2dab3c9ef616124e40?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-[1.47] w-[90px]"
        />
        </button>
      </div>
    </div>
    <div className="flex sm:hidden p-4 sm:overflow-hidden relative flex-col justify-center aspect-[1.8] w-[340px]">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/727f4669608f6b23407143c8793bc3a54ff7e536a2bdce144ecc54643ae17a6d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="object-cover absolute inset-0 rounded-2xl size-full"
      />
      {/* <div className="relative w-full min-h-[182px]" /> */}
    </div>
    <div className="sm:flex hidden gap-2 px-px mt-5 max-md:flex-wrap">
          <div className="shrink-0 max-w-full h-1 bg-lime-400 rounded-xl w-[360px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[360px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[360px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[360px]" />
        </div>
    </div>
      <Header />
      <div className='sm:flex hidden flex-row'>
        <div className='w-1/4 sm:flex hidden'><Sidepropweapons /></div>
        <div className='relative'><Weaponcard /></div>
       
      </div>
      <div className=''><Weaponcard/></div>
      
    </div>
  )
}

export default page
