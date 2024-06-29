import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { Product } from './product';
import ExpandableSection from './expandable-section';
import AboutWork from './about-work';
import AboutArtist from './about-artist';
import Achievements from './achievements';
import PriceHistory from './price-history';
import BreadcrumbsComponent from '../../catalog/ui/bread-crumbs';
import { Item } from '../../../shared/entities/breadcrumbs';
import { ArtworkDetails } from '../../../shared/entities/product-details';
import { getProduct } from '../../../shared/api/products-api';
import { useNavigate, useParams } from 'react-router-dom';
import PurchacingActivity from './purchacing-activity';
import PriceRatio from './price-ratio';
import OtherArtwork from '../../other-work';

export interface Work {
    id: number, 
    image: string
}

const ProductCard = (): JSX.Element => {
    const [product, setProduct] = useState<ArtworkDetails | null>(null);
    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        if (!productId) return;
        getProduct(productId).then(setProduct);
    }, [productId]);

    if (!product) return <></>;

    const breadItem = product.author.name ?? '';
    const items: Item[] = [
        { text: 'Каталог', action: () => {
            navigate('/products');
        } },
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

const ArtworkSection = ({ title, works }: { title: string, works: Work[] }) => (
    <section className={style.section_author_works}>
        <h3 className={style.title}>{title}</h3>
        <div className={title.includes('Другие') ? style.works : style.works_author }>
            {works.length === 0 ? 
                (
                    <p className={style.desc}>
                        {title.includes('Другие') ? 'У художника пока нет других работ. Следите за обновлениями, чтобы не пропустить новинки.' : 'На данный момент похожих работ не нашлось. Следите за обновлениями, чтобы не пропустить новинки.'}
                    </p>
                )
            : 
                (
                    works.map(work => (
                        <div key={work.id} className={title.includes('Другие') ? style.work : style.work_author }>
                            <OtherArtwork work={work} />
                        </div>
                    ))
                )
            }
        </div>
    </section>
);

export default ProductCard;