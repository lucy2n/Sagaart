import { Button,  Pagination, PaginationProps } from '@gravity-ui/uikit';
import React, { useState } from 'react';
import style from './style.module.css';
import { cards } from '../utils/cards';
import Card from '../../../widgets/card/card';
import funnel from '../../../assets/icons/Funnel.svg';
import Sort from './sort';
import Filters from './filtration';
import Categories from './categories';
import BreadcrumbsComponent from './bread-crumbs';

const Catalog = (): JSX.Element => {

    const options = [
        { label: 'Рекомендуемые', value: 'option1' },
        { label: 'Недавно добавленные', value: 'option2' },
        { label: 'Цена по возростанию', value: 'option3' },
        { label: 'Цена по убыванию', value: 'option4' },
      ];

    const [filters, setFilters] = useState({
        price: 'any',
        size: 'any',
        category: 'any',
        style: 'any',
        year: 'any',
        country: 'any',
      });
    
      const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    
      const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
      };
    
      const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };

    const [state, setState] = useState({page: 1, pageSize: cards.length});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
    setState((prevState) => ({...prevState, page, pageSize}));


    return (
        <section className={style.main}>
            <div className={style.container}>
                <div>
                    <BreadcrumbsComponent />
                </div>
                <Categories />
            </div>
            <div>
                <div className={style.filters}>
                    <Button size='s' className={style.button} onClick={toggleSidebar}>
                        <img src={funnel} alt='funnel' />
                        Показать фильтры
                    </Button>
                    <Sort options={options}/>
                </div>
                <div className={style.gallery}>
                    <Filters isVisible={isSidebarVisible} />
                    {cards.map(card => (
                        <Card card={card} key={card.product_id}/>
                    ))}
                </div>
            </div>
            <Pagination page={1} pageSize={5} total={cards.length} onUpdate={handleUpdate} />
        </section>
    );
};
export default Catalog;