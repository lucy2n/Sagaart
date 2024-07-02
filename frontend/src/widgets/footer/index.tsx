import React from 'react';
import Logo from '../logo';
import SerachInput from '../search-input';
import { SearchInputType } from '../search-input/types';
import { Button } from '@gravity-ui/uikit';
import { footerContent } from './utils/footer-content';
import { Column } from './ui/footer-column/types';
import FooterColumn from './ui/footer-column';
import style from './style.module.css';
import appStore from '../../assets/images/button.png';
import googlePlay from '../../assets/images/button2.png';
import grid from '../../assets/icons/Grid.svg';
import { useNavigate } from 'react-router-dom';
import { RoutePathname } from '../../shared/utils/constants';


const Footer = (): JSX.Element => {

    const navigate = useNavigate();

    return (
        <div className={style.main}>
            <div className={style.navigation}>
                <Logo place='footer' />
                <div className={style.navigation__main}>
                    <SerachInput place={SearchInputType.footer} />
                    <Button className={style.button} size='l' onClick={() => navigate(RoutePathname.subscriptionPage)} >Подписаться</Button>
                </div>
            </div>
            <div className={style.navigation__links}>
                {footerContent.map((column: Column, index: number) => (
                    <FooterColumn columns={column} key={index} />
                ))}
                <div className={style.socials}>
                    <div className={style.social}>
                        <h2 className={style.social__title}>
                            Скачать приложение
                        </h2>
                        <div className={style.social__link}>
                            <a href='#'>
                                <img src={appStore} alt='AppStore' />
                            </a>
                            <a href='#'>
                                <img src={googlePlay} alt='GooglePlay' />
                            </a>
                        </div>
                    </div>
                    <div className={style.social}>
                        <h2 className={style.social__title}>
                            Мы в социальных сетях
                        </h2>
                        <div className={style.social__link}>
                            <a href='#'>
                                <img src={grid} alt='AppStore' />
                            </a>
                            <a href='#'>
                                <img src={grid} alt='AppStore' />
                            </a>
                            <a href='#'>
                                <img src={grid} alt='AppStore' />
                            </a>
                            <a href='#'>
                                <img src={grid} alt='AppStore' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.navigation}>
                <h2 className={style.copyright}>
                    © 2024 ООО «Sagaart»
                </h2>
                <div className={style.main__links}>
                    <a className={style.main__link} href='#'>
                        Оферта
                    </a>
                    <a className={style.main__link} href='#'>
                        Персональные данные
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;