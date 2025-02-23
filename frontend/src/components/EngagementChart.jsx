import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const EngagementChart = ({ users }) => (
  <div className="mt-6 w-full">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={users.map((u) => ({ name: u.name, score: u.engagementScore }))}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip contentStyle={{ fontSize: "12px" }} />
        <Legend wrapperStyle={{ fontSize: "12px" }} />
        <Bar
          dataKey="score"
          fill="#8884d8"
          cursor="pointer"
          activeBar={{ fill: "#82ca9d" }}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default EngagementChart;
