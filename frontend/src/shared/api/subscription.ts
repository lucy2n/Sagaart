import { IUserSubscription } from '../entities/subscription';
import { base_url } from '../utils/constants';
import { checkResponse } from './utils';

export const getProduct = async (user_id : number) => {
    const res = await fetch(`${base_url}user/${user_id}/subscribe/`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<IUserSubscription>(res);
};