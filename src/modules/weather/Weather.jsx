import { Card } from "primereact/card";
import useGeolocation from "~/modules/weather/hooks/useGeolocation";
import useCurrentWeatherApi from "~/api/rapidapi/weather/current";
import Thermometer from "modules/weather/assets/icons/Thermometer";
import Wind from "modules/weather/assets/icons/Wind";
import Current from "./components/Current";
import Astronomy from "./components/Astronomy/Astronomy";
import Parameter from "./components/Parameters/Parameter";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import Sun from "modules/weather/assets/icons/Sun";

import "./Weather.css";
import { useState } from "react";

const WeatherContent = ({ lat, lon }) => {
    const [toUpdate, SettoUpdate] = useState(false);
    const { isLoading, isFetching, error, data, refetch } = useCurrentWeatherApi({
        lat,
        lon,
    });

    if (error) return <Error />;
    if (isLoading || isFetching) return <Loader />;

    const current = {
        temp: data.current.temp_c,
        is_day: data.current.is_day,
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        condition: {
            actual: data.current.condition.text,
            icon: data.current.condition.icon,
        },
    };

    return (
        <div className="flex flex-row h-full">
            <div className="w-2/3 flex flex-col gap-1 p-4">
                <div className="h-1/3 w-full flex flex-row">
                    <Current {...current} />
                </div>
                <div className="h-1/3">
                    <Card>
                        <div className="flex flex-row flex-1 gap-3">
                            <Parameter
                                icon={<Thermometer />}
                                parameters={[{ description: "Feels like", value: `${data.current.feelslike_c}°` }]}
                            />
                            <Parameter
                                icon={<Wind />}
                                parameters={[
                                    { description: "Velocity", value: `${data.current.wind_kph}` },
                                    { description: "Direction", value: `${data.current.wind_dir}` },
                                ]}
                            />
                            <Parameter
                                icon={<Sun />}
                                parameters={[{ description: "UV Radation", value: `${data.current.uv}` }]}
                            />
                        </div>
                    </Card>
                </div>
                <div className="h-1/3">
                    <Astronomy></Astronomy>
                </div>
            </div>
            <div className="w-1/3 h-full flex flex-col">
                Forecast
                <button
                    onClick={() => {
                        SettoUpdate(true);
                        refetch();
                    }}
                >
                    Change Location {toUpdate}
                </button>
                <div className="self-end mt-auto p-1">
                    Powered by{" "}
                    <a href="https://www.weatherapi.com/" title="Free Weather API">
                        WeatherAPI.com
                    </a>
                </div>
            </div>
        </div>
    );
};

const Weather = () => {
    const { location } = useGeolocation();
    if (!location.latitude) return <Loader />;
    return <WeatherContent lat={location.latitude} lon={location.longitude} />;
};

export default Weather;
