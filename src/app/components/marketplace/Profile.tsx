import React from 'react'
import Photogrid from './PhotoGrid'
import Profilecard from './ProfileCard'
import PhotoGrid from './PhotoGrid'

const Profile = () => {
  return (
    <div className='sm:p-10 p-6 sm:w-full w-[375px]'>
      <div className="mt-11 max-md:mt-10 flex-col max-md:max-w-full">
        <div className="flex sm:gap-5 gap-1 w-full ">
          <div className="flex flex-col mt-[55px] sm:mt-[0px] w-[145%] sm:w-[59%] max-md:ml-0 ">
            <div className="flex flex-col grow justify-center py-0.5 w-full rounded-3xl bg-neutral-900 max-md:mt-5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa52d2ebb7e5ac51743e238313bd054dd6c8f4f1b56c671c25aec2d1573e9b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="w-full aspect-[1.49] max-md:max-w-full rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-full sm:w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex mt-10 gap-1 sm:mt-0 sm:gap-5">
                  <div className="flex flex-col sm:w-[61%]">
                    <div className="flex flex-col grow justify-center w-full rounded-3xl bg-neutral-900 max-md:mt-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/034b3f692c667bb941b1e7d6fc255e1900554498dd7b8d54f3cc89c761e1299b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-[1.54] rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:ml-5  sm:w-[39%]">
                    <div className="flex justify-center items-center w-full rounded-3xl aspect-square bg-neutral-900 max-md:mt-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9263dd34ce15d38500f91172702240f84bc21f47b27d49c31420c8e8969e5025?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="aspect-square w-full sm:w-[211px] rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full justify-center py-1 sm:mt-5 rounded-3xl bg-neutral-900 ">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffbee43bd5a0147eb5ee0ea9e5ec37086251c5cb32eef53e28db45497731ce3d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="w-full aspect-[1.8] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mt-9 max-md:max-w-full sm:p-4">
        <div className="flex gap-3 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-full sm:w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2 sm:gap-5 ">
                <div className="flex-auto sm:text-5xl text-2xl font-bold leading-7 text-white">
                  Alexis Martinez
                </div>
                <div className="flex-auto sm:text-2xl text-sm font-medium leading-7 text-zinc-600 max-md:max-w-full">
                  ( game influencer )
                </div>
              </div>
              <div className="sm:mt-10 sm:mr-10 sm:text-xl text-base font-medium leading-7 text-zinc-500 max-md:max-w-full">
                A little bit of everything! ✨ My main goal is to create
                authentic, positive content that people can enjoy. I have created
                content for about two years on both Instagram (150k+) and Tiktok
                (785k+) will work with you to create something you are proud of
                too! 🧡 Thank you so much, this helps to support me as a graduate
                student.
              </div>
            </div>
          </div>
          <div className="sm:flex hidden flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center max-md:mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8905ab17ebb76d56fd4858a6816b71cad762f0d6467990442e41dc692d8e9c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="aspect-[1.1] w-[104px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c53bb2fb7b5c21a18cc5ef6823b823d72b3b9df6ea873c5a6e367964f719736?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="mt-6 aspect-[1.1] w-[104px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-full sm:w-[78%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-xl font-medium leading-7 text-white max-md:mt-8">
                    <div>Alexis is a Top Creator</div>
                    <div className="mt-4 text-base leading-5 text-zinc-600">
                      Top creators have completed multiple orders and have a high
                      rating from brands.
                    </div>
                    <div className="mt-12 max-md:mt-10">
                      Alexis is a Top Creator
                    </div>
                    <div className="mt-4 text-base leading-5 text-zinc-600">
                      Top creators have completed multiple orders and have a high
                      rating from brands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex gap-2.5 mt-7">
      <div className=" my-auto text-base font-medium leading-7 text-zinc-600">
        Total Followers :
      </div>
      <div className="flex-auto text-2xl font-bold leading-7 text-white">
        150K +
      </div>
    </div>

    <div className="sm:hidden flex gap-2.5 self-start mt-7">
      <div className="my-auto text-base font-medium leading-7 text-zinc-600">
        Games :
      </div>
      <div className="text-2xl font-bold leading-7 text-white">20</div>
    </div>

    <div className="sm:hidden flex gap-3 mt-6 text-xl font-medium leading-7 text-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3158f73b31cb0d8774f160572952546e0236f7e2d1588a49713442c04f0800?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 aspect-square w-[51px]"
      />
      <div className="flex-auto my-auto">
        <span className="font-bold">4.5</span> Rate
      </div>
    </div>

      <div className="sm:hidden flex gap-5 justify-between mt-11 font-medium">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d0534aa1726423a6774ef564aee23b7ad553bc007fdeac9e4f0b817a1ae7e16?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-square w-[70px]"
        />
        <div className="flex flex-col self-start mt-2">
          <div className="text-xl leading-7 text-white">
            Alexis is a Top Creator
          </div>
          <div className="mt-3.5 text-xs leading-4 text-zinc-600">
            Top creators have completed multiple orders and have a high rating
            from brands.
          </div>
        </div>
    </div>
    <div className="sm:hidden flex gap-5 justify-between mt-8 font-medium">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/093faa02adbf61301322cc8ec230c3eda887d1bee34c850b2e1ffc97e45ea173?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 aspect-square w-[70px]"
      />
      <div className="flex flex-col self-start mt-2">
        <div className="text-xl leading-7 text-white">
          Alexis is a Top Creator
        </div>
        <div className="mt-3.5 text-xs leading-4 text-zinc-600">
          Top creators have completed multiple orders and have a high rating
          from brands.
        </div>
      </div>
    </div>

      <div className="flex gap-5 flex-row justify-between sm:mt-12 sm:ml-4 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-center self-start max-md:flex-wrap">
          <div className="sm:flex hidden gap-5 self-stretch my-auto">
            <div className="grow my-auto text-xl font-medium leading-7 text-zinc-600">
              Total Followers :
            </div>
            <div className="flex-auto text-3xl font-bold leading-7 text-white">
              150K +
            </div>
          </div>
          <div className="sm:flex hidden gap-5 self-stretch my-auto">
            <div className="my-auto text-xl font-medium leading-7 text-zinc-600">
              Games :
            </div>
           <div className="text-3xl font-bold leading-7 text-white">20</div>
          </div>
          <div className="sm:flex hidden gap-3 self-stretch text-xl font-medium leading-7 text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3158f73b31cb0d8774f160572952546e0236f7e2d1588a49713442c04f0800?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-square w-[51px]"
            />
            <div className="my-auto">
              <span className="font-bold">4.5</span> Rate
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-3.5 text-sm font-semibold sm:ml-24 leading-5 text-white whitespace-nowrap max-md:flex-wrap sm:mr-32">
          <div className="flex overflow-hidden relative flex-col gap-2 px-9 py-4   max-md:px-5">
            <img
              loading="lazy"
              src="/Rectangle.png"
              className=" absolute inset-0 size-full"
            />
            <div className='flex gap-2'>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[1.04] w-[23px] relative justify-center flex"
              />
              <a href="" className='justify-center flex relative'>1.5K</a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col gap-2 px-9 py-4 aspect-[2.54] fill-zinc-800 max-md:px-5">
            <img
              loading="lazy"
              src="/Rectangle.png"
              className=" absolute inset-0 size-full"
            />
            <div className='flex gap-2'>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[1.04] w-[23px] relative justify-center flex"
              />
              
              <a href="" className='justify-center flex relative'>1.5K</a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col gap-2 px-8 py-5 aspect-[2.48] fill-zinc-800 max-md:px-5">
            <img
              loading="lazy"
              src="/Rectangle.png"
              className=" absolute inset-0 size-full"
            />
            <div className='flex gap-2'>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-7 aspect-[1.75] relative justify-center flex"
              />
              <a href="" className='justify-center flex relative'>1.5K</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-3xl font-bold leading-7 text-white max-md:mt-10 max-md:max-w-full ml-2">
        Packages
      </div>

      <div className="flex gap-2 sm:gap-5 mt-9 max-w-full sm:text-xl text-base font-light leading-7 text-white whitespace-nowrap w-[300px] sm:w-[586px] ">
        <div className="cursor-pointer hover:text-lime-400">
        <div className="justify-center px-6 py-5 sm:px-12 sm:py-7 text-xl hover:font-bold leading-7 text-white hover:text-black whitespace-nowrap bg-neutral-900 hover:bg-lime-400 rounded-xl">
         <a href="">All</a> 
        </div>
          
        </div>
        <div className="cursor-pointer hover:text-lime-400">
          <div className="justify-center  px-6 py-5 sm:px-12 sm:py-7 text-xl hover:font-bold leading-7 text-white hover:text-black whitespace-nowrap bg-neutral-900 hover:bg-lime-400 rounded-xl">
           <a href="">Games</a> 
          </div>
          
        </div>
        <div className="cursor-pointer hover:text-lime-400">
          <div className="justify-center  px-6 py-5 sm:px-12 sm:py-7 text-xl hover:font-bold leading-7 text-white hover:text-black whitespace-nowrap bg-neutral-900 hover:bg-lime-400 rounded-xl">
           <a href="">Web3</a> 
          </div>
          
        </div>
      </div>


      <div className="mt-9 max-md:max-w-full">
        <div className="sm:flex hidden gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 py-11 w-full font-bold rounded-3xl cursor-pointer border hover:border-lime-400 border-solid bg-neutral-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="text-3xl leading-7 text-white max-md:max-w-full">
                Game Collaboration
              </div>
              <div className="mt-6 text-base font-medium leading-7 text-zinc-600 max-md:max-w-full">
                High quality games
              </div>
              <div className="flex gap-5 justify-between mt-12 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="overflow-hidden relative flex-col justify-center px-11 py-6 text-base leading-7 aspect-[2.72] fill-lime-400 text-neutral-900 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04fe46149e346cda5fe6fe85179956b90011e0ae8332714fd78d6d621a2b880?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <a href="" className='relative flex justify-center px-4'>Continue</a>
                </div>
                <div className="my-auto text-3xl leading-7 text-white">$4000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 py-11 w-full font-bold rounded-3xl border cursor-pointer hover:border-lime-400 bg-neutral-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="text-3xl leading-7 text-white max-md:max-w-full">
                Game Collaboration
              </div>
              <div className="mt-6 text-base font-medium leading-7 text-zinc-600 max-md:max-w-full">
                High quality games
              </div>
              <div className="flex gap-5 justify-between mt-12 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="overflow-hidden relative flex-col justify-center px-11 py-6 text-base leading-7 aspect-[2.72] fill-lime-400 text-neutral-900 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04fe46149e346cda5fe6fe85179956b90011e0ae8332714fd78d6d621a2b880?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="object-cover absolute inset-0 size-full"
                />
                <a href="" className='relative flex justify-center px-4'>Continue</a>
              </div>
                
                <div className="my-auto text-3xl leading-7 text-white">$4000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col px-6 py-7 mt-4 w-full text-xl font-bold leading-7 text-white rounded-2xl border border-lime-400 border-solid bg-neutral-900">
        <div>Game Collaboration</div>
        <div className="mt-4 text-xs font-medium leading-7 text-zinc-600">
          High quality games
        </div>
        <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
          <a href="">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/898de9be478bd84d81397dc3c1fb402709472e703b2d87435a8750524a1cb1ee?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 max-w-full aspect-[2.7] w-[117px]"
            />
          </a>
          <div className="my-auto">$4000</div>
        </div>
      </div>
      <div className="sm:hidden flex flex-col px-6 py-7 mt-4 w-full text-xl font-bold leading-7 text-white rounded-2xl border border-lime-400 border-solid bg-neutral-900">
        <div>Game Collaboration</div>
        <div className="mt-4 text-xs font-medium leading-7 text-zinc-600">
          High quality games
        </div>
        <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
          <a href="">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/898de9be478bd84d81397dc3c1fb402709472e703b2d87435a8750524a1cb1ee?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 max-w-full aspect-[2.7] w-[117px]"
          />
          </a>
          <div className="my-auto">$4000</div>
        </div>
      </div>

      <div className="mt-24 text-3xl font-bold leading-7 text-white max-md:mt-10 max-md:max-w-full">
        Portfolio
      </div>

      <div>
        {/* <Profilecard /> */}
        <PhotoGrid />
        <PhotoGrid />
        <PhotoGrid />
        <PhotoGrid />
      </div>
    </div>
  )
}

export default Profile
