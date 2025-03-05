import React from 'react';
import GaugeChart from 'react-gauge-chart';

const SatisfactionScore = () => {
  return (
    <div className="bg-[#bae8f9] rounded p-4 shadow">
      <h3 className="text-lg text-center font-semibold mb-2">Satisfaction Score</h3>
      <GaugeChart
        id="satisfaction-gauge"
        nrOfLevels={5}
        arcsLength={[1, 2, 3, 4, 5]}
        colors={['#EA4228', '#F5CD19', '#5BE12C']}
        percent={0.6} // Example value (adjust as needed)
        arcPadding={0.02}
      />
    </div>
  );
};

export default SatisfactionScore;