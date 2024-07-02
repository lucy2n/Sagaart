import React, {FC, useState} from 'react';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import heart from '../../assets/icons/heart-card.svg';
import heartNotActive from '../../assets/icons/headrt-cart-not-active.svg';
import CustomTooltip from '../../shared/ui/chart/custom-tooltip';
import { NavLink, useNavigate } from 'react-router-dom';
import { IArtwork } from '../../shared/entities/products';
import ArrowUpFromLineIcon from '@gravity-ui/icons/svgs/arrow-up-from-line.svg';
import ArrowDownToLineIcon from '@gravity-ui/icons/svgs/arrow-down-to-line.svg';
import { RoutePathname } from '../../shared/utils/constants';

interface Props {
    card: IArtwork;
    key: string | number;
  }

const Card: FC<Props> = ({ card }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false); 
    const navigate = useNavigate();

    const toggleExpand = (value: boolean, setValue: (value: boolean) => void) => {
        setValue(!value);
    };

    const data = [
        {
          year: '2022',
          price: 3000,
        },
        {
          year: '2023',
          price: 4000,
          },
        {
          year: '2024',
          price: 5000,
        },
      ];

    return (
        <div className={style.main}>
            <img src={isLiked ? heart : heartNotActive} onClick={() => toggleExpand(isLiked, setIsLiked)} className={style.like} />
            <NavLink to={`/products/${card.id}`}>
                <img className={style.img} src={card.image} alt={card.name} />
            </NavLink>
            {isExpanded && (
                <div className={style.modal}>
                    <div className={style.modal__section}>
                        <div className={style.unit}>
                            <div>
                                <p className={style.tag}>Инвестиции в искусство</p>
                                <p className={style.tag}>Уникальная работа</p>
                            </div>
                            <div className={style.modal__main}>
                                <ul className={style.ul}>
                                    <li className={style.li}>
                                        Размер
                                    </li>
                                    <li className={style.li}>
                                        Категория
                                    </li>
                                    <li className={style.li}>
                                        Материал
                                    </li>
                                </ul>
                                <ul className={style.ul}>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.size}
                                    </li>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.genre[0].name}
                                    </li>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.style[0].name}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <LineChart width={225} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="year" />
                                <Tooltip content={<CustomTooltip />} />
                                <Line 
                                    type="bump" 
                                    dataKey="price" 
                                    stroke="#979594" 
                                    activeDot={{ r: 4, strokeWidth: 0, fill: '#141722' }}
                                    dot={{ r: 4, strokeWidth: 0, fill: '#979594' }}
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </div>
                    </div>
                    <Button className={style.modal__button} onClick={() => navigate(RoutePathname.profilePage)}> 
                        Добавить 
                    </Button>
                </div>
            )}
            <h2 className={style.author}>
                {card.author.name}
            </h2>
            <div className={style.more}>
                <div className={style.info}>
                    <h3 className={style.name}>
                        {card.name}
                    </h3>
                    <p className={style.text}> 
                        {card.end_cost} ₽
                    </p>
                </div>
                <img src={isExpanded ? ArrowDownToLineIcon : ArrowUpFromLineIcon} onClick={() => toggleExpand(isExpanded, setIsExpanded)} className={style.button} />
            </div>
        </div>
    );
};

export default Card;