import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CircleChevronDown,
  CircleChevronRight,
  UploadIcon,
} from "lucide-react";

type Props = {
  title: string;
  template: {
    title: string;
    placeholder: string;
    key: string;
  }[];
  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => void;
  files: { key: string; file: File }[];
};
export default function FormDokumen({
  title,
  template,
  handleFileChange,
  files,
}: Props) {
  const [hide, setHide] = useState(false);
  return (
    <div className=" mb-5">
      <div className=" *:p-8 w-full border-2 border-gray-300">
        <button
          className=" w-full bg-[#005274] text-white text-[30px] flex gap-5 items-center font-bold"
          onClick={() => setHide(!hide)}
        >
          {hide ? (
            <CircleChevronRight height={30} width={30} />
          ) : (
            <CircleChevronDown height={30} width={30} />
          )}
          {title}
        </button>

        <div className={` w-full flex flex-col ${hide ? "hidden" : ""} gap-5`}>
          {template.map((item, index) => (
            <div key={index} className=" flex justify-between">
              <label
                htmlFor="#"
                className=" text-[12px] sm:text-[16px] lg:text-[22px] font-semibold w-[60%]"
              >
                {item.title}
              </label>
              <Label
                htmlFor={item.key}
                className=" h-[50px] text-[8px] sm:text-[12px] lg:text-[18px] px-2 text-[#646567] border-[1px] border-[#C1C1C1] w-[40%] flex items-center justify-between"
              >
                {(files && files.find((f) => f.key === item.key)?.file.name) ||
                  item.placeholder}
                <UploadIcon
                  width={30}
                  height={30}
                  className=" w-[20px] md:w-[30px] h-[20px] md:h-[30px]"
                />
                <Input
                  name={item.key}
                  id={item.key}
                  type="file"
                  accept="image/*"
                  about="Upload your profile photo"
                  onChange={(e) => handleFileChange(e, item.key)}
                  className="hidden"
                />
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
