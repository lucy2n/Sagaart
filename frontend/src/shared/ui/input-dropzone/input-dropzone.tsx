import React, { InputHTMLAttributes } from 'react';
import { useDropzone } from 'react-dropzone';
import { clsx } from 'clsx';
import styles from './input-dropzone.module.css';
import { useFormContext } from 'react-hook-form';


type InputDropzoneProps = InputHTMLAttributes<HTMLInputElement> & {
    onFileAccepted: (file: File) => void;
    imageUrl: string;
    imageAlt: string;
    labelName?: string;
    error?: string;
    name: string;
}

export const InputDropzone: React.FC<InputDropzoneProps> = ({
    onFileAccepted,
    imageUrl = '',
    imageAlt = '',
    labelName = '',
    name,
    error = null,
    className,
    ...props
}) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: File[]) => {
            onFileAccepted(acceptedFiles[0]);
        },
        multiple: false,
        accept: {
            'image/*': ['.jpeg', '.png']
        },
    });

    const { register, trigger } = useFormContext();

    const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.trim();
        await trigger(name);
    };

    return (
        <label className={styles.label}>
            {labelName}
            <div {...getRootProps()} className={clsx(className, styles.dropzone)}>
                <input
                    {...register(name, { shouldUnregister: true })}
                    {...getInputProps()} 
                    {...props}
                    onBlur={handleBlur}
                    />
                {(imageUrl == '') &&
                    <div>
                        <p className={styles.title}>Выбрать</p>
                        <p className={styles.subtitle}>или перетащить фото сюда</p>
                    </div>
                }
                {imageUrl &&
                    <div className={styles.imageContainer}>
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className={styles.image}
                        />
                        <p className={styles.title}>Выбрать другое изображение</p>
                    </div>
                }
                {error && <p className={styles.inputError}>{error}</p>}

            </div>
        </label>
    );
};