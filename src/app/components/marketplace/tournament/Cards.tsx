import React from 'react'

const Cards = () => {
  return (
    <div>
      <div className="mt-40 w-full max-w-[1368px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start py-8 pr-20 pl-8 w-full font-bold rounded-3xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl leading-5 text-white max-md:max-w-full">
              Referral Rewards
            </div>
            <div className="mt-6 text-sm leading-4 text-zinc-600 w-[447px] max-md:max-w-full">
              Existing Node owners can share their referral code and earn
              additional rewards in MYRIA when a referral purchases a Myria Node
              License.
            </div>
            <div className="overflow-hidden relative flex flex-col justify-center px-3 py-8 mt-8 text-base leading-5 text-center aspect-[3.5] fill-lime-400 text-neutral-900 max-md:px-5" style={{ backgroundImage: `url('/greenrect.png')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}>
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1953dd84b55cb5f083694416bc8a65463eed982e223c1a2985d87947b828c1c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="object-cover absolute inset-0 size-full"
              /> */}
              <a className='relative flex justify-center'>Buy a Node</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow py-8 pr-4 pl-8 w-full rounded-3xl border border-lime-400 border-solid bg-neutral-900 max-md:pl-5 max-md:mt-10 max-md:max-w-full" >
            <div className="text-3xl font-bold leading-5 text-white max-md:max-w-full">
              GTT Token Address
            </div>
            <div className="mt-6 text-sm leading-4 text-zinc-600 max-md:max-w-full">
              The offical MYRIA token address is:
            </div>
            <div className="flex gap-2.5 mt-6 text-base whitespace-nowrap max-md:flex-wrap">
              <div className="grow justify-center px-5 py-6 font-medium text-white rounded-xl border border-solid border-zinc-800 leading-[150%] w-fit max-md:max-w-full" >
                0xa0ef786bf476fe0810408caba05e536ac800ff86
              </div>
              <div className="overflow-hidden flex  relative flex-col justify-center px-12 py-5 my-auto font-bold text-center aspect-[2.8] fill-lime-400 leading-[129%] text-neutral-900 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd531b229f9830d8dfc55793cfbe60f120c2265ce23cfb1bff1642caedf4bd8a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="object-cover absolute inset-0 size-full"
                />
               <div className='relative justify-center flex mt-4'> Copy</div> Copy
              </div>
            </div>
            <div className="mt-4 text-xs leading-6 text-lime-400 max-md:max-w-full">
              You can also view the address on Etherscan by{" "}
              <span className="text-lime-400">clicking here.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards
