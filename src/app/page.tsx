"use client";
import Image from "next/image";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ChartComponent from "./(dashboard)/components/info";
import NotificationComponent from "./(dashboard)/components/notification";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const smallScreen = useMediaQuery({ query: "(max-width: 1024px)" });

  const data = {
    loanApproved: 2,
    loanAchieved: 14000000000,
  };

  const dataPercentage = {
    loanApproved: (data.loanApproved / 5) * 100,
    loanAchieved: (data.loanAchieved / 5000000000) * 100,
  };
  const pieChart = (percentage: number) => {
    const inner = smallScreen ? 40 : 60;
    const outer = smallScreen ? 50 : 80;
    const data = [
      { value: Math.min(percentage, 100) },
      { value: Math.max(100 - percentage, 0) },
    ];

    return (
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={inner}
            // innerRadius={40}
            outerRadius={outer}
            // outerRadius={50}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            height={180}
          >
            <Cell fill={"#17A9E2"} />
            <Cell fill={"#c1c1c1"} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 gap-4 sm:gap-6 md:gap-8 lg:gap-10 bg-white">
        <Image
          src="/Avatar.jpg"
          alt="Vercel Logo"
          width={150}
          height={150}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-[#17A9E2] font-semibold text-center sm:text-left">
            YOHANES AFFENDY (JOJO)
          </h1>
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-2 sm:border-r-2 sm:border-gray-200 sm:pr-2 md:pr-4 lg:pr-6 xl:pr-10">
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]">
                <Image
                  src="/Office.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-[45px] xl:h-[45px]"
                />
                Loan Market Office Dev
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]">
                <Image
                  src="/id.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-[45px] xl:h-[45px]"
                />
                LM9990001
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-10">
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]">
                <Image
                  src="/Mail.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-[45px] xl:h-[45px]"
                />
                it@loanmarket.co.id
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]">
                <Image
                  src="/Phone.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-[45px] xl:h-[45px]"
                />
                6281234567890
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-5 mx-4 sm:mx-5 md:mx-6 xl:mx-10">
        <div className="bg-white rounded-lg shadow-sm p-5 border-2 border-gray-200 h-[100px] sm:h-[120px] md:h-[130px] lg:h-[140px] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <Image
            src="/ContactGroup.png"
            alt="Vercel Logo"
            width={70}
            height={70}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <div className="text-center">
            <h1 className="text-base sm:text-lg md:text-xl  2xl:text-[20px] font-semibold">
              CONTACT
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-[25px] text-[#17A9E2] font-bold">
              51
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 h-[100px] sm:h-[120px] md:h-[130px] lg:h-[140px] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <Image
            src="/LoanGroup.png"
            alt="Vercel Logo"
            width={70}
            height={70}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <div className="text-center">
            <h1 className="text-base sm:text-lg md:text-xl  2xl:text-[20px] font-semibold">
              Loan
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-[25px] text-[#17A9E2] font-bold">
              56
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 h-[100px] sm:h-[120px] md:h-[130px] lg:h-[140px] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <Image
            src="/ShopingGroup.png"
            alt="Vercel Logo"
            width={70}
            height={70}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <div className="text-center">
            <h1 className="text-base sm:text-lg md:text-xl  2xl:text-[20px] font-semibold">
              Product
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-[25px] text-[#17A9E2] font-bold">
              80
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 h-[100px] sm:h-[120px] md:h-[130px] lg:h-[140px] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <Image
            src="/BankGroup.png"
            alt="Vercel Logo"
            width={70}
            height={70}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <div className="text-center">
            <h1 className="text-base sm:text-lg md:text-xl  2xl:text-[20px] font-semibold">
              Bank
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-[25px] text-[#17A9E2] font-bold">
              30
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 lg:row-span-4 sm:col-span-2 lg:col-span-4 xl:col-span-2">
          <NotificationComponent />
        </div>
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 sm:col-span-2 lg:row-span-3 lg:col-span-4 flex flex-col sm:flex-row justify-evenly py-4 sm:py-5">
          <div className="flex flex-col items-center justify-center w-full sm:w-[50%] mb-4 sm:mb-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] font-bold text-center">
              PINJAMAN DISETUJUI
            </h1>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
              {pieChart(dataPercentage.loanApproved)}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  {dataPercentage.loanApproved.toFixed(0)}%
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] text-center">
              {data.loanApproved}/5 Pinjaman telah disetujui
            </p>
          </div>
          <div className="hidden sm:block h-auto w-[2px] bg-gray-300"></div>
          <div className="flex flex-col items-center justify-center w-full sm:w-[50%] px-5">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] font-bold text-center">
              PINJAMAN DISETUJUI
            </h1>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
              {pieChart(dataPercentage.loanAchieved)}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  {dataPercentage.loanAchieved.toFixed(0)}%
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] text-center">
              Rp{data.loanAchieved.toLocaleString("id-ID")}/5.000.000.000
              Pinjaman telah disetujui
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 sm:col-span-2 lg:row-span-4 lg:col-span-4">
          <ChartComponent />
        </div>
      </div>
    </>
  );
}
