/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import FormKtp from "../components/formKtp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addressFormSchema } from "@/schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "module";
import { Checkbox } from "@/components/ui/checkbox";
import ProgressStepper from "../components/progress";
import { useRouter } from "next/navigation";
import FormDokumen from "../components/formDokumen";

type Props = {};

const dataPribadi = [
  {
    title: "Fotokopi KTP Pemohon",
    placeholder: "--Upload Fotokopi KTP Pemohon--",
    key: "ktpPemohon",
  },
  {
    title: "Fotokopi KTP Suami / Istri",
    placeholder: "--Upload Fotokopi KTP Suami / Istri--",
    key: "ktpPasangan",
  },
  {
    title: "Fotokopi Kartu Keluarga",
    placeholder: "--Upload Fotokopi Kartu Keluarga--",
    key: "kartuKeluarga",
  },
  {
    title: "Fotokopi Akte Nikah/Cerai",
    placeholder: "--Upload Fotokopi Akte Nikah/Cerai--",
    key: "akteNikahCerai",
  },
  {
    title: "Fotokopi NPWP Pemohon",
    placeholder: "--Upload Fotokopi NPWP Pemohon--",
    key: "npwpPemohon",
  },
  {
    title:
      "Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)",
    placeholder: "--Upload Akta Pisah Harga Notaril--",
    key: "aktaPisahHarga",
  },
];

const dataJaminan = [
  {
    title: "Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir",
    placeholder: "--Upload Fotokopi Dokumen Jaminan--",
    key: "dokumenJaminan",
  },
  {
    title:
      "Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan",
    placeholder: "--Upload PDF Surat Pengajuan Bank--",
    key: "suratPengajuanBank",
  },
  {
    title: "Fotokopi Perjanjian Kredit (Jika Over Kredit)",
    placeholder: "--Upload Fotokopi Perjanjian Kredit--",
    key: "perjanjianKredit",
  },
  {
    title: "Dokumen PPJB (Jika Developer)",
    placeholder: "--Upload Dokumen PPJB--",
    key: "dokumenPPJB",
  },
];

const dataKeuangan = [
  {
    title: "Fotokopi SPT / PPh21",
    placeholder: "--Upload Fotokopi SPT / PPh21--",
    key: "sptPph21",
  },
  {
    title: "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir",
    placeholder: "--Upload Asli Slip Gaji 1 Bulan Terakhir--",
    key: "slipGaji",
  },
  {
    title: "Fotokopi R/K atau tabungan 6 bulan terakhir",
    placeholder: "--Upload Fotokopi R/K 6 Bulan Terakhir--",
    key: "rekeningTabungan",
  },
  {
    title: "Surat Keterangan / Rekomendasi Perusahaan",
    placeholder: "--Upload Surat Keterangan Perusahaan--",
    key: "suratRekomendasi",
  },
];

const dataTambahan = [
  {
    title: "File Kekurangan 1",
    placeholder: "--Upload File Kekurangan 1--",
    key: "fileKekurangan1",
  },
  {
    title: "File Kekurangan 2",
    placeholder: "--Upload File Kekurangan 2--",
    key: "fileKekurangan2",
  },
];

export default function Page({}: Props) {
  const [files, setFiles] = useState<{ key: string; file: File }[]>([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      ktpAddress: {
        fullAddress: "anjay",
      },
    },
  });
  const handleAddFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles((pref) => (pref ? [...pref, { key, file }] : [{ key, file }]));
    }
  };
  const onSubmit = async () => {
    alert("berhasil, check console.log");
    console.log(files);
  };
  return (
    <>
      <ProgressStepper />
      <div className=" p-5 gap-5">
        <div className="flex justify-between items-center w-full mb-5">
          <Button
            className=" rounded-[100%] w-[40px] md:w-[60px] h-[40px] md:h-[60px] px-[10px]"
            onClick={() => router.push("/edit-application/alamat")}
          >
            <ChevronLeft width={40} height={50} size={30} strokeWidth={7} />
          </Button>
          <h1 className=" text-[30px] md:text-[40px] font-bold">
            Upload Dokumen
          </h1>
          <Button className=" rounded-[100%] w-[40px] md:w-[60px] h-[40px] md:h-[60px] px-[10px]">
            <ChevronRight strokeWidth={7} />
          </Button>
        </div>
        <div className=" bg-white rounded-lg shadow-sm border-2 border-gray-20 w-full mt-5 p-8">
          <FormDokumen
            title="Data Pribadi"
            template={dataPribadi}
            handleFileChange={handleAddFile}
            files={files}
          />
          <FormDokumen
            title="Data Jaminan"
            template={dataJaminan}
            handleFileChange={handleAddFile}
            files={files}
          />
          <FormDokumen
            title="Data Keuangan"
            template={dataKeuangan}
            files={files}
            handleFileChange={handleAddFile}
          />
          <FormDokumen
            title="Data Tambahan"
            template={dataTambahan}
            handleFileChange={handleAddFile}
            files={files}
          />
          <div className=" flex justify-end">
            <Button
              onClick={() => onSubmit()}
              className=" bg-[#005274] self-center"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
