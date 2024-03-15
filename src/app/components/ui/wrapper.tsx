import React from "react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log("waraper");
  return (
    <div className="  flex flex-col overflow-hidden items-center w-full ">
      {children}
    </div>
  );
};

export default Wrapper;
