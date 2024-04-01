"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setUser, setIsAuthenticatedUser } from "@/redux/features/user/slice";
import instance from "@/config/axios";

const InitialLoad = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await instance("/auth/getUser");
        console.log(data, "data");
        dispatch(setUser(data.user));
        dispatch(setIsAuthenticatedUser(true));
      } catch (error) {
        console.log(error);
        dispatch(setIsAuthenticatedUser(false));
        dispatch(setUser(null));
      }
    };
    getUser();
  }, []);
  return <span>{children}</span>;
};

export default InitialLoad;
