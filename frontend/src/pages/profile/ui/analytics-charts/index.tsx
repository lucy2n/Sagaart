import React from 'react';
import style from './style.module.css';
import Charts from '../../../../widgets/charts';

const AnalyticsCharts = () => {

    return (
        <section className={style.section}>
            <div className={style.info}>
                <h2 className={style.title}>
                    Аналитика
                </h2>
            </div>
            <Charts />
        </section>
    );
};

export default AnalyticsCharts;