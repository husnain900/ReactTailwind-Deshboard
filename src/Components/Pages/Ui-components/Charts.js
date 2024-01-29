import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function StackBars() {
  return (
    <BarChart
      series={[
        { data: [0, 0, 0, 0, 0], stack: 'A', label: 'Series A2' },
        { data: [0, 0.7, 0.3, 2, 0], stack: 'B', label: 'Series B1' },
      ]}
      width={640}
      height={600}
      tooltip={false}
      colors={['#004d5a', '#004d5a']}
      axisHighlight={{ x: 'none', y: 'none' }} // Disable highlighting
    />
  );
}
