'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SidepropOption {
  title: string;
  imageSrc: string;
}

const SidepropWeapons: React.FC = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const sidepropData: SidepropOption[] = [
    { title: 'Champions Arena', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&' },
    { title: 'Echoes of Empire', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a526060cb11f5fe3e19fa21719141f9d08a17354f21f8ea4676491113452aff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&' },
    { title: 'Eternal Paradox', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a526060cb11f5fe3e19fa21719141f9d08a17354f21f8ea4676491113452aff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&' },
    { title: 'GRIT', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a526060cb11f5fe3e19fa21719141f9d08a17354f21f8ea4676491113452aff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&' },
    { title: 'Gala Games', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a526060cb11f5fe3e19fa21719141f9d08a17354f21f8ea4676491113452aff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&' },
    { title: 'Legacy', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a526060cb11f5fe3e19fa21719141f9d08a17354f21f8ea4676491113452aff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&' },
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    router.push(`/weapons/${option}`);
  };

  return (
    <div className="flex flex-col px-4 pt-4 pb-7 w-full text-sm bg-neutral-900 rounded-[30px]">
      <div className="flex gap-2 py-1 text-xs whitespace-nowrap border border-solid border-stone-900 rounded-[50px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/313bd314415eea8be7858f2188020d417d8f107c6287b3916b8addf563aaf34f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-square w-[34px]"
        />
        <div className="flex-auto text-white my-auto">Search...</div>
      </div>
      {sidepropData.map((option, index) => (
        <div key={index} className="flex gap-2 mt-8 cursor-pointer" onClick={() => handleOptionSelect(option.title)}>
          <img
            loading="lazy"
            src={option.imageSrc}
            className="shrink-0 w-6 aspect-square"
          />
          <div className="flex-auto text-white my-auto">{option.title}</div>
        </div>
      ))}
      <div className="flex gap-5 mt-12 justify-center px-6 py-7 text-xl font-medium text-white whitespace-nowrap rounded-3xl bg-neutral-900 max-w-[50%]]">
        <div className="mr-40">Rarity</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe9613a0986fb082c4ab5f821ca32759c9e1f5376c555b4ff6158cccf4b3185?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6  aspect-square"
        />
      </div>
      <div className="flex gap-5 justify-center px-6 py-7 text-xl font-medium text-white whitespace-nowrap rounded-3xl bg-neutral-900 max-w-[327px]">
      <div className="mr-28">Availability</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe9613a0986fb082c4ab5f821ca32759c9e1f5376c555b4ff6158cccf4b3185?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 w-6 aspect-square"
      />
    </div>
    <div className="flex gap-5 justify-center px-6 py-7 text-xl font-medium text-white whitespace-nowrap rounded-3xl bg-neutral-900 max-w-[327px]">
      <div className="mr-40">Type</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe9613a0986fb082c4ab5f821ca32759c9e1f5376c555b4ff6158cccf4b3185?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 w-6 aspect-square"
      />
    </div>
    </div>
  );
}

export default SidepropWeapons;
