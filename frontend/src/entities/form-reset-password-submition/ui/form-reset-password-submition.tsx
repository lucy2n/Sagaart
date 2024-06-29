
import React, { FC } from 'react';
import styles from './form-reset-password-submition.module.css';
import { Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';
import { useAppSelector } from '../../../shared/utils/hooks';
import { UserState } from '../../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';


export const FormResetPasswordSubmition: FC = () => {

	const email = useAppSelector((state: UserState) => state.user.passwordResetMail);
	const navigate = useNavigate();

	return (
    <div className={styles.section}>
        <h1 className={clsx(styles.title, 'text-style-heading-1')}>Сообщение отправлено</h1>
        <p className={clsx(styles.subtitle, 'text-style-body-l')}>{`Мы отправили письмо на адрес ${email}`}</p>
        <div className={styles.container}>
            <Button
					className={clsx(styles.button, styles.button_border)}
					size='xl'
					view='normal'
					width='max'
					onClick={()=>navigate('/signin')}
				> Назад на страницу входа
            </Button>
            <Button
					className={clsx(styles.button, styles.button_flat)}
					size='xl'
					view='flat'
					width='max'
					onClick={()=>navigate('/reset-password')}
				> Повторить попытку
            </Button>
        </div>
    </div>
	);
};