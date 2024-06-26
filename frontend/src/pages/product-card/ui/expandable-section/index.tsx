import { Button } from '@gravity-ui/uikit';
import React, { ReactNode, useState } from 'react';
import style from './style.module.css';
import arrowdown from '../../../../assets/icons/Arrow-down-outline.svg';
import arrowup from '../../../../assets/icons/Arrow-up-outline.svg';

interface ExpandableSectionProps {
    childComponent: JSX.Element;
    title: string;
    size: string
}

const ExpandableSection = ({ childComponent, title, size }: ExpandableSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const img = isOpen ? arrowup : arrowdown;
    const classSize = size === 'big' ?  style.dropdown_big : '' ;

    return (
        <div className={`${style.dropdown} ${classSize}`}>
            <div className={style.main} onClick={() => setIsOpen(!isOpen)}>
                <h3 className={style.title}>
                    {title}
                </h3>
                <img src={img} alt='arrow' />
            </div>
            { isOpen && 
                childComponent
            }
        </div>
    );
};

export default ExpandableSection;