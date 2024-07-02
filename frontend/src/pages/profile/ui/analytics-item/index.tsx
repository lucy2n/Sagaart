import React, { useState } from 'react';
import style from './style.module.css';
import { Icon } from '@gravity-ui/uikit';
import {SquareChartBar} from '@gravity-ui/icons';
import AnalyticsArtist from '../analytics-author';
import { IAnalyticItem, IAnalyticItemDetails } from '../../../../shared/entities/analytic';
import { getItemAnalytic } from '../../../../shared/api/analytic';
import AnalyticsWork from '../analytics-work';
import AnalyticsCharts from '../analytics-charts';
import AnalyticsPrice from '../analytics-price';

const AnalyticsItem = (props: {analytic: IAnalyticItem}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [info, setInfo] = useState<IAnalyticItemDetails | null>(null);
    const [cache] = useState<Map<number, IAnalyticItemDetails>>(new Map());
    const link = props.analytic.author_name + ' ' + '"' +  props.analytic.product_name + '"' + ' - ' + props.analytic.analytics_date;

    const handleClick = () => {
        if (cache.has(props.analytic.id)) {
            setInfo(cache.get(props.analytic.id)!);
            setIsVisible(!isVisible);
        } else {
        getItemAnalytic(props.analytic.id)
        .then(res => {
            cache.set(props.analytic.id, res);
            setInfo(res);
            setIsVisible(true);
        });
        }
    };

    return (
        <div className={style.main} onClick={handleClick}>
            <div className={style.title}>
                <Icon data={SquareChartBar} />
                <p className={style.text} onClick={handleClick} >{link}</p>
            </div>
            {isVisible && info &&
                <div className={style.blocks}>
                    <AnalyticsWork info={info} />
                    <AnalyticsArtist info={info} />
                    <AnalyticsPrice />
                    <AnalyticsCharts />
                </div>
            }
        </div>
    );
};

export default AnalyticsItem;