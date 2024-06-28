import React, { FC, FormEvent, useState, } from 'react';
import { Form } from '../../shared/ui';
import { FormFieldsUploading } from '../../entities/form-uploading';
import FormUploadingSchema from '../../shared/utils/validation-schemas/form-uploading-schema';

type FormProp = {
	productAuthor_name: string;
	product: string;
	category: string;
}

export const FormUploadingFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');

	const handleSubmit = (data:any) => {
		console.log(data);

	};

	return (
    <Form onSubmit={handleSubmit} schema={FormUploadingSchema}>
        <FormFieldsUploading
				serverErrorText={serverErrorText}
			/>
    </Form>
	);
};