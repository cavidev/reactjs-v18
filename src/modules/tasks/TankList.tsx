import { Checkbox } from "primereact/checkbox";
import { Dispatch } from "react";
import { TASK, type List } from "./useTaskReducer";

export const TasksList = ({ list, dispatch }: { list: List[]; dispatch: Dispatch<any> }) => {
    return (
        <div className="flex flex-col gap-1">
            {list.map((task) => (
                <div className="flex flex-row gap-1" key={task.id}>
                    <Checkbox
                        checked={task.done}
                        onChange={() => {
                            dispatch({ type: TASK.CHANGE, id: task.id, task: { ...task, done: !task.done } });
                        }}
                    />
                    {task.text}
                </div>
            ))}
        </div>
    );
};
