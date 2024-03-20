import React from 'react'

const headermain = () => {
  return (
    <div>
      <div className="flex gap-10 items-start px-11 pt-12 pb-7 mt-12 text-xl text-white rounded-3xl bg-neutral-900 max-md:flex-wrap max-md:px-5 max-md:mt-10">
        <div className="flex flex-col p-4 font-medium text-lime-400">
          <div>All Tournaments</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3dde745815f959f0df0dc0b0eaeeaacbd588e1a41a2c545638c1a1bb3e9ad3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="self-center mt-3 aspect-[3.57] fill-lime-400 w-[25px]"
          />
        </div>
        <div className="flex-auto p-4">Ongoing Tournaments</div>
        <div className="flex-auto p-4">Upcoming Tournaments</div>
        <div className="flex-auto p-4 max-md:max-w-full">Ended Tournaments</div>
      </div>

      <div className="flex gap-5 mt-8 max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto my-auto text-3xl font-semibold text-white">
        <span className="text-lime-400">Ongoing</span> Tournaments
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
    
  )
}

export default headermain
