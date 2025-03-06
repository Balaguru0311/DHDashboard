import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { ResponsiveContainer } from 'recharts';
const SatisfactionScore = () => {
  return (
    <div className="bg-[#bae8f9] rounded py-4 shadow">
      <h3 className="text-lg text-center font-semibold mb-2">Satisfaction Score</h3>
      <ResponsiveContainer width="100%" height={300}>
      <GaugeChart
        id="satisfaction-gauge"
        nrOfLevels={5}
        arcsLength={[1,2,3,4,5]}
        colors={['#EA4228', '#F5CD19', '#5BE12C']}
        percent={0.6} 
        arcPadding={0.02}
      />
      </ResponsiveContainer>
    </div>
  );
};

export default SatisfactionScore;