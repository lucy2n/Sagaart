import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './style.module.css';
import { RadioGroup, TextInput } from '@gravity-ui/uikit';
import { product_category, product_cost_category, product_genre, product_size_category, product_style } from './constants';
import search from '../../../../assets/icons/Loupe.svg';
import debounce from 'lodash/debounce';

interface FiltersState {
    price: boolean;
    size: boolean;
    category: boolean;
    genre: boolean;
    style: boolean;
    year: boolean;
    country: boolean;
}

export interface FiltersValues {
    price: string;
    size: string;
    category: string;
    genre: string;
    style: string;
    minYear: string;
    maxYear: string;
    country: string;
}
  

const Filters = ({ isVisible, updateProducts }: { isVisible : boolean, updateProducts: (filters: FiltersValues) => void }) => {
    
    const [isOpen, setIsOpen] = useState<FiltersState>({
        price: false,
        size: false,
        category: false,
        genre: false,
        style: false,
        year: false,
        country: false,
    });

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

    const applyFilters = () => {
       console.log(filters); 
        updateProducts(filters);
    };

    const debouncedApplyFilters = useRef(debounce(applyFilters, 1000)).current;

    useEffect(() => {
       // console.log(filters);
    //    debouncedApplyFilters();
    //    applyFilters();
      setTimeout(() => {
        updateProducts(filters);
      }, 500);
      }, [filters]);
 
    const updateFilter = (key: string, value: string) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [key]: value,
        }));
    };

    const toggleDropdown = (name: keyof FiltersState) => {
        setIsOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
    };

    const [styleVal, setStyleVal] = useState();

    return (
        <div>
            { isVisible && (
                <div className={style.sidebar}>
                    <div className={style.filters__section}>
                        <h3 className={style.title}>ФИЛЬТРОВАТЬ ПО:</h3>
    
                        <div className={style.filters__category}>
                            <div className={style.title} onClick={() => toggleDropdown('price')}>
                                ЦЕНА
                            </div>
                            {isOpen.price && (
                                <RadioGroup onChange={(e) => updateFilter('price', e.target.value)}
                                className={style.body} size="l" name="group1" defaultValue={product_cost_category[0].value} options={product_cost_category} direction="vertical"/>
                            )}
                        </div>
    
                        <div className={style.filters__category}>
                            <div className={style.title} onClick={() => toggleDropdown('size')}>
                                РАЗМЕР
                            </div>
                            <div>
                                {isOpen.size && (
                                    <RadioGroup onChange={(e) => updateFilter('size', e.target.value)} 
                                    className={style.body} size="l" name="product_size_category" defaultValue={product_size_category[0].value} options={product_size_category} direction="vertical" />
                                )}
                            </div>
                        </div>
    
                        <div className="filter-category">
                            <div className={style.title} onClick={() => toggleDropdown('category')}>
                                КАТЕГОРИЯ
                            </div>
                            {isOpen.category && (
                                <RadioGroup onChange={(e) => updateFilter('category', e.target.value)}
                                value={styleVal} className={style.body} size="l" name="product_category" defaultValue={product_category[0].value} options={product_category} direction="vertical"/>
                            )}
                        </div>
    
                        <div className={style.filters__category}>
                            <div className={style.title} onClick={() => toggleDropdown('genre')}>
                                ЖАНР
                            </div>
                            {isOpen.genre && (
                                <RadioGroup onChange={(e) => updateFilter('genre', e.target.value)}
                                value={styleVal} className={style.body} size="l" name="product_genre" defaultValue={product_genre[0].value} options={product_genre} direction="vertical"/>
                            )}
                        </div>
    
                        <div className={style.filters__category}>
                            <div className={style.title} onClick={() => toggleDropdown('style')}>
                                СТИЛЬ
                            </div>
                            {isOpen.style && (
                                <RadioGroup onChange={(e) => updateFilter('style', e.target.value)}
                                value={styleVal} className={style.body} size="l" name="product_style" defaultValue={product_style[0].value} options={product_style} direction="vertical"/>
                            )}
                        </div>
        
                        <div className={style.filters__category}>
                            <div className={style.title} onClick={() => toggleDropdown('year')}>
                                ГОД СОЗДАНИЯ
                            </div>
                            {isOpen.year && (
                            <div className={style.body_inputs}>
                                <TextInput onChange={(e) => updateFilter('minYear', e.target.value)}
                                className={style.input} size='xl' placeholder='От'/>
                                <TextInput onChange={(e) => updateFilter('maxYear', e.target.value)}
                                className={style.input} size='xl' placeholder='До'/>
                            </div>
                            )}
                        </div>
    
                        <div className={style.filters__category}>
                            <div className={style.title} onClick={() => toggleDropdown('country')}>
                                СТРАНА АВТОРА
                            </div>
                            {isOpen.country && (
                            <div className={style.body_inputs}>
                                <TextInput onChange={(e) => updateFilter('country', e.target.value)}
                                className={style.input} startContent={<img src={search} alt='serach'/>} size='xl' placeholder='Введите страну'/>
                            </div>
                            )}
                        </div>
    
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filters;