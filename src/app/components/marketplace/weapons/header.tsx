import React from 'react'

const header = () => {
  return (
    <div className='p-10 '>
      <div className="flex gap-20  justify-between px-0.5 mt-16 w-full text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="my-auto text-2xl font-bold">Filters</div>
        <div className="flex gap-5 justify-between items-start text-base font-medium max-md:flex-wrap">
          <div className="flex gap-5 ml-56 justify-between self-start p-4 text-sm rounded-xl bg-neutral-900">
            <div>Popularity</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72a8a38fd45152ddbbc3ee409dd3e5347b44a3703bffec4b06f6b6bad407ac3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-5 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between self-start p-4 text-sm rounded-xl bg-neutral-900">
            <div className="my-auto">All</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72a8a38fd45152ddbbc3ee409dd3e5347b44a3703bffec4b06f6b6bad407ac3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-5 aspect-square"
            />
          </div>
          <div className="my-auto">Hot</div>
          <div className="my-auto">New</div>
          <div className="flex flex-col self-end mt-5 text-lime-400">
            <div>Recommended</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3dde745815f959f0df0dc0b0eaeeaacbd588e1a41a2c545638c1a1bb3e9ad3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="self-center mt-4 aspect-[3.57] fill-lime-400 w-[25px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default header