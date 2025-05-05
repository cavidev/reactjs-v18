import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dispatch, useEffect, useRef, useState } from "react";
import { TASK } from "./useTaskReducer";

const generateId = () => {
    return "id" + Math.random();
};
export const TasksInput = ({ dispatch }: { dispatch: Dispatch<any> }) => {
    const [text, setText] = useState("");

    const handleEnter = () => {
        dispatch({ type: TASK.ADD, id: generateId(), text: text });
        setText("");
    };
    const inputRef = useRef<any>();
    useEffect(() => {
        inputRef.current?.autoFocus;
    }, []);

    return (
        <div className="flex flex-row gap-1">
            <InputText
                ref={inputRef}
                autoFocus={true}
                className="bg-transparent"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleEnter();
                    }
                }}
            />
            <Button className="w-20" onClick={handleEnter}>
                Add
            </Button>
        </div>
    );
};
