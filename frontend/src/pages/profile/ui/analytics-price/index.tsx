import React from 'react';
import style from './style.module.css';
import PriceHistory from '../../../product-card/ui/price-history';

const AnalyticsPrice = () => {

    return (
        <section className={style.section}>
            <div className={style.info}>
                <h2 className={style.title}>
                    История изменения цены
                </h2>
            </div>
            <PriceHistory />
        </section>
    );
};

export default AnalyticsPrice;