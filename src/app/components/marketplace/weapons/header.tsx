import React, { useState } from 'react';

const Header = () => {
  const [showPopularityOptions, setShowPopularityOptions] = useState(false);
  const [showAllOptions, setShowAllOptions] = useState(false);

  return (
    <div className='sm:p-10'>
      <div className="flex gap-20 justify-center sm:justify-between  sm:ml-0 px-0.5 mt-16 w-full text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="my-auto sm:flex hidden text-2xl font-bold">Filters</div>
        <div className="flex gap-5 justify-center sm:justify-between items-start text-base font-medium max-md:flex-wrap">
          {/* Popularity dropdown */}
          <div className="relative">
            <div
              className="flex gap-5 justify-center sm:justify-between self-start p-4 text-sm rounded-xl bg-neutral-900 cursor-pointer"
              onClick={() => setShowPopularityOptions(!showPopularityOptions)}
            >
              Popularity
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72a8a38fd45152ddbbc3ee409dd3e5347b44a3703bffec4b06f6b6bad407ac3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
            {showPopularityOptions && (
              <div className="absolute z-10 mt-2 w-32 ml-56 bg-black shadow-lg border ">
                <div className="py-1">
                  <div className="flex items-center px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">
                    Option 11
                  </div>
                  <div className="flex items-center px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">
                    Option 2
                  </div>
                  {/* Add more options as needed */}
                </div>
              </div>
            )}
          </div>
          
          {/* All dropdown */}
          <div className="relative">
            <div
              className="flex gap-5 justify-between self-start p-4 text-sm rounded-xl bg-neutral-900 cursor-pointer"
              onClick={() => setShowAllOptions(!showAllOptions)}
            >
              All
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72a8a38fd45152ddbbc3ee409dd3e5347b44a3703bffec4b06f6b6bad407ac3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
            {showAllOptions && (
              <div className="absolute z-10 mt-2 w-32 bg-black shadow-lg border ">
                <div className="py-1">
                  <div className="flex items-center px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">
                    Option 1
                  </div>
                  <div className="flex items-center px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">
                    Option 2
                  </div>
                  {/* Add more options as needed */}
                </div>
              </div>
            )}
          </div>
          
          <div className="my-auto sm:flex hidden cursor-pointer hover:text-lime-400">Hot</div>
          <div className="my-auto sm:flex hidden cursor-pointer hover:text-lime-400">New</div>
          <div className="my-auto sm:flex hidden cursor-pointer hover:text-lime-400">Recommended</div>
          {/* <div className="flex flex-col cursor-pointer self-end mt-5 hover:text-lime-400">
            <div>Recommended</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3dde745815f959f0df0dc0b0eaeeaacbd588e1a41a2c545638c1a1bb3e9ad3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="self-center mt-4 aspect-[3.57] fill-lime-400 w-[25px]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
