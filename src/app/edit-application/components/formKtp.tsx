import React from "react";
import { Input } from "@/components/ui/input";
import { ErrorMessage } from "@hookform/error-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

type Props = {
  title: string;
  form: any;
  schema: any;
};
export default function FormKtp({ title, form, schema }: Props) {
  return (
    <div className=" mb-5">
      <div className=" *:p-8 w-full border-2 border-gray-300">
        <div className=" w-full bg-[#005274] text-white text-[30px] font-bold">
          {title}
        </div>
        <div className=" lg:flex lg:gap-10 w-full">
          <div className=" w-full lg:w-[50%] flex flex-col gap-5">
            <div>
              <label htmlFor="#" className=" text-[22px] font-semibold">
                Alamat Lengkap (Jalan, Komplek, RT/RW)
              </label>
              <Input
                type="text"
                placeholder="--Isi Alamat Lengkap--"
                className=" mt-2 h-[50px] text-[22px] text-black border-2 border-[#C1C1C1] w-full"
                {...form.register(`${schema}.fullAddress`)}
              />
              <ErrorMessage
                errors={form.formState.errors}
                name={`${schema}.province`}
              />
            </div>

            <div>
              <label htmlFor="#" className=" text-[22px] font-semibold">
                Provinsi
              </label>
              <Controller
                control={form.control}
                name={`${schema}.province`}
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <SelectTrigger className=" mt-2 h-[50px] border-2 border-[#C1C1C1] w-full">
                        <SelectValue placeholder="--Pilih Provinsi--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banten">Banten</SelectItem>
                        <SelectItem value="jakarta">Jakarta</SelectItem>
                        <SelectItem value="jawa barat">Jawa Barat</SelectItem>
                        <SelectItem value="jawa timur">Jawa Timur</SelectItem>
                        <SelectItem value="jawa tengah">Jawa Tengah</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <span className="text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label htmlFor="#" className=" text-[22px] font-semibold">
                Kecamatan
              </label>
              <Controller
                control={form.control}
                name={`${schema}.district`}
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <SelectTrigger className=" mt-2 h-[50px] border-2 border-[#C1C1C1] w-full">
                        <SelectValue placeholder="--Pilih Kecamatan--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="setu">Setu</SelectItem>
                        <SelectItem value="babakan">Babakan</SelectItem>
                        <SelectItem value="pamulang">Pamulang</SelectItem>
                        <SelectItem value="pondok benda">
                          Pondok Benda
                        </SelectItem>
                        <SelectItem value="ciater">Ciater</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <span className="text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className=" w-full lg:w-[50%] flex flex-col gap-5">
            <div>
              <label htmlFor="#" className=" text-[22px] font-semibold">
                Kode POS
              </label>
              <Input
                type="number"
                placeholder="--Isi Kode POS--"
                className=" mt-2 h-[50px] text-[22px] text-black border-2 border-[#C1C1C1] w-full"
                {...form.register(`${schema}.postalCode`)}
              />
              <ErrorMessage
                errors={form.formState.errors}
                name={`${schema}.postalCode`}
              />
            </div>

            <div>
              <label htmlFor="#" className=" text-[22px] font-semibold">
                Kabupaten / Kota
              </label>
              <Controller
                control={form.control}
                name={`${schema}.city`}
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <SelectTrigger className=" mt-2 h-[50px] border-2 border-[#C1C1C1] w-full">
                        <SelectValue placeholder="--Pilih Kota--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tangerang selatan">
                          Tangerang Selatan
                        </SelectItem>
                        <SelectItem value="tangerang">Tangerang</SelectItem>
                        <SelectItem value="kabupaten tangerang">
                          Kab. Tangerang
                        </SelectItem>
                        <SelectItem value="bandung">Bandung</SelectItem>
                        <SelectItem value="bogor">Bogor</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <span className="text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label htmlFor="#" className=" text-[22px] font-semibold">
                Kelurahan
              </label>
              <Controller
                control={form.control}
                name={`${schema}.subDistrict`}
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <SelectTrigger className=" mt-2 h-[50px] border-2 border-[#C1C1C1] w-full">
                        <SelectValue placeholder="--Pilih Kelurahan--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="setu">Setu</SelectItem>
                        <SelectItem value="babakan">Babakan</SelectItem>
                        <SelectItem value="bakti jaya">bakti jaya</SelectItem>
                        <SelectItem value="pondok miri">Pondok Miri</SelectItem>
                        <SelectItem value="rawakalong">rawakalong</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <span className="text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
