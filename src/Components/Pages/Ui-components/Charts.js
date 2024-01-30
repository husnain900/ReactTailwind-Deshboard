import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function StackBars() {
  return (
    <BarChart
      series={[
        { data: [0, 0, 0, 0, 0], stack: 'A' },
        { data: [0, 0.7, 0.3, 2, 0], stack: 'B' },
      ]}
      // width={640}
      // height={600}
      className="ChartBarGraph"
      tooltip={false}
      colors={['#004d5a', '#004d5a']}
      axisHighlight={{ x: 'none', y: 'none' }} // Disable highlighting
    />
  );
}
