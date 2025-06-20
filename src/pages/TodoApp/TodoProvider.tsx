import { createContext, Dispatch, ReactNode, useContext } from "react";
import { Todo, useTodoReducer } from "./useTodoReducer";

interface TodoCon {
    state: Todo[];
    dispatch: Dispatch<any>;
}
const TodoContext = createContext<TodoCon | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useTodoReducer();

    /*useEffect(() => {
        (async () => {
            const data = await loadTodos();
            dispatch({ payload: "set", data: data.todos });
        })();
    }, []);*/

    return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw Error("No existe el context ");
    }
    return context;
};
