"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  return (
    <div className=" h-[70px] sm:h-[99px] flex justify-between items-center px-5 sm:px-10 w-full bg-white">
      <h1 className=" text-[20px] sm:text-[45px]">
        {pathname === "/" ? "Dashboard" : "Edit Application"}
      </h1>
      <div className="flex border-x-2 border-gray-200 items-center  *:px-5">
        <div className=" flex items-center gap-4 px-5 border-r-2 border-gray-200">
          <Image
            src="/Notification.png"
            alt="Vercel Logo"
            width={20}
            height={20}
            className=" w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
          />
          <Image src="/Arrow.svg" alt="Vercel Logo" width={15} height={7} />
        </div>
        <div className=" flex items-center gap-4">
          <p className=" text-[10px] sm:text-[20px]">YOHANES AFFENDY</p>
          <Image src="/Arrow.svg" alt="Vercel Logo" width={15} height={7} />
        </div>
      </div>
    </div>
  );
}
