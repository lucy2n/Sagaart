import img1 from '../../../assets/images/15.png';
import img2 from '../../../assets/images/19.png';
import img3 from '../../../assets/images/21.png';
import img4 from '../../../assets/images/20.png';
import img5 from '../../../assets/images/18.png';
import img6 from '../../../assets/images/scale_1200 1.png';
import { Item } from '../../../shared/entities/breadcrumbs';

export const items: Item[] = [
  {
      text: 'Каталог',
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      action: () => {},
  },
];

export const categoriesData = [
  { title: 'Живопись', image: img1 },
  { title: 'Современное искусство', image: img2 },
  { title: 'Минимализм', image: img3 },
  { title: 'Графика', image: img4 },
  { title: 'Фотография', image: img5 },
  { title: 'Художники', image: img6 },
];

export const filterOptions = [
  { label: 'Рекомендуемые', value: 'option1' },
  { label: 'Недавно добавленные', value: 'option2' },
  { label: 'Цена по возростанию', value: 'option3' },
  { label: 'Цена по убыванию', value: 'option4' },
];