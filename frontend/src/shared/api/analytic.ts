import { base_url } from '../utils/constants';
import { checkResp, checkResponse } from './utils';

import { IAnalytic, IAnalyticItem, IAnalyticItemDetails } from '../entities/analytic';

export const analytic = async (obj:IAnalytic ) => {
    const res = await fetch(`${base_url}/analytics/`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(obj)
    });
    return checkResp(res);
};

export const getAnalytics = async () => {
    const res = await fetch(`${base_url}analytics/`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        },
    });

    return checkResponse<IAnalyticItem[]>(res);
};

export const getItemAnalytic = async (id: number) => {
    const res = await fetch(`${base_url}analytics/${id}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        },
    });

    return checkResponse<IAnalyticItemDetails>(res);
};
  