import React from 'react'

const Imageline = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between px-5 mt-20 w-full text-center max-w-[1100px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef29d20fc851328696ee8b88b67185ca98b3a1e7362e79d4ffddc8903ebc4551?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-9 aspect-square"
        />
        <div className="mt-4 text-xl font-bold leading-7 text-lime-400">
          24.645.745
        </div>
        <div className="self-stretch mt-5 text-xs font-medium leading-4 text-white">
          Total $GTT Distributed per-day
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c2cc322d6a77beeaa7a8c19f47a53f8c88946f3167bdbd56011ab6fbd54cbfd?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-9 aspect-square"
        />
        <div className="mt-4 text-xl font-bold leading-7 text-lime-400">
          10,000
        </div>
        <div className="self-stretch mt-4 text-xs font-medium leading-4 text-white">
          Nodes Online Last Cycle
        </div>
      </div>
      <div className="flex flex-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a86be65009df1621a37d2da0e455db517232ae1f34ae3b6543abdd3c5346ed73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="self-center w-9 aspect-square"
        />
        <div className="mt-3.5 text-xl font-bold leading-7 text-lime-400">
          $43,233,765
        </div>
        <div className="mt-4 text-xs font-medium leading-4 text-white">
          Current Price (USD)
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/50c1df6cf7c4739ff8c6adb188d682f73cc41bcc72ebd1086be22617e9066b76?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-9 aspect-square"
        />
        <div className="mt-4 text-xl font-bold leading-7 text-lime-400">
          23,544
        </div>
        <div className="self-stretch mt-4 text-xs font-medium leading-4 text-white">
          Node Licenses Remaining
        </div>
      </div>
      <div className="flex flex-col items-center self-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d0462a93bef1ae296e11ce897a77f4acc5eab64ccf59ac2ff311b5bff114233?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-9 aspect-square"
        />
        <div className="mt-4 text-xl font-bold leading-7 text-lime-400">90</div>
        <div className="self-stretch mt-5 text-xs font-medium leading-4 text-white">
          Before Node Price Raises
        </div>
      </div>
    </div>
    </div>
  )
}

export default Imageline
