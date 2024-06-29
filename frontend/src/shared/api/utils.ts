export const checkResponse = <T>(res: Response): Promise<T> => {
    console.log(res);
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const checkResp = <T>(res: Response): Promise<T | void> => {
    console.log(res);
    if (res.ok) {
        if ((res.status === 204) || (res.status === 201)) {
            return Promise.resolve(void 0);
        } else {
            return res.json();
        }
    } else {
        return res.json().then((err) => Promise.reject(err));
    }
};


export const createUrlWithParams = (baseUrl: string, params: { [key: string]: string | number | boolean }): string => {
    const url = new URL(baseUrl);
    const searchParams = new URLSearchParams();

    Object.keys(params).forEach(key => {
        searchParams.append(key, String(params[key]));
    });

    url.search = searchParams.toString();
    return url.toString();
};
