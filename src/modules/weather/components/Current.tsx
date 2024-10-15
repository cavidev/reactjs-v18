import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import Show from "~/hooks/Show/Show";
import useAstroWeatherApi from "../api/rapidapi/astro";
import Sunrise from "../assets/icons/sunrise";
import { useContextGeolocation } from "../context/Geolocation";
import Parameter from "./Parameters/Parameter";

const Current = (props: {
    temp: any;
    name: any;
    region: any;
    country: any;
    is_day: any;
    time: any;
    condition: { actual: any; icon: any };
}) => {
    const {
        temp,
        name,
        region,
        country,
        is_day,
        time,
        condition: { actual, icon },
    } = props;
    const geolocation = useContextGeolocation();
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
                <span className="text-9xl text-center">{`${temp}°`}</span>
                <Show when={!geolocation.loading} fallback={<></>} keyed>
                    {() => {
                        const { data, isLoading } = useAstroWeatherApi({
                            lat: geolocation.latitude!,
                            lon: geolocation.longitude!,
                            isDev: true,
                        });
                        return (
                            <div className="flex flex-row gap-1">
                                <div className="flex flex-row w-1/2 justify-center">
                                    <Parameter
                                        icon={<Sunrise />}
                                        parameters={[{ description: data?.astronomy.astro.sunrise, value: `` }]}
                                        isLoading={isLoading}
                                    />
                                </div>
                                <div className="flex flex-row w-1/2 justify-center">
                                    <Parameter
                                        icon={<Sunrise />}
                                        parameters={[{ description: data?.astronomy.astro.sunset, value: `` }]}
                                        isLoading={isLoading}
                                    />
                                </div>
                            </div>
                        );
                    }}
                </Show>
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
