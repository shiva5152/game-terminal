import React from 'react'

const sidedropdown = () => {
  return (
    <div>
        <div>
          <div className="flex flex-col justify-center p-4 text-xs font-medium text-white whitespace-nowrap bg-neutral-900 max-w-[327px] rounded-[30px]">
            <div className="flex gap-2 py-1 border border-solid border-stone-900 rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c04e3dfdf790edcb12c2b519bcdb861a16c2394975878b3e7673e8ad09a16a59?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-square w-[34px]"
              />
              <div className="flex-auto my-auto">Search...</div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 text-sm font-medium text-white whitespace-nowrap bg-neutral-900 max-w-[327px] rounded-[30px]">
            <div className="flex gap-2 py-1 border border-solid border-stone-900 rounded-[50px]">
            <div className="flex-auto my-auto">Channel Filter</div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe9613a0986fb082c4ab5f821ca32759c9e1f5376c555b4ff6158cccf4b3185?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 text-sm font-medium text-white whitespace-nowrap bg-neutral-900 max-w-[327px] rounded-[30px]">
            <div className="flex gap-2 py-1 border border-solid border-stone-900 rounded-[50px]">
            <div className="flex-auto my-auto">Budget</div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe9613a0986fb082c4ab5f821ca32759c9e1f5376c555b4ff6158cccf4b3185?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 text-sm font-medium text-white whitespace-nowrap bg-neutral-900 max-w-[327px] rounded-[30px]">
            <div className="flex gap-2 py-1 border border-solid border-stone-900 rounded-[50px]">
            <div className="flex-auto my-auto">Region</div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe9613a0986fb082c4ab5f821ca32759c9e1f5376c555b4ff6158cccf4b3185?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default sidedropdown
