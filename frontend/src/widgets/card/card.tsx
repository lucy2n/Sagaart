import { IProduct } from '../../shared/entities/products';
import React, {FC, useState} from 'react';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';
import arrowup from '../../assets/icons/Arrow-up-outline.svg';
import arrowdown from '../../assets/icons/Arrow-down-outline.svg';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import heart from '../../assets/icons/heart-card.svg';
import heartNotActive from '../../assets/icons/headrt-cart-not-active.svg';

interface Props {
    card: IProduct;
    key: string | number;
  }

const Card: FC<Props> = ({ card }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
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
            <img className={style.img} src={card.product_jpeg} alt={card.product_name}/>
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
                                        {card.product_size}
                                    </li>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.product_genre.productGenre_name}
                                    </li>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.product_style.productStyle_name}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <LineChart width={225} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="year" />
                                <Tooltip />
                                <Line dot={false} type="bump" dataKey="price" stroke="#141722" />
                            </LineChart>
                        </div>
                    </div>
                    <Button className={style.modal__button} > Добавить </Button>

                </div>
            )}
            <h2 className={style.author}>
                {card.product_author.productAuthor_name}
            </h2>
            <div className={style.more}>
                <div className={style.info}>
                    <h3 className={style.name}>
                        {card.product_name}
                    </h3>
                    <p className={style.text}> 
                        {card.product_cost_end}
                    </p>
                </div>
                <img src={isExpanded ? arrowdown : arrowup} onClick={() => toggleExpand(isExpanded, setIsExpanded)} className={style.button} />
            </div>
        </div>
    );
};

export default Card;