
import React, { FC } from 'react';
import type { FormResetPasswordSubmitionProps } from './types';
import styles from './form-reset-password-submition.module.css';
import { Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';

export const FormResetPasswordSubmition: FC<FormResetPasswordSubmitionProps> = ({
	emailResetPassword = '',
}) => {

	return (
    <div className={styles.section}>
        <h1 className={clsx(styles.title, 'text-style-heading-1')}>Сообщение отправлено</h1>
        <p className={clsx(styles.subtitle, 'text-style-body-l')}>{`Мы отправили письмо на адрес ${emailResetPassword}`}</p>
        <div className={styles.container}>
            <Button
					className={clsx(styles.button,styles.button_border)}
					size='xl'
					view='normal'
					width='max'
				> Назад на страницу входа
            </Button>
            <Button
					className={clsx(styles.button,styles.button_flat)}
					size='xl'
					view='flat'
					width='max'
				> Повторить попытку
            </Button>
        </div>
    </div>
	);
};