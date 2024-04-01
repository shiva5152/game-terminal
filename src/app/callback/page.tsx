"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import instance from "@/config/axios";

const page = () => {
  const router = useRouter();
  const urlParams = useSearchParams();
  const state = urlParams.get("state");

  useEffect(() => {
    if (true) {
      type RequestData = {
        code?: string;
        state: string;
        error?: string;
        error_description?: string;
      };
      const requestData: RequestData = {
        state: urlParams.get("state") as string,
      };

      if (urlParams.has("error")) {
        requestData.error = urlParams.get("error") as string;
        requestData.error_description = urlParams.get(
          "error_description"
        ) as string;
      }
      if (urlParams.has("code")) {
        requestData.code = urlParams.get("code") as string;
      }
      // console.log(requestData);
      const handleLogin = async () => {
        try {
          const isLoginSuccessful = await instance.post(
            "/auth/user",
            requestData,
            { withCredentials: true }
          );
          router.push("/");
        } catch (error) {
          console.log(error);
        }

        // if (isLoginSuccessful) router.push("/");
        // else router.push("/");
      };

      handleLogin();
    }
  }, []);

  return (
    <div className="flex justify-center w-full gap-5 h-screen flex-col items-center">
      <div className="">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8f243d9febcc8e464a8fd9568eaa354f8d4ea179818b187adb86ab1c136e82d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          alt="loading"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center gap-10 items-center ">
        <p className=" text-xl ">Authenticating</p>
        <span className="loader -mt-8"></span>
      </div>
    </div>
  );
};

export default page;
