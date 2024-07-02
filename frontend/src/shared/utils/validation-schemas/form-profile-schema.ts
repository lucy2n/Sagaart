import * as yup from 'yup';

const schema = yup.object().shape({
    user_name: yup
        .string()
        .trim()
        .min(0, 'Длина до 150 символов')
        .max(150, 'Длина до 150 символов')
        .notRequired()
    ,
    telephone: yup
        .string()
        .trim()
        .matches(
            /^\+7|8 \([1-9]{1}\d{2}\) \d{3}-\d{2}-\d{2}$/,
            { message: 'Введите корректный телефон', excludeEmptyString: false }
        )
        .notRequired(),
});

export default schema; 