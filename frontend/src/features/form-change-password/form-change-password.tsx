
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormChangePasswordFields } from '../../entities/form-change-password/index';
import FormChangePasswordSchema from '../../shared/utils/validation-schemas/form-change-password-schema';

export const FormChangePasswordFeature: FC = () => {

	const [isSubmitSuccessfulReset, setSubmitSuccessfulReset] = useState(false);
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
	const [serverPasswordError, setServerPasswordError] = useState('');

	const handleSubmit = () => {
		setIsSubmitDisabled(true);
		console.log('change password');
		setIsSubmitDisabled(false);
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