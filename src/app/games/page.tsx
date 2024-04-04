import React from 'react'
import Card from '../components/games/cards'
import Header1 from '../components/games/header1'
import Header2 from '../components/games/header2'
import Header3 from '../components/games/header3'
import Header4 from '../components/games/header4'
import Cardholder from '../components/games/Cardholder'
import ImageGrid from '../components/games/ImageGrid'
import ImageGrid2 from '../components/games/ImageGrid2'


const page = () => {
  return (
    <div className='p-4'>
      <div>
          <div className="flex overflow-hidden relative flex-col items-start pt-16 pr-20 pb-7 min-h-[553px] max-md:pr-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aebe8c80fa1f5aed8470ac4ac5352f8499f54fe8649832a07290b277133e008?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col ml-11 max-w-full font-bold w-[513px]">
            <div className="text-7xl text-white max-md:max-w-full max-md:text-4xl">
              Off The Grid
            </div>
            <div className="mt-8 text-xl leading-7 text-white text-opacity-30 max-md:max-w-full">
              Slash, bash, and shoot your way through an intense 150-player melee.
              Earn loot, trade items, and maybe, just maybe, you’ll make it to the
              top. Just don’t look down once you do — what you left behind ain’t
              pretty.
            </div>
            <div className="overflow-hidden relative flex flex-col justify-center self-start px-10 py-5 mt-12 text-sm leading-7 text-black aspect-[3.4] fill-lime-400 max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/45ba01380bbd75d9f5e85510670d60c5475af5cdaba2beabd9285d483708222f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="object-cover absolute inset-0 size-full"
              />
              <a href="" className='relative flex justify-center'> Learn More</a>
            </div>
          </div>
          <div className="flex relative gap-3 mt-28 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/330a9b03c6f9bc37f634334b78672df2ccc8f0daef72400edef5795e833f55f2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[1.47] w-[90px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb909e9ada8cf8223fd0dec87cbcd949344921dc83c4cc34a78fc43d9ff24683?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[1.47] w-[90px]"
            />
          </div>
        </div>
        <div className="flex gap-2 px-px mt-5 max-md:flex-wrap">
          <div className="shrink-0 max-w-full h-1 bg-lime-400 rounded-xl w-[345px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[345px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[345px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[345px]" />
        </div>
      </div>
      <Header1/>
      <div className='p-4'>
        <Cardholder/>
      </div>
      <Header2 />
      <div className='p-4'>
        <ImageGrid />
      </div>
      <Header3 />
      <div>
        <ImageGrid2 />
      </div>
      <Header4 />
      <div className='p-4'>
        <Cardholder/>
      </div>
    </div>
   
  )
}

export default page
