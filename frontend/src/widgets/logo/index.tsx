import React from 'react';
import clsx from 'clsx';
import style from './logo.module.css';

const Logo = ({place}: {place: string}): JSX.Element => {

    return (
        <h1 className={clsx(
            style.title,
            style[`title_${place}`]
        )}>şagaart</h1>
    );
};
export default Logo;