"use client";
import React from "react";
import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

const page = () => {
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

  const handleGoogle = async () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  const handleFacebook = async () => {
    window.location.href = "http://localhost:8000/auth/facebook";
  };

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:8000/addemail", { text });
      alert("Email added successfully!");
    } catch (error) {
      console.error("Error adding email:", error);
      alert("Failed to add email. Please try again.");
    }
  };

  return (
    <div className="sm:pl-20 p-4 h-screen w-full bg-neutral-900 ">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4648f5f26ab374966b901f5e12922b1b3a7e37c0a629a1e6309b9838b78829c?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="max-w-full aspect-[4.55] w-[245px]"
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
            <div className="flex gap-5 justify-center sm:justify-between items-center  mt-10 font-bold text-center max-md:flex-wrap max-md:max-w-full">
              <div className="overflow-hidden relative flex-col justify-center items-center px-16 py-6 text-base leading-5 whitespace-nowrap aspect-[3] fill-lime-400 text-neutral-900 w-[189px] max-md:px-5">
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
              <div className="flex-auto my-auto text-sm leading-5 text-lime-400">
                <span className=" text-zinc-600">Don’t have any account?</span>{" "}
                <div>
                  <button className="cursor-pointer hover hover:text-lime-300 hover:text-bold">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7632f246a2bf2de51869c7c539eeb82371a629a8271b6db87e26b517a63fc6db?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="mt-10 w-full stroke-[1px] stroke-neutral-600 max-md:max-w-full"
            /> */}
            <img src="/loginvector.png" alt="" className="sm:hidden flex mt-2 w-full"/>
            <div className="flex gap-5 self-center mt-6">
              <button
                onClick={handleGoogle}
                className="cursor-pointer hover:border-lime-400 "
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/460dffe244e9411540fecca95056aa280e356683641d19eb0edd96223da93756?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 aspect-[1.47] w-[90px]"
                />
              </button>

              <button
                onClick={handleFacebook}
                className="cursor-pointer hover:border-lime-400 "
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97ae05609c6aff216125d2f6f1828e63dd29b0f16cb9e0b54b1f63bf6243c409?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 aspect-[1.47] w-[90px]"
                />
              </button>
              {/* <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5f16b0b146e1dd7c39ebc5a8a1b1ac9c1eaf699f6883641f15a34fd3a29d0c?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="shrink-0 aspect-[1.47] w-[90px]"
              /> */}
            </div>
          </div>
        </div>
        <div className="sm:flex hidden h-screen overflow-y-hidden flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/425541622c59bea5d0786df11993eeea1dedb485c1fdabb451ce55fbddf0b6de?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="w-full object-cover max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
