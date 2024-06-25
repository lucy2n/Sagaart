export const checkResponse = <T>(res: Response): Promise<T> => {
    console.log(res);
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
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