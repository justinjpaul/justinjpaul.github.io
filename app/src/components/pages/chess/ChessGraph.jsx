import ChessPopup from "./ChessPopup";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { getData } from "../../shared/utils";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return <ChessPopup dataPoint={dataPoint} />;
  }

  return null;
};

const ChessGraph = () => {
  const [data, setData] = useState([]);
  const url = "/tourneys_fuzzed.json";
  const [filteredData, setFilteredData] = useState([]);
  const windowSize = useWindowSize();

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  function updateAspect() {
    return windowSize.width > 800
      ? 1.5
      : windowSize.width < 700
      ? 0.9
      : scale(windowSize.width, 700, 800, 1, 1, 5);
  }

  useEffect(() => {
    getData({ url, setData });
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((obj) => obj.hasOwnProperty("pre-rating")).reverse()
    );
  }, [data, setFilteredData]);
  return (
    <>
      <ResponsiveContainer aspect={updateAspect()} width="100%" height="auto">
        <LineChart
          width="500"
          height="300"
          data={filteredData}
          margin={{
            top: 5,
            left: 15,
            bottom: 75,
          }}
        >
          <XAxis
            dataKey="date"
            angle={-45}
            textAnchor="end"
            interval={70}
            tickMargin={10}
          ></XAxis>
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          {/* <Legend iconType='plainline' layout='bottom' verticalAlign='bottom'/> */}
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="post-rating"
            name="Rating"
            stroke="#659db8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* <MultiRangeSlider
                min={0}
                max={data.length - 1}
                values={timeRange}
                onChange={handleSliderChange}
                onAfterChange={handleSliderChange}
                thumbColor="#007bff"
                trackColor="#ccc"
            /> */}
    </>
  );
};

export default ChessGraph;
