import { createContext, Dispatch, ReactNode, useContext, useReducer, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Actions, Todo } from "./useTodoReducer";

export type FilterType = 'all' | 'active' | 'completed';

interface TodoContextType {
    state: Todo[];
    dispatch: Dispatch<any>;
    isLoading: boolean;
    error: string | null;
    clearError: () => void;
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

// Claves para localStorage
const STORAGE_KEY = "todos-app-data";
const FILTER_STORAGE_KEY = "todos-app-filter";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    // Usar el hook useLocalStorage existente para persistencia automática
    const [storedTodos, setStoredTodos] = useLocalStorage(STORAGE_KEY, []);
    const [storedFilter, setStoredFilter] = useLocalStorage(FILTER_STORAGE_KEY, 'all' as FilterType);
    
    // Crear un reducer personalizado que sincronice con localStorage
    const [state, dispatch] = useReducer((currentState: Todo[], action: Actions): Todo[] => {
        let newState: Todo[];
        
        switch (action.payload) {
            case "set":
                newState = action.data as Todo[];
                break;
            case "add":
                if (action.data && action.data !== "") {
                    newState = [{ id: crypto.randomUUID(), text: action.data as string, done: false }, ...currentState];
                } else {
                    return currentState;
                }
                break;
            case "delete":
                newState = currentState.filter((todo) => todo.id !== action.id);
                break;
            case "update":
                newState = currentState.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, text: action.data as string };
                    }
                    return todo;
                    
                });
                break;
            case "complete":
                newState = currentState.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, done: action.done || false };
                    }
                    return todo;
                });
                break;
            default:
                return currentState;
        }
        
        // Sincronizar automáticamente con localStorage
        setStoredTodos(newState);
        return newState;
    }, storedTodos);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Función para limpiar error
    const clearError = () => setError(null);

    // Función para cambiar filtro
    const setActiveFilter = (filter: FilterType) => {
        setStoredFilter(filter);
    };

    const contextValue: TodoContextType = {
        state,
        dispatch,
        isLoading,
        error,
        clearError,
        activeFilter: storedFilter,
        setActiveFilter,
    };

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodoProvider");
    }
    return context;
};
