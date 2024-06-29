import React from 'react';
import { FormFeedbackFeature } from '../../../features/form-feedback/form-feedback';
import styles from './feedback.module.css';
import feedback from '../../../assets/images/feedback.png';

const Feedback = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={feedback} alt="art gallery" className={styles.image} />
                <FormFeedbackFeature />
            </div>
        </section>
    );
};
export default Feedback;