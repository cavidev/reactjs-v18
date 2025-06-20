import { Dispatch, SetStateAction, useId, useState } from "react";
import { useTodos } from "./TodoProvider";

export const Input = ({
    value = undefined,
    setEditing,
    id,
}: {
    value?: string;
    setEditing?: Dispatch<SetStateAction<boolean>>;
    id?: string;
}) => {
    const [text, setText] = useState(value);
    const { dispatch } = useTodos();

    return (
        <div className="flex flex-row gap-1">
            <input
                id={useId()}
                autoFocus={!!setEditing}
                value={text || ""}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (setEditing) {
                        dispatch({ payload: "update", id, data: text });
                        setEditing(false);
                    } else dispatch({ payload: "add", data: text });
                    setText("");
                }}
            >
                ✔️
            </button>
        </div>
    );
};
