
import React, { useState, useEffect, FC } from 'react';
import type { FormUploadingProps } from './types';
import { Input, InputDropzone, InputM } from '../../../shared/ui';
import styles from './form-uploading.module.css';
import { useFormContext } from 'react-hook-form';
import { Button, Icon } from '@gravity-ui/uikit';
import { Select } from '../../../shared/ui/';

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



import { clsx } from 'clsx';
import { JSX } from 'react/jsx-runtime';

const listCategory = [
    { value: '1', content: 'Живопись' },
    { value: '2', content: 'Графика' },
    { value: '3', content: 'Фотография' },
    { value: '4', content: 'Digital' },
];

const listStyle = [
    { value: '1', content: 'Анималистика' },
    { value: '2', content: 'Аллегорический' },
    { value: '3', content: 'Батальный' },
    { value: '4', content: 'Былинный' },
    { value: '5', content: 'Бытовой' },
    { value: '6', content: 'Ню' },
    { value: '7', content: 'Религиозный' },
];

const listGenre = [
    { value: '1', content: 'Абстракция' },
    { value: '2', content: 'Минимализм' },
    { value: '3', content: 'Экспрессионизм' },
    { value: '4', content: 'Концептуальное искусство' },
    { value: '5', content: 'Фигуративное искусство' },
    { value: '6', content: 'Pop Art' },
    { value: '7', content: 'Street Art' },
    { value: '8', content: 'Интерьерное' },
];

const listGender = [
    { value: '1', content: 'Мужской' },
    { value: '2', content: 'Женский' },
];


export const FormFieldsUploading: FC<FormUploadingProps> = ({
    serverErrorText = '',
}) => {

    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    const {
        formState: { isValid, errors },
    } = useFormContext();

    const onProfileImageDrop = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setImagePreviewUrl(imageUrl);
        console.log(file.name);
    };

    useEffect(() => {
        return () => {
            if (imagePreviewUrl) {
                URL.revokeObjectURL(imagePreviewUrl);
            }
        };
    }, [imagePreviewUrl]);

    return (
        <div className={styles.section}>
            <h1 className={clsx(styles.title, 'text-style-heading-1')}>Быстрая оценка вашего арт-объекта</h1>
            <div className={styles.container}>
                <div className={styles.input_list}>
                    <Input
                        name="object_author_name"
                        labelName="ФИО художника/ Псевдоним"
                        placeholder="Введите имя художника"
                        error={errors.object_author_name ? `${errors.object_author_name?.message}` : ''}
                        style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                    />
                    <Input
                        name="art_object_name"
                        labelName="Название картины"
                        placeholder="Введите название картины"
                        error={errors.art_object_name ? `${errors.art_object_name?.message}` : ''}
                        style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                    />
                    <Input
                        name="object_author_city_live"
                        labelName="Город проживания художника"
                        placeholder="Укажите город проживания на момент создания объекта"
                        error={errors.object_author_city_live ? `${errors.object_author_city_live?.message}` : ''}
                        style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                    />

                    <div className={styles.input_sublist}>
                        <div className={styles.input_list} >
                            <InputM
                                name="object_author_age"
                                labelName="Возраст художника"
                                placeholder="Укажите возраст на момент создания объекта"
                                error={errors.object_author_age ? `${errors.object_author_age?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                type="custom-mask"
                                maska='9[99]'
                                maskPlaceholder='*'
                            />
                            <Select width='max'
                                className={styles.input}
                                popupClassName={styles.popup_list}
                                name='object_author_gender'
                                labelName='Пол художника'
                                placeholder="Выберите пол художника"
                                options={listGender}
                                error={errors.object_author_gender ? `${errors.object_author_gender?.message}` : ''}
                            />
                            <Input
                                name="art_object_city_sale"
                                labelName="Город продажи"
                                placeholder="Укажите город продажи"
                                error={errors.art_object_city_sale ? `${errors.art_object_city_sale?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                            />
                            <InputM
                                name="art_object_year"
                                labelName="Год создания"
                                placeholder="Укажите год создания"
                                error={errors.art_object_year ? `${errors.art_object_year?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                type="custom-mask"
                                maska='9999'
                                maskPlaceholder='****'
                            />
                            <Select width='max'
                                className={styles.input}
                                popupClassName={styles.popup_list}
                                name='art_object_category'
                                labelName='Категория'
                                placeholder="Выберите категорию"
                                options={listCategory}
                                error={errors.art_object_category ? `${errors.art_object_category?.message}` : ''}
                            />

                        </div>
                        <div className={styles.input_list}>
                            <InputM
                                name="art_object_size"
                                labelName="Размер"
                                placeholder="Укажите размер картины"
                                error={errors.art_object_size ? `${errors.art_object_size?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                                type="custom-mask"
                                maska='99.9x99.9см'
                                maskPlaceholder='**.*-**.*см'
                            />
                            <Select width='max'
                                className={styles.input}
                                popupClassName={styles.popup_list}
                                name='art_object_genre'
                                labelName='Жанр'
                                placeholder="Выберите жанр"
                                options={listGenre}
                                error={errors.art_object_genre ? `${errors.art_object_genre?.message}` : ''}
                            />
                            <Select width='max'
                                className={styles.input}
                                popupClassName={styles.popup_list}
                                name='art_object_style'
                                labelName='Стиль'
                                placeholder="Выберите стиль"
                                options={listStyle}
                                error={errors.art_object_style ? `${errors.art_object_style?.message}` : ''}
                            />
                            <Input
                                name="art_object_tablet_material"
                                labelName="Материал планшета"
                                placeholder="Укажите материал планшета "
                                error={errors.art_object_tablet_material ? `${errors.art_object_tablet_material?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                            />
                            <Input
                                name="art_object_material"
                                labelName="Материал работы"
                                placeholder="Укажите материал которым нарисовано"
                                error={errors.art_object_material ? `${errors.art_object_material?.message}` : ''}
                                style={{ backgroundColor: 'rgba(239,233,224,1)' }}
                            />
                        </div>
                    </div>
                    <InputDropzone
                        onFileAccepted={onProfileImageDrop}
                        imageUrl={imagePreviewUrl}
                        imageAlt="Preview"
                        labelName="Загрузить изображение"
                        className={styles.dropzone}
                        name="image"
                    />
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