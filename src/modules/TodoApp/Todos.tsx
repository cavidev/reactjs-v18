import { Item } from "./Item";
import { useTodos } from "./TodoProvider";

export const Todos = () => {
    const { state: todos } = useTodos();
    return (
        <div className="flex flex-col gap-4 ">
            {todos.map((todo) => {
                return <Item key={todo.id} todo={todo} />;
            })}
        </div>
    );
};
