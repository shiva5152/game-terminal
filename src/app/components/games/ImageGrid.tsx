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
    <div className="mt-11 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {gridItems.map((item, index) => (
          <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden relative flex-col grow items-start px-5 pt-64 pb-7 text-2xl font-bold leading-7 text-white aspect-[1.08] max-md:pt-10 max-md:mt-5">
              <img
                loading="lazy"
                src={item.imageUrl}
                className="object-cover absolute inset-0 size-full"
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
