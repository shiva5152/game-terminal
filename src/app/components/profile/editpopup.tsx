import React from 'react'
import { useState,ChangeEvent } from 'react';

interface EditPopupProps {
  closePopup: () => void; 
}

const editpopup : React.FC<EditPopupProps> = ({ closePopup }) => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText(newText);
  };
  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText2(newText);
  };
  return (
    <div>
      <div className="flex flex-col px-10 py-10 bg-neutral-900 max-w-[603px] rounded-[45px] max-h-[680px] overflow overflow-auto max-md:px-5 ">
      <div className="flex gap-5 px-0.5 text-3xl font-semibold leading-6 text-white max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto">Edit Profile</div>
        <button onClick={closePopup}><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc28e3315fb0eb23cf66df37db5835b28a7ff3263ad166ce6ae4e17c754a198f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 border border-solid aspect-square border-zinc-800 stroke-[1px] stroke-zinc-800 w-[50px]"
        /></button>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 mt-4 rounded-2xl min-h-[153px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fc2b7ddbcf24d93adcd968b36fa29d029194f1d7ebd760f51c15b39c2457a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c3d61b02b5c136d361f1fa6bd695266aa960d35934fbc5648b5f448a1eb5151?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="aspect-square w-[61px]"
        />
      </div>
      <div className="mt-7 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa0d5cb7d9d83af2659be479fd39ba8bd60398903f61d1f8e8733b94de71ea0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 max-w-full aspect-square w-[138px] max-md:mt-7"
            />
          </div>
          <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <div className="text-2xl font-bold leading-6 text-white">
                Arshya Moghimi
              </div>
              <div className="mt-4 text-base leading-6 text-zinc-600">
                Write something about yourself here to let people know who you
                are
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center px-4 py-7 mt-10 text-base font-semibold rounded-xl hover hover:border-white border border-zinc-600 border-solid max-md:flex-wrap max-md:max-w-full">
        <input 
          type="text"
          value={text} 
          onChange={handleInputChange1} 
          className="flex-auto px-3 py-2 text-white bg-transparent focus:outline-none focus:border-lime-400"
          placeholder="Enter your text here"
          maxLength={100} />
        <div className="flex-auto text-white leading-[100%]">
          {/* Arshya Moghimi{" "} */}
        </div>
        <div className="leading-6 text-zinc-600">
          {text.length} <span className=" text-zinc-600">/100</span> 
        </div>
      </div>
      <div className="justify-center px-4 pt-7 pb-20 mt-8 rounded-xl border border-solid border-zinc-600 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <input 
            type="text"
            value={text2}
            onChange={handleInputChange2}
            className="flex-auto px-3 py-2 text-white bg-transparent focus:outline-none focus:border-lime-400"
            placeholder="Say something about yourself"
            maxLength={100} />
          <div className="text-base font-semibold leading-6 text-zinc-600">
            {text2.length} <span className="text-zinc-600">/100</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-8 text-base font-bold leading-5 text-center max-md:flex-wrap">
        <div className="overflow-hidden relative flex-col grow justify-center items-center px-16 py-7 text-white whitespace-nowrap aspect-[4.11] fill-zinc-800 w-fit max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0441248e2c8a74c7f85820757a18d6884e2b62aa447c2eafbfca9355588ef27?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
         <button onClick={closePopup} className='absolute'>Discard</button> Discard
        </div>
        <div className="overflow-hidden relative flex-col grow justify-center items-center px-16 py-6 aspect-[4.11] fill-lime-400 text-neutral-900 w-fit max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c12e237cdc8fa8812094e6983bc073f06f95b439850d2b0673ca3b5e00c85ee?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <button className='absolute'>Save Changes</button>Save Changes
        </div>
      </div>
    </div>
    </div>
  )
}

export default editpopup
