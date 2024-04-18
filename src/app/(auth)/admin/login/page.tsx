"use client";
import React from "react";
import { useState, ChangeEvent, useEffect } from "react";

const AdminLogin = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    if (email) {
      // setText(email);
      console.log(email);
      localStorage.setItem("email", email);
    }
  }, []);

  const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText(newText);
  };
  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText2(newText);
  };

  return (
    <div className="pl-20 h-screen w-full bg-neutral-900 max-md:pl-5">
      <div className="flex gap-5 justify-center items-center max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4648f5f26ab374966b901f5e12922b1b3a7e37c0a629a1e6309b9838b78829c?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="max-w-full aspect-[4.55] mx-auto w-[245px]"
            />
            <div className="flex gap-5 justify-between items-center px-4 py-7 mt-20 text-base rounded-xl border border-solid border-zinc-800 text-zinc-600 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              {/* <div className="flex-auto leading-[150%]">Enter your Email</div>
              <div className="font-semibold leading-6">
                0<span className=" text-zinc-600">/100</span>
              </div> */}
              <input
                type="text"
                value={text}
                onChange={handleInputChange1}
                className="flex-auto px-3 py-2 text-white bg-transparent focus:outline-none focus:border-lime-400"
                placeholder="Enter your Email"
                maxLength={100}
              />
              <div className="leading-6 text-zinc-600">
                {text.length} <span className=" text-zinc-600">/100</span>
              </div>
            </div>
            <div className="flex gap-5 justify-between items-center px-4 py-7 mt-5 text-base rounded-xl border border-solid border-zinc-800 text-zinc-600 max-md:flex-wrap max-md:max-w-full">
              {/* <div className="flex-auto leading-[150%]">
                Enter your Password
              </div>
              <div className="font-semibold leading-6">
                0<span className=" text-zinc-600">/100</span>
              </div> */}
              <input
                type="text"
                value={text2}
                onChange={handleInputChange2}
                className="flex-auto px-3 py-2 text-white bg-transparent focus:outline-none focus:border-lime-400"
                placeholder="Enter your Password"
                maxLength={100}
              />
              <div className="leading-6 flex justify-center items-center text-zinc-600">
                {text2.length} <span className=" text-zinc-600">/100</span>
              </div>
            </div>
            <div className="flex gap-5 justify-between items-center  mt-10 font-bold text-center max-md:flex-wrap max-md:max-w-full">
              <div className="overflow-hidden relative flex-col justify-center mx-auto items-center px-16 py-6 text-base leading-5 whitespace-nowrap aspect-[3] fill-lime-400 text-neutral-900 w-[189px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f66ba5492e220be54ce10361b7f5e5816c089348c77a5014d1039c1ec3000b3?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="object-cover absolute inset-0 size-full"
                />
                <button onClick={() => {}} className="absolute">
                  Login
                </button>{" "}
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
