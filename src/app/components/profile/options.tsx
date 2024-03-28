import React from 'react';

const optionsData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b162c74a8c49031f09fc3e9c6b9f7833ffbeeaf18b812359a88ea056eb9dc939?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "M4 #456",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8b89ad2985455003cd7c3795401f872ccc6ef9fb21c56e9f0d71c9eafc584?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "W.A.S.P #453",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/672304b704abeafe85af10a2f309254a4bc3107f9d68ec9dca646020cf466427?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "UMP #21",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/672304b704abeafe85af10a2f309254a4bc3107f9d68ec9dca646020cf466427?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "UMP #21",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b162c74a8c49031f09fc3e9c6b9f7833ffbeeaf18b812359a88ea056eb9dc939?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "M4 #456",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8b89ad2985455003cd7c3795401f872ccc6ef9fb21c56e9f0d71c9eafc584?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "W.A.S.P #453",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/672304b704abeafe85af10a2f309254a4bc3107f9d68ec9dca646020cf466427?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "UMP #21",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b162c74a8c49031f09fc3e9c6b9f7833ffbeeaf18b812359a88ea056eb9dc939?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "M4 #456",
    game: "Shrapnel"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8b89ad2985455003cd7c3795401f872ccc6ef9fb21c56e9f0d71c9eafc584?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082",
    name: "W.A.S.P #453",
    game: "Shrapnel"
  },
  
];

const Options = () => {
  return (
    <div className='p-4'>
      <div className="mt-8 max-md:max-w-full">
        <div className="grid grid-cols-3 gap-5 max-md:grid-flow-row">
          {optionsData.map((item, index) => (
            <div key={index} className="flex flex-col max-md:w-full">
              <div className="overflow-hidden grow px-3 py-2 fill-neutral-900 max-md:pr-5 max-md:mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={`${item.imageSrc}?width=100 100w, ${item.imageSrc}?width=200 200w, ${item.imageSrc}?width=400 400w, ${item.imageSrc}?width=800 800w, ${item.imageSrc}?width=1200 1200w, ${item.imageSrc}?width=1600 1600w, ${item.imageSrc}?width=2000 2000w`}
                      className="grow shrink-0 max-w-full aspect-[1.1]  w-[150px] max-md:mt-6"
                    />
                  </div>
                  <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto font-bold max-md:mt-10">
                      <div className="text-xl leading-7 text-white">{item.name}</div>
                      <div className="mt-8 text-xs leading-6 text-zinc-600">Game :</div>
                      <div className="mt-4 text-base leading-6 text-white">{item.game}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;
