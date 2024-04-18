import React from 'react';

const ImageGrid = () => {
  // Array of grid items
  const gridItems = [
    {
      name: "Undead Blocks",
      imageUrl: "/undead.png",
    },
    {
      name: "Shrapnel",
      imageUrl: "/sharpnel.png",
    },
    {
      name: "Arsenal",
      imageUrl: "/arsenal.png",
    },
    {
      name: "Out Post",
      imageUrl: "/outpost.png",
    },
  ];

  return (
    <div className="sm:mt-11 flex-row flex sm:w-full ">
      <div className="sm:flex flex flex-row sm:gap-5 sm:w-full gap-2">
        {gridItems.map((item, index) => (
          <div key={index} className="flex sm:flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden relative flex-col grow items-start px-1 sm:px-5 pt-64 pb-7 text-xs sm:text-2xl font-bold leading-7 text-white aspect-[1.08] max-md:pt-10 max-md:mt-5">
              <img
                loading="lazy"
                src={item.imageUrl}
                className="object-cover absolute rounded-2xl inset-0 size-full"
              />
              <div className='absolute'>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
