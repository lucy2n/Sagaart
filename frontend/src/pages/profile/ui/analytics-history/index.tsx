import React, { useEffect, useState } from 'react';
import AnalyticsItem from '../analytics-item';
import { IAnalyticItem } from '../../../../shared/entities/analytic';
import { getAnalytics } from '../../../../shared/api/analytic';
import NoAnalytics from '../no-analytics';
import style from './style.module.css';

const AnalyticsHistory = () => {

    const [analytics, setAnalytics] = useState<IAnalyticItem[]>([]);

    useEffect(() => {
        getAnalytics()
        .then((res) => {
            setAnalytics(res);
        });
    }, []);

    return (
        <section className={style.main}>
            { analytics.length !== 0 ?
                <>
                    <div className={style.ul}>
                        <h3 className={style.title}>
                            Последний запрос
                        </h3>
                        <div>
                            <AnalyticsItem analytic={analytics.reverse()[0]} />
                        </div>
                    </div>
                    <div className={style.ul}>
                        <h3 className={style.title}>
                            История запросов
                        </h3>
                        <div className={style.ul}>
                            {analytics.map(analytic => 
                                <div key={analytic.id}>
                                    <AnalyticsItem analytic={analytic} />
                                </div>
                    )}
                        </div>
                    </div>
                </>
                : 
                <NoAnalytics /> 
            }
        </section>
    );
};

export default AnalyticsHistory;