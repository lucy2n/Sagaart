import React from 'react';
import style from './style.module.css';
import color from '../../assets/icons/Color.svg';
import person from '../../assets/icons/Person.svg';
import mail from '../../assets/icons/Mail.svg';
import bag from '../../assets/icons/Bag.svg';
import heart from '../../assets/icons/Heart.svg';
import Logo from '../logo';
import SerachInput from '../search-input';
import { SearchInputType } from '../search-input/types';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.navigation}>
                <Logo place='header'/>
                <div className={style.main__buttons}>
                    <button className={style.button}>
                        <img className={style.button__image} src={mail} alt='mail'/>
                    </button>
                    <button className={style.button}>
                        <img className={style.button__image} src={person} alt='person'/>
                    </button>
                    <button className={style.button}>
                        <img className={style.button__image} src={heart} alt='heart'/>
                    </button>
                    <button className={style.button}>
                        <img className={style.button__image} src={bag} alt='bag'/>
                    </button>
                </div>
            </div>
            <div className={style.navigation}>
                <div className={style.buttons}>
                    <NavLink to='/' className={style.link} >
                        <button className={style.button}>Главная</button>
                    </NavLink>
                    <NavLink to='/catalog' className={style.link} >
                        <button className={style.button}>Каталог</button>
                    </NavLink>
                    <NavLink to='/subscription' className={style.link} >
                        <button className={style.button}>Подписка на аналитику</button>
                    </NavLink>
                    <NavLink to='/review' className={style.link} >
                        <button className={style.button}>
                            <img className={style.button__image} src={color} alt='some'/>
                            Оценка стоимости
                        </button>
                    </NavLink>
                    <button className={style.button} disabled>Новости</button>
                    <button className={style.button} disabled>Price database</button>
                </div>
                <div className={style.container_input}>
                    <SerachInput place={SearchInputType.header} />
                </div>
            </div>
        </div>
    );
};

export default Header;