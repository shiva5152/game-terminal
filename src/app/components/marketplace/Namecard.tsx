'use client'
import React from 'react';

interface NamecardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Namecard: React.FC<NamecardProps> = ({ name, description, imageUrl, price }) => {
  return (
    <div className="flex relative flex-col sm:px-4 px-2 mt-5 w-full">
      <img
        loading="lazy"
        src={imageUrl}
        className="w-full"
      />
      <div className="flex p-4">
        <div className="grow sm:text-2xl text-sm font-bold leading-7 text-white">{name}</div>
        <div className="flex-auto text-xs leading-7 text-zinc-600">(influencer)</div>
      </div>
      <div className=" text-xs p-4 leading-3 text-zinc-600">{description}</div>
      <div className="flex gap-1.5 ml-2 sm:gap-1.5 w-[40%] sm:w-full sm:mt-4 sm:ml-4">
        <div className='justify-center flex px-2 gap-2'>
        <img
          loading="lazy"
          src="/Brect.png"
          className="shrink-0 absolute justify-center flex aspect-[2.8]  w-[56px] sm:w-[76px]"
        />
        <div className='relative sm:justify-center justify-start text-xs sm:text-sm text-white flex'>Hot</div>
        </div>
        <div className='justify-center item-center ml-7  flex px-2' >
        <img
          loading="lazy"
          src="/Brect.png"
          className="shrink-0 absolute justify-center item-center flex aspect-[3.2]  w-[56px] sm:w-[76px]"
        />
        <div className='flex relative justify-center text-xs sm:text-sm text-white item-center '>Hindi</div>
        </div>
        <div className='justify-center ml-7 sm:flex hidden px-2 '>
        <img
          loading="lazy"
          src="/Brect.png"
          className="shrink-0 absolute justify-center flex aspect-[3.2]  w-[30px] sm:w-[76px]"
        />
        <div className='sm:flex hidden relative justify-center text-sm text-white '>Hot</div>
        </div>
        <div className='justify-center ml-7 sm:flex hidden px-2'>
        <img
          loading="lazy"
          src="/Brect.png"
          className="shrink-0 absolute justify-center flex aspect-[3.2]  w-[30px] sm:w-[76px]"
        />
        <div className='sm:flex hidden relative justify-center text-sm text-white '>Hindi</div>
        </div>
      </div>

      <div className="flex gap-2 mt-4 sm:text-xs text-xs sm:flex-wrap font-semibold leading-5 text-white whitespace-nowrap">
        {/* <div className="flex overflow-hidden justify-start sm:justify-center relative flex-col flex-1 gap-1 sm:px-4 px-4 sm:py-0 py-0 aspect-[3.5] fill-zinc-800"  style={{ backgroundImage: `url('/srect.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%', paddingBottom: '0.25rem' }}>
          <div className='flex sm:gap-2 mt-1'>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[1.04] sm:w-[20px] sm:h-[20px] w-[10px] h-[10px] mt-1.5 sm:mt-0  items-center relative flex "
            />
            <a href="" className='flex items-center sm:justify-center justify-start relative'>1.5K</a>
          </div>
        </div> */}
        

        <div className="flex overflow-hidden relative justify-center flex-col flex-1 gap-1 px-4 aspect-[] fill-zinc-800" style={{ backgroundImage: `url('/srect.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%', paddingBottom: '0.25rem' }}>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bdb6b64c618cc5c68e093d943c23e51b2a255b6f8561700a7f15baaaa870a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="object-cover absolute inset-0 size-full"
        /> */}
        <div className='flex justify-center  gap-1 mt-1'>
        <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/123b6f3579492a82f87b082eff21a68f0126c042439a63f29e4b1261583b096f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[1.04] sm:w-[20px] sm:h-[20px] w-[10px] h-[10px] mt-1.5 sm:mt-0  items-center relative flex "
            />

          <a href="" className='flex items-center'>1.5K</a>
        </div>
      </div>

      <div className="flex overflow-hidden relative justify-center flex-col flex-1 gap-1 px-4 aspect-[] fill-zinc-800" style={{ backgroundImage: `url('/srect.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%', paddingBottom: '0.25rem' }}>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bdb6b64c618cc5c68e093d943c23e51b2a255b6f8561700a7f15baaaa870a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="object-cover absolute inset-0 size-full"
        /> */}
        <div className='flex justify-center  gap-1 mt-1'>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 aspect-[1.04] sm:w-[20px] sm:h-[20px] w-[10px] h-[10px] mt-1.5 sm:mt-0 items-center relative flex"
          />

          <a href="" className='flex items-center'>1.5K</a>
        </div>
      </div>

      {/* <div className="flex overflow-hidden justify-between sm:justify-center relative flex-col flex-1 gap-1 px-4  aspect-[2.8] fill-zinc-800"  style={{ backgroundImage: `url('/srect.png')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%',paddingBottom: '0.25rem'}}>
        <div className='flex sm:gap-2 mt-1'>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 sm:w-7 sm:h-5 w-3.5 h-2.5 mt-1.5 sm:mt-0 aspect-[1.52] items-center relative justify-center flex"
              />
              <a href="" className='sm:justify-center  flex relative'>1.5K</a>
            </div>
      </div> */}
       <div className="flex overflow-hidden relative justify-center flex-col flex-1 gap-1 px-4 aspect-[] fill-zinc-800" style={{ backgroundImage: `url('/srect.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%', paddingBottom: '0.25rem' }}>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bdb6b64c618cc5c68e093d943c23e51b2a255b6f8561700a7f15baaaa870a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="object-cover absolute inset-0 size-full"
        /> */}
        <div className='flex justify-center  gap-1 mt-1'>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34b6ad0d5f280aacf83ed3712d05327fc756ae53355263caf3c2649aaf50a050?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/853cc4bb721235e561f3b45b82572741fc66bbe98cab92a714902fc6ea3bb9a8?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 aspect-[1.04] sm:w-[20px] sm:h-[20px] w-[10px] h-[10px] mt-1.5 sm:mt-0 items-center relative flex"
          />

          <a href="" className='flex items-center'>1.5K</a>
        </div>
      </div>
      
      
    </div>

      <div className="flex gap-5 justify-between mt-4">
        <div className="text-base leading-5 text-right text-white">
          <span className="font-semibold text-white text-xl sm:text-3xl">$</span>
          <span className="font-semibold text-xl sm:text-3xl">{price}</span>
        </div>
        <div className="my-auto text-xs leading-7 text-zinc-600">(Web3)</div>
      </div>
      {/* <div className="overflow-hidden mt-4 relative flex flex-col justify-center px-4 py-3 text-base leading-7 aspect-[5] fill-lime-400 text-neutral-900 max-md:px-5" style={{ backgroundImage: `url('/greenrect.png')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}> */}
         {/* <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04fe46149e346cda5fe6fe85179956b90011e0ae8332714fd78d6d621a2b880?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
           className="object-cover  absolute inset-0 size-full"
          /> */}
           <a href="" className=
           " flex flex-col justify-center text-center p-4 text-neutral-900 max-md:px-5" style={{ backgroundImage: `url('/g8.png')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}>
            see profile</a>
         {/* </div> */}
         {/* <div className="overflow-hidden mt-4 relative flex-col justify-center px-4 py-3 text-base leading-7 aspect-[5] fill-lime-400 text-neutral-900 max-md:px-5">
          <a href="" className="relative text-white flex justify-center px-5 font-bold background-image-link " style={{ backgroundImage: `url('/greenrect.png')`, width: '200px'}}>
            see profile
          </a>
        </div> */}
    </div>
  );
};

export default Namecard;
