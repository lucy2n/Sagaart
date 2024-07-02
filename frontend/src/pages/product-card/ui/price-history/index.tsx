import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import CustomTooltip from '../../../../shared/ui/chart/custom-tooltip';

const data = [
    {
      date: '06/20',
      price: 14000,
    },
    {
      date: '01/21',
      price: 20000,
    },
    {
      date: '06/21',
      price: 27000,
    },
    {
      date: '01/22',
      price: 37800,
    },
    {
      date: '06/22',
      price: 48900,
    },
    {
      date: '01/23',
      price: 63900,
    },
    {
      date: '06/23',
      price: 74900,
    },
  ];

const PriceHistory = () => {

    return (
        <LineChart
            width={800}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-system-color-ghost)', fontSize: 12, fontFamily: 'TT Commons' }} />
            <YAxis dataKey="price" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-system-color-ghost)', fontSize: 12, fontFamily: 'TT Commons' }} />
            <Tooltip content={<CustomTooltip />} />
            <Line
                type="monotone" 
                dataKey="price" 
                stroke="#979594" 
                activeDot={{ r: 4, strokeWidth: 0, fill: '#141722' }}
                dot={{ r: 4, strokeWidth: 0, fill: '#979594' }}
                strokeWidth={2}
            />
        </LineChart>
    );
};

export default PriceHistory;

