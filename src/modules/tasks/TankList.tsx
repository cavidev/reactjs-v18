import clsx from "clsx";
import { AnimatedList } from "modules/shared/magicui/AnimatedList";
import { Checkbox } from "primereact/checkbox";
import { Dispatch } from "react";
import For from "~/lib/For/For";
import { TASK, type List } from "./useTaskReducer";

export const TasksList = ({ list, dispatch }: { list: List[]; dispatch: Dispatch<any> }) => {
    return (
        <div className="flex flex-col gap-1">
            <AnimatedList className="gap-1 relative flex h-[500px] w-full flex-col overflow-hidden p-2">
                <For each={list}>
                    {(task) => (
                        <div
                            className={clsx(
                                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                                // animation styles
                                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                                // light styles
                                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                                // dark styles
                                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                            )}
                            key={task.id}
                        >
                            <Checkbox
                                checked={task.done}
                                onChange={() => {
                                    dispatch({ type: TASK.CHANGE, id: task.id, task: { ...task, done: !task.done } });
                                }}
                            />
                            {task.text}
                        </div>
                    )}
                </For>
            </AnimatedList>
        </div>
    );
};
