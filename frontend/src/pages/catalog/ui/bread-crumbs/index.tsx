import React from 'react';
import { Breadcrumbs, FirstDisplayedItemsCount, LastDisplayedItemsCount } from '@gravity-ui/uikit';

const BreadcrumbsComponent = () => (
    <Breadcrumbs
        items={[
        {
            text: 'Каталог',
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            action: () => {},
        },
        ]}
        renderItemDivider={() => '>'}
        firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
        lastDisplayedItemsCount={LastDisplayedItemsCount.One}
    />
);

export default BreadcrumbsComponent;