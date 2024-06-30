import React, { FC } from 'react';
import style from './style.module.css';

interface Work {
    id: number;
    image: string;
}

const OtherArtwork = (props : {work: Work}) => {
    return (
        <div className={style.main}>
            <img src={props.work.image} className={style.img}/>
        </div>
    );
};

export default OtherArtwork;