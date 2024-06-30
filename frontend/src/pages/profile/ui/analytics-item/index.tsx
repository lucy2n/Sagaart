import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

interface Work {
    id: number;
    analytics_owner: number;
    product_name: string;
    author_name: string;
}

const AnalyticsItem = (props: {work: Work}) => {

    const link = props.work.author_name + ' ' + props.work.product_name;

    return (
        <NavLink to={`/profile/${props.work.id}`}>
            <p className={style.text}>{link}</p>
        </NavLink>
    );
};

export default AnalyticsItem;