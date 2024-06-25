import React, { useState } from 'react';
import style from './style.module.css';
import { Radio, RadioGroup, TextInput } from '@gravity-ui/uikit';
import { product_category, product_cost_category, product_genre, product_size_category, product_style } from './constants';
import search from '../../../../assets/icons/Loupe.svg';

interface FiltersState {
    price: boolean;
    size: boolean;
    category: boolean;
    genre: boolean;
    style: boolean;
    year: boolean;
    country: boolean;
  }
  

const Filters = ({ isVisible }: {isVisible : boolean}) => {
    
    const [isOpen, setIsOpen] = useState<FiltersState>({
        price: false,
        size: false,
        category: false,
        genre: false,
        style: false,
        year: false,
        country: false,
    });
 

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
                              <RadioGroup className={style.body} size="l" name="group1" defaultValue={product_cost_category[0].value} options={product_cost_category} direction="vertical"/>
                            )}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('size')}>
                              РАЗМЕР
                          </div>
                          <div>
                              {isOpen.size && (
                                  <RadioGroup className={style.body} size="l" name="product_size_category" defaultValue={product_size_category[0].value} options={product_size_category} direction="vertical"/>
                             )}
                          </div>
                      </div>
  
                      <div className="filter-category">
                          <div className={style.title} onClick={() => toggleDropdown('category')}>
                              КАТЕГОРИЯ
                          </div>
                          {isOpen.category && (
                              <RadioGroup value={styleVal} className={style.body} size="l" name="product_category" defaultValue={product_category[0].value} options={product_category} direction="vertical"/>
                          )}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('genre')}>
                              ЖАНР
                          </div>
                          {isOpen.genre && (
                              <RadioGroup value={styleVal} className={style.body} size="l" name="product_genre" defaultValue={product_genre[0].value} options={product_genre} direction="vertical"/>
                          )}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('style')}>
                              СТИЛЬ
                          </div>
                          {isOpen.style && (
                              <RadioGroup value={styleVal} className={style.body} size="l" name="product_style" defaultValue={product_style[0].value} options={product_style} direction="vertical"/>
                          )}
                      </div>
    
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('year')}>
                              ГОД СОЗДАНИЯ
                          </div>
                          {isOpen.year && (
                          <div className={style.body_inputs}>
                              <TextInput className={style.input} size='xl' placeholder='От'/>
                              <TextInput className={style.input} size='xl' placeholder='До'/>
                          </div>
                          )}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('country')}>
                              СТРАНА АВТОРА
                          </div>
                          {isOpen.country && (
                          <div className={style.body_inputs}>
                              <TextInput className={style.input} startContent={<img src={search} alt='serach'/>} size='xl' placeholder='Введите страну'/>
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