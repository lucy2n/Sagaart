
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsSignin } from '../../entities/form-signin/index';
import FormSignupSchema from '../../shared/utils/validation-schemas/form-signup-schema';

export const FormSigninFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');

	const handleSubmit = () => {
		console.log('enter');
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormSignupSchema}>
        <FormFieldsSignin
				serverErrorText={serverErrorText}
			/>
    </Form>
	);
};