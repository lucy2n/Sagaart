
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsPA } from '../../entities/form-personal-account';
import FormProfileSchema from '../../shared/utils/validation-schemas/form-profile-schema';
import { IUserUpdate } from '../../shared/entities/user';
import { setName, setTelephone } from '../../store/slices/userSlice';
import { updateUser } from '../../shared/api/user';
import { useAppDispatch, useAppSelector } from '../../shared/utils/hooks';

export const FormPersonalAccountFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');

	const dispatch = useAppDispatch();
	const user_name = useAppSelector(state => state.user.name);
	const telephone = useAppSelector(state => state.user.telephone);

	const handleSubmit = (data: any) => {
		setServerErrorText('');
		if ((data.user_name !== user_name) || (data.telephone !== telephone)) {
			let update = {};

			if (data.user_name !== user_name) {
				update = {
					...update,
					user_name: data.user_name
				};
			}
			if (data.telephone !== telephone) {
				update = {
					...update,
					telephone: data.telephone
				};
			}

			updateUser(update)
				.then((res: IUserUpdate | void) => {
					dispatch(setName(data.user_name ?? ''));
					dispatch(setTelephone(data.telephone ?? ''));
				})
				.catch((error) => {
					console.log(error);
					setServerErrorText('Произошла ошибка изменения данных личного кабинета');
				});
		}
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormProfileSchema}>
        <FormFieldsPA
				serverErrorText={serverErrorText}
				setServerErrorText={setServerErrorText as () => string}
			/>
    </Form>
	);
};