import { CiMenuKebab } from "react-icons/ci";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  {
    name: "Mon",
    Present: 40,
    Absent: 24,
  },
  {
    name: "Tue",
    Present: 50,
    Absent: 14,
  },
  {
    name: "Wed",
    Present: 45,
    Absent: 19,
  },
  {
    name: "Thu",
    Present: 55,
    Absent: 9,
  },
  {
    name: "Fri",
    Present: 35,
    Absent: 29,
  },
];

function AttendenceChart() {
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col p-4 w-full h-[450px]">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Attendance Chart</h1>
        <CiMenuKebab className="rotate-90 text-4xl text-gray-500" />
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.4} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend align="left" verticalAlign="top" />
            <Bar dataKey="Present" fill="#8884d8" />
            <Bar dataKey="Absent" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendenceChart;
    