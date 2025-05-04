import { useEffect } from "react";

export const useFetch = <T>(url: string, set: (data: T) => {}) => {
    useEffect(() => {
        const response = fetch(url);
        response
            .then((res) => res.json())
            .then((data) => {
                set(data);
                return data;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                throw error;
            });
    }, [url]);
};
