const loadTodos = async () => {
    const res = await fetch("/todos");
    return res.json();
};
