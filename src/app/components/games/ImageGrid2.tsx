import React from 'react';

const ImageGrid2 = () => {
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
    <div>
      <div className="flex flex-row gap-3 mt-11 w-full h-full text-xl font-bold leading-7 text-white max-md:flex-wrap ">
        {gridItems.map((item, index) => (
          <div key={index} className="overflow-hidden relative flex flex-row items-start px-5 pt-32 pb-7 whitespace-nowrap aspect-[1.55] max-md:pt-10">
            <img
              loading="lazy"
              src={item.imageUrl}
              // srcSet={`${item.imageUrl}?width=100 100w, ${item.imageUrl}?width=200 200w, ${item.imageUrl}?width=400 400w, ${item.imageUrl}?width=800 800w, ${item.imageUrl}?width=1200 1200w, ${item.imageUrl}?width=1600 1600w, ${item.imageUrl}?width=2000 2000w`}
              className="object-cover absolute rounded-2xl inset-0 size-full"
            />
            <div className='absolute'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid2;
