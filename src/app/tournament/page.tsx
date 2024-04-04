import React from 'react'
import Headermain from '../components/tournament/headermain'
import Cardholder from '../components/games/Cardholder'
import Holder from '../components/tournament/holder'

const page = () => {
  return (
    <div className='p-4'>
      <div>
        <Headermain />
      </div>
      <div className='mt-6'>
        <Holder />
      </div>
      <div>
        <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto text-3xl font-semibold text-white">
            <span className="text-lime-400">Upcoming </span>Tournaments
          </div>
          <div className="overflow-hidden relative flex-col justify-center px-12 py-5 text-sm font-bold leading-7 text-white aspect-[3.4] fill-neutral-900 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc61d7362b01b5a4e0cad94491aa14ba8dbe21822f9474d1b141b0a6d1c34a9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="object-cover absolute inset-0 size-full"
            />
            <button className='absolute'>See more</button>
          </div>
        </div>
      </div>

      <div className='mt-6'>
      <Holder />
      </div>

      <div>
        <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto text-3xl font-semibold text-white">
            <span className="text-lime-400">Ended </span>Tournaments
          </div>
          <div className="overflow-hidden relative flex-col justify-center px-12 py-5 text-sm font-bold leading-7 text-white aspect-[3.4] fill-neutral-900 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc61d7362b01b5a4e0cad94491aa14ba8dbe21822f9474d1b141b0a6d1c34a9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="object-cover absolute inset-0 size-full"
            />
            <button className='absolute'>See more</button>
          </div>
        </div>
      </div>

      <div className='mt-6'>
      <Holder />
      </div>
    </div>
  )
}

export default page
