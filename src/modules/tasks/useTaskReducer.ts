import { useReducer } from "react";

export const TASK = {
    ADD: "add",
    CHANGE: "change",
    DELETE: "delete",
};

export interface List {
    id: string;
    text: string;
    done: boolean;
}

export interface Actions {
    type: string;
    id: string;
    task?: List;
    text?: string;
}

type Action =
    | { type: "add"; id: string; task?: List; text?: string }
    | { type: "change"; id: string; task?: List; text?: string }
    | { type: "delete"; id: string; task?: List; text?: string };

const reducer = (state: List[], action: any) => {
    switch (action.type) {
        case TASK.ADD: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
                ...state,
            ];
        }
        case TASK.CHANGE: {
            return state.map((list) => {
                if (list.id === action.id) {
                    return action.task;
                }
                return list;
            });
        }
        case TASK.DELETE: {
            return state.filter((task) => task.id === action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
};

export const useTaskReducer = () => {
    return useReducer(reducer, []);
};
