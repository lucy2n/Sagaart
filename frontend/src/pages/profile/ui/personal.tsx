import React, { useState } from 'react';
import background from '../../../assets/images/Imadge.png';
import styles from './style.module.css';
import Menu from './menu/index';
import AnalyticsHistory from './analytics-history';
import { FormPersonalAccountFeature } from '../../../features/form-personal-account/form-personal-account';


const Profile = (): JSX.Element => {

    const [selectedTab, setSelectedTab] = useState<string>('Личные данные');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={background} alt="art gallery" className={styles.image} />
                <div className={styles.main}>
                    <Menu onSelectTab={setSelectedTab} />
                    {selectedTab === 'Результаты оценки' && <AnalyticsHistory />}
                    {selectedTab === 'Личные данные' && <FormPersonalAccountFeature/>}
                </div>
            </div>
        </section>);
};

export default Profile;

