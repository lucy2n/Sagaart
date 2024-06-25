import React from 'react';
import {SignInUp} from '../../../widgets/sign-in-up/index';
import styles from './sign-up.module.css';
import { FormSignupFeature } from '../../../features/form-signup/form-signup';
import registration from '../../../assets/images/registration.png';

const SignUp = (): JSX.Element => {
    return (
        <section className={styles.sign_up}>
            <SignInUp
             formComponent={FormSignupFeature}
             imageSrc={registration}
             imageAlt='landscape'
            />
        </section>
    );
};
export default SignUp;