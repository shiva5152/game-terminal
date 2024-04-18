import React from 'react'
import Openreview from '@/app/components/games/openreview'

const page = () => {
  return (
    <div className='sm:p-6 p-4'>
      <div className="mt-6 max-md:max-w-full">


      <div className="flex sm:hidden gap-3 mt-8 text-xl font-bold text-white">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/681d70688844b7e1b080e031d97336164f7523307e1e76e07fdfd9dde6ce5e90?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-square w-[50px]"
        />
        <div className="flex-auto my-auto">Off The Grid</div>
      </div>



      <div className="sm:flex hidden gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center w-full  rounded-3xl max-md:mt-5 max-md:max-w-full">
            <div className="flex overflow-hidden relative flex-col pt-20 sm:w-full w-[320px] sm:min-h-[620px] rounded-2xl max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f851553e1d5174b3aa512ce8470d97a7224cb479d7f81a5d5b19b7525d17d3a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative gap-2 justify-center items-center px-4 py-2 mt-96 bg-black rounded-xl max-md:flex-wrap max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c263873037da2259e3c17e87e01e8b778a6faae8fd8c1278e6834b553cee377?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex justify-center items-center self-stretch p-2 w-8 h-8 rounded-lg shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/157b1e9fb6e861bdeb537e50272b22ba14844047b9c801ae5a37e438f28e1a16?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="w-4 aspect-square"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae2cf4082c6c243472ce1c7f1fa1e76de6cfda9c9b651dd74b728f89ab4df4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex flex-1 gap-2 self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
                  <div className="text-xs text-center text-white">
                    0:00 / 2:10
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-start my-auto rounded-lg  bg-opacity-20 max-md:max-w-full">
                    <div className="shrink-0 w-0.5 h-2 rounded-lg" />
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/33cea345fbabdcf569430abf3fd340567ab7552ab901f4df3b4f42fa99aac1f6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-5">
            <div className="flex justify-center items-center rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/448e7f2ad866b0d8a78a3bf7c77e80d9ff49b1ad8739fd6a3636461e7c51c4a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="aspect-[1.14] w-[225px] rounded-2xl"
              />
            </div>
            <div className="flex justify-center items-center mt-4 rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/579794535925773c8048e3d08860b5570dcff8114efb98901fa0af57303a645e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="aspect-[1.14] w-[225px] rounded-2xl"
              />
            </div>
            <div className="flex justify-center items-center mt-4 rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d1db07ecad61b0c75744acad0ee82027efca8926173e2098a22000f3922369?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="aspect-[1.14] w-[225px] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-0.5 w-full rounded-3xl bg-neutral-900 max-md:mt-5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="w-full aspect-[1.49] max-md:max-w-full"
              />
            </div>
          </div>

          
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center w-full rounded-3xl bg-neutral-900 max-md:mt-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-[1.54]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                    <div className="flex justify-center items-center w-full rounded-3xl aspect-square bg-neutral-900 max-md:mt-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="aspect-square w-[211px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-5 rounded-3xl bg-neutral-900 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="w-full aspect-[1.85] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div className="sm:flex hidden gap-3 p-4">
      {/* First section */}
      <div className="sm:flex hidden flex-1 gap-3 items-start my-auto text-5xl text-white max-md:flex-wrap">
        <div className="grow self-stretch font-bold">Off The Grid</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16fab3c34b1be024f7abeccea9e213438426a2b39ad5dca6c491c4991fb59fe0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-[2.33] w-[72px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5066b658662a334023d994fec4f1b5909d803db1ccab40743da43dd2ca330d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-[2.33] w-[72px]"
        />
      </div>
      {/* Second section */}
      <div className="flex sm:flex-1 gap-3 text-sm sm:ml-72 sm:leading-7 text-neutral-900">
        <div className="overflow-hidden relative flex sm:ml-36 flex-col justify-center px-12 py-5 aspect-[4.19] fill-lime-400 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29faf22b9780ae5b4d15958e5ccaaa6e9dd54068fe8bed1244531a4c210b828a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <a href='' className='flex relative justify-center font-bold text-black text-sm'>Download Game</a>
        </div>
        <div className="overflow-hidden relative flex-col flex justify-center px-14 py-5 aspect-[4.19] fill-lime-400 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29faf22b9780ae5b4d15958e5ccaaa6e9dd54068fe8bed1244531a4c210b828a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <button className='flex relative justify-center font-bold text-black  text-sm'>Watch Trailer</button>
        </div>
      </div>
    </div>


    <div className="mt-10 sm:p-4 *:text-xl font-bold text-white max-md:max-w-full">
      About Game
    </div>


    <div className="mt-2 max-md:max-w-full sm:p-4">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
          <div className="text-base leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
            PVP
            <br />
            Welcome to the world’s most unhinged battle royale!
            <br />
            Slash, bash, and shoot your way through an intense 150-player melee.
            Earn loot, trade items, and maybe, just maybe, you’ll make it to the
            top. Just don’t look down once you do — what you left behind ain’t
            pretty. 
            <br />
            <div className='sm:flex hidden'>
            PVE
            <br />
            We’re taking battle royales to a whole new level thanks to our
            genre-defying story missions!
            <br />
            Off The Grid features an immersive 60-hour narrative campaign, which
            you’ll take part in as the battle royale rages on around you. Take
            on jobs for the video game companies, scour Teardrop Island for its
            secrets, and help Cobra find the missing piece of his past...</div>
          </div>
        </div>


        {/* sm buttons */}
        <div className="sm:hidden flex justify-center flex-col text-xs font-bold leading-6 max-w-full text-neutral-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccd22b9984bb5339b5e1c1d322045d097cc05eec0318a6e9a9bc666cf4db6c58?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="w-full aspect-[5.56] fill-neutral-900"
          />
          <a href='' className='flex relative justify-center font-bold text-white text-sm'>Read more</a>
          <div className="flex flex-row justify-center gap-2.5 mt-3">
            <div className="flex overflow-hidden relative flex-col justify-center px-6 py-4 aspect-[4.18] fill-lime-400">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/29faf22b9780ae5b4d15958e5ccaaa6e9dd54068fe8bed1244531a4c210b828a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="object-cover absolute inset-0 size-full"
            />
            <a href='' className='flex relative justify-center font-bold text-black text-sm'>Download Game</a>
            </div>
            <div className=" flex overflow-hidden relative flex-col justify-center px-8 py-4 aspect-[4.18] fill-lime-400">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/29faf22b9780ae5b4d15958e5ccaaa6e9dd54068fe8bed1244531a4c210b828a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="object-cover absolute inset-0 size-full"
            />
            <a href='' className='flex relative justify-center font-bold text-black text-sm'>Watch Trailer</a>
            </div>
          </div>
        </div>



        {/* smimages */}
        <div className="flex mt-10 flex-col justify-center max-w-full">
      <div className="flex flex-col justify-center w-full bg-white rounded-xl">
        <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-[1.93]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c5c5bb21975ff4a9ee737e1f35291e58b4b2d2db4b3564dfd70fed674f4b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute rounded-2xl inset-0 size-full"
          />
          <div className="flex relative gap-0.5 justify-center items-start px-1.5 py-0.5 mt-16 bg-black rounded">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75b61d38283c5fb118e2f848a4d9582de76c1f4afb679e3f17ad150f4ffdb5ac?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-square w-[7px]"
            />
            <div className="flex justify-center items-center self-stretch p-0.5 rounded-sm shadow-sm h-[9px] w-[9px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/345f9c84e69d4a1f14f4674cc1f82c9e07f299154f937277b38061944bb35e9a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="aspect-square w-[5px]"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b70448b51c599c1a1427a334ac0d65c72dc043fe04df4bf98d92b7d7e25c5a5?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-square w-[7px]"
            />
            <div className="flex flex-1 gap-0.5 self-stretch my-auto">
              <div className="text-xs text-center text-white">0:00 / 2:10</div>
              <div className="flex flex-col flex-1 justify-center items-start self-start rounded-sm bg-white bg-opacity-20">
                <div className="shrink-0 w-px rounded-sm h-[3px]" />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c21680488150d240b62dc321ff45565e0b3fdfd2179502274b6313bd33fe0e3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-square w-[7px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-1/3 justify-center gap-4 mt-3">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0c825268bad4be0b5a31cd6e522dea7dcd4ca731dead90d5b0948df93441b9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0  w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d8447d3f33255ba1b15250331db32a2cd9ad9c3a7f297eed9c97cb619f8df43?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0   w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/083e8debf3dee82b22b9a33b222a68c4bce04affdbea10ab19844338966bad52?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0  w-full"
        />
      </div>
    </div>


        <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch px-16 py-11 m-auto w-full rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-10">
            <div className="flex gap-4 mx-3.5 max-md:mx-2.5">
              <div className="grow text-5xl font-bold text-white">4.23</div>
              <div className="flex-auto my-auto text-xl font-medium text-white text-opacity-30">
                (212) Reviews
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84c4aac180c496c530479aa8cffadfc065666bed864f1e406b2663f45f58f5ad?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="self-center mt-5 aspect-[5.88] w-[264px]"
            />
          </div>
        </div>
      </div>
    </div>



    <div className="mt-20 sm:p-4 text-xl sm:text-5xl font-bold text-white max-md:mt-10 max-md:max-w-full">
      What other says
    </div>

    <div>
      <Openreview />
    </div>

    <div>
    <div className="flex gap-5 justify-center sm:justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="sm:flex hidden gap-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/330a9b03c6f9bc37f634334b78672df2ccc8f0daef72400edef5795e833f55f2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-[1.47] w-[90px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ae9bbe9c22e04668f96c57aa141c038abd4352b1e32bcef792f17357aae00?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-[1.47] w-[90px]"
        />
      </div>
      <div className="overflow-hidden relative flex flex-col justify-center items-center px-16 py-5 my-auto text-sm font-bold leading-7 whitespace-nowrap aspect-[4.19] fill-lime-400 text-neutral-900 w-[197px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29faf22b9780ae5b4d15958e5ccaaa6e9dd54068fe8bed1244531a4c210b828a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="object-cover absolute inset-0 size-full"
        />
        <a href='' className='relative flex justify-center text-black text-sm'>write</a>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default page
