import React from 'react';
import {SignInUp} from '../../../widgets/sign-in-up/index';
import styles from './new-password-submition.module.css';
import { FormChangePasswordFeature } from '../../../features/form-change-password/form-change-password';
import  auth from '../../../assets/images/auth.png';

const NewPasswordSubmition = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <SignInUp
             formComponent={FormChangePasswordFeature}
             imageSrc={auth}
             imageAlt='horses'
            />
        </section>
    );
};
export default NewPasswordSubmition;