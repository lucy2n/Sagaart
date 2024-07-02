import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {
      date: '2017',
      price: 30,
    },
    {
      date: '2018',
      price: 52,
    },
    {
      date: '2019',
      price: 27,
    },
    {
      date: '2020',
      price: 90,
    },
    {
      date: '2021',
      price: 50,
    },
    {
      date: '2022',
      price: 77,
    },
    {
      date: '2023',
      price: 40,
    },
  ];

const PurchacingActivity = () => {

    return (
        <div>
            <p>Покупательская активность на аукционах</p>
            <AreaChart
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
                <defs>
                    <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#798399" stopOpacity={1.0}/>
                        <stop offset="100%" stopColor="#798399" stopOpacity={0.7}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-system-color-ghost)', fontSize: 12, fontFamily: 'TT Commons' }} />
                <YAxis dataKey="price" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-system-color-ghost)', fontSize: 12, fontFamily: 'TT Commons' }} />
                <Area
                    type="monotone" 
                    dataKey="price" 
                    stroke='#798399'
                    fill="url(#price)"
                    fillOpacity={1}
                />
            </AreaChart>
        </div>
    );
};

export default PurchacingActivity;
