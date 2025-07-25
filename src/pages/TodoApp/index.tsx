import { TodoFilters } from "./components/TodoFilters";
import { TodoStats } from "./components/TodoStats";
import { Input } from "./Input";
import { TodoProvider, useTodos } from "./TodoProvider";
import { Todos } from "./Todos";

const TodoAppContent = () => {
    const { error, clearError, isLoading } = useTodos();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-2 p-4 md:p-6">
            <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-4 p-4 md:p-6">
                {/* Show error if exists */}
                {error && (
                    <div className="w-full mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex justify-between items-center">
                        <span>{error}</span>
                        <button onClick={clearError} className="text-red-700 hover:text-red-900">
                            ✕
                        </button>
                    </div>
                )}

                {/* Show loading if loading */}
                {isLoading && (
                    <div className="w-full mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
                        Loading todos...
                    </div>
                )}

                {/* Statistics component */}
                <TodoStats />

                {/* Input to add new todos */}
                <div className="w-full mb-6">
                    <Input />
                </div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-4 col-start-1 md:col-start-2 lg:col-start-3 p-4 md:p-6">
                {/* Filters component */}
                <TodoFilters />
                {/* Todos list */}
                <div className="w-full">
                    <Todos />
                </div>
            </div>
        </div>
    );
};

export const TodoApp = () => {
    return (
        <TodoProvider>
            <TodoAppContent />
        </TodoProvider>
    );
};
