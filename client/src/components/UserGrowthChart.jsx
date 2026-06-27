import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ChartContainer from "./ChartContainer";

export default function UserGrowthChart({ data }) {
  console.log("UserGrowthChart data:", data);
  return (
    <ChartContainer title="User Growth">
      <div style={{ width: "100%", height: 300, minWidth: 0 }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#28a745" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
}
