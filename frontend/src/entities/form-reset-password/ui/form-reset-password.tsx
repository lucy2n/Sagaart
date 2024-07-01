
import React, { FC } from 'react';
import type { FormResetPasswordProps } from './types';
import { Input } from '../../../shared/ui';
import styles from './form-reset-password.module.css';
import { useFormContext } from 'react-hook-form';
import { Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';
import { useParams } from 'react-router-dom';


export const FormFieldsResetPassword: FC<FormResetPasswordProps> = ({
	serverErrorText,
	setServerErrorText
}) => {

	const { email } = useParams();


	const {
		formState: { isValid, errors },
	} = useFormContext();

	return (
    <div className={styles.section}>
        <h1 className={clsx(styles.title, 'text-style-heading-1')}>Восстановить пароль</h1>
        <p className={clsx(styles.subtitle, 'text-style-body-l')}>Введите ваш Email, на него мы отправим письмо для сброса пароля </p>
        <div className={styles.container}>
            <div className={styles.input_list}>
                <Input
						name="email"
						labelName="E-mail"
						error={errors.email ? `${errors.email?.message}` : ''}
						style={{ backgroundColor: 'rgba(239,233,224,1)'}}
						onFocus={() => setServerErrorText('')}
						defaultValue={email??''}
					/>
            </div>

            <Button
					className={styles.button}
					type='submit'
					size='xl'
					view='normal'
					width='max'
					disabled={!isValid}
				> отправить письмо для сброса пароля </Button>
            <span className={styles.server_error}>{serverErrorText}</span>
        </div>
    </div>
	);
};