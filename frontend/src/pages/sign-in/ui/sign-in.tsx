import React from 'react';
import {SignInUp} from '../../../widgets/sign-in-up/index';
import styles from './sign-in.module.css';
import { FormSigninFeature } from '../../../features/form-signin/form-signin';
import  auth from '../../../assets/images/auth.png';

const SignIn = (): JSX.Element => {
    return (
        <section className={styles.sign_in}>
            <SignInUp
             formComponent={FormSigninFeature}
             imageSrc={auth}
             imageAlt='horses'
            />
        </section>
    );
};
export default SignIn;