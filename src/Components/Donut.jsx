import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [{ name: 'Response', value: 75 }, { name: 'Remaining', value: 25 }];
const COLORS = ['#312E81', '#E0E0E0'];

const ResponseRate = () => {
  return (
    <div className="bg-[#bae8f9] rounded p-4 shadow">
      <h3 className="text-lg text-center font-semibold mb-2">Response Rate</h3>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width={250} height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="60%" // Adjust to control the donut hole size
              outerRadius="80%" // Adjust to control the donut outer radius
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              className="text-2xl font-bold"
            >
              75%
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResponseRate;