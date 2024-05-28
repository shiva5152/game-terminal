"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  return (
    <div>
      <div>
        <ul className="flex gap-5  w- full justify-center">
          <li>
            <Link
              className={`${pathName === "/profile" && "text-lime-400"}`}
              href={"/profile"}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathName === "/profile/marketplace" && "text-lime-400"
              }`}
              href={"/profile/marketplace"}
            >
              Marketplace
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default layout;
