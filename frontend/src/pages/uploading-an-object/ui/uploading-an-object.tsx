import React from 'react';
import { FormUploadingFeature } from '../../../features/form-uploading/form-uploading';
import styles from './uploading-an-object.module.css';
import uploading from '../../../assets/images/uploading.png';


const UploadingAnObject = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={uploading} alt="art gallery" className={styles.image} />
                <div className={styles.form}>
                    <FormUploadingFeature />
                </div>
            </div>
        </section>);
};
export default UploadingAnObject;



