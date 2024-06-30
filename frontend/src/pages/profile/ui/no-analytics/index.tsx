import { Button, Icon } from '@gravity-ui/uikit';
import React from 'react';
import style from './style.module.css';
import { Database } from '@gravity-ui/icons';
import { useNavigate } from 'react-router-dom';

const NoAnalytics = () => {

    const navigate = useNavigate();

    return (
        <div className={style.main}>
            <h3 className={style.title}>
                Оцените свой первый объект
            </h3>
            <p className={style.desc}>
                Наш алгоритм поможет определить справедливую цену  арт-объекта и отобразит ее инвестиционную привлекательность для вас
            </p>
            <Button className={style.button} size='xl' onClick={() => navigate('/review')}>
                <Icon data={Database} size={18} />
                оценить объект
            </Button>
        </div>
    );
};

export default NoAnalytics;