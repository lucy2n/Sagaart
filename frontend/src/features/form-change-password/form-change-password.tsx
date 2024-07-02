
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormChangePasswordFields } from '../../entities/form-change-password/index';
import FormChangePasswordSchema from '../../shared/utils/validation-schemas/form-change-password-schema';
import { useNavigate, useParams } from 'react-router-dom';
import { changePassword } from '../../shared/api/user';
import { RoutePathname } from '../../shared/utils/constants';


export const FormChangePasswordFeature: FC = () => {
	

	const [isSubmitSuccessfulReset, setSubmitSuccessfulReset] = useState(false);
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
	const [serverPasswordError, setServerPasswordError] = useState('');
	const { uid, token } = useParams();
	const navigate = useNavigate();


	const handleSubmit = (data:any) => {
		setIsSubmitDisabled(true);
		changePassword ({
			new_password: data?.newPassword,
			re_new_password: data?.repeatNewPassword,
			uid: uid??'',
			token: token??''
		})
		.then(()=>{
			navigate(RoutePathname.loginPage);
		})
		.catch((error)=>{
			console.log(error);
			setServerPasswordError('Произошла ошибка смены пароля');
		})
		.finally(()=>{
			setIsSubmitDisabled(false);
		})
		;
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormChangePasswordSchema}>
        <FormChangePasswordFields
				serverPasswordError={serverPasswordError}
				setServerPasswordError={setServerPasswordError as () => string}
				isSubmitSuccessfulReset={isSubmitSuccessfulReset}
				isSubmitDisabled={isSubmitDisabled}
				setSubmitSuccessfulReset={setSubmitSuccessfulReset}
			/>
    </Form>
	);
};