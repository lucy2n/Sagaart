import React from 'react';
import PriceRatio from '../price-ratio';
import style from './style.module.css';
import PurchacingActivity from '../purchacing-activity';

const Charts = () => {
    return (
        <div className={style.main}>
            <PriceRatio />
            <PurchacingActivity />
        </div>
    );
};

export default Charts;