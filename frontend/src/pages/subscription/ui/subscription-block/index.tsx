import React, { FC } from 'react';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';


const SubscriptionBlock = ({image, price, month}: {image: string, price: string, month: string}): JSX.Element => {
    return (
        <div className={style.main}>
            <img src={image} />
            <div className={style.type}>
                <h3 className={style.month}>    
                    {month}
                </h3>
                <p className={style.price}>
                    {price}
                </p>
            </div>
            <ul className={style.ul}>
                <li className={style.li}>
                    Доступ к базе данных из более  900 тысяч работ
                </li>
                <li className={style.li}>
                    Аналитика сгенерированная по 33 критериям
                </li>
                <li className={style.li}>
                    Ежемесячная корректировка цен
                </li>
                <li className={style.li}>
                    Удобный личный кабинет 
                </li>
                <li className={style.li}>
                    Неограниченное количество запросов на аналитику
                </li>
            </ul>
            <Button className={style.button} size='xl'>
                оформить
            </Button>
        </div>
    );
};

export default SubscriptionBlock;