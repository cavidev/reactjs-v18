import { format } from "date-fns";
import { es } from "date-fns/locale/es";

const Current = (props) => {
    const {
        temp,
        name,
        region,
        country,
        is_day,
        time,
        condition: { actual, icon },
    } = props;
    return (
        <>
            <div className="flex flex-col w-1/3 justify-center">
                <span className="text-3xl">{name}</span>
                <span className="text-xl">{format(time, "PPP", { locale: es })}</span>
                <span className="text-sm">
                    {region}, {country}
                </span>
            </div>
            <div className="flex flex-col gap-1 w-1/3 h-full justify-center text-center">
                <span className="text-9xl">{`${temp}°`}</span>
            </div>
            <div className="flex flex-col gap-1 w-1/3 h-full justify-center text-center">
                <div className="flex justify-center text-center">
                    <img width={100} src={icon} />
                </div>
                <span className="text-xl">{actual}</span>
                <span className="text-sm">Feliz {is_day ? "Dia" : "Noche"}</span>
            </div>
        </>
    );
};

export default Current;
