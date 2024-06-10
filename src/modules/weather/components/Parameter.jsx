import For from "~/hooks/For/For";

const Parameter = (props) => {
    const { icon, parameters } = props;
    // description, value
    return (
        <>
            <div className="flex flex-row gap-1">
                {icon}
                <div className="flex flex-col">
                    <For each={parameters}>
                        {(parameter, index) => {
                            console.log(parameter);
                            return (
                                <div key={index} className="flex flex-col">
                                    <span className="text-xs leading-3">{parameter.description}</span>
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
