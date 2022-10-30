import React from "react";
import Chart from "../images/Chart-Data.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Statistics = () => {
  // ! data !!
  const data = [
    {
      name: "React",
      Total: 8,
    },
    {
      name: "JavaScript",
      Total: 9,
    },
    {
      name: "CSS",
      Total: 8,
    },
    {
      name: "Git",
      Total: 11,
    },
  ];

  return (
    <div>
      <img className="mx-auto w-96 mt-0" src={Chart} alt="" />

 <div className="flex mb-20 justify-center ">
         {/* //! Line Chart */}
         <div className="border-solid border-2 border-sky-500 font-sans mr-2 rounded-xl bg-sky-50 font-bold  ">
         <h1 className="text-center mb-3 mt-2 ">Line Chart</h1>

        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* //! Bar Chart */}
      <div className="border-solid border-2 border-sky-500 font-sans ml-2 rounded-xl bg-sky-50 font-bold ">
        <h1 className="text-center mb-3 mt-2 ">Bar Chart</h1>
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="Total" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

        </BarChart>
      </div>
 </div>

    </div>
  );
};

export default Statistics;
