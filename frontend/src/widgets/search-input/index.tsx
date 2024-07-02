import React, { FC, useState } from 'react';
import { TextInput } from '@gravity-ui/uikit';
import { SearchInputProps } from './types';
import { placeholder } from './constants';
import search from '../../assets/icons/Loupe.svg';
import mailImage from '../../assets/icons/Mail-outline.svg';
import style from './search-input.module.css';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { RoutePathname } from '../../shared/utils/constants';

const SerachInput: FC<SearchInputProps> = ({ place }) => {

    const image = place === 'header' ? search : mailImage; 
    const size = place === 'header' ? 'xl' : 'l'; 
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && place === 'header') {
            navigate(RoutePathname.catalogPage, { state: { filters: { searchText: value } } });
        }
    };

    const navigateWithoutFilters = (value: string) => {
        if (value == '' && place === 'header') {
            navigate(RoutePathname.catalogPage, { state: { clear: true } });
        }
    };

    return (
        <TextInput 
            className={clsx(
                style.title,
                style[`input_${place}`]
            )} 
            placeholder={placeholder[`${place}`]} 
            size={size}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            startContent={<img src={image} alt='write' />}
            onKeyDown={handleKeyDown}
            hasClear={place === 'header'}
            onUpdate={navigateWithoutFilters}
        />
    );
};

export default SerachInput;