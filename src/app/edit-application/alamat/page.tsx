"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import FormKtp from "../components/formKtp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addressFormSchema } from "@/schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import ProgressStepper from "../components/progress";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      ktpAddress: {},
    },
  });
  const clearFormKTP = () => {
    form.reset({
      ...form.getValues(),
      ktpAddress: {
        city: "",
        district: "",
        fullAddress: "",
        postalCode: "",
        province: "",
        subDistrict: "",
      },
    });
  };
  const clearFormDomisili = () => {
    form.reset({
      ...form.getValues(),
      domicileAddress: {
        city: "",
        district: "",
        fullAddress: "",
        postalCode: "",
        province: "",
        subDistrict: "",
      },
    });
  };
  const onSubmit = async (data: z.infer<typeof addressFormSchema>) => {
    alert("berhasil, check console.log");
    console.log(data);
  };
  return (
    <>
      <ProgressStepper />
      <div className=" p-5 gap-5">
        <div className="flex justify-between items-center w-full mb-5">
          <Button className=" rounded-[100%] w-[40px] md:w-[60px] h-[40px] md:h-[60px] px-[10px]">
            <ChevronLeft width={40} height={50} size={30} strokeWidth={7} />
          </Button>
          <h1 className=" text-[30px] md:text-[40px] font-bold">Alamat</h1>
          <Button
            className=" rounded-[100%] w-[40px] md:w-[60px] h-[40px] md:h-[60px] px-[10px]"
            onClick={() => router.push("/edit-application/upload-dokumen")}
          >
            <ChevronRight strokeWidth={7} />
          </Button>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" bg-white rounded-lg shadow-sm border-2 border-gray-20 w-full mt-5 p-8"
        >
          <FormKtp title="Data KTP" form={form} schema={"ktpAddress"} />
          <div className=" flex justify-between w-full mb-5">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className=" h-6 w-6" />
              <label
                htmlFor="terms"
                className="text-[22px] font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Domisili Sesuai KTP
              </label>
            </div>
            <Button
              variant={"destructive"}
              className=" font-semibold"
              onClick={clearFormKTP}
            >
              Clear
            </Button>
          </div>
          <FormKtp
            title="Data Domisili"
            form={form}
            schema={"domicileAddress"}
          />
          <div className=" flex justify-between w-full mb-5">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className=" h-6 w-6" />
              <label
                htmlFor="terms"
                className="text-[22px] font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Domisili Sesuai KTP
              </label>
            </div>
            <Button
              variant={"destructive"}
              className=" font-semibold"
              onClick={clearFormDomisili}
            >
              Clear
            </Button>
          </div>
          <FormKtp
            title="Data Alamat Tempat Bekerja"
            form={form}
            schema={"workAddress"}
          />
          <div className=" flex justify-end">
            <Button type="submit" className=" bg-[#005274] self-center">
              Update
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
