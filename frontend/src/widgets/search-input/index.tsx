import React, { FC, useState } from 'react';
import { TextInput } from '@gravity-ui/uikit';
import { SearchInputProps } from './types';
import { placeholder } from './constants';
import search from '../../assets/icons/Loupe.svg';
import mailImage from '../../assets/icons/Mail-outline.svg';
import style from './search-input.module.css';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const SerachInput: FC<SearchInputProps> = ({ place }) => {

    const image = place === 'header' ? search : mailImage; 
    const size = place === 'header' ? 'xl' : 'l'; 
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            navigate('/products', { state: { filters: { searchText: value } } });
            setValue('');
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
        />
    );
};

export default SerachInput;