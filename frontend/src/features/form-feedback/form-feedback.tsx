
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFeedback } from '../../entities/form-feedback';
import FormFeedbackSchema from '../../shared/utils/validation-schemas/form-feedback-schema';
import { feedback } from '../../shared/api/feedback';
import { useNavigate } from 'react-router-dom';
import { RoutePathname } from '../../shared/utils/constants';



export const FormFeedbackFeature: FC = () => {
	const [serverErrorText, setServerErrorText] = useState('');
	const navigate = useNavigate();


	const handleSubmit = (data: any) => {
		setServerErrorText('');
		feedback({
			user_mail: String(data.email),
			user_name: String(data.name),
			user_phone: String(data.phone),
			feedback_message: String(data.report),
		})
			.then(() => {
				navigate(RoutePathname.mainPage);
			})
			.catch((error) => {
				console.log(error);
				setServerErrorText('Произошла ошибка отправки формы обратной связи');
			});
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormFeedbackSchema}>
        <FormFeedback
				serverErrorText={serverErrorText}
				setServerErrorText={setServerErrorText as () => string}
			/>
    </Form>
	);
};