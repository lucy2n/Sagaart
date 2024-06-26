import React from 'react';
import { TooltipProps } from 'recharts';
import style from './style.module.css';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={style.custom_tooltip}>
                <span>{payload[0].value}</span>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
