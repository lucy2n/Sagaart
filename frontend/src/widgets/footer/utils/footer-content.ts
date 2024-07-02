import { RoutePathname } from '../../../shared/utils/constants';

export const footerContent = [
	{
		columnTitle: 'О нас',
		column: [
			{ linkTitle: 'О проекте', url: RoutePathname.mainPage },
			{ linkTitle: 'Подключиться', url: RoutePathname.subscriptionPage },
			{ linkTitle: 'Каталог', url: RoutePathname.catalogPage },
			{ linkTitle: 'Оценка стоимости', url: RoutePathname.reviewPage },
		],
	},
	{
		columnTitle: 'Сотрудничество',
		column: [
			{ linkTitle: 'Правила сервиса', url: '#' },
			{ linkTitle: 'Награды', url: '#' },
			{ linkTitle: 'Пресса', url: '#' },
            { linkTitle: 'Художникам', url: '#' },
		],
	},
	{
		columnTitle: 'Сервис',
		column: [
			{ linkTitle: 'Оплата и доставка', url: '#' },
			{ linkTitle: 'Проверка подлинности', url: '#' },
			{ linkTitle: 'Юридическая документация', url: '#' },
			{ linkTitle: 'Консультация', url: '#' },
		],
	},
];