import { useReducer } from "react";

export interface Todo {
    id?: string;
    text: string;
    done: boolean;
}

type types = "add" | "delete" | "update";
export interface Actions {
    id?: string;
    payload: types;
    data?: string;
    done?: boolean;
}

const reducer = (state: Todo[], action: any) => {
    if (action.payload === "add" && action.data !== "") {
        return [{ id: crypto.randomUUID(), text: action.data, done: false }, ...state];
    }
    if (action.payload === "delete") {
        return state.filter((todo) => todo.id !== action.id);
    }

    if (action.payload === "update") {
        return state.map((todo) => {
            if (todo.id === action.id)
                return {
                    ...todo,
                    text: action.data,
                };
            return todo;
        });
    }

    if (action.payload === "complete") {
        return state.map((todo) => {
            if (todo.id === action.id)
                return {
                    ...todo,
                    done: action.done,
                };
            return todo;
        });
    }

    return state;
};

export const useTodoReducer = () => {
    return useReducer(reducer, []);
};
