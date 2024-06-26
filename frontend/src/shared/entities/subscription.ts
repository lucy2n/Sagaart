interface Subscribe {
    subscribe_id: number;
    cost: number;
}
  
export interface IUserSubscription {
    user_id: number;
    subscribe: Subscribe;
    url_home: string;
    url_pay: string;
} 