
import React, { FC, useEffect } from 'react';
import type { FormChangePasswordProps } from './types';
import { Input } from '../../../shared/ui';
import styles from './form-change-password.module.css';
import { useFormContext } from 'react-hook-form';
import { Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';



export const FormChangePasswordFields: FC<FormChangePasswordProps> = ({
	serverPasswordError,
	setServerPasswordError,
	isSubmitSuccessfulReset,
	isSubmitDisabled,
	setSubmitSuccessfulReset,
}) => {

	const {
		reset,
		formState: { isValid, errors },
	} = useFormContext();


	useEffect(() => {
		errors.password?.message && setServerPasswordError('');
	}, [errors.password?.message]);

	useEffect(() => {
		if (isSubmitSuccessfulReset) {
			reset();
			setSubmitSuccessfulReset(false);
		}
	}, [isSubmitSuccessfulReset]); 

	return (
    <div className={styles.section}>
        <h1 className={clsx(styles.title, 'text-style-heading-1')}>Введите пароль</h1>
        <p className={clsx(styles.subtitle, 'text-style-body-l')}>Ваш пароль сброшен, введите новый </p>
        <div className={styles.container}>
            <div className={styles.input_list}>

                <Input
						name="newPassword"
						labelName="Пароль"
						type={'password'}
						error={
							errors.newPassword
								? `${errors.newPassword?.message}`
								: serverPasswordError
						}
					/>
                <Input
						name="repeatNewPassword"
						labelName="Повторите пароль"
						type={'password'}
						error={
							errors.repeatNewPassword
								? `${errors.repeatNewPassword?.message}`
								: serverPasswordError
						}
					/>
            </div>

            <Button
					className={styles.button}
					type='submit'
					size='xl'
					view='normal'
					width='max'
					disabled={!isValid || isSubmitDisabled}
				> Дальше </Button>
        </div>
    </div>
	);
};