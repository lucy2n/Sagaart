import { IUser, IToken, IChangePassword, IUserUpdate} from '../entities/user';
import { base_url } from '../utils/constants';
import { checkResp, checkResponse } from './utils';

export const createUser = async (user: IUser) => {
  const res = await fetch(`${base_url}user/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  );
  return checkResp<IUser>(res);
};

export const signIn = async (data: any): Promise<IToken | void> => {
  const res = await fetch(`${base_url}user/token/login/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return checkResp<IToken>(res);
};

export const resetPassword = async (email: string) => {
  const res = await fetch(`${base_url}user/reset_password/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  }
  );
  return checkResp(res);
};

export const updateUser = async (data: IUserUpdate) => {
  const res = await fetch(`${base_url}user/me/`, {
    method: 'PATCH',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data)
  }
  );
  return checkResp<IUserUpdate>(res);
};

export const getUserInformation = async () => {
  const res = await fetch(`${base_url}user/me/`, {
    method: 'Get',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    },
  }
  );
  return checkResponse<IUser>(res);
};

export const logout = async () => {
  const res = await fetch(`${base_url}/user/token/logout/`, {
      method: 'POST',
      headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
      },
  });
  return checkResp(res);
};

export const changePassword = async (password: IChangePassword) => {
  const res = await fetch(`${base_url}user/reset_password_confirm/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(password)
  }
  );
  return checkResp(res);
};







