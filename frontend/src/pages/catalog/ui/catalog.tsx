import { Button,  Icon,  Pagination, PaginationProps } from '@gravity-ui/uikit';
import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import Card from '../../../widgets/card/card';
import Sort from './sort';
import Filters, { FiltersValues } from './filtration';
import Categories from './categories';
import BreadcrumbsComponent from './bread-crumbs';
import { IArtwork } from '../../../shared/entities/products';
import { getProductsWithFilters } from '../../../shared/api/products-api';
import NoProducts from './no-products';
import { useLocation } from 'react-router-dom';
import { filterOptions, items } from '../utils/data';

const Catalog = (): JSX.Element => {

    const [products, setProducts] = useState<IArtwork[]>([]);
    const location = useLocation();
    const navigationState = location.state as { filters: FiltersValues, clear: boolean } | undefined;

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


    const [state, setState] = useState({page: 1, pageSize: products?.length});
    const [total, setTotal] = useState<number>(0);
    const [emptyState, setEmptyState] = useState<boolean>(false);

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
        setState((prevState) => ({...prevState, page, pageSize}));

    useEffect(() => {
        fetchProducts();
    }, [filters, state.page]);

    useEffect(() => {
        if (navigationState?.clear) {
            setFilters({
                price: '',
                size: '',
                category: '',
                genre: '',
                style: '',
                minYear: '',
                maxYear: '',
                country: ''
            });
            return;
        }
        if (navigationState?.filters) {
            setFilters(prevFilters => ({
                ...prevFilters,
                ...navigationState.filters
            }));
        }
    }, [navigationState]);

    const fetchProducts = () => {
        getProductsWithFilters(filters, state.page)
        .then((res) => {
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
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters
        }));
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
                    <Filters updateProducts={updateProducts}/>
                    <Sort options={filterOptions}/>
                </div>
                {emptyState && <NoProducts /> }
                <div className={style.gallery}>
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