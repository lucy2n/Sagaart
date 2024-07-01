import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { clsx } from 'clsx';
import type { InputProps } from './types';
import styles from './input-mask.module.css';
import { useFormContext } from 'react-hook-form';
import InputMask from 'inputmask';

export const InputM = forwardRef<HTMLInputElement, InputProps>(
	({ name, labelName, error, className, type, style, maska, maskPlaceholder,  ...props }, ref) => {
		const { register, trigger } = useFormContext();
		const internalRef = useRef<HTMLInputElement>(null);

		const { ref: registerRef, ...registerProps } = register(name, { shouldUnregister: true });

		useEffect(() => {
			if (type === 'custom-mask' && internalRef.current) {
				const maskOptions = {
					mask:maska,
					placeholder: maskPlaceholder,
					showMaskOnHover: true, 
					showMaskOnFocus: true, 
				};
				const mask = new InputMask(maskOptions);
				mask.mask(internalRef.current);
			}
		}, [type]);

		useImperativeHandle(ref, () => internalRef.current!);

		const combinedRef = (el: HTMLInputElement | null) => {
			(internalRef as any).current = el;
			registerRef(el);
		};

		const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
			event.target.value = event.target.value.trim();
			await trigger(name);
		};

		return (
    <label className={clsx(className, styles.label)}>
        {labelName}
        <div className={styles.inputContainer}>
            <input
						ref={combinedRef}
						{...registerProps}
						className={clsx({
							[styles.input]: true,
							[styles.input_typeSucces]: !error,
							[styles.input_typeError]: !!error,
						})}
						style={style}
						onBlur={handleBlur}
						{...props}
					/>
            {error && <p className={styles.inputError}>{error}</p>}
        </div>
    </label>
		);
	}
);

InputM.displayName = 'InputM';