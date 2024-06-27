import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { Product } from './product';
import ExpandableSection from './expandable-section';
import AboutWork from './about-work';
import AboutArtist from './about-artist';
import Achievements from './achievements';
import PriceHistory from './price-history';
import NoSubscription from './no-subscription';
import BreadcrumbsComponent from '../../catalog/ui/bread-crumbs';
import { Item } from '../../../shared/entities/breadcrumbs';
import { ArtworkDetails } from '../../../shared/entities/product-details';
import { getProduct } from '../../../shared/api/products-api';
import { useParams } from 'react-router-dom';
import PurchacingActivity from './purchacing-activity';
import PriceRatio from './price-ratio';

const ProductCard = (): JSX.Element => {
    const [product, setProduct] = useState<ArtworkDetails | null>(null);
    const { productId } = useParams();

    useEffect(() => {
        if (!productId) return;
        getProduct(productId).then(setProduct);
    }, [productId]);

    if (!product) return <></>;

    const breadItem = product.author.name ?? '';
    const items: Item[] = [
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        { text: 'Каталог', action: () => {} },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        { text: breadItem, action: () => {} },
    ];

    return (
        <div className={style.main}>
            <BreadcrumbsComponent items={items} />
            <section className={style.section_products}>
                <Product product={product} />
            </section>
            <section className={style.section_info}>
                <DropdownBlock>
                    <ExpandableSection childComponent={<AboutWork product={product} />} title='О работе' size='small' />
                    <ExpandableSection childComponent={<AboutArtist author={product.author} />} title='О художнике' size='small' />
                </DropdownBlock>
                <DropdownBlock>
                    <ExpandableSection childComponent={<PriceHistory />} title='История изменения цены' size='small' />
                    <ExpandableSection childComponent={<Achievements author={product.author} collection={product.author.awards.name} />} title='Награды и достижения' size='small' />
                </DropdownBlock>
                <DropdownBlock>
                    <ExpandableSection childComponent={<PurchacingActivity />} title='Аналитика' size='small' />
                    <ExpandableSection childComponent={<PriceRatio />} title='Аналитика' size='small' />
                </DropdownBlock>
            </section>
            <ArtworkSection title="Другие работы художника" works={product.author_works} />
            <ArtworkSection title="Похожие работы" works={product.similar_works} />
        </div>
    );
};

const DropdownBlock = ({ children }: {children: JSX.Element[]}) => (
    <div className={style.dropdowns__block}>
        {children}
    </div>
);

const ArtworkSection = ({ title, works }: { title: string, works: string }) => (
    <section className={style.section_author_works}>
        <h3 className={style.title}>{title}</h3>
        <div>
            {works.length === 0 ? (
                <p className={style.desc}>
                    {title.includes('Другие') ? 'У художника пока нет других работ. Следите за обновлениями, чтобы не пропустить новинки.' : 'На данный момент похожих работ не нашлось. Следите за обновлениями, чтобы не пропустить новинки.'}
                </p>
            ) : (
                <></>
            )}
        </div>
    </section>
);

export default ProductCard;