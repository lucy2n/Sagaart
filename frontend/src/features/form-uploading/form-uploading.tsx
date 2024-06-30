import React, { FC, useState, } from 'react';
import { Form } from '../../shared/ui';
import { FormFieldsUploading } from '../../entities/form-uploading';
import FormUploadingSchema from '../../shared/utils/validation-schemas/form-uploading-schema';
import { useAppDispatch } from '../../shared/utils/hooks';
import { openModal } from '../../store/slices/modalSlice';
import { analytic } from '../../shared/api/analytic';

type FormProp = {
	productAuthor_name: string;
	product: string;
	category: string;
}

export const FormUploadingFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');
	const dispatch = useAppDispatch();


	const handleSubmit = (data: any) => {

		setServerErrorText('');
		const { size, ...rest } = data;
		const [width, h] = size.split('x');
		const height = h.replace('см', '');

		analytic({
			...rest,
			height : String(height),
			width: String(width)
		})
			.then(() => {
				
				dispatch(openModal());
			})
			.catch((error) => {
				console.log(error);
				setServerErrorText('Произошла ошибка отправки формы оценки арт объекта');
			});
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormUploadingSchema}>
        <FormFieldsUploading
				serverErrorText={serverErrorText}
				setServerErrorText={setServerErrorText as () => string}
			/>
    </Form>
	);
};