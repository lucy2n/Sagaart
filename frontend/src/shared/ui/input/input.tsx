import React, { FC, useState } from 'react';
import { Eye, EyeSlash } from '@gravity-ui/icons';
import { clsx } from 'clsx';
import type { InputProps } from './types';
import styles from './input.module.css';
import { useFormContext } from 'react-hook-form';

export const Input: FC<InputProps> = ({
	name,
	labelName = 'labelName',
	error = null,
	className,
	type = 'text',
	style,
	...props
}) => {
	const [visible, setVisible] = useState(false);
	const handleVisible = () => {
		setVisible(!visible);
	};

	const { register, trigger } = useFormContext();

	const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
		event.target.value = event.target.value.trim();
		await trigger(name);
	};

	console.log(error,clsx({
		[styles.input]: true,
		[styles.input_typeSucces]: Boolean(error) === false,
		[styles.input_typeError]: Boolean(error) === true,
	}));

	return (
    <label className={clsx(className, styles.label)}>
        {labelName}
        <div className={styles.inputContainer}>
            <input
					{...register(`${name}`, { shouldUnregister: true })}
					type={type === 'password' ? (visible ? 'text' : 'password') : type}
					className={clsx({
						[styles.input]: true,
						[styles.input_typeSucces]: Boolean(error) === false,
						[styles.input_typeError]: Boolean(error) === true,
					})}
					style={style}
					{...props}
					onBlur={handleBlur}
				/>
            {type === 'password' && (
            <div className={styles.icon} onClick={handleVisible}>
                {visible ? <Eye color="rgba(20,23,34,0.400)" /> : <EyeSlash color="rgba(20,23,34,0.400)" />}
            </div>
				)}
            {error && <p className={styles.inputError}>{error}</p>}
        </div>
    </label>
	);
};