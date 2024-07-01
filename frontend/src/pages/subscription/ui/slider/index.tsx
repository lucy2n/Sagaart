import React, { useState } from 'react';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';
import media from '../../../../assets/images/Media.png';
import analytics from '../../../../assets/images/Analytics.png';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    title: 'Сервис оценки',
    desc: 'Сервис поможет провести анализ и оценить стоимость арт-объектов на основе анализа больших данных с помощью авторского алгоритма, который учитывает 35 критериев.',
    img: media,
    buttonText: 'Далее',
    buttonAction: 'next'
  },
  {
    title: 'Аналитика',
    desc: 'Наш сервис предлагает полный анализ арт-объекта, включая справедливую оценку стоимости. Вы узнаете о достижениях автора, коллекциях и выставках, а также историю изменения цен. С нашей аналитикой вы сможете принять обоснованное решение об инвестициях в искусство.',
    img: analytics,
    buttonText: 'Назад',
    buttonAction: 'back'
  }
];

const Slider = () => {
  const [count, setCount] = useState<number>(0);

  const handleButtonClick = (action: string) => {
    setCount(action === 'next' ? count + 1 : count - 1);
  };

  const navigate = useNavigate();

  
  const currentSlide = slides[count];

  return (
      <div className={style.main}>
          <div className={style.info}>
              <p>{count + 1} of {slides.length}</p>
              <div>
                  <h2 className={style.title}>{currentSlide.title}</h2>
                  <p className={style.desc}>{currentSlide.desc}</p>
              </div>
              <Button 
                 size='l' 
                 className={style.button} 
                 onClick={() => handleButtonClick(currentSlide.buttonAction)}
              >
                  {currentSlide.buttonText}
              </Button>
          </div>
          <div className={style.image_block}>
              <img src={currentSlide.img} className={count === 0 ? style.image : style.image_2} />
              {count === 1 && (
                  <Button size='xl' className={style.button_image} onClick={() => navigate('/review')}>получить аналитику</Button>
              )}
          </div>
      </div>
  );
};

export default Slider;