import React from 'react';
import style from './style.module.css';
import clsx from 'clsx';

const ProfileSubscription = ({date}: {date: string}) => {
    return (
        <div className={style.main}>
            <p className={style.text}>
                Ваша подписка активна до:
            </p>
            <p className={clsx(style.text, style.text_date)}>
                {date}
            </p>
        </div>
    );
};

export default ProfileSubscription;