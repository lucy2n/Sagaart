
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormChangePasswordFields } from '../../entities/form-change-password/index';
import FormChangePasswordSchema from '../../shared/utils/validation-schemas/form-change-password-schema';
import { useNavigate, useParams } from 'react-router-dom';
import { changePassword } from '../../shared/api/user';


export const FormChangePasswordFeature: FC = () => {
	

	const [isSubmitSuccessfulReset, setSubmitSuccessfulReset] = useState(false);
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
	const [serverPasswordError, setServerPasswordError] = useState('');
	const { uid, token } = useParams();
	const navigate = useNavigate();


	const handleSubmit = (data:any) => {
		console.log('change password',uid,token);
		changePassword ({
			new_password: data?.newPassword,
			re_new_password: data?.repeatNewPassword,
			uid: uid??'',
			token: token??''
		})
		.then(()=>{
			navigate('/signin');
		})
		.catch((error)=>{
			console.log(error);
			setServerPasswordError('Произошла ошибка смены пароля');
		});
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