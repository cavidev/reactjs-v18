const Current = (props) => {
    const {
        temp,
        name,
        region,
        country,
        condition: { actual, icon },
    } = props;
    return (
        <>
            <div className="flex flex-col gap-1 w-1/3 h-full">
                <span className="text-7xl">{`${temp}°`}</span>
                <span className="text-2xl">{name}</span>
                <span className="text-sm leading-3">{region}</span>
                <span className="text-xs leading-3">{country}</span>
            </div>
            <div className="flex flex-col w-1/3">
                <span className="text-xl">Current Weather</span>
                <span className="text-2xl">{actual}</span>
            </div>
            <div className="flex flex-col w-1/3 h-full">
                <img width={100} height={100} src={icon} />
            </div>
        </>
    );
};

export default Current;
