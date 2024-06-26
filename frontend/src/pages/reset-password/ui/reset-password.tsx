import React from 'react';
import {SignInUp} from '../../../widgets/sign-in-up/index';
import styles from './reset-password.module.css';
import { FormResetPasswordFeature } from '../../../features/form-reset-password/form-reset-password';
import  auth from '../../../assets/images/auth.png';

const ResetPassword = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <SignInUp
             formComponent={FormResetPasswordFeature}
             imageSrc={auth}
             imageAlt='horses'
            />
        </section>
    );
};
export default ResetPassword;

