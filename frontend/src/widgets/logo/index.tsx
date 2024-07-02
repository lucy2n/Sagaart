import React from 'react';
import clsx from 'clsx';
import style from './logo.module.css';
import { useNavigate } from 'react-router-dom';
import { RoutePathname } from '../../shared/utils/constants';

const Logo = ({place}: {place: string}): JSX.Element => {

    const navigate = useNavigate();

    return (
        <h1 
            className={clsx(
            style.title,
            style[`title_${place}`]
            )}
            onClick={() => navigate(RoutePathname.mainPage)}
        >şagaart</h1>
    );
};
export default Logo;