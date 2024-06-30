import React, { FC, createRef, useEffect } from 'react';
import { clsx } from 'clsx';
import styles from './select-form.module.css';
import { useFormContext } from 'react-hook-form';
import { Select, SelectOption, SelectOptionGroup } from '@gravity-ui/uikit';

export type SelectProps = {
	name: string;
	labelName?: string;
	error?: string;
	options?: (SelectOption | SelectOptionGroup)[];
	className: string;
	width?: number | 'max' | 'auto' | undefined;
	popupClassName?: string | undefined;
	placeholder?: string;
};

export const SelectForm: FC<SelectProps> = ({
	name,
	options,
	labelName = 'labelName',
	error = null,
	className,
	...props
}) => {

	const { register, setValue } = useFormContext();

	const selectRef = createRef<HTMLButtonElement>();

	useEffect(() => {
		if (selectRef.current) {
			register(name);
		}
	}, [register, name, selectRef]);

	const handleChange = (selectedValue: string[]) => {
		setValue(name, selectedValue[0]);
	};

	return (
    <label className={styles.label}>
        {labelName}
        <div className={styles.inputContainer}>
            <Select
					ref={selectRef}
					className={clsx(className, {
						[styles.input]: true,
						[styles.input_typeSucces]: Boolean(error) === false,
						[styles.input_typeError]: Boolean(error) === true,
					})}
					options={options}
					onUpdate={handleChange}

					{...props}
				/>
            {error && <p className={styles.inputError}>{error}</p>}
        </div>
    </label>
	);
};