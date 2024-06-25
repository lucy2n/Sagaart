
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsSignup } from '../../entities/form-signup/ui/form-signup';
import FormSignupSchema from '../../shared/utils/validation-schemas/form-signup-schema';

export const FormSignupFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');
	const [serverEmailError, setServerEmailError] = useState('');
	const [serverPasswordError, setServerPasswordError] = useState('');
	const handleSubmit = () => {
		console.log('createUser');
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormSignupSchema}>
        <FormFieldsSignup
				serverErrorText={serverErrorText}
				serverEmailError={serverEmailError}
				serverPasswordError={serverPasswordError}
				setServerEmailError={setServerEmailError as () => string}
				setServerPasswordError={setServerPasswordError as () => string}
			/>
    </Form>
	);
};