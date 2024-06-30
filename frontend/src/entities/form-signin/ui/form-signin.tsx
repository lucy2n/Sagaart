
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
	setServerErrorText
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
						labelName="Email"
						error={errors.email ? `${errors.email?.message}` : ''}
						style={{ backgroundColor: 'rgba(239,233,224,1)' }}
						onFocus={() => setServerErrorText('')}
						placeholder='Введите адрес вашей почты'
					/>
                <Input
						name="password"
						labelName="Пароль"
						type={'password'}
						error={errors.password ? `${errors.password?.message}` : ''}
						style={{ backgroundColor: 'rgba(239,233,224,1)' }}
						onFocus={() => setServerErrorText('')}
						placeholder='Введите пароль'

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
        <p className={styles.transition}>Забыли пароль? <Link className={styles.link} to="/reset-password">Восстановление</Link></p>
        <Link className={styles.link_another} to="/signup">Еще нет аккаунта?</Link>
    </div>
	);
};