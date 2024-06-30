
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsSignin } from '../../entities/form-signin/index';
import FormSignupSchema from '../../shared/utils/validation-schemas/form-signup-schema';
import { signIn, errorParser } from '../../shared/api/user';
import { IToken } from '../../shared/entities/user';
import { useNavigate } from 'react-router-dom';
import { loggedIn, setName, setEmail, setTelephone, resetUser } from '../../store/slices/userSlice';
import { getUserInformation } from '../../shared/api/user';
import {  useAppDispatch } from '../../shared/utils/hooks';
import { IUser } from '../../shared/entities/user';

export const FormSigninFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();


	const handleSubmit = (data: any) => {
		setServerErrorText('');
		signIn({ ...data })
			.then((res: IToken | void) => {
				if ((res as IToken)?.auth_token) {
					console.log((res as IToken)?.auth_token);
					localStorage.setItem('token', (res as IToken)?.auth_token);
					getUserInformation()
						.then(({ email, user_name, telephone }: IUser) => {
							dispatch(loggedIn());
							dispatch(setEmail(email));
							dispatch(setName(user_name ?? ''));
							dispatch(setTelephone(telephone ?? ''));
							console.log(email, user_name, telephone);
							navigate('/profile');
						})
						.catch((err) => {
							dispatch(resetUser());
							localStorage.removeItem('token');
							console.error(err);
						});
				}
			})
			.catch((error) => {
				console.log(error);
				setServerErrorText('Произошла ошибка входа');
			});
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormSignupSchema}>
        <FormFieldsSignin
				serverErrorText={serverErrorText}
				setServerErrorText={setServerErrorText as () => string}
			/>
    </Form>
	);
};