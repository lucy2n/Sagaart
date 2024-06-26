import Slider from './slider';
import React from 'react';
import style from './style.module.css';
import benefit1 from '../../../assets/images/image-82.png';
import benefit2 from '../../../assets/images/image-79.png';
import benefit3 from '../../../assets/images/Immage.png';
import SubscriptionBlock from './subscription-block';
import price1 from '../../../assets/images/price1.png';
import price2 from '../../../assets/images/price2.png';
import price3 from '../../../assets/images/price3.png';
import { Button } from '@gravity-ui/uikit';


const Subscription = (): JSX.Element => {
    return (
        <div className={style.main}>
            <section className={style.section_slider}>
                <Slider />
            </section>
            <section className={style.section_benefits}>
                <div className={style.section_benefits__main}>
                    <h2 className={style.section_benefits__title}>
                        Sagaart упростит покупку и продажу арт-объектов
                    </h2>
                    <p className={style.desc}>
                        Наша уникальная технология помогает быстро определить стоимость произведения искусства, решая проблему непрозрачности в ценообразовании на арт-рынке для покупателей и художников.
                    </p>
                </div>
                <div className={style.section_benefits__block}>
                    <img className={style.section_benefits__image} src={benefit1} alt='benefit'/>
                    <div className={style.section_benefits__info}>
                        <h3 className={style.title}>
                            Прогноз стоимости
                        </h3>
                        <p className={style.desc}>
                            Этот инструмент помогает принимать обоснованные решения при покупке или продаже произведений искусства, а также инвестировать в искусство с выгодой. Вот несколько причин, почему стоит использовать прогноз стоимости арт-объектов:
                        </p>
                        <ul className={style.ul}>
                            <li className={style.desc}>
                                Прогноз позволяет сэкономить время на анализе цен на рынке, так как предоставляет надёжную оценку на основе больших данных.
                            </li>
                            <li className={style.desc}>
                                Исключение субъективного мнения. Прогноз основан на объективных данных, что снижает влияние человеческого фактора и обеспечивает более точную оценку.
                            </li>
                            <li className={style.desc}>
                                Отсутствие необходимости в услугах оценщика: прогноз стоимости арт-объектов даёт возможность самостоятельно оценить стоимость произведения искусства без привлечения профессиональных оценщиков, что снижает затраты на услуги экспертов.
                            </li>
                        </ul>
                        <p className={style.desc}>
                            Прогноз стоимости арт-объектов может быть полезен для различных участников рынка искусства, включая коллекционеров, галеристов, арт-дилеров и инвесторов. Он помогает определить оптимальную цену продажи или покупки произведения искусства, а также оценить потенциальную доходность инвестиций в искусство.
                        </p>
                    </div>
                </div>
                <div className={style.section_benefits__block}>
                    <div className={style.section_benefits__info}>
                        <h3 className={style.title}>
                            Алгоритм учитывает 35 критериев
                        </h3>
                        <p className={style.desc}>
                            Наш алгоритм анализа учитывает 35 ключевых факторов, чтобы предоставить вам наиболее точную и актуальную информацию о ценах на картины. Это помогает нам определить реальную стоимость картины и предсказать, как она может измениться в будущем. Мы используем такие критерии как: 
                        </p>
                        <ul className={style.ul}>
                            <li className={style.desc}>
                                История художника и его карьера.
                            </li>
                            <li className={style.desc}>
                                Участие в выставках. 
                            </li>
                            <li className={style.desc}>
                                Размер и формат произведения. 
                            </li>
                            <li className={style.desc}>
                                Сложность техники исполнения.
                            </li>
                            <li className={style.desc}>
                                Тираж произведения и его редкость.
                            </li>
                            <li className={style.desc}>
                                Текущий спрос и предложение на рынке искусства.
                            </li>
                            <li className={style.desc}>
                                И другие...
                            </li>
                        </ul>
                    </div>
                    <img className={style.section_benefits__image} src={benefit2} alt='benefit' />
                </div>
                <div className={style.section_benefits__block}>
                    <img className={style.section_benefits__image} src={benefit3} alt='benefit' />
                    <div className={style.section_benefits__info}>
                        <h3 className={style.title}>
                            База данных пополняется ежемесячно
                        </h3>
                        <p className={style.desc}>
                            База данных регулярно пополняется новыми произведениями, благодаря чему вы всегда можете быть в курсе последних новинок и актуальных тенденций на рынке искусства. Мы постоянно работаем над расширением ассортимента и добавлением новых работ, чтобы предоставить нашим клиентам максимально полную и актуальную информацию.
                        </p>
                        <p className={style.desc}>
                            Одним из ключевых аспектов нашей работы является автоматическое обновление цен на продаваемые арт-объекты в режиме реального времени. Это позволяет нашим пользователям всегда иметь доступ к актуальной информации о стоимости произведений искусства и облегчает процесс выбора и покупки. Таким образом, наша база данных является надёжным источником информации для всех, кто интересуется искусством и хочет быть в курсе последних событий на арт-рынке.
                        </p>
                    </div>
                </div>
            </section>
            <section className={style.section_subscription}>
                <h2 className={style.section_subscription__title}>
                    Выберите подписку
                </h2>
                <div className={style.section_subscription__subsc}>
                    <SubscriptionBlock 
                        image={price1}
                        price='3 000 ₽'
                        month='1 месяц'
                    />
                    <SubscriptionBlock 
                        image={price2}
                        price='12 000 ₽'
                        month='6 месяцев'

                    />
                    <SubscriptionBlock 
                         image={price3}
                         price='18 000 ₽'
                         month='12 месяцев'

                    />
                </div>
            </section>
            <section className={style.section_questions}>
                <div className={style.section_questions__block}>
                    <p className={style.section_questions__desc}>
                        Служба поддержки
                    </p>
                    <h2 className={style.title}>
                        Остались вопросы?
                    </h2>
                    <p className={style.section_questions__desc}>
                        Ответим в течении 6 часов
                    </p>
                    <Button size='xl' className={style.section_questions__button}>
                        написать
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Subscription;