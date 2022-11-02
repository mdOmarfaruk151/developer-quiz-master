import React, { useState } from "react";
import Chart from "../images/Chart-Data.png";
import axios from "axios";
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
  const [charts, setCharts] = useState([]);

  axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
    const chartsLoaded = data.data.data;
    //   console.log(chartsLoaded);
    const chartData = chartsLoaded.map((chart) => {
      const singleChart = {
        Name: chart.name,
        Total: chart.total,
      };
      return singleChart;
    });
    // console.log(chartData);
    setCharts(chartData);
  });
  //   // ! data !!
  return (
    <div>
      <img className="mx-auto w-96 mt-0" src={Chart} alt="" />

      <div className="flex mb-20 justify-center ">
        {/* //! Line Chart */}
        <div className="border-solid border-2 border-sky-500 font-sans mr-2 rounded-xl bg-sky-50 font-bold  ">
          <p className="text-center mb-3 mt-2 ">Line Chart</p>

          <LineChart
            width={500}
            height={300}
            data={charts}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* //! Bar Chart */}
        <div className="border-solid border-2 border-sky-500 font-sans ml-2 rounded-xl bg-sky-50 font-bold ">
          <p className="text-center mb-3 mt-2 ">Bar Chart</p>
          <BarChart width={500} height={300} data={charts}>
            <Bar dataKey="Total" fill="#8884d8" />
            <XAxis dataKey="Name" />
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
