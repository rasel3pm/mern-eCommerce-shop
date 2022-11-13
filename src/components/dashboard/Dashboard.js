import React from "react";
import LayOut from "../common/LayOut";
import Chart from "./Chart";
import LineChart from "./LineChart";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <LayOut>
        <div className="chart py-5">
          <Chart></Chart>
          <LineChart></LineChart>
        </div>
      </LayOut>
    </div>
  );
};

export default Dashboard;
