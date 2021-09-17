import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  console.log(props);
    const dataPointsValue = props.dataPoints.map(data => data.value);
    const totalMax = Math.max(...dataPointsValue)

    return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar key={data.label} value={data.value} maxValue={totalMax} label={data.label} />
      ))}
    </div>
  );
}
