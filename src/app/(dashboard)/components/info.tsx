// "use client";

// import * as React from "react";
// import { Label, Pie, PieChart, Cell, Sector } from "recharts";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// const RADIAN = Math.PI / 180;

// const chartData = [
//   //   { name: "BRI", value: 30, fill: "hsl(var(--chart-1))" },
//   { name: "BRI", value: 30, fill: "#4A3764" },
//   { name: "Artha Graha", value: 25, fill: "#1FFFE1" },
//   { name: "BTN", value: 20, fill: "#51C4E9" },
//   { name: "Mandiri", value: 15, fill: "#146C94" },
//   { name: "KEB Hana Bank", value: 10, fill: "#6150C1" },
// ];

// const chartConfig = {
//   BRI: {
//     label: "BRI",
//     color: "hsl(var(--chart-1))",
//   },
//   "Artha Graha": {
//     label: "Artha Graha",
//     color: "hsl(var(--chart-2))",
//   },
//   BTN: {
//     label: "BTN",
//     color: "hsl(var(--chart-3))",
//   },
//   Mandiri: {
//     label: "Mandiri",
//     color: "hsl(var(--chart-4))",
//   },
//   "KEB Hana Bank": {
//     label: "KEB Hana Bank",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;

// const renderActiveShape = (props: any) => {
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 50) * cos;
//   const my = cy + (outerRadius + 100) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 112;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text
//         x={cx}
//         y={cy}
//         dy={8}
//         textAnchor="middle"
//         fill={fill}
//         className=" text-[20px]"
//       >
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//         fontSize={20}
//       >{`${value}%`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//         fontSize={20}
//       >
//         {payload.name}
//       </text>
//     </g>
//   );
// };

// export default function ChartComponent() {
//   const [activeIndex, setActiveIndex] = React.useState(0);

//   const onPieEnter = React.useCallback(
//     (_, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );

//   return (
//     <Card className="flex flex-col h-full w-full">
//       <CardHeader className="items-center pb-0">
//         <CardTitle className="font-bold text-[30px]">
//           Top 5 Bank Approval Tertinggi
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="  pb-0 max-h-[550px] w-full flex justify-center">
//         <ChartContainer
//           config={chartConfig}
//           className=" aspect-square h-full w-full"
//         >
//           <PieChart width={700} height={700}>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               activeIndex={activeIndex}
//               activeShape={renderActiveShape}
//               data={chartData}
//               cx="50%"
//               cy="50%"
//               innerRadius={100}
//               outerRadius={180}
//               fill="#8884d8"
//               dataKey="value"
//               onMouseEnter={onPieEnter}
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.fill} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import * as React from "react";
import { Label, Pie, PieChart, Cell, Sector } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMediaQuery } from "react-responsive";

const RADIAN = Math.PI / 180;

const chartData = [
  //   { name: "BRI", value: 30, fill: "hsl(var(--chart-1))" },
  { name: "BRI", value: 30, fill: "#4A3764" },
  { name: "Artha Graha", value: 25, fill: "#1FFFE1" },
  { name: "BTN", value: 20, fill: "#51C4E9" },
  { name: "Mandiri", value: 15, fill: "#146C94" },
  { name: "KEB Hana Bank", value: 10, fill: "#6150C1" },
];

const chartConfig = {
  BRI: {
    label: "BRI",
    color: "hsl(var(--chart-1))",
  },
  "Artha Graha": {
    label: "Artha Graha",
    color: "hsl(var(--chart-2))",
  },
  BTN: {
    label: "BTN",
    color: "hsl(var(--chart-3))",
  },
  Mandiri: {
    label: "Mandiri",
    color: "hsl(var(--chart-4))",
  },
  "KEB Hana Bank": {
    label: "KEB Hana Bank",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const renderActiveShape = (props: any) => {
  const smallerScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const mediumScreen = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + (smallerScreen ? 20 : 50)) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 2;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className=" text-[10px] text-wrap sm:text-[12px] lg:text-[20px]"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        fontSize={smallerScreen ? 12 : mediumScreen ? 12 : 20}
      >{`${value}%`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        fontSize={smallerScreen ? 12 : mediumScreen ? 16 : 20}
      >
        {payload.name}
      </text>
    </g>
  );
};

export default function ChartComponent() {
  const smallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const mediumScreen = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = React.useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Card className="flex flex-col h-full w-full sm:h-auto lg:h-full xl:flex-col xl:w-auto">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[34px]">
          Top 5 Bank Approval Tertinggi
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0 max-h-[550px] w-full flex justify-center sm:max-h-[600px] lg:w-full xl:w-auto">
        <ChartContainer
          config={chartConfig}
          className="aspect-square h-full w-full sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-square xl:aspect-square"
        >
          <PieChart
            // width={200}
            // height={200}
            className=" w-[200px] h-[200px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[600px]"
          >
            {/* <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            /> */}
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={smallScreen ? 30 : mediumScreen ? 50 : 100}
              outerRadius={smallScreen ? 50 : mediumScreen ? 80 : 180}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
