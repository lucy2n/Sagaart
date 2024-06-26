import React from 'react';
import Category from '../category/category';
import style from './style.module.css';
import { categoriesData } from '../../utils/data';

const Categories = () => (
    <div className={style.categories}>
        {categoriesData.map((category, index) => (
            <Category title={category.title} image={category.image} key={index} />
    ))}
    </div>
);

export default Categories;