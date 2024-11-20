import { z } from "zod";

const ktpAddress = z.object({
  fullAddress: z.string().min(1, "Alamat lengkap wajib diisi"),
  postalCode: z.string().min(1, "Kode POS wajib diisi"),
  province: z.string().min(1, "Provinsi wajib diisi"),
  city: z.string().min(1, "Kota wajib diisi"),
  district: z.string().min(1, "Kecamatan wajib diisi"),
  subDistrict: z.string().min(1, "Kelurahan wajib diisi"),
});

export const addressFormSchema = z.object({
  ktpAddress,
  domicileAddress: ktpAddress,
  workAddress: ktpAddress,
});
