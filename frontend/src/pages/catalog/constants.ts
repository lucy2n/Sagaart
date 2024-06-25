import { Item } from '../../shared/entities/breadcrumbs';

export const items: Item[] = [
    {
        text: 'Каталог',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        action: () => {},
    },
];

export const options = [
    { label: 'Рекомендуемые', value: 'option1' },
    { label: 'Недавно добавленные', value: 'option2' },
    { label: 'Цена по возростанию', value: 'option3' },
    { label: 'Цена по убыванию', value: 'option4' },
  ];
