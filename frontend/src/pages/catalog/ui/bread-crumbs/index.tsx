import React from 'react';
import { Breadcrumbs, FirstDisplayedItemsCount, LastDisplayedItemsCount } from '@gravity-ui/uikit';
import style from './style.module.css';

interface Item {
    text: string;
    action: () => void;
}

const BreadcrumbsComponent = ({items}: {items: Item[]}) => (
    <div className={style.main}>
        <Breadcrumbs
        items={items}
        className={style.breadcrumbs}
        renderItemDivider={() => '>'}
        firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
        lastDisplayedItemsCount={LastDisplayedItemsCount.One}
    />
    </div>
);

export default BreadcrumbsComponent;