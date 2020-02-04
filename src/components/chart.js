import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const Chart = ({
  data,
  dataKey,
}) => {


  return (
    <div>
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickSize={1}
        // tickFormatter={timeStr => new Intl.DateTimeFormat('en-US', { date: 'short'}).format(new Date(timeStr))}
        />
        <YAxis />
        <Tooltip 
          viewBox={{x:1, y:2, width: 100, height: 450}}
          filterNull={false}
        />
        <Line type="monotone" dataKey={dataKey} dot={false} />
      </LineChart>
    </div>
  );
}

export default Chart
