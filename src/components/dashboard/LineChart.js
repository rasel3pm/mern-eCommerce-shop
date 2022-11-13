import React, { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const LineChart = () => {
  const [dataList, setDataList] = useState({
    datasets: [],
  });

  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setDataList({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Sels",
          data: [100, 70, 80, 88, 100, 40, 80, 55, 100, 40, 80, 55],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Bye",
          data: [90, 55, 90, 40, 80, 55, 40, 95, 70, 99, 60, 55],
          borderColor: "#0000FF",
          backgroundColor: "rgba(255, 99, 132, 0.9)",
        },
      ],
    });

    setChartOption({
      //   responsive: true,
      //   plugins: {
      //     legend: {
      //       position: "top",
      //     },
      //     title: {
      //       display: true,
      //       text: "Line Chart",
      //     },
      //   },
      type: "line",
      options: {
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: (ctx) =>
              "drawTime: " + ctx.chart.options.plugins.filler.drawTime,
          },
        },
        pointBackgroundColor: "#fff",
        radius: 10,
        interaction: {
          intersect: false,
        },
      },
    });
  }, []);

  return (
    <div>
      <div
        style={{ width: "650px", margin: "0 auto", border: "0.6px solid red" }}
      >
        <Line options={chartOption} data={dataList} />
      </div>
    </div>
  );
};

export default LineChart;
