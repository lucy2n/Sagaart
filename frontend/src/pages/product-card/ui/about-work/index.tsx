import React from 'react';
import InfoPoint from '../../../../widgets/info-point';
import { ArtworkDetails } from '../../../../shared/entities/product-details';
import style from './style.module.css';

const AboutWork = (props : {product: ArtworkDetails}) => {
    return (
        <div className={style.main}>
            <p className={style.desc}>
                {props.product.description}
            </p>
            <div className={style.columns}>
                <div className={style.column}>
                    <InfoPoint title='Год создания работы' desc={props.product.year + ''} />
                    <InfoPoint title='Размер' desc={props.product.size}/>
                    <InfoPoint title='Материалы' desc={props.product.material}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Категория' desc={props.product.category[0].name}/>
                    <InfoPoint title='Жанр' desc={props.product.genre[0].name}/>
                    <InfoPoint title='Стиль' desc={props.product.style[0].name}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Желаемая стоимость работы' desc={props.product.fair_cost + ''}/>
                    <InfoPoint title='Город продажи' desc={props.product.city_sale}/>
                    <InfoPoint title='Страна товара' desc={props.product.country}/>
                </div>
            </div>
        </div>
    );
};

export default AboutWork;