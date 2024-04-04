import Benfits from '@/app/components/marketplace/tournament/Benfits'
import Cards from '@/app/components/marketplace/tournament/Cards'
import Imageline from '@/app/components/marketplace/tournament/Imageline'
import Number from '@/app/components/marketplace/tournament/Number'
import React from 'react'

const page = () => {
  return (
    <div>
      <div >
      <div className='relative mt-20 flex flex-col items-center'>
      <div className="relative p-10 text-7xl mt-56 font-bold text-center  text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl z-10">
        Run a Node and earn <br /> <span className="text-lime-500">$GTT</span> and{" "}
        <span className="text-lime-400">NFT</span> rewards
      </div>
      <div className='absolute  inset-0 flex justify-center'>
        <img src="/btc.png" alt="" className="object-contain" />
      </div>
    </div>

      <div className="flex relative gap-4 px-0.5 mt-11 text-base font-bold leading-5 text-center max-md:flex-wrap max-md:mt-10">
        
      <div className="overflow-hidden relative flex-col grow justify-center items-center px-16 py-7 text-white aspect-[4.11] fill-neutral-900 w-fit max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a79d1fc8eba0e81d9afa09b2b6755f15c7cd09560ed66a779667697759040632?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="object-cover absolute inset-0 size-full"
      />
     <div className='absolute ml-96'>Learn More</div> Learn More
    </div>
    <div className="overflow-hidden relative flex-col grow justify-center items-center px-16 py-6 aspect-[4.11] fill-lime-400 text-neutral-900 w-fit max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c12e237cdc8fa8812094e6983bc073f06f95b439850d2b0673ca3b5e00c85ee?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="object-cover absolute inset-0 "
      />
      <div className='absolute'>Buy a GTT Node</div>
    </div>
    </div>
      </div>

      <div className='flex justify-center '>
        <Imageline />
      </div>

      <div className='flex justify-center'>
        <div className="mt-36 text-5xl font-bold text-center text-lime-400 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Node Owner<span className="text-lime-400"> Benefits</span>
      </div>
      </div>

      <div className='justify-center flex'>
        <Benfits />
      </div>

      <div className='flex justify-center'>
      <div className="mt-44 text-5xl font-bold text-center text-lime-400 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      Get Started with <span className="text-lime-400">GTT Nodes</span>
    </div>
      </div>

      <div className='p-10 ml-10'>
        <Number />
      </div>

      <div className='flex justify-center mb-36'>
        <Cards />
      </div>
    </div>
  )
}

export default page
