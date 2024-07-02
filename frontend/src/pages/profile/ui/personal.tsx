import React, { useState } from 'react';
import background from '../../../assets/images/Imadge.png';
import styles from './style.module.css';
import Menu from './menu/index';
import AnalyticsHistory from './analytics-history';
import { FormPersonalAccountFeature } from '../../../features/form-personal-account/form-personal-account';
import { useNavigate } from 'react-router-dom';
import { RoutePathname } from '../../../shared/utils/constants';


const Profile = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState<string>('Личные данные');
    const navigate = useNavigate();

    const updateTab = (tab: string) => {
        setSelectedTab(tab);
        if (tab == 'Оценить объект') {
            navigate(RoutePathname.reviewPage);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={background} alt="art gallery" className={styles.image} />
                <div className={styles.main}>
                    <Menu onSelectTab={updateTab} />
                    {selectedTab === 'Результаты оценки' && <AnalyticsHistory />}
                    {selectedTab === 'Личные данные' && <FormPersonalAccountFeature/>}
                </div>
            </div>
        </section>);
};

export default Profile;

