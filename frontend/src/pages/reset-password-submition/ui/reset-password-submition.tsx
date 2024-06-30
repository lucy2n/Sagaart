import React from 'react';
import {SignInUp} from '../../../widgets/sign-in-up/index';
import styles from './reset-password-submition.module.css';
import { FormResetPasswordSubmition } from '../../../entities/form-reset-password-submition/index';
import  auth from '../../../assets/images/auth.png';

const  ResetPasswordSubmition = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <SignInUp
             formComponent={FormResetPasswordSubmition}
             imageSrc={auth}
             imageAlt='horses'
            />
        </section>
    );
};
export default ResetPasswordSubmition;
