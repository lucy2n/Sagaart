
import React, { FC, useEffect, useState } from 'react';
import type { FormSignupProps } from './types';
import { Input } from '../../../shared/ui/';
import styles from './form-signup.module.css';
import { useFormContext } from 'react-hook-form';
import { Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

export const FormFieldsSignup: FC<FormSignupProps> = ({
	serverErrorText='',
	serverEmailError='',
	serverPasswordError='',
	setServerEmailError,
	setServerPasswordError,
	clearServerErrorText,
}) => {

	const {
		formState: { isValid, errors },
	} = useFormContext();

	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked);
	};

	useEffect(() => {
		errors.email?.message && setServerEmailError('');
	}, [errors.email?.message]);

	useEffect(() => {
		errors.password?.message && setServerPasswordError('');
	}, [errors.password?.message]);

	return (
    <div className={styles.section}>
        <h1 className={clsx(styles.title, 'text-style-heading-1')}>Регистрация</h1>
        <p className={clsx(styles.subtitle, 'text-style-body-l')}>Зарегистрируйтесь, чтобы получать персональные рекомендации </p>
        <div className={styles.container}>
            <div className={styles.input_list}>
                <Input
						name="email"
						labelName="E-mail"
						error={errors.email ? `${errors.email?.message}` : serverEmailError}
						style={{ backgroundColor: 'rgba(239,233,224,1)'}}
						onFocus={clearServerErrorText}
					/>
                <Input
						name="password"
						labelName="Пароль"
						type={'password'}
						error={
							errors.password
								? `${errors.password?.message}`
								: serverPasswordError
						}
						style={{ backgroundColor: 'rgba(239,233,224,1)'}}
						onFocus={clearServerErrorText}
					/>
            </div>
            <label className={styles.checkbox}>
                я согласен с политикой обработки персональных данных и правилами использования сервиса
                <input
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckboxChange}
					/>
                <span></span>
            </label>
            <Button 
			className={styles.button}
			type='submit' 
			size='xl' 
			view='normal'
			width='max'
			disabled={!isChecked||!isValid}
			> Дальше </Button>
            <span className={styles.server_error}>{serverErrorText}</span>
        </div>
        <p className={styles.transition}>У вас уже есть аккаунт? <Link  className={styles.link} to="/signin">Войти</Link></p>
    </div>
	);
};