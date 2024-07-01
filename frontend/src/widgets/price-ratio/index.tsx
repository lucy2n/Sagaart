import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import CustomTooltip from '../../shared/ui/chart/custom-tooltip';

const data = [
    {
      name: 'живопись',
      price: 100000,
    },
    {
      name: 'графика',
      price: 60000,
    },
    {
      name: 'минимализм',
      price: 76000,
    },
    {
      name: 'фотография',
      price: 124000,
    },
    {
      name: 'скульптура',
      price: 95900,
    },
    {
      name: 'гравюра',
      price: 72900,
    },
    {
      name: 'кубизм',
      price: 100000,
    },
    {
      name: 'реализм',
      price: 30000
    }
  ];

const PriceRatio = () => {

    const hideZero = (tick: number) => (tick === 0 ? '' : tick);

    return (
        <div>
            <p>Соотношение цен разных стилей</p>
            <BarChart
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
                        <stop offset="0%" stopColor="#798399" stopOpacity={0.94}/>
                        <stop offset="60%" stopColor="#798399" stopOpacity={0.38}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-system-color-ghost)', fontSize: 12, fontFamily: 'TT Commons' }} />
                <YAxis dataKey="price" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-system-color-ghost)', fontSize: 12, fontFamily: 'TT Commons' }} />
                <Bar
                    dataKey="price"
                    fill="url(#price)"
                    barSize={25}
                    radius={[4, 4, 4, 4]}
                />
            </BarChart>
        </div>
    );
};

export default PriceRatio;
