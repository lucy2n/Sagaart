import { IProductDetails } from '../entities/product-details';
import { CatalogResponse } from '../entities/products';
import { base_url } from '../utils/constants';
import { checkResponse } from './utils';

export const getProducts = async () => {
    const res = await fetch(`${base_url}/api/product`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<CatalogResponse>(res);
};

export const getProduct = async (id : number) => {
    const res = await fetch(`${base_url}/api/product/${id}/`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<IProductDetails>(res);
};