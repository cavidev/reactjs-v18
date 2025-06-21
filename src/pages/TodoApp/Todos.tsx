import For from "../../lib/For/For";
import { Item } from "./Item";
import { useTodos } from "./TodoProvider";
import { useTodoOperations } from "./hooks/useTodoOperations";

export const Todos = () => {
    const { state: todos, activeFilter } = useTodos();
    const { filteredTodos } = useTodoOperations();

    if (todos.length === 0) {
        return (
            <div className="text-center py-8">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No pending tasks</h3>
                <p className="text-gray-500 dark:text-gray-400">Add your first task to get started!</p>
            </div>
        );
    }

    if (filteredTodos.length === 0 && todos.length > 0) {
        return (
            <div className="text-center py-8">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No {activeFilter === 'active' ? 'pending' : 'completed'} tasks
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    {activeFilter === 'active' 
                        ? 'Complete some tasks to see them here!' 
                        : 'Complete some tasks to see them here!'
                    }
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 h-72 overflow-y-auto">
            <For each={filteredTodos}>
                {(todo) => <Item todo={todo} />}
            </For>
        </div>
    );
};
