import React from 'react';
import styles from './sign-in-up.module.css';

import {SignInUpProps} from './types';

export const SignInUp: React.FC<SignInUpProps> = ({ formComponent: FormComponent, imageSrc,imageAlt }): JSX.Element => {
    return (
        <div className={styles.container}>
            <FormComponent />
            <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>
    );
  };