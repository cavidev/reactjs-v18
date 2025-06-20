import { TasksList } from "./TankList";
import { TasksInput } from "./TaskInput";
import { useTaskReducer } from "./useTaskReducer";

export const Tasks = () => {
    const [tasks, dispatch] = useTaskReducer();

    return (
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col w-72 gap-1">
                <h1>My personal tasks:</h1>
                <TasksInput dispatch={dispatch} />
                <TasksList list={tasks} dispatch={dispatch} />
            </div>
        </div>
    );
};
