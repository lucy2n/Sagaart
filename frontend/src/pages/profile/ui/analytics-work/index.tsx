import React from 'react';
import InfoPoint from '../../../../widgets/info-point';
import style from './style.module.css';
import { IAnalyticItemDetails } from '../../../../shared/entities/analytic';

const AnalyticsWork = (props : {info: IAnalyticItemDetails}) => {
    const size = props.info.width + ' x ' + props.info.height + ' см';

    return (
        <section className={style.section}>
            <div className={style.info}>
                <h2 className={style.title}>
                    О работе
                </h2>
                <div className={style.price}>
                    <p className={style.cost}>
                        {props.info.calculated_price} ₽
                    </p>
                    <p className={style.desc}>
                        Желаемая стоимость работы
                    </p>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.columns}>
                    <div className={style.column}>
                        <InfoPoint title='Категория' desc={props.info.category} />
                        <InfoPoint title='Год создания работы' desc={props.info.year + ''}/>
                    </div>
                    <div className={style.column}>
                        <InfoPoint title='Материал работы' desc={props.info.material}/>
                        <InfoPoint title='Материал планшета' desc={props.info.tablet_material}/>
                    </div>
                    <div className={style.column}>
                        <InfoPoint title='Размер' desc={size}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnalyticsWork;