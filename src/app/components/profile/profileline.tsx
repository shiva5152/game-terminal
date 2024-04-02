'use client'
import React from 'react'
import { useState } from 'react';
import Editpopup from './editpopup';

const profileline = () => {

  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditButtonClick = () => {
    setShowEditPopup(true);
  };
  const handleClosePopup = () => {
    setShowEditPopup(false);
  };
  return (
    <div className='relative'>
      {showEditPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" p-8 ">
            <Editpopup closePopup={handleClosePopup} />
          </div>
        </div>
      )}
      <div className="flex gap-5 mt-8  w-[100%] max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a951bddc256309369d1c982538890d11cd7f7606e4be389e3f7c118b467df91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 max-w-full aspect-square w-[123px] max-md:mt-7"
            />
          </div>
          <div className="flex flex-col ml-10 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-3.5 font-bold text-white max-md:flex-wrap">
                <div className="grow text-3xl leading-6">Arshya Moghimi</div>
                <div className="flex-auto my-auto text-sm leading-6">
                  <span className="font-medium">Rank :</span>{" "}
                  <span className="text-white">1234567th</span>
                </div>
              </div>
              <div className="mt-4 text-base leading-6 text-zinc-600 max-md:max-w-full">
                Write something about yourself here to let people know who you are
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 my-auto text-base max-md:flex-wrap">
        <div className="flex gap-1 my-auto leading-6 text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3b4f3fc05abf4396b7619f9e36e11be32621032f81352e4237a894d385e39c1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-6 aspect-square"
          />
          <div>
            Joined on <span className="font-bold text-white">February 12</span>,
            <span className="text-white">2024</span>
          </div>
        </div>
        <div className="overflow-hidden relative flex-col justify-center px-14 py-5 font-bold text-center aspect-[3.98] fill-lime-400 leading-[129%] text-neutral-900 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3a9a922445cef3cf28cfce81a651de7bf32d6e223ead855556ac67cc678d4a9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <a  className='absolute '><button onClick={handleEditButtonClick}>Edit my Profile</button></a>Edit my Profile
        </div>
        {/* {showEditPopup && <Editpopup closePopup={handleClosePopup} />} */}
      </div>
    </div>
    </div>
  )
}

export default profileline