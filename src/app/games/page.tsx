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
    <div className='sm:p-4 p-4'>
      <div>
          <div className="sm:flex hidden overflow-hidden relative flex-col items-start pt-16 pr-20 pb-7 min-h-[553px] max-md:pr-5">
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
        <div className="sm:flex hidden gap-2 px-px mt-5 max-md:flex-wrap">
          <div className="shrink-0 max-w-full h-1 bg-lime-400 rounded-xl w-[345px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[345px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[345px]" />
          <div className="shrink-0 max-w-full h-1 rounded-xl bg-zinc-800 w-[345px]" />
        </div>

        <div className="flex sm:hidden overflow-hidden relative flex-col pt-20 aspect-[1.8] max-w-[328px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb3306371836ca07ffab35ad086229add0f3dc1262a98f656725eee39d34533e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-5 justify-between px-2.5 mt-12 py-2 h-[60px] w-full rounded-lg backdrop-blur bg-neutral-900 bg-opacity-30">
            <div className="flex gap-2">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e96205e0a8ebd93adca8d39056e2ffbdf142cc96aab9a4c614fa74da38b6f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-9 aspect-square"
              />
              <div className="flex flex-col my-auto">
                <div className="text-xs font-bold text-white">Off The Grid</div>
                <div className="mt-2.5 text-xs  text-white text-opacity-30">
                  Slash, bash, and shoot your way through an ...{" "}
                </div>
              </div>
            </div>
            <a href="">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7352c868ead0a33e0dee6eff41b6a40d600090f2d9e2de14c315fbff85c3dd84?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 my-auto aspect-[1.61] mt-2 w-[50px]"
            />
            </a>
          </div>
        </div>


      </div>
      <Header1/>
      <div className='sm:p-4'>
        <Cardholder/>
      </div>
      <Header2 />
      <div className='sm:p-4'>
        <ImageGrid />
      </div>
      <Header3 />
      <div>
        <ImageGrid2 />
      </div>
      <Header4 />
      <div className='sm:p-4'>
        <Cardholder/>
      </div>
    </div>
   
  )
}

export default page
