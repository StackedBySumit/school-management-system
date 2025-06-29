import { CiMenuKebab } from "react-icons/ci";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 200,
    fill: "blue",
  },
  {
    name: "Boys",
    count: 110,
    fill: "#83a6ed",
  },
  {
    name: "Girls",
    count: 90,
    fill: "orange",
  },
  
];

function CountRadialChart() {
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col p-4 w-full h-[450px]">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-center">Total Students : 200</h1>
        <CiMenuKebab className="rotate-90 text-4xl text-gray-500"/>
      </div>
      {/* Chart */}
      <div className="h-full">
      <ResponsiveContainer
        width="100%"
        height={"100%"}
        className={"bg-white"}
      >
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={30}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Image */}
      <div>
        <img src="" alt="" />
      </div>
      </div>

      {/* Footer */}
      <div className="flex justify-around items-center py-2">
        {/* Boys */}
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full bg-orange-400"></div>
          <h1 className="text-2xl text-slate-600 font-semibold">110</h1>
          <p className="text-gray-400">Boys (55%)</p>
        </div>
        {/* Girls */}
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full bg-blue-400"></div>
          <h1 className="text-2xl text-slate-600 font-semibold">90</h1>
          <p className="text-gray-400">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
}

export default CountRadialChart;
