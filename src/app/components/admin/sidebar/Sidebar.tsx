"use client";
import * as React from "react";
import NavItem from "./Navitem";
import type { NavItemProps } from "./Navitem";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
const Sidebar: React.FC = () => {
  const { isAdmin } = useAppSelector((state) => state.user);

  const navArray = navItems;
  return (
    <div className="flex gap-0 mx-auto h-full">
      {/* <aside className="flex flex-col  justify-between items-center px-5 pt-6 pb-20 shadow-sm bg-[#161616]">
       
      </aside> */}
      <nav className="flex flex-col border-x-[1px] border-zinc-700 grow shrink-0 px-2 py-2 min-h-screen text-sm font-bold leading-6 shadow-sm basis-0 bg-[#161616] text-zinc-400 w-fit">
        <Link href={"/"}>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 aspect-square  mt-4 ml-4 text-2xl"
          />
        </Link>
        <h2 className="self-start mt-14 ml-4 text-2xl leading-9 text-white">
          General
        </h2>
        {/* <div className="flex flex-col justify-center px-4 py-2 mt-10 w-full text-white whitespace-nowrap bg-neutral-950">
          <div className="flex gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/938431739d34ec419a97ebdb9928580782363b23969e32d3b5fd3cfe91b529b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              alt="Dashboard Icon"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="flex-auto">Dashboard</div>
          </div>
        </div> */}
        {navArray.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            link={item.link}
          />
        ))}
      </nav>
    </div>
  );
};
export default Sidebar;

const navItems: NavItemProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a15415a290cb12d0ed5aaeb2c403d4dda5301873212ffdbf98be7865ac13c12?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    label: "Dashboard",
    link: "/admin",
  },

  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a15415a290cb12d0ed5aaeb2c403d4dda5301873212ffdbf98be7865ac13c12?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    label: "Add Game Details",
    link: "/admin/add-game-details",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a15415a290cb12d0ed5aaeb2c403d4dda5301873212ffdbf98be7865ac13c12?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    label: "Add Tournament",
    link: "/admin/add-tournaments",
  },
];
