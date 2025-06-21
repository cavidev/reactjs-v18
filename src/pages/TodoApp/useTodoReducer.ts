import { useReducer } from "react";

export interface Todo {
    id?: string;
    text: string;
    done: boolean;
}

type ActionTypes = "add" | "delete" | "update" | "complete" | "set";

export interface Actions {
    payload: ActionTypes;
    id?: string;
    data?: string | Todo[];
    done?: boolean;
}

const reducer = (state: Todo[], action: Actions): Todo[] => {
    if (action.payload === "set") {
        return action.data as Todo[];
    }

    if (action.payload === "add" && action.data !== "" && typeof action.data === "string") {
        return [{ id: crypto.randomUUID(), text: action.data, done: false }, ...state];
    }
    if (action.payload === "delete") {
        return state.filter((todo) => todo.id !== action.id);
    }

    if (action.payload === "update" && typeof action.data === "string") {
        return state.map((todo) => {
            if (todo.id === action.id)
                return {
                    ...todo,
                    text: action.data as string,
                };
            return todo;
        });
    }

    if (action.payload === "complete") {
        return state.map((todo) => {
            if (todo.id === action.id)
                return {
                    ...todo,
                    done: action.done || false,
                };
            return todo;
        });
    }

    return state;
};

export const useTodoReducer = () => {
    return useReducer(reducer, []);
};
