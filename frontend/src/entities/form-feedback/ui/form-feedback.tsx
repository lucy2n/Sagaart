import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './form-feedback.module.css';
import { Input } from '../../../shared/ui/';
import type { FormFeedbackProps } from './types';
import { Button } from '@gravity-ui/uikit';
import { TextArea } from '@gravity-ui/uikit';

export const FormFeedback: FC<FormFeedbackProps> = ({ 
    serverErrorText = '',
    setServerErrorText
}) => {
    const {
        formState: { isValid, errors },
        register,
    } = useFormContext();

    return (
        <div className={styles.section}>
            <h1 className={styles.title}>Обратная связь</h1>
            <div className={styles.input_list}>
                <Input
                    name="name"
                    labelName="Имя"
                    error={errors.name ? `${errors.name?.message}` : ''}
                    style={{ backgroundColor: 'rgba(239,233,224,1)'}}
                    onFocus={() => setServerErrorText('')}

                />
                <Input
                    name="phone"
                    labelName="Телефон"
                    error={errors.phone ? `${errors.phone?.message}` : ''}
                    style={{ backgroundColor: 'rgba(239,233,224,1)'}}
                    onFocus={() => setServerErrorText('')}


                />
                <Input
                    name="email"
                    labelName="Email"
                    error={errors.email ? `${errors.email?.message}` : ''}
                    style={{ backgroundColor: 'rgba(239,233,224,1)'}}
                    onFocus={() => setServerErrorText('')}


                />
                <label className={styles.label}>
                    Сообщение
                    <TextArea
                        {...register('report', { shouldUnregister: true },)}
                        name="report"
                        size='xl'
                        pin="round-round"
                        errorMessage={errors.report ? `${errors.report?.message}` : ''}
                        rows={20}
                        onFocus={() => setServerErrorText('')}
                    />
                </label>
                <Button
                    className={styles.button}
                    type='submit'
                    size='xl'
                    width='max'
                    disabled={!isValid}
                > Отправить </Button>
                <span className={styles.server_error}>{serverErrorText}</span>
            </div >
        </div >
    );
};