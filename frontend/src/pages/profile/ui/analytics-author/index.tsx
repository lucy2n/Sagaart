import React from 'react';
import InfoPoint from '../../../../widgets/info-point';
import style from './style.module.css';
import { IAnalyticItemDetails } from '../../../../shared/entities/analytic';

const AnalyticsArtist = (props : {info: IAnalyticItemDetails}) => {
    const gender = props.info.gender === 1 ? 'Мужской' : 'Женский';

    return (
        <section className={style.section}>
            <div className={style.info}>
                <h2 className={style.title}>
                    О художнике
                </h2>
            </div>
            <div className={style.main}>
                <div className={style.columns}>
                    <div className={style.column}>
                        <InfoPoint title='Автор' desc={props.info.author_name} />
                        <InfoPoint title='Пол' desc={gender}/>
                    </div>
                    <div className={style.column}>
                        <InfoPoint title='Страна рождения' desc={props.info.birth_country}/>
                        <InfoPoint title='Год рождения' desc={props.info.birth_year + ''}/>
                    </div>
                    <div className={style.column}>
                        <InfoPoint title='Участие в выставках' desc={props.info.group_show}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnalyticsArtist;