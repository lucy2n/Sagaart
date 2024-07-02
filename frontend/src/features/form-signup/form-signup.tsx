
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsSignup } from '../../entities/form-signup/ui/form-signup';
import FormSignupSchema from '../../shared/utils/validation-schemas/form-signup-schema';
import { createUser } from '../../shared/api/user';
import { useNavigate } from 'react-router-dom';
import { RoutePathname } from '../../shared/utils/constants';


export const FormSignupFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');
	const [serverEmailError, setServerEmailError] = useState('');
	const [serverPasswordError, setServerPasswordError] = useState('');
	const navigate = useNavigate();

	const clearServerErrorText = () => {
        setServerErrorText('');
    };

	const handleSubmit = (data: any) => {
		setServerErrorText('');
		setServerEmailError('');
		setServerPasswordError('');
		createUser({ ...data })
			.then(() => {
				navigate(RoutePathname.loginPage);
			})
			.catch((error) => {
				console.log(error);
				setServerErrorText('Произошла ошибка регистрации');
				setServerEmailError(error.data?.email);
				setServerPasswordError(error.data?.password);
			});
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormSignupSchema}>
        <FormFieldsSignup
				serverErrorText={serverErrorText}
				serverEmailError={serverEmailError}
				serverPasswordError={serverPasswordError}
				setServerEmailError={setServerEmailError as () => string}
				setServerPasswordError={setServerPasswordError as () => string}
				clearServerErrorText={clearServerErrorText}
			/>
    </Form>
	);
};