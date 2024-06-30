import React from 'react';
import style from './style.module.css';

const New = ({image, title, desc}: {image: string, title: string, desc: string}) => {
    return (
        <div className={style.main}>
            <img src={image} alt={title} className={style.image}/>
            <div className={style.info}>
                <h3 className={style.title}>
                    {title}
                </h3>
                <p className={style.desc}>     
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default New;