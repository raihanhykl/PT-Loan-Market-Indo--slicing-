"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  AlignJustify,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  StickyNote,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

export default function Sidebar({}: Props) {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="relative">
      <div
        className={`${
          open ? "flex" : "hidden"
        } md:flex flex-col gap-4 w-[270px] h-fit border-gray-200 border-2 px-[10px] pb-14  bg-white`}
      >
        <div
          className="flex w-full justify-center pb-5 sm:pb-10"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            width={55}
            height={55}
            className=" h-[55px] w-[55px] sm:w-[110px] sm:h-[110px]"
          />
        </div>
        <Button
          variant={pathname === "/" ? "default" : "secondary"}
          className={`flex w-full justify-start items-center h-[40px] sm:h-[60px] ${
            pathname === "/" ? "" : "hover:bg-blue-50"
          }`}
          onClick={() => router.push("/")}
        >
          <Image
            src={pathname === "/" ? "/Home.svg" : "/house.png"}
            alt="Vercel Logo"
            width={100}
            height={100}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">Dashboard</p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Contact.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">Contact</p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Loan.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">Loan</p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-between items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <div className=" flex justify-start items-center gap-2">
            <Image
              src="/Product.svg"
              alt="Vercel Logo"
              width={15}
              height={15}
              className=" h-[15px] sm:h-[35px] sm:w-[35px]"
            />
            <p className=" text-[12px] sm:text-[20px] font-[500]">Product</p>
          </div>
          {<ChevronDown className="h-10 w-10 opacity-50" />}
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Bank.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">Bank</p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Performance.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">
            Credit Scoring
          </p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Help.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">FAQ's</p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Layers.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">Pipeline</p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Layers.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">
            Pipeline Developer
          </p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-start items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <Image
            src="/Management.svg"
            alt="Vercel Logo"
            width={15}
            height={15}
            className=" h-[15px] sm:h-[35px] sm:w-[35px]"
          />
          <p className=" text-[12px] sm:text-[20px] font-[500]">
            Marketing Tools
          </p>
        </Button>
        <Button
          variant={"secondary"}
          className=" flex w-full justify-between items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
        >
          <div className=" flex justify-start items-center gap-2">
            <Image
              src="/Whatsapp.svg"
              alt="Vercel Logo"
              width={15}
              height={15}
              className=" h-[15px] sm:h-[35px] sm:w-[35px]"
            />
            <p className=" text-[12px] sm:text-[20px] font-[500]">Whatsapp</p>
          </div>
          {<ChevronDown className="h-10 w-10 opacity-50" />}
        </Button>
        <div className={` ${openEdit && "border-2 border-gray-300"}`}>
          <Button
            variant={"secondary"}
            className=" flex w-full justify-between items-center h-[40px] sm:h-[60px] text-black hover:bg-blue-50"
            onClick={() => setOpenEdit(!openEdit)}
          >
            <div className=" flex justify-start items-center gap-2">
              <Image
                src="/Management.svg"
                alt="Vercel Logo"
                width={15}
                height={15}
                className=" h-[15px] sm:h-[35px] sm:w-[35px]"
              />
              <p className=" text-[12px] sm:text-[20px] font-[500]">
                Edit Application
              </p>
            </div>
            {openEdit ? (
              <ChevronUp className="h-10 w-10 opacity-50" />
            ) : (
              <ChevronDown className="h-10 w-10 opacity-50" />
            )}
          </Button>
          <div className=" px-5">
            <Button
              variant={
                pathname === "/edit-application/alamat"
                  ? "default"
                  : "secondary"
              }
              className={` ${
                openEdit ? "flex" : "hidden"
              } w-full justify-start items-center h-[40px] sm:h-[60px] text-black${
                pathname === "/edit-application/upload-dokumen"
                  ? ""
                  : "hover:bg-blue-50"
              }`}
              onClick={() => router.push("/edit-application/alamat")}
            >
              <p className=" text-[12px] sm:text-[20px] font-[500]">Alamat</p>
            </Button>
            <Button
              variant={
                pathname === "/edit-application/upload-dokumen"
                  ? "default"
                  : "secondary"
              }
              className={` ${
                openEdit ? "flex" : "hidden"
              } w-full justify-start items-center h-[40px] sm:h-[60px] text-black ${
                pathname === "/edit-application/upload-dokumen"
                  ? ""
                  : "hover:bg-blue-50"
              }`}
              onClick={() => router.push("/edit-application/upload-dokumen")}
            >
              <p className=" text-[12px] sm:text-[20px] font-[500]">
                Upload Dokumen
              </p>
            </Button>
          </div>
        </div>
      </div>
      <div
        className={` absolute md:hidden top-0 right-[-35px] border-2 border-slate-500 cursor-pointer bg-slate-400 h-9 w-9 flex justify-center items-center`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <ArrowLeft stroke="white" strokeWidth={2} />
        ) : (
          <ArrowRight stroke="white" strokeWidth={2} />
        )}
      </div>
    </div>
  );
}
