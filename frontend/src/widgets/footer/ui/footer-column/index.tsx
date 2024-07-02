import React, { FC } from 'react';
import style from './style.module.css';
import { Link, FooterColumnProps } from './types';
import { NavLink, useLocation } from 'react-router-dom';

const FooterColumn: FC<FooterColumnProps> = ({
	columns: { columnTitle, column: links },
}) => {

    const { pathname } = useLocation();

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (href === pathname) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

	return (
    <div className={style.column}>
        <h2 className={style.title}>
            {columnTitle}
        </h2>
        <ul className={style.sectionLink}>
            {links.map((item: Link, index: number) => (
                <li key={index}>
                    <NavLink className={style.link} to={item.url} onClick={(e) => handleNavClick(e, item.url)}>
                        {item.linkTitle}
                    </NavLink>
                </li>
			))}
        </ul>
    </div>
	);
};

export default FooterColumn;