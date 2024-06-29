import * as yup from 'yup';

const schema = yup.object().shape({
    object_author_name: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(2, 'Длина поля от 2 до 30 символов')
        .max(30, 'Длина поля от 2 до 30 символов'),
    art_object_name: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(2, 'Длина поля от 2 до 30 символов')
        .max(30, 'Длина поля от 2 до 30 символов'),
    object_author_city_live: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(2, 'Длина поля от 2 до 30 символов')
        .max(30, 'Длина поля от 2 до 30 символов'),
    object_author_age: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(1, 'Длина поля от 1 до 3 символов')
        .max(3, 'Длина поля от 2 до 3 символов'),
    object_author_gender: yup
        .string()
        .required('Поле обязательно для заполнения'),
    art_object_city_sale: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(2, 'Длина поля от 2 до 30 символов')
        .max(30, 'Длина поля от 2 до 30 символов'),
    art_object_year: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(4, 'Длина поля 4 символова')
        .max(4, 'Длина поля 4 символа')
        .matches(
            /^\d{4}$/,
            'Введите корректный год'
        ),
    art_object_category: yup
        .string()
        .required('Поле обязательно для заполнения'),
    art_object_size: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .matches(
            /^\d\d\.\d\x\d\d\.\dсм$/,
            'Введите корректный рахмер'
        ),
    art_object_genre: yup
        .string()
        .required('Поле обязательно для заполнения'),
    art_object_style: yup
        .string()
        .required('Поле обязательно для заполнения'),
    art_object_tablet_material: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(2, 'Длина поля от 2 до 30 символов')
        .max(30, 'Длина поля от 2 до 30 символов'),
    art_object_material: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(2, 'Длина поля от 2 до 30 символов')
        .max(30, 'Длина поля от 2 до 30 символов'),
});
export default schema;