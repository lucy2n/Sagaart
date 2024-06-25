import React, { FC } from 'react';
import style from './style.module.css';
import { Link, FooterColumnProps } from './types';

const FooterColumn: FC<FooterColumnProps> = ({
	columns: { columnTitle, column: links },
}) => {
	return (
    <div className={style.column}>
        <h2 className={style.title}>
            {columnTitle}
        </h2>
        <ul className={style.sectionLink}>
            {links.map((item: Link, index: number) => (
                <li key={index}>
                    <a className={style.link} href={item.url}>
                        {item.linkTitle}
                    </a>
                </li>
			))}
        </ul>
    </div>
	);
};

export default FooterColumn;