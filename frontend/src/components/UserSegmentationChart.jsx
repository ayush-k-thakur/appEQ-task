import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserSegmentationChart = ({ users }) => {
  const data = [
    { segment: "Low", count: users.filter((u) => u.engagementScore < 30).length },
    { segment: "Medium", count: users.filter((u) => u.engagementScore >= 30 && u.engagementScore < 70).length },
    { segment: "High", count: users.filter((u) => u.engagementScore >= 70).length },
  ];

  return (
    <div className="my-4 pr-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="segment" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Bar dataKey="count" fill="#8884d8" activeBar={{ fill: "#82ca9d" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserSegmentationChart;
