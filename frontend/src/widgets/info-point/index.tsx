import React from 'react';
import style from './style.module.css';

interface InfoPointProps {
    title: string,
    desc: string
}

const InfoPoint = ({title, desc = '-'}: InfoPointProps) => {
    return (
        <div className={style.main}>
            <div className={style.title}>
                {title}:
            </div>
            <div className={style.desc}>
                {desc === undefined || desc.length === 0 ? '-' : desc}
            </div>
        </div>
    );
};

export default InfoPoint;