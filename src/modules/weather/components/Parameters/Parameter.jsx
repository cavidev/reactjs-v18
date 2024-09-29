import For from "~/hooks/For/For";
import "./Parameter.css";

//@ts-check

const Parameter = (props) => {
    const { icon, parameters } = props;
    // description, value
    return (
        <>
            <div className="flex flex-row gap-1 w-28">
                {icon}
                <div className="flex flex-col">
                    <For each={parameters}>
                        {(parameter, index) => {
                            return (
                                <div key={index} className="flex flex-col">
                                    <span className="text-xs italic leading-3">{parameter.description}</span>
                                    <span className="text-2xl font-semibold">{parameter.value}</span>
                                </div>
                            );
                        }}
                    </For>
                </div>
            </div>
        </>
    );
};

export default Parameter;
