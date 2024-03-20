import React from 'react'

const header4 = () => {
  return (
    <div>
      <div className="flex gap-5 mt-24 font-bold text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto text-5xl max-md:text-4xl">
          Upcoming <span className="text-white">Games</span>
        </div>
        <div className="overflow-hidden relative flex-col justify-center self-start px-12 py-5 text-sm leading-7 aspect-[3.4] fill-neutral-900 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc61d7362b01b5a4e0cad94491aa14ba8dbe21822f9474d1b141b0a6d1c34a9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          See more
        </div>
      </div>
    </div>
  )
}

export default header4
