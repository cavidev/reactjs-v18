import { useTodos } from "../TodoProvider";
import { loadTodos } from "../api";

export const useTodoOperations = () => {
    const { state, dispatch, isLoading, error, clearError, activeFilter } = useTodos();

    // Cargar todos desde API
    const loadTodosFromAPI = async () => {
        try {
            const apiTodos = await loadTodos();
            dispatch({ payload: "set", data: apiTodos });
            return true;
        } catch (err) {
            console.error("Error loading todos from API:", err);
            return false;
        }
    };

    // Limpiar todos completados
    const clearCompleted = () => {
        const activeTodos = state.filter(todo => !todo.done);
        dispatch({ payload: "set", data: activeTodos });
    };

    // Marcar todos como completados
    const markAllAsCompleted = () => {
        const updatedTodos = state.map(todo => ({ ...todo, done: true }));
        dispatch({ payload: "set", data: updatedTodos });
    };

    // Marcar todos como pendientes
    const markAllAsPending = () => {
        const updatedTodos = state.map(todo => ({ ...todo, done: false }));
        dispatch({ payload: "set", data: updatedTodos });
    };

    // Obtener estadísticas
    const getStats = () => {
        const total = state.length;
        const completed = state.filter(todo => todo.done).length;
        const pending = total - completed;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

        return {
            total,
            completed,
            pending,
            percentage
        };
    };

    // Filtrar todos usando el filtro activo del contexto
    const getFilteredTodos = () => {
        switch (activeFilter) {
            case 'active':
                return state.filter(todo => !todo.done);
            case 'completed':
                return state.filter(todo => todo.done);
            default:
                return state;
        }
    };

    // Limpiar todos (resetear)
    const clearAllTodos = () => {
        dispatch({ payload: "set", data: [] });
    };

    return {
        // Estado
        todos: state,
        filteredTodos: getFilteredTodos(),
        isLoading,
        error,
        
        // Acciones básicas
        dispatch,
        clearError,
        
        // Operaciones adicionales
        loadTodosFromAPI,
        clearCompleted,
        markAllAsCompleted,
        markAllAsPending,
        clearAllTodos,
        
        // Utilidades
        getStats,
        getFilteredTodos
    };
}; 