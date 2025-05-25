import { Ripple } from "primereact/ripple";
import { Skeleton } from "primereact/skeleton";
import For from "~/lib/For/For";
import Show from "~/lib/Show/Show";
import "./Parameter.css";

//@ts-check

const Parameter = (props) => {
    const { icon, parameters, isLoading = false } = props;
    // description, value
    return (
        <>
            <div className="flex select-none justify-content-center align-items-center shadow-2 border-round font-bold p-ripple shadow-2 p-ripple flex-row hover:bg-[var(--highlight-bg)] gap-1 w-28 border  border-dashed rounded p-2">
                {icon}
                <div className="flex flex-col gap-2">
                    <For each={parameters}>
                        {(parameter, index) => {
                            console.log("isLoading", isLoading);
                            return (
                                <div key={index} className="flex flex-col gap-1 select-none">
                                    <Show when={!isLoading} fallback={<Skeleton width="100%" height="100%"></Skeleton>}>
                                        <span className="text-2xl leading-5 font-semibold">{parameter.value}</span>
                                        <span className="text-xs italic">{parameter.description}</span>
                                    </Show>
                                </div>
                            );
                        }}
                    </For>
                </div>
                <Ripple />
            </div>
        </>
    );
};

export default Parameter;
