import { Button, RadioGroup, RadioGroupOption } from '@gravity-ui/uikit';
import React from 'react';
import style from './style.module.css';
import eye from '../../../../assets/icons/Eye-alt.svg';

export const Product = ({product}: {product: any}) => {

    
const  price: RadioGroupOption[] = [
    {value: '1', content: 'Оригинал'},
    {value: '2', content: 'Постер'},
];


    return(
        <div className={style.main}>
            <div className={style.image__container}>
                <img className={style.full_image} src={product.image} />
            </div>
            <div className={style.image__container}>
                <img className={style.cropped_image} src={product.image} />
                <div className={style.block}>
                    <div className={style.flex}>
                        <h3 className={style.title}>    
                            {product.author.name}
                        </h3>
                        <p className={style.desc}>
                            {product.name}, {product.year}
                        </p>
                        <p className={style.size}>
                            {product.size}
                        </p>
                        <p className={style.price}>
                            {product.end_cost} ₽
                        </p>
                    </div>
                    <div className={style.flex}>
                        <RadioGroup className={style.radio} size="l" name="group1" defaultValue={price[0].value} options={price} direction="horizontal"/>
                        <Button className={style.button}> Добавить </Button>
                    </div>
                </div>
            </div>
            <div className={style.count}>
                <p className={style.count_title}>
                    <img src={eye} alt='eye' />
                    Работа в интерьере
                </p>
                <p>
                    2/2
                </p>
            </div>
        </div>
    );
};