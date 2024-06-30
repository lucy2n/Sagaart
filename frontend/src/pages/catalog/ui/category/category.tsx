import React from 'react';
import style from './style.module.css';

// eslint-disable-next-line react/prop-types
const Category = ({ title, image }: { title: any, image: any }) => {
    return (
        <div className={style.main}>
            <img className={style.img} src={image} alt={title}/>
            <button className={style.button}>{title}</button>
        </div>
    );
};

export default Category;