import React from 'react';
import style from './style.module.css';

const Benefit = ({icon, title, desc}: {icon: string, title: string, desc: string}) => {
    return (
        <div className={style.main}>
            <img src={icon} alt={title} />
            <h2 className={style.title}>{title}</h2>
            <p className={style.desc}>{desc}</p>
        </div>
    );
};

export default Benefit;