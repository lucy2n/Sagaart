
import React, { FC } from 'react';
import type { FormSigninProps } from './types';
import { Input } from '../../../shared/ui';
import styles from './form-signin.module.css';
import { useFormContext } from 'react-hook-form';
import { Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

export const FormFieldsSignin: FC<FormSigninProps> = ({
	serverErrorText = '',
}) => {

	const {
		formState: { isValid, errors },
	} = useFormContext();

	return (
    <div className={styles.section}>
        <h1 className={clsx(styles.title, 'text-style-heading-1')}>Авторизация</h1>
        <p className={clsx(styles.subtitle, 'text-style-body-l')}>Авторизируйтесь, чтобы войти в личный кабинет </p>
        <div className={styles.container}>
            <div className={styles.input_list}>
                <Input
						name="email"
						labelName="E-mail"
						error={errors.email ? `${errors.email?.message}` : ''}
					/>
                <Input
						name="password"
						labelName="Пароль"
						type={'password'}
						error={errors.password ? `${errors.password?.message}` : ''}
					/>
            </div>
            <Button
					className={styles.button}
					type='submit'
					size='xl'
					view='normal'
					width='max'
					disabled={!isValid}
				> Дальше </Button>
            <span className={styles.server_error}>{serverErrorText}</span>
        </div>
        <p className={styles.transition}>Забыли пароль? <Link className={styles.link} to="/reset-password'">Восстановление</Link></p>
    </div>
	);
};