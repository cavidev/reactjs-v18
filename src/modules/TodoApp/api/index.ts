export const loadTodos = async () => {
    const res = await fetch("https://dummyjson.com/todos");
    const data = await res.json();
    return data.todos;
};
