// Importa los hooks de React
import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
    // Estado para almacenar el valor
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Intenta recuperar el valor del localStorage
            const item = window.localStorage.getItem(key);
            // Si el item existe, devuélvelo, si no, devuelva el valor inicial
            const todoList = item ? JSON.parse(item) : initialValue;
            return todoList;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Efecto para actualizar el localStorage cuando storedValue cambie
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
