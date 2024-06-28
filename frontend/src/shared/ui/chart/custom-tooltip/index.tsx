import React from 'react';
import { TooltipProps } from 'recharts';
import style from './style.module.css';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={style.custom_tooltip}>
                <span className={style.price}>{payload[0].value} ₽</span>
                <p className={style.price}>Совместная выставка в галерее MOMMA</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
