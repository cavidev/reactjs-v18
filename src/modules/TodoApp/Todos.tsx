import { Item } from "./Item";
import { useTodos } from "./TodoProvider";

export const Todos = () => {
    const { state: todos } = useTodos();
    console.log("Todos", todos);
    return (
        <div className="flex flex-col gap-4 ">
            {todos.map((todo) => {
                return <Item key={todo.id} todo={todo} />;
            })}
        </div>
    );
};
