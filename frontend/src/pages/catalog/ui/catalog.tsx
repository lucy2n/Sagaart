import { Button,  Icon,  Pagination, PaginationProps } from '@gravity-ui/uikit';
import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import Card from '../../../widgets/card/card';
import {Funnel} from '@gravity-ui/icons';
import {ChevronLeft} from '@gravity-ui/icons';
import {ChevronRight} from '@gravity-ui/icons';
import Sort from './sort';
import Filters, { FiltersValues } from './filtration';
import Categories from './categories';
import BreadcrumbsComponent from './bread-crumbs';
import { items, options } from '../constants';
import { Artwork } from '../../../shared/entities/products';
import { getProductsWithFilters } from '../../../shared/api/products-api';
import NoProducts from './no-products';
import { useLocation } from 'react-router-dom';

const Catalog = (): JSX.Element => {

    const [products, setProducts] = useState<Artwork[]>([]);
    const location = useLocation();
    const navigationState = location.state as { filters: FiltersValues } | undefined;

    const [filters, setFilters] = useState<FiltersValues>({
        price: '',
        size: '',
        category: '',
        genre: '',
        style: '',
        minYear: '',
        maxYear: '',
        country: ''
    });
    
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const [state, setState] = useState({page: 1, pageSize: products?.length});
    const [total, setTotal] = useState<number>(0);
    const [emptyState, setEmptyState] = useState<boolean>(false);

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
        setState((prevState) => ({...prevState, page, pageSize}));

    useEffect(() => {
        fetchProducts();
    }, [filters, state.page]);

    useEffect(() => {
        if (navigationState?.filters) {
            setFilters(prevFilters => ({
                ...prevFilters,
                ...navigationState.filters
            }));
        }
    }, [navigationState]);

    const fetchProducts = () => {
        console.log(filters);
        getProductsWithFilters(filters, state.page)
        .then((res) => {
            console.log(res);
            if (res.results.length == 0) {
                setEmptyState(true);
            } else {
                setEmptyState(false);
                setTotal(res.count);
                setProducts(res.results);
            }
        });
    };

    const updateProducts = (newFilters: FiltersValues) => {
        setFilters(newFilters);
        setState((prevState) => ({ ...prevState, page: 1 }));
      };

    return (
        <section className={style.main}>
            <BreadcrumbsComponent items={items}/>
            <div className={style.container}>
                <Categories />
            </div>
            <div className={style.container}>
                <div className={style.filters}>
                    <Button size='s' className={style.button} onClick={toggleSidebar}>
                        <Icon data={Funnel} size={18}/>
                        Показать фильтры
                        {isSidebarVisible ? <Icon data={ChevronLeft} size={20}/> :  <Icon data={ChevronRight} size={20}/>}
                    </Button>
                    <Sort options={options}/>
                </div>
                {emptyState && <NoProducts /> }
                <div className={style.gallery}>
                    <Filters isVisible={isSidebarVisible} updateProducts={updateProducts} />
                    {products && products.map(product => (
                        <Card card={product} key={product.id}/>
                    ))}
                </div>
            </div>
            <Pagination page={state.page} pageSize={12} total={total} onUpdate={handleUpdate} />
        </section>
    );
};

export default Catalog;