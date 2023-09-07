import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@material-ui/core';

export default function Chart({xaxis,yaxis}) {
  return (
    
    <LineChart
      xAxis={[{ data: [...xaxis] }]}
      series={[
        {
          data: [...yaxis],
          color: 'gray',   label: 'linear'
        },
         
      ]}

      width={1200}
      height={300}
      margin={{ top: 10, left: 20, right: 10, bottom: 30 }}
      
    />
  );
}