export interface IAnalytic {
    product_name: string;
    category: string;
    year: string;
    height: string;
    width: string;
    material: string;
    tablet_material: string;
    author_name: string;
    gender: string;
    birth_year: string;
    birth_country: string;
    solo_show: string;
    group_show:string;
}

export interface IAnalyticItem {
    id: number,
    analytics_owner: number,
    product_name: string;
    author_name: string;
}


