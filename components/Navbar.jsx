"use client";
import React from "react";
import Image from "next/image";
import useStateStore from "@/store/stateStore";
import Link from "next/link";

const Navbar = () => {
  const { open } = useStateStore();
  return (
    <div className="absolute top-0 left-0 w-screen overflow-hidden">
      <div className="flex items-center justify-between py-4 px-4">
        <Link href={"/"}>
          <Image
            src={"/logos/logo.png"}
            width={720}
            height={480}
            alt="logo"
            className="object-cover w-10"
          />
        </Link>

        <Image
          onClick={() => open()}
          src={"/icons/menu.svg"}
          width={360}
          height={240}
          alt="menu"
          className="object-cover w-10 cursor-pointer"
        />
      </div>
    </div>
  );
};
export const SideMenu = () => {
  const { sideMenuOpen, close } = useStateStore();
  return (
    <>
      <div
        className={`w-screen z-10 h-screen bg-white overflow-hidden fixed top-0 left-0 text-black  transition ${sideMenuOpen ? "translate-x-0" : "translate-x-full"} ease-in-out p-8`}
      >
        <div className="w-full h-full flex flex-col gap-4">
          <Image
            onClick={() => close()}
            src={"/icons/close.svg"}
            width={360}
            height={240}
            alt="close"
            className="object-cover w-10 cursor-pointer"
          />
          <span>Project</span>
          <span>About Us</span>
          <span>Testimoinals</span>
          <span>Contact Us</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
