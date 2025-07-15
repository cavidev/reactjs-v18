import Show from "~/lib/Show/Show";
import { useTodoOperations } from "../hooks/useTodoOperations";
import { useTodos } from "../TodoProvider";

export const TodoStats = () => {
    const { getStats, clearCompleted, markAllAsCompleted, markAllAsPending, loadTodosFromAPI, clearAllTodos, filteredTodos } = useTodoOperations();
    const { activeFilter } = useTodos();
    const stats = getStats();

    const getFilterLabel = () => {
        switch (activeFilter) {
            case 'active': return 'pending';
            case 'completed': return 'completed';
            default: return 'all';
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Statistics</h3>
                <div className="flex gap-2">
                    <Show when={false}>
                        <button
                            disabled
                            onClick={loadTodosFromAPI}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                        >
                            Load from API
                        </button>
                    </Show>

                </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Pending</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{stats.percentage}%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Progress</div>
                </div>
            </div>

            <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm text-blue-700 dark:text-blue-300">
                <span className="font-medium">Active filter:</span> Showing {getFilterLabel()} ({filteredTodos.length} tasks)
            </div>

            {stats.total > 0 && (
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={markAllAsCompleted}
                        className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                    >
                        Mark all completed
                    </button>
                    <button
                        onClick={markAllAsPending}
                        className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
                    >
                        Mark all pending
                    </button>
                    {stats.completed > 0 && (
                        <button
                            onClick={clearCompleted}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                        >
                            Clear completed
                        </button>
                    )}
                    <button
                        onClick={clearAllTodos}
                        className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                    >
                        Clear all
                    </button>
                </div>
            )}
        </div>
    );
}; 