// constants.ts
import analyses from '../../../assets/icons/1.svg';
import innovativeness from '../../../assets/icons/2.svg';
import analytics from '../../../assets/icons/3.svg';
import credibility from '../../../assets/icons/4.svg';
import image1 from '../../../assets/images/Image.png';
import image2 from '../../../assets/images/Image-2.png';
import image3 from '../../../assets/images/Image-3.png';
import image4 from '../../../assets/images/Image-4.png';
import design from '../../../assets/images/Desktop2.png';
import art from '../../../assets/images/Desktop.png';
import main from '../../../assets/images/picture.png';
import chart from '../../../assets/images/chart-main.png';

export const BENEFITS = [
  {
    title: 'Объективный анализ цены',
    desc: 'Вы получаете справедливую цену арт-объекта, основанную на алгоритме, исключающем субъективное мнение специалистов.',
    icon: analyses,
  },
  {
    title: 'Инновационность',
    desc: 'Разработанный алгоритм не имеет аналогов в мире, вы можете получить доступ уже сейчас.',
    icon: innovativeness,
  },
  {
    title: 'Анатилическая база',
    desc: 'По подписке вы получаете доступ к аналитике по более чем 13000 объектов искусства на нашем маркетплейсе.',
    icon: analytics,
  },
  {
    title: 'Достоверность',
    desc: 'Мы провели многочисленные исследования и испытания технологии и получили высокий уровень достоверности.',
    icon: credibility,
  },
];

export const NEWS = [
  {
    title: 'Арт-рынок в 2023-2024 году',
    desc: 'Рынок современного искусства вступил в важную и долгожданную фазу адаптации.',
    image: image1,
  },
  {
    title: 'Отчет о рынке искусства',
    desc: 'Замедление темпов роста на основных мировых площадках связано с меньшим количеством результатов.',
    image: image2,
  },
  {
    title: 'Путеводители по выставкам',
    desc: 'Топ-3 выставки современного искусства на июнь-июль в 2024 году.',
    image: image3,
  },
  {
    title: 'Обзор аукционного рынка',
    desc: 'Топ-10 аукционных домов по аукционному обороту в 2023 году.',
    image: image4,
  },
];

export const GALLERY_IMAGES = {
  main: main,
  chart: chart,
  design: design,
  art: art,
};