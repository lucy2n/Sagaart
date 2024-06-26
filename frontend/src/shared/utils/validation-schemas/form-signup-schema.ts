import * as yup from 'yup';

const schema = yup.object().shape({
	email: yup
		.string()
		.required('Поле обязательно для заполнения')
		.min(6, 'Длина поля от 6 до 256 символов')
		.max(256, 'Длина поля от 6 до 256 символов')
		.trim()
		.matches(
			/^[^/[!"#$%&'()*+,/:;<=>?[\\\]^`{|}~\u2116\u0024\u20AC\u00A3\u00A5\u20BD\u00A9\u2122\u00AE]*$/,
			'Только дефис, точка, нижнее подчеркивание'
		)
		.matches(/^[a-zA-Zа-яА-Я0-9-._@]*$/, 'Только буквы (A-z, А-я), цифры (0-9)')
		.email('Введите корректный E-mail')
		.matches(
			/^[a-zA-Z0-9][a-zA-Z0-9_.-]*[a-zA-Z0-9]@[a-zA-Z0-9_-]+(?:\.[a-zA-Zа-яА-Я0-9_-]+)*\.[a-zA-Zа-яА-Я_-]{2,}$/,
			'Введите корректный E-mail'
		),
	password: yup
		.string()
		.trim()
		.required('Поле обязательно для заполнения')
		.min(8, 'Длина поля от 8 до 20 символов')
		.max(20, 'Длина поля от 8 до 20 символов')
		.matches(
			/[a-zA-Zа-яА-Я0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\u2116\u0024\u20AC\u00A3\u00A5\u20BD\u00A9\u2122\u00AE]$/,
			'Только буквы (A-z, А-я), цифры (0-9), спецсимволы'
		),
});
export default schema;