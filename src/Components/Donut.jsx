import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [{ name: 'Positive', value: 60 },{ name: 'Negative', value: 20, },{ name: 'Remaining', value: 20, }];
const COLORS = ['#312E81', '#8884d8', '#E0E0E0'];
const maxValueData = data.reduce((max,item)=>Math.max(max,item.value),-Infinity);
const ResponseRate = () => {
  return (
    <div className="bg-[#bae8f9] rounded p-4 shadow">
      <h3 className="text-lg text-center font-semibold mb-2">Response Rate</h3>
      
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="40%" // Adjust to control the donut hole size
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
              {maxValueData}%
            </text>
          </PieChart>
        </ResponsiveContainer>
      
    </div>
  );
};

export default ResponseRate;