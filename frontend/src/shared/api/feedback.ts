import { base_url } from '../utils/constants';
import { checkResp } from './utils';

import { IFeedback } from '../entities/feedback';

export const feedback = async (feedback:IFeedback ) => {
    const res = await fetch(`${base_url}feedback/`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    });
    return checkResp(res);
  };
  