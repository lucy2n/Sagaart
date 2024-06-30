import React, { useEffect, useState } from 'react';
import background from '../../../assets/images/Imadge.png';
import styles from './style.module.css';
import Menu from './menu/index';
import AnalyticsHistory from './analytics-history';


const Profile = (): JSX.Element => {

    const [selectedTab, setSelectedTab] = useState<string>('Личные данные');

    useEffect(() => {
        console.log(selectedTab);
    }, [selectedTab]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={background} alt="art gallery" className={styles.image} />
                <div className={styles.main}>
                    <Menu onSelectTab={setSelectedTab} />
                    {selectedTab === 'Результаты оценки' && <AnalyticsHistory />}
                </div>
            </div>
        </section>);
};

export default Profile;

