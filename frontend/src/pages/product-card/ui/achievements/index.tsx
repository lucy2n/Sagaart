import React from 'react';
import InfoPoint from '../info-point';
import { Author } from '../../../../shared/entities/product-details';
import style from './style.module.css';

const Achievements = (props : {author: Author, collection: string}) => {

    const show = props.author.show.name + ',' +  ' ' + props.author.show.place + ' ' + props.author.show.year;

    return (
        <div className={style.main}>
            <div className={style.columns}>
                <div className={style.column}>
                    <InfoPoint title='Награды в области искусства' desc={props.author.awards.name} />
                    <InfoPoint title='Участие в выставках' desc={show}/>
                    <InfoPoint title='Коллекции' desc={props.collection}/>
                </div>
            </div>    
        </div>
    );
};

export default Achievements;