import React from "react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log("waraper");
  return (
    <div className="px-5 md:px-9 flex flex-col overflow-hidden items-center w-full max-w-[90rem]">
      {children}
    </div>
  );
};

export default Wrapper;
