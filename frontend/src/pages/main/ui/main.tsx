import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { Button, Icon } from '@gravity-ui/uikit';
import {Database} from '@gravity-ui/icons';
import Benefit from './benefit';
import New from './new';
import { useNavigate } from 'react-router-dom';
import { IArtwork } from '../../../shared/entities/products';
import { getProducts } from '../../../shared/api/products-api';
import Card from '../../../widgets/card/card';
import { BENEFITS, NEWS, GALLERY_IMAGES } from '../utils/constants';

const Main = (): JSX.Element => {

    const [products, setProducts] = useState<IArtwork[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts()
        .then((res) => {
            setProducts(res.results);
        });
    },[]);

    return (
        <div className={style.main}>
            <section className={style.section_main}>
                <div className={style.section_main__content}>
                    <div className={style.section_main__info}>
                        <h1 className={style.section_main__title}>
                            ŞAGAART- оценка и продажа предметов искусства
                        </h1>
                        <p className={style.section_main__desc}>
                            Наш алгоритм на основе огромной базы данных поможет определить справедливую цену арт-объекта и оценит его инвестиционную привлекательность для вас
                        </p>
                        <div className={style.buttons}>
                            <Button size='xl' className={`${style.button} ${style.button_dark}`} onClick={() => navigate('/review')}>
                                <Icon className={style.button_img} data={Database} size={16} />
                                оценить объект
                            </Button>
                            <Button size='xl' onClick={() => navigate('/subscription')} className={style.button} >
                                узнать подробнее
                            </Button>
                        </div>
                    </div>
                    <div className={style.section_main__charts}>
                        <img className={style.section_main__img} src={GALLERY_IMAGES.main} alt='main' />
                        <img className={style.section_main__chart} src={GALLERY_IMAGES.chart} alt='chart' />
                    </div>
                </div>
                <div className={style.section_main__benefits}>
                    {BENEFITS.map((benefit) => (
                        <Benefit
                        key={benefit.title}
                        title={benefit.title}
                        desc={benefit.desc}
                        icon={benefit.icon}
                        />
                    ))}
                </div>
            </section>
            <section className={style.section_news}>
                <div className={style.section_news__name}>
                    <div className={style.section_news__main}>
                        <p className={style.section_news__desc}>
                            Новости
                        </p>
                        <h2 className={style.section_news__title}>
                            Узнайте первыми от Sagaart
                        </h2>
                    </div>
                    <Button className={style.section_news__button} size='s'>
                        Смотреть все новости
                    </Button>
                </div>
                <div className={style.section_news__news}>
                    {NEWS.map((newsItem) => (
                        <New
                        key={newsItem.title}
                        title={newsItem.title}
                        desc={newsItem.desc}
                        image={newsItem.image}
                        />
                    ))}
                </div>
            </section>
            <section className={style.section_gallery}>
                <div className={style.section_gallery__main}>
                    <p className={style.section__desc}>
                        галерея
                    </p>
                    <h2 className={style.section__title}>
                        вдохновитесь новинками нашей арт-галереи                     
                    </h2>
                    <p className={style.section_gallery__desc}>
                        В нашем уникальном маркет-плейсе каждая картина рассказывает свою неповторимую историю. Здесь вы найдёте произведения талантливых художников современности, способные вдохновить, вызвать глубокие эмоции и стать украшением любого пространства. Мы следим за новинками
                    </p>
                </div>
                { products ?  
                    <div className={style.section_gallery__gallery}>
                        {products.map(product => (
                            <Card card={product} key={product.id}/>
                        ))}
                    </div>
                    : <></>
                }
                <Button size='xl' className={style.section_gallery__button} onClick={() => navigate('/products')}>
                    Перейти в каталог
                </Button>
            </section>
            <section className={style.section_design}>
                <div className={style.section_design__main}>
                    <p className={style.section__desc}>
                        дизайн
                    </p>
                    <h2 className={style.section__title}>
                        Подбор картин в интерьер                     
                    </h2>
                </div>
                <div className={style.section_design__info}>
                    <img src={GALLERY_IMAGES.design} alt='design' />
                    <div className={style.section__block}>
                        <h3 className={style.section__block__title}>
                            Удобный поиск арт-объектов в ваш интерьер
                        </h3>
                        <p className={style.section__block__desc}>
                            Мы верим, что каждый дизайнерский проект заслуживает быть дополнен искусством, которое говорит само за себя. Позвольте нашему сервису стать мостом между вашим творчеством и миром современного искусства. Создавайте, вдохновляйтесь и превращайте свои проекты в произведения искусства вместе с нами
                        </p>
                        <p className={style.section__block__desc}> 
                            Мы создали большое количество важных для дизайнера фильтров поиска, а так же поиск по изображению,  чтобы помочь вам найти идеальное художественное произведение, которое дополнит ваш творческий проект и вдохнет в него новую жизнь
                        </p>
                        <Button size='l' className={style.button}  onClick={() => navigate('/products')}>
                            перейти в каталог
                        </Button>
                    </div>
                </div>
            </section>
            <section className={style.section_art}>
                <div className={style.section_art__main}>
                    <p className={style.section__desc}>
                        художественное искусство
                    </p>
                    <h2 className={style.section__title}>
                        Ваше искусство - наша платформа                    
                    </h2>
                </div>
                <div className={style.section_art__info}>
                    <div className={style.section__block}>
                        <h3 className={style.section__block__title}>
                            Оценка и продажа арт-объектов вашего творчества
                        </h3>
                        <p className={style.section__block__desc}>
                            Для художников, стремящихся представить свои работы миру и найти подходящего покупателя, наш сайт предлагает уникальную платформу для оценки и продажи современного искусства
                        </p>
                        <p className={style.section__block__desc}>
                            Мы ценим каждого художника и его вклад в мир искусства. Позвольте нашей платформе стать вашим надежным партнером в путешествии от оценки до успешной продажи вашего искусства. Присоединяйтесь к нам, и вместе мы откроем новые горизонты для вашего творчества
                        </p>
                        <div className={style.buttons}>
                            <Button size='xl' className={`${style.button} ${style.button_dark}`} onClick={() => navigate('/review')}>
                                <Icon className={style.button_img} data={Database} size='16' />
                                оценить объект
                            </Button>
                            <Button size='xl' className={style.button} onClick={() => navigate('/products')}>
                                перейти в каталог
                            </Button>
                        </div>
                    </div>
                    <img src={GALLERY_IMAGES.art} alt='art' />
                </div>
            </section>
        </div>
    );
};
export default Main;