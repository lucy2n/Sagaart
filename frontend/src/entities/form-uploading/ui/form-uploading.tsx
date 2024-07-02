
import React, { FC } from 'react';
import type { FormUploadingProps } from './types';
import { Input, InputM } from '../../../shared/ui';
import styles from './form-uploading.module.css';
import { useFormContext } from 'react-hook-form';
import { Button, Icon } from '@gravity-ui/uikit';
import { Select } from '../../../shared/ui/';
import { clsx } from 'clsx';
import { JSX } from 'react/jsx-runtime';




const Color = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M8.888 8.888a.727.727 0 0 0 0 1.029l10.446 10.446a.727.727 0 1 0 1.028-1.029L9.916 8.888a.727.727 0 0 0-1.028 0m-1.061 2.09a2.227 2.227 0 1 1 3.15-3.15l10.446 10.446a2.227 2.227 0 1 1-3.15 3.15z"
                clipRule="evenodd"
            />
            <path
                d="M8.362 8.362a1.483 1.483 0 0 0 0 2.098l2.104 2.103 2.097-2.097-2.103-2.104a1.48 1.48 0 0 0-2.098 0"
            />
            <path
                fillRule="evenodd"
                d="M1.5 9a.75.75 0 0 1 .75-.75H4.5a.75.75 0 0 1 0 1.5H2.25A.75.75 0 0 1 1.5 9M3.696 3.696a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.06 1.06l-1.592-1.59a.75.75 0 0 1 0-1.06M9 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 9 1.5M14.303 3.696a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.06l1.59-1.592a.75.75 0 0 1 1.06 0M6.348 11.651a.75.75 0 0 1 0 1.061l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0"
                clipRule="evenodd"
            />
        </svg>
    );
};

const listGender = [
    { value: '1', content: 'Мужской' },
    { value: '2', content: 'Женский' },
];

export const FormFieldsUploading: FC<FormUploadingProps> = ({
    serverErrorText = '',
    setServerErrorText
}) => {

    const {
        formState: { isValid, errors },
    } = useFormContext();

    return (
        <div className={styles.section}>
            <h1 className={clsx(styles.title, 'text-style-heading-1')}>Быстрая оценка вашего арт-объекта</h1>
            <div className={styles.container}>
                <div className={styles.input_list}>
                    <Input
                        name="author_name"
                        labelName="ФИО художника/ Псевдоним"
                        placeholder="Введите имя художника"
                        error={errors.author_name ? `${errors.author_name?.message}` : ''}
                        style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                        onFocus={() => setServerErrorText('')}
                    />
                    <Input
                        name="product_name"
                        labelName="Название картины"
                        placeholder="Введите название картины"
                        error={errors.product_name ? `${errors.product_name?.message}` : ''}
                        style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                        onFocus={() => setServerErrorText('')}
                    />

                    <Input
                        name='category'
                        labelName='Категория'
                        placeholder="Укажите категорию (например, Живопись, Графика, Фотография, Digital)"
                        error={errors.category ? `${errors.category?.message}` : ''}
                        style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                        onFocus={() => setServerErrorText('')}
                    />

                    <Input
                        name="birth_country"
                        labelName="Страна проживания художника"
                        placeholder="Укажите страну проживания на момент создания объекта"
                        error={errors.country_live ? `${errors.country_live?.message}` : ''}
                        style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                        onFocus={() => setServerErrorText('')}
                    />

                    <div className={styles.input_sublist}>
                        <div className={styles.input_list} >
                            <Select width='max'
                                className={styles.input}
                                popupClassName={styles.popup_list}
                                name='gender'
                                labelName='Пол художника'
                                placeholder="Выберите пол художника"
                                options={listGender}
                                error={errors.object_author_gender ? `${errors.object_author_gender?.message}` : ''}
                            />
                            <InputM
                                name="birth_year"
                                labelName="Год рождения художника"
                                placeholder="Укажите год на рождения художника"
                                error={errors.birth_year ? `${errors.birth_year?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                type="custom-mask"
                                maska='9999'
                                maskPlaceholder='****'
                                onFocus={() => setServerErrorText('')}
                            />
                            <InputM
                                name="year"
                                labelName="Год создания"
                                placeholder="Укажите год создания"
                                error={errors.creation_year ? `${errors.creation_year?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                type="custom-mask"
                                maska='9999'
                                maskPlaceholder='****'
                                onFocus={() => setServerErrorText('')}
                            />
                            <InputM
                                name="size"
                                labelName="Размер"
                                placeholder="Укажите размер картины (например, 012.3x123.1см)"
                                error={errors.size ? `${errors.size?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                type="custom-mask"
                                maska='999.9x999.9см'
                                maskPlaceholder='***.*-***.*см'
                                onFocus={() => setServerErrorText('')}
                            />
                        </div>
                        <div className={styles.input_list}>
                            <Input
                                name="solo_show"
                                labelName="Персональные выставки"
                                placeholder="Укажите персональные выставки"
                                error={errors.solo_show ? `${errors.solo_show?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                onFocus={() => setServerErrorText('')}
                            />
                            <Input
                                name="group_show"
                                labelName="Групповые выставки"
                                placeholder="Укажите групповые выставки"
                                error={errors.group_show ? `${errors.group_show?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                onFocus={() => setServerErrorText('')}
                            />
                            <Input
                                name="tablet_material"
                                labelName="Материал планшета"
                                placeholder="Укажите материал планшета "
                                error={errors.tablet_material ? `${errors.tablet_material?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                onFocus={() => setServerErrorText('')}
                            />
                            <Input
                                name="material"
                                labelName="Материал работы"
                                placeholder="Укажите материал, которым нарисовано"
                                error={errors.material ? `${errors.material?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                onFocus={() => setServerErrorText('')}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    className={styles.button}
                    type='submit'
                    size='xl'
                    view='normal'
                    width='max'
                    disabled={!isValid}
                >
                    <Icon data={Color} size={20} className={styles.icon} />
                    Оценить объект
                </Button>
                <span className={styles.server_error}>{serverErrorText}</span>
            </div>
        </div>
    );
};