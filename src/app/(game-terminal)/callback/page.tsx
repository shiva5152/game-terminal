import React from "react";
import Temp from "./temp";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Temp />
    </Suspense>
  );
};

export default page;
