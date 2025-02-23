import React from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar, Cell, Legend } from 'recharts';

const HeatmapChart = ({ users }) => {
  const data = users.map(user => ({
    name: user.name,
    engagement: user.engagementScore,
    retention: user.retentionRate
  }));

  return (
    <div className="sm:my-4 w-full">
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            tick={{ fontSize: 12 }} 
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            tick={{ fontSize: 10 }} 
            width={100}
          />
          <Tooltip contentStyle={{ fontSize: '12px' }} />
          <Bar dataKey="engagement">
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.engagement > 70 ? '#82ca9d' : '#ff7300'} 
              />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeatmapChart;
