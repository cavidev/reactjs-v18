import For from "../../../lib/For/For";
import { useTodoOperations } from "../hooks/useTodoOperations";
import { useTodos } from "../TodoProvider";

interface FilterOption {
    id: string;
    value: 'all' | 'active' | 'completed';
    label: string;
    color: string;
    count: number;
}

export const TodoFilters = () => {
    const { getStats, filteredTodos } = useTodoOperations();
    const { activeFilter, setActiveFilter } = useTodos();
    const stats = getStats();

    const filterOptions: FilterOption[] = [
        {
            id: 'all',
            value: 'all',
            label: 'All',
            color: 'bg-blue-500 hover:bg-blue-600',
            count: stats.total
        },
        {
            id: 'active',
            value: 'active',
            label: 'Pending',
            color: 'bg-orange-500 hover:bg-orange-600',
            count: stats.pending
        },
        {
            id: 'completed',
            value: 'completed',
            label: 'Completed',
            color: 'bg-green-500 hover:bg-green-600',
            count: stats.completed
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Filters
            </h3>
            
            <div className="flex gap-2 flex-wrap">
                <For each={filterOptions}>
                    {(filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`
                                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                                ${activeFilter === filter.value
                                    ? `${filter.color} text-white shadow-md`
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }
                            `}
                            aria-label={`Show ${filter.label.toLowerCase()}`}
                            aria-pressed={activeFilter === filter.value}
                        >
                            <span className="flex items-center gap-2">
                                {filter.label}
                                <span className={`
                                    px-2 py-1 rounded-full text-xs font-bold
                                    ${activeFilter === filter.value
                                        ? 'bg-white bg-opacity-20'
                                        : 'bg-gray-200 dark:bg-gray-600'
                                    }
                                `}>
                                    {filter.count}
                                </span>
                            </span>
                        </button>
                    )}
                </For>
            </div>
            
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredTodos.length} of {stats.total} tasks
            </div>
        </div>
    );
}; 