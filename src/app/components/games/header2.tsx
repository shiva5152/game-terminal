import React from 'react'

const header2 = () => {
  return (
    <div>
      <div className="sm:flex hidden gap-5 mt-24 font-bold text-lime-400 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto my-auto text-5xl max-md:max-w-full max-md:text-4xl">
          Recommended <span className="text-white">Games</span>
        </div>
        <div className="overflow-hidden relative flex-col justify-center px-12 py-5 text-sm leading-7 aspect-[3.4] fill-neutral-900 max-md:px-5">
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc61d7362b01b5a4e0cad94491aa14ba8dbe21822f9474d1b141b0a6d1c34a9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <a href="" className='text-white absolute text-center '>See more</a>See more
        </div>
      </div>

      <div className="flex sm:hidden gap-5 mt-10 px-2 font-bold text-white max-w-[328px]">
      <div className="flex-auto text-xl">
        <span className="text-lime-400">Recommended</span> Games
      </div>
      <div className="overflow-hidden relative flex-col justify-center px-2 py-3 text-xs leading-7 text-center aspect-[2.93] fill-neutral-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac6eefd4dca2f703faef626999394a0c95bb6dbfc680b32d4f32ba45ab73416c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="object-cover absolute inset-0 size-full"
        />
       <a href="" className='text-zinc-700 relative justify-center flex  text-right text-xs '>See more </a>
      </div>
    </div>
    </div>
  )
}

export default header2
