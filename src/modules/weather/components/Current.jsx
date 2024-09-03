import { format } from "date-fns";

const Current = (props) => {
    const {
        temp,
        name,
        region,
        country,
        is_day,
        condition: { actual, icon },
    } = props;
    return (
        <>
            <div className="flex flex-col w-1/3 justify-center">
                <span className="text-3xl">{name}</span>
                <span className="text-xl">{format(new Date(), "PPP")}</span>
                <span className="text-sm">
                    {region}, {country}
                </span>
            </div>
            <div className="flex flex-col gap-1 w-1/3 h-full justify-center text-center">
                <span className="text-9xl">{`${temp}°`}</span>
            </div>
            <div className="flex flex-col gap-1 w-1/3 h-full justify-center text-center">
                <div className="justify-center pl-[7.25rem] text-center">
                    <img width={100} src={icon} />
                </div>
                <span className="text-xl">{actual}</span>
                <span className="text-sm">Feliz {is_day ? "Dia" : "Noche"}</span>
            </div>
        </>
    );
};

export default Current;
