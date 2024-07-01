import React from 'react';
import clsx from 'clsx';
import style from './logo.module.css';
import { useNavigate } from 'react-router-dom';

const Logo = ({place}: {place: string}): JSX.Element => {

    const navigate = useNavigate();

    return (
        <h1 
            className={clsx(
            style.title,
            style[`title_${place}`]
            )}
            onClick={() => navigate('/')}
        >şagaart</h1>
    );
};
export default Logo;