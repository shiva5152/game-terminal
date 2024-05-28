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
              className={`${pathName === "/marketplace" && "text-lime-400"}`}
              href={"/marketplace"}
            >
              Kol market place
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathName === "/marketplace/tournament" && "text-lime-400"
              }`}
              href={"/marketplace/tournament"}
            >
              Tournament
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathName === "/marketplace/weapons" && "text-lime-400"
              }`}
              href={"/marketplace/weapons"}
            >
              Weapons
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default layout;
