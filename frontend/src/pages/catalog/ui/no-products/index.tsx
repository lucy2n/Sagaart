import React from 'react';
import style from './style.module.css';

const NoProducts = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h3 className={style.title}>
                    По вашему запросу ничего не найдено
                </h3>
                <p className={style.desc}>
                    Возможно вас заинтересуют работы представленные ниже
                </p>
            </div>
        </div>
    );
};

export default NoProducts;