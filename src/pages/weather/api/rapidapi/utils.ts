export const baseUrl: string = "https://weatherapi-com.p.rapidapi.com";

export const mockFetchTypedData = <T extends object>(ms: number, data: T): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const fetchTypedData = <T extends object, U extends object>(url: string, options: U): Promise<T> =>
    fetch(url, options).then((response) => response.json());
