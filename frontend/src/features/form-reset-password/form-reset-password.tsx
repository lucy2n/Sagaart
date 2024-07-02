
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsResetPassword } from '../../entities/form-reset-password/index';
import FormResetPasswordSchema from '../../shared/utils/validation-schemas/form-reset-password-schema';
import { resetPassword } from '../../shared/api/user';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../shared/utils/hooks';
import { setPasswordResetMail } from '../../store/slices/userSlice';
import { RoutePathname } from '../../shared/utils/constants';


export const FormResetPasswordFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();


	const handleSubmit = (data: any) => {
		setServerErrorText('');
		resetPassword({ ...data })
			.then(() => {
				dispatch(setPasswordResetMail(data.email));
				navigate(RoutePathname.resetPassSubmissionPage);
			})
			.catch((error) => {
				console.log(error);
				setServerErrorText('Произошла ошибка сброса пароля');
			});
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormResetPasswordSchema}>
        <FormFieldsResetPassword
				serverErrorText={serverErrorText}
				setServerErrorText={setServerErrorText as () => string}
			/>
    </Form>
	);
};