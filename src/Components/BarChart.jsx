import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5', value: 85 },
  { name: '4', value: 75 },
  { name: '3', value: 60 },
  { name: '2', value: 50 },
  { name: '1', value: 30 },
];

const MyBarChart = () => {
  return (
    <div className="bg-[#bae8f9] rounded py-4 shadow">
      <h3 className="text-lg text-center font-semibold mb-2">Response Breakdown</h3>
    <ResponsiveContainer width="95%" height={300}>
      <BarChart data={data} layout="vertical">
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis type="number" /> {/* Set interval to 10 */}
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="value" fill="#312E81" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;