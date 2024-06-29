import { Button } from '@gravity-ui/uikit';
import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

const NoSubscription = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h3 className={style.title}>
                    Оформить подписку на аналитику
                </h3>
                <p className={style.desc}>
                    Наш алгоритм на основе огромной базы данных поможет определить справедливую цену  арт-объекта и отобразит ее инвестиционную привлекательность для вас
                </p>
                <NavLink to='/subscription'>
                    <Button size='xl' className={style.button}>
                        Узнать подробнее
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export default NoSubscription;