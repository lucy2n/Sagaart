
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFeedback } from '../../entities/form-feedback';
import FormFeedbackSchema from '../../shared/utils/validation-schemas/form-feedback-schema';

export const FormFeedbackFeature: FC = () => {
	const [serverErrorText, setServerErrorText] = useState('');

	const handleSubmit = () => {
		console.log('message');
	};
    
	return (
    <Form onSubmit={handleSubmit} schema={FormFeedbackSchema}>
        <FormFeedback
				serverErrorText={serverErrorText}
			/>
    </Form>
	);
};