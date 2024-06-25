interface ProductCategory {
    productCategory_id: number;
    productCategory_name: string;
}
  
interface ProductStyle {
    productStyle_id: number;
    productStyle_name: string;
}
  
interface ProductGenre {
    productGenre_id: number;
    productGenre_name: string;
}
  
interface ProductAuthor {
    productAuthor_id: number | string;
    productAuthor_name: string;
}
  
interface ProductAnalytics {
    productanalyticscost_id: number | string;
    productanalyticscost_cost: number;
    productanalyticscost_date: string;
}
  
export interface IProduct {
    product_id: number | string;
    product_name: string;
    product_jpeg: string;
    product_category: ProductCategory;
    product_style: ProductStyle;
    product_genre: ProductGenre;
    product_size_category: number;
    product_country: string;
    product_year: string;
    product_cost_category: number;
    product_author: ProductAuthor;
    product_search_string: string;
    product_size: string;
    product_year_start: string; 
    product_year_end: string;
    product_cost_end: number;
    product_analytics: ProductAnalytics;
}
  
export interface CatalogResponse {
    count: number;
    next: string;
    previous: string;
    results: IProduct[][];
}