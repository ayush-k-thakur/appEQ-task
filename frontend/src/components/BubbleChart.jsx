import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BubbleChart = ({ users }) => {
  const data = users.map(user => ({
    x: user.activityLevel,
    y: user.engagementScore,
    z: user.retentionRate
  }));

  return (
    <div className="my-4 w-full">
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="x" 
            name="Activity Level" 
            tick={{ fontSize: 12 }} 
          />
          <YAxis 
            dataKey="y" 
            name="Engagement Score" 
            tick={{ fontSize: 12 }} 
          />
          <ZAxis dataKey="z" range={[60, 400]} name="Retention Rate" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Scatter name="Users" data={data} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BubbleChart;
