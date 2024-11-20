"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const steps = [
  { id: "pinjaman", label: "Pinjaman", path: "/edit-application/pinjaman" },
  { id: "pekerjaan", label: "Pekerjaan", path: "/edit-application/pekerjaan" },
  { id: "alamat", label: "Alamat", path: "/edit-application/alamat" },
  {
    id: "informasi-asset",
    label: "Informasi Asset",
    path: "/edit-application/informasi-asset",
  },
  {
    id: "informasi-tambahan",
    label: "Informasi Tambahan",
    path: "/edit-application/informasi-tambahan",
  },
  {
    id: "upload-dokumen",
    label: "Upload Dokumen",
    path: "/edit-application/upload-dokumen",
  },
  { id: "review", label: "Review", path: "/edit-application/review" },
  {
    id: "pilihan-produk",
    label: "Pilihan Produk & Bank",
    path: "/edit-application/pilihan-produk",
  },
  {
    id: "bank-officer",
    label: "Bank Officer",
    path: "/edit-application/bank-officer",
  },
  {
    id: "surat-keterangan",
    label: "Surat Keterangan",
    path: "/edit-application/surat-keterangan",
  },
  { id: "pdf-cpa", label: "PDF CPA", path: "/edit-application/pdf-cpa" },
  { id: "summary", label: "Summary", path: "/edit-application/summary" },
];

export default function ProgressStepper() {
  //   const pathname = "/edit-application/alamat";
  const pathname = usePathname();

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const currentStepIndex = steps.findIndex((step) =>
    pathname.includes(step.id)
  );

  const stepWidth = containerWidth / steps.length;
  const progressWidth = (currentStepIndex + 1) * stepWidth - stepWidth / 2;

  return (
    <div className="w-full bg-white" ref={containerRef}>
      <div className="relative px-4 py-8">
        <div className="relative flex items-start justify-between">
          {/* Progress Line */}
          <div className="absolute left-0 top-[15px] h-[2px] w-full bg-gray-200">
            <div
              className="h-full bg-[#1e4d78] transition-all duration-300"
              style={{
                width: `${progressWidth}px`,
                maxWidth: "100%",
              }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center"
              style={{ width: `${100 / steps.length}%` }}
            >
              <div
                // href={step.path}
                className={cn(
                  "relative z-10 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 text-xs sm:text-sm font-semibold",
                  index === currentStepIndex
                    ? "border-[#5AA1E3] bg-[#5AA1E3] text-white"
                    : index < currentStepIndex
                    ? "border-[#1e4d78] bg-[#1e4d78] text-white"
                    : "border-gray-400 bg-white text-gray-400"
                )}
              >
                <span className="sr-only">{`Step ${index + 1}`}</span>
              </div>
              <span
                className={cn(
                  "mt-2 text-[5px] sm:text-[8px] lg:text-sm font-medium text-center break-words",
                  index === currentStepIndex
                    ? "text-[#5AA1E3]"
                    : index < currentStepIndex
                    ? "text-[#1e4d78]"
                    : "text-gray-400"
                )}
                style={{
                  width: "100%",
                  maxWidth: `${stepWidth}px`,
                  minHeight: "2.5em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
