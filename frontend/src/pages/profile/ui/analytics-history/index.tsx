import React, { useEffect, useState } from 'react';
import AnalyticsItem from '../analytics-item';
import { IAnalyticItem } from '../../../../shared/entities/analytic';
import { getAnalytics } from '../../../../shared/api/analytic';
import NoAnalytics from '../no-analytics';

const AnalyticsHistory = () => {

    const [analytics, setAnalytics] = useState<IAnalyticItem[]>([]);

    useEffect(() => {
        getAnalytics()
        .then((res) => {
            console.log(res);
            setAnalytics(res);
        });
    }, []);

    return (
        <section>
            { analytics.length === 0 ?
                <NoAnalytics /> 
                : 
                <>
                    <div>
                        <h3>
                            Последний запрос
                        </h3>
                        <div>
                            <AnalyticsItem work={analytics[0]} />
                        </div>
                    </div>
                    <div>
                        <h3>
                            История запросов
                        </h3>
                        <div>
                            {analytics.map(analytic => 
                                <div key={analytic.id}>
                                    <AnalyticsItem work={analytic} />
                                </div>
                    )}
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default AnalyticsHistory;