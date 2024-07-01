export interface IUser {
    id?: number;
    email: string;
    user_name?: string;
    telephone?: string;
    password: string;
  }

  export interface IToken {
    auth_token: string;
  }

  export interface IChangePassword {
    new_password: string;
    re_new_password: string;
    uid: string;
    token: string; 
  }

  export interface IUserUpdate {
    id?: number;
    email?: string;
    user_name?: string;
    telephone?: string;
    subcribe?: string;
  }