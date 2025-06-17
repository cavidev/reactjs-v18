import clsx from "clsx";
import { useState } from "react";
import { Input } from "./Input";
import { useTodos } from "./TodoProvider";
import { Todo } from "./useTodoReducer";

export const Item = ({ todo }: { todo: Todo }) => {
    const { dispatch } = useTodos();
    const [isEditing, setEditing] = useState(false);
    return (
        <div className="flex flex-row justify-between">
            {isEditing ? (
                <Input value={todo.text} id={todo.id} setEditing={setEditing} />
            ) : (
                <>
                    <span className={clsx({ "text-gray-400": todo.done })}>{todo.text}</span>
                    <div className="flex flex-row gap-1">
                        <button
                            onClick={() => {
                                setEditing(true);
                            }}
                        >
                            📝
                        </button>
                        <button
                            onClick={() => {
                                dispatch({ payload: "delete", id: todo.id });
                            }}
                        >
                            ❌
                        </button>
                        <input
                            type="checkbox"
                            onChange={(e) => {
                                dispatch({ payload: "complete", id: todo.id, done: e.target.checked });
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};
