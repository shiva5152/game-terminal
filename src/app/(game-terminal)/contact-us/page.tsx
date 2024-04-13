import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";
import React from "react";

const inputStyles =
  "w-full px-4 py-2 border-0 rounded-3xl bg-black shadow-2xl focus:outline-none focus:border-lime-400 focus:border";

const page = () => {
  return (
    <div className="flex my-16">
      <div className="w-1/2 flex justify-center items-start flex-col">
        <h1 className={cn(sectionHeading, "text-start")}>Contact Us</h1>
        <p className={cn(sectionSubHeading, "text-justify w-[80%]")}>
          If you have any questions regarding the processing of your data or
          wish to exercise your rights, contact us at contact@gameterminal.io.
          You also have the right to file a complaint with the data protection
          supervisory authority.
        </p>
      </div>
      <div className="w-1/2 bg-[#161616]  rounded-2xl neomorphic-eco p-10 text-white">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lime-400 mb-2 ms-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={inputStyles}
              //className="w-full px-4 py-2 border-0 rounded-3xl bg-black focus:outline-none focus:border-lime-400 focus:border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lime-400 mb-2 ms-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputStyles}
              //className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lime-400 mb-2 ms-2">
              Message
            </label>
            <textarea
              id="message"
              className={inputStyles}
              //className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
          {/* Add more input fields here */}
          <button className="overflow-hidden text-[0.65rem] md:text-xs max-w-[118px] md:max-w-[159px] relative button-bg flex-col justify-center font-bold items-center px-8 py-8 mt-4 text-center text-black whitespace-nowrap aspect-[3.12] fill-lime-400 leading-[233%] max-md:px-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
