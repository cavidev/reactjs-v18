import { Input } from "./Input";
import { TodoProvider } from "./TodoProvider";
import { Todos } from "./Todos";

export const TodoApp = () => {
    // Pedir todos los todos!
    return (
        <TodoProvider>
            <div className="flex flex-col w-full items-center">
                <h1>Todo App - Carlos</h1>
                <Input></Input>
                <Todos></Todos>
            </div>
        </TodoProvider>
    );
};
