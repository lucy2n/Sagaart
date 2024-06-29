import React from 'react';
import style from './style.module.css';
import { Button, Icon } from '@gravity-ui/uikit';
import { Person } from '@gravity-ui/icons';
import { Heart } from '@gravity-ui/icons';
import { Database } from '@gravity-ui/icons';
import { SquareChartBar } from '@gravity-ui/icons';
import { CopyPlus } from '@gravity-ui/icons';
import { LayoutHeaderCellsLargeThunderbolt } from '@gravity-ui/icons';
import { ChartMixed } from '@gravity-ui/icons';
import { ArrowRightToSquare } from '@gravity-ui/icons';
import { logout } from '../../../../shared/api/user';
import { useAppDispatch } from '../../../../shared/utils/hooks';
import { resetUser } from '../../../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
    onSelectTab: (tab: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onSelectTab }) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleExit = () => {
        logout()
            .then(() => {
                localStorage.removeItem('token');
                dispatch(resetUser());
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const tabs = [
        { name: 'Личные данные', icon: Person },
        { name: 'Избранное', icon: Heart },
        { name: 'Оценить объект', icon: Database },
        { name: 'Результаты оценки', icon: SquareChartBar },
        { name: 'Добавить работу', icon: CopyPlus },
        { name: 'Рекомендации', icon: LayoutHeaderCellsLargeThunderbolt },
        { name: 'Моя статистика', icon: ChartMixed },
    ];

    return (
        <div className={style.menu}>
            <nav className={style.nav}>
                {tabs.map(tab => (
                    <Button
                        key={tab.name}
                        className={style.button}
                        size='xl'
                        onClick={() => onSelectTab(tab.name)}
                    >
                        <Icon data={tab.icon} size={20} />
                        {tab.name}
                    </Button>
                ))}
            </nav>
            <Button className={style.button} size='xl' onClick={handleExit}>
                <Icon data={ArrowRightToSquare} size={20} />
                Выход
            </Button>
        </div>
    );
};

export default Menu;