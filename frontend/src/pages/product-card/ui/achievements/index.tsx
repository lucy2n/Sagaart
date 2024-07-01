import React, { useEffect } from 'react';
import InfoPoint from '../../../../widgets/info-point';
import { Show } from '../../../../shared/entities/product-details';
import style from './style.module.css';

const Achievements = (props : {shows: Show[], collection: string}) => {

    const show = props.shows.length != 0 ? props.shows[0].name + ',' +  ' ' + props.shows[0].place + ' ' + props.shows[0].year : '';

    return (
        <div className={style.main}>
            <div className={style.columns}>
                <div className={style.column}>
                    <InfoPoint title='Награды в области искусства' desc={ props.shows.length != 0 ? props.shows[0].name : ''} />
                    <InfoPoint title='Участие в выставках' desc={show}/>
                    <InfoPoint title='Коллекции' desc={props.collection}/>
                </div>
            </div>    
        </div>
    );
};

export default Achievements;