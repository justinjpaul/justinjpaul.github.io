import { useState } from "react";
import { Box, Button, ButtonGroup, Sheet, Typography } from "@mui/joy";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatMonth, ratings } from "./chessData";

const ratingSeries = Object.fromEntries(
  Object.entries(ratings).map(([id, { history }]) => [
    id,
    history.map(([period, value]) => ({ period, value, time: Date.parse(period + "-01") })),
  ])
);

export default function ChessGraph() {
  const [federation, setFederation] = useState("us");
  const points = ratingSeries[federation];
  const [activeIndex, setActiveIndex] = useState(points.length - 1);
  const point = points[activeIndex];
  const firstTime = points[0].time;
  const lastTime = points.at(-1).time;
  const pointLabel = formatMonth(point.period, "short") + " · " + point.value;

  function selectFederation(id) {
    setActiveIndex(ratingSeries[id].length - 1);
    setFederation(id);
  }

  return (
    <Sheet variant="outlined" className="chess-panel">
      <div className="chess-panel-heading">
        <Typography id="rating-series-heading" level="title-lg">{ratings[federation].label}</Typography>
        <ButtonGroup size="sm" aria-label="Rating federation">
          {Object.entries(ratings).map(([id]) => (
            <Button
              key={id}
              type="button"
              aria-pressed={federation === id}
              variant={federation === id ? "soft" : "outlined"}
              onClick={() => selectFederation(id)}
            >
              {id === "us" ? "US Chess" : "FIDE"}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <Typography level="body-sm">{ratings[federation].note}</Typography>
      <Box
        className="chess-chart"
        role="img"
        aria-label={ratings[federation].label + " history. Use the slider to explore published ratings."}
      >
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <LineChart
            data={points}
            margin={{ top: 12, right: 14, bottom: 0, left: -14 }}
            onMouseMove={({ activeTooltipIndex }) => {
              if (activeTooltipIndex >= 0) setActiveIndex(activeTooltipIndex);
            }}
          >
            <CartesianGrid vertical={false} stroke="var(--joy-palette-divider)" />
            <XAxis
              dataKey="time"
              type="number"
              domain={[firstTime, lastTime]}
              tickCount={5}
              tickFormatter={(time) => new Date(time).getUTCFullYear()}
              tick={{ fill: "var(--joy-palette-text-secondary)", fontSize: 12 }}
            />
            <YAxis
              domain={[
                (min) => Math.floor((min - 5) / 25) * 25,
                (max) => Math.ceil((max + 5) / 25) * 25,
              ]}
              tickCount={5}
              tick={{ fill: "var(--joy-palette-text-secondary)", fontSize: 12 }}
            />
            <Tooltip
              labelFormatter={(time) => formatMonth(new Date(time).toISOString().slice(0, 7))}
              contentStyle={{ backgroundColor: "var(--joy-palette-background-surface)", color: "var(--joy-palette-text-primary)" }}
            />
            <Line
              dataKey="value"
              name="Rating"
              type="linear"
              stroke="var(--joy-palette-primary-solidBg)"
              strokeWidth={2.5}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
            <ReferenceDot
              x={point.time}
              y={point.value}
              r={4}
              fill="var(--joy-palette-primary-solidBg)"
              stroke="var(--joy-palette-background-surface)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <div className="chess-chart-controls">
        <Typography component="label" htmlFor="chess-rating-point" level="body-sm">
          Explore rating history
        </Typography>
        <input
          id="chess-rating-point"
          type="range"
          min={0}
          max={points.length - 1}
          value={activeIndex}
          aria-valuetext={pointLabel}
          onChange={(event) => setActiveIndex(Number(event.target.value))}
        />
        <output htmlFor="chess-rating-point">{pointLabel}</output>
      </div>
    </Sheet>
  );
}
