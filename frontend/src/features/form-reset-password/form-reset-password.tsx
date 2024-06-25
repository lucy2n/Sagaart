
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsResetPassword } from '../../entities/form-reset-password/index';
import FormResetPasswordSchema from '../../shared/utils/validation-schemas/form-reset-password-schema';

export const FormResetPasswordFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');

	const handleSubmit = () => {
		console.log('reset password');
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormResetPasswordSchema}>
        <FormFieldsResetPassword
				serverErrorText={serverErrorText}
			/>
    </Form>
	);
};