
import React, { FC, useEffect, useState } from 'react';
import type { FormPersonalAccountProps } from './types';
import { Input } from '../../../shared/ui';
import styles from './form-personal-accoutn.module.css';
import { useFormContext } from 'react-hook-form';
import { Button, Icon } from '@gravity-ui/uikit';
import { clsx } from 'clsx';
import { useAppSelector } from '../../../shared/utils/hooks';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../assets/images/pa.png';


const Pencil = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element => {
	return (
    <svg
			width={24}
			height={24}
			xmlns="http://www.w3.org/2000/svg">
        <path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.3691 4.80078C17.5702 4.80067 17.7631 4.88051 17.9053 5.02271L18.9765 6.09393C19.1187 6.23614 19.1986 6.42904 19.1984 6.63015C19.1983 6.83126 19.1183 7.02407 18.9759 7.16611L5.82195 20.2902C5.76611 20.3459 5.70192 20.3926 5.63168 20.4285L3.50108 21.5177C3.20847 21.6673 2.8528 21.6112 2.62041 21.3789C2.38803 21.1465 2.33192 20.7908 2.48148 20.4982L3.57069 18.3671C3.60661 18.2969 3.65327 18.2326 3.70901 18.1768L16.8331 5.02331C16.9752 4.88095 17.168 4.80089 17.3691 4.80078Z"
			/>
        <path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.2001 2.81188C19.4638 2.5484 19.8213 2.40039 20.1941 2.40039C20.5669 2.40039 20.9244 2.5484 21.1881 2.81188L20.6912 3.30912L21.1885 2.81221C21.452 3.07586 21.6 3.43335 21.6 3.8061C21.6 4.17884 21.452 4.53633 21.1885 4.79999L20.1944 5.79437C20.0625 5.92628 19.8836 6.00039 19.6971 6.00039C19.5106 6.00039 19.3317 5.92628 19.1998 5.79437L18.2058 4.80004C17.9313 4.52548 17.9314 4.08044 18.2059 3.80594L19.1999 2.81205L19.6971 3.30915L19.2001 2.81188Z"
			/>
    </svg>
	);
};

export const FormFieldsPA: FC<FormPersonalAccountProps> = ({
	serverErrorText = '',
	setServerErrorText,
}) => {

	const {
		watch,
		formState: { isValid, errors },
	} = useFormContext();

	const [formChanged, setFormChanged] = useState(false);

	const [userName, telephone] = watch(['user_name', 'telephone']);

	const user_name = useAppSelector(state => state.user.name);
	const user_telephone = useAppSelector(state => state.user.telephone);
	const user_email = useAppSelector(state => state.user.email);

	const navigate = useNavigate();

	useEffect(() => {
		if ((user_name !== userName) || (user_telephone !== telephone)) {
			setFormChanged(true);
		}
		else setFormChanged(false);
	}, [userName, telephone, user_name, user_telephone]);


	return (
    <div className={styles.section}>
        <div className={styles.avatar}>
            <img className={styles.image} src={avatar} alt={'avatar'} />
            <div >
                <label className={styles.gropup}>
                    <Input
							name="user_name"
							error={errors.user_name ? `${errors.user_name?.message}` : ''}
							style={{
								backgroundColor: 'rgba(239,233,224,1)',
								fontWeight: '700',
								fontSize: '32px',
								lineHeight: '110%',
								color: '#09090b',
								border: 'none',
							}}
							onFocus={() => setServerErrorText('')}
							defaultValue={user_name}
							placeholder='Имя Фамилия'
							className={styles.name}
						/>
                    <Icon data={Pencil} size={24} />
                </label>
            </div>
        </div>

        <div className={styles.list}>
            <div className={styles.input_list}>
                <div className={styles.input_wrapper}>
                    <p className={clsx(styles.label, styles.label_disabled)}>
                        E-mail:
                    </p>
                    <Input
							name="email"
							error={errors.email ? `${errors.email?.message}` : ''}
							style={{ textAlign: 'right', paddingLeft: '100px' }}
							onFocus={() => setServerErrorText('')}
							defaultValue={user_email}
							disabled={true}
						/>
                </div>
                <div className={styles.input_wrapper}>
                    <p className={styles.label}>
                        Телефон:
                    </p>
                    <Input
							name="telephone"
							error={errors.telephone ? `${errors.telephone?.message}` : ''}
							style={{ backgroundColor: 'rgba(239,233,224,1)', textAlign: 'right', paddingLeft: '100px' }}
							onFocus={() => setServerErrorText('')}
							defaultValue={user_telephone}
						/>
                </div>
            </div>
            <div className={styles.action_list}>
                <button className={styles.action} onClick={() => {
						navigate(`/reset-password/${user_email}`);
					}}>Изменить&nbsp;пароль
                </button>

            </div>
        </div>


        <Button
				className={styles.button}
				type='submit'
				size='xl'
				disabled={Boolean(errors.telephone) || Boolean(errors.user_name) || !formChanged}
			> Сохранить </Button>
        <span className={styles.server_error}>{serverErrorText}</span>

    </div>
	);
};