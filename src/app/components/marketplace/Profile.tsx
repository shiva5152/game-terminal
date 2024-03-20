import React from 'react'
import Photogrid from './PhotoGrid'

const Profile = () => {
  return (
    <div className='p-10'>
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
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
      </div>

      <div className="mt-9 max-md:max-w-full p-4">
        <div className="flex gap-3 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap">
                <div className="flex-auto text-5xl font-bold leading-7 text-white">
                  Alexis Martinez
                </div>
                <div className="flex-auto text-2xl font-medium leading-7 text-zinc-600 max-md:max-w-full">
                  ( game influencer )
                </div>
              </div>
              <div className="mt-10 mr-10 text-xl font-medium leading-7 text-zinc-500 max-md:max-w-full">
                A little bit of everything! ✨ My main goal is to create
                authentic, positive content that people can enjoy. I have created
                content for about two years on both Instagram (150k+) and Tiktok
                (785k+) will work with you to create something you are proud of
                too! 🧡 Thank you so much, this helps to support me as a graduate
                student.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
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
                <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
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

      <div className="flex gap-5 justify-between mt-12 ml-4 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-center self-start max-md:flex-wrap">
          <div className="flex gap-5 self-stretch my-auto">
            <div className="grow my-auto text-xl font-medium leading-7 text-zinc-600">
              Total Followers :
            </div>
            <div className="flex-auto text-3xl font-bold leading-7 text-white">
              150K +
            </div>
          </div>
          <div className="flex gap-5 self-stretch my-auto">
            <div className="my-auto text-xl font-medium leading-7 text-zinc-600">
              Games :
            </div>
            <div className="text-3xl font-bold leading-7 text-white">20</div>
          </div>
          <div className="flex gap-3 self-stretch text-xl font-medium leading-7 text-white">
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
        <div className="flex gap-3.5 text-sm font-semibold leading-5 text-white whitespace-nowrap max-md:flex-wrap mr-56">
          <div className="flex overflow-hidden relative flex-col gap-2 px-9 py-4 aspect-[2.48] fill-zinc-800 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc45e23bfc24c936f211c189b29e3b251e91f62fe8d4ce498228e02769715f8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[1.04] w-[23px] absolute"
            />
            <div className="absolute ml-6 ">1.5K</div>
          </div>
          <div className="flex overflow-hidden relative flex-col gap-2 px-9 py-4 aspect-[2.54] fill-zinc-800 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc45e23bfc24c936f211c189b29e3b251e91f62fe8d4ce498228e02769715f8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[1.04] w-[23px] absolute"
            />
            <div className="relative my-auto">1.5K</div>
          </div>
          <div className="flex overflow-hidden relative flex-col gap-2 px-8 py-5 aspect-[2.48] fill-zinc-800 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bdabe59326793e706e5a0e7ae637f3c06c12916230ebaeb4a5b77d1001c245a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-7 aspect-[1.75] absolute"
            />
            <div className="relative my-auto">1.5K</div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-3xl font-bold leading-7 text-white max-md:mt-10 max-md:max-w-full ml-2">
        Packages
      </div>

      <div className="flex gap-5 mt-9 max-w-full text-xl font-light leading-7 text-white whitespace-nowrap w-[586px] max-md:flex-wrap">
        <div className="hover-wrapper">
          <div className="justify-center items-center px-16 py-7 rounded-xl bg-neutral-900 max-md:px-5">
            All
          </div>
          <div className="hover-content">
            <div className="green-btn">All</div>
          </div>
        </div>
        <div className="hover-wrapper">
          <div className="justify-center items-center px-16 py-7 rounded-xl bg-neutral-900 max-md:px-5">
            Games
          </div>
          <div className="hover-content">
            <div className="green-btn">Games</div>
          </div>
        </div>
        <div className="hover-wrapper">
          <div className="justify-center items-center px-16 py-7 rounded-xl bg-neutral-900 max-md:px-5">
            Web3
          </div>
          <div className="hover-content">
            <div className="green-btn">Web3</div>
          </div>
        </div>
      </div>


      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 py-11 w-full font-bold rounded-3xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
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
                    <button className='text-black absolute mb-10'>Continue</button>
                  </div>
                <div className="my-auto text-3xl leading-7 text-white">$4000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 py-11 w-full font-bold rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
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
                  <button className='text-black absolute mb-10'>Continue</button>
                </div>
                <div className="my-auto text-3xl leading-7 text-white">$4000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-3xl font-bold leading-7 text-white max-md:mt-10 max-md:max-w-full">
        Portfolio
      </div>

      <div>
        <Photogrid />
        <Photogrid />
        <Photogrid />
      </div>
    </div>
  )
}

export default Profile
