import { Card } from "primereact/card";
import { useState } from "react";
import Show from "../../hooks/Show/Show";
import Loader from "../core/Loader/Loader";
import useForecastWeatherApi from "./api/rapidapi/forecast";
import CloudDrizzle from "./assets/icons/cloud-drizzle";
import Droplet from "./assets/icons/droplet";
import Pressure from "./assets/icons/Pressure";
import Sun from "./assets/icons/Sun";
import Thermometer from "./assets/icons/Thermometer";
import ThermometerSun from "./assets/icons/thermometer-sun";
import Wind from "./assets/icons/Wind";
import Astronomy from "./components/Astronomy/Astronomy";
import Current from "./components/Current";
import Error from "./components/Error/Error";
import Parameter from "./components/Parameters/Parameter";
import { GeolocationContextProvider, useContextGeolocation } from "./context/Geolocation";
import "./Weather.css";

const WeatherContent = () => {
    const [toUpdate, SetToUpdate] = useState(true);
    const geolocation = useContextGeolocation();
    const apiCall = useForecastWeatherApi({
        lat: geolocation.latitude!,
        lon: geolocation.longitude!,
        isDev: toUpdate,
    });

    if (apiCall.error) return <Error />;

    return (
        <Show when={!apiCall.isLoading || !apiCall.isFetching} fallback={<Loader />} keyed>
            {() => {
                const data = apiCall.data!;
                const current = {
                    temp: data.current.temp_c,
                    is_day: data.current.is_day,
                    name: data.location.name,
                    region: data.location.region,
                    country: data.location.country,
                    time: data.current.last_updated,
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
                                    <div className="flex flex-row flex-1 gap-3 justify-between">
                                        <Parameter
                                            icon={<Thermometer />}
                                            parameters={[
                                                { description: "Feels like", value: `${data?.current.feelslike_c}°C` },
                                                { description: "Wind Chill", value: `${data?.current.windchill_c}°C` },
                                            ]}
                                        />
                                        <Parameter
                                            icon={<Wind />}
                                            parameters={[
                                                { description: "Velocity", value: `${data?.current.wind_kph}` },
                                                { description: "Direction", value: `${data?.current.wind_dir}` },
                                            ]}
                                        />
                                        <Parameter
                                            icon={<Sun />}
                                            parameters={[{ description: "UV Radiation", value: `${data?.current.uv}` }]}
                                        />
                                        <Parameter
                                            icon={<Pressure />}
                                            parameters={[
                                                { description: "Pressure", value: `${data?.current.pressure_mb}` },
                                            ]}
                                        />
                                        <Parameter
                                            icon={<CloudDrizzle />}
                                            parameters={[
                                                { description: "Precipitation", value: `${data?.current.precip_mm}` },
                                                { description: "Dew Point", value: `${data?.current.dewpoint_c}°C` },
                                            ]}
                                        />
                                        <Parameter
                                            icon={<ThermometerSun />}
                                            parameters={[
                                                { description: "Heat Index", value: `${data?.current.heatindex_c}°C` },
                                            ]}
                                        />
                                        <Parameter
                                            icon={<Droplet />}
                                            parameters={[
                                                { description: "Humidity", value: `${data?.current.humidity}%` },
                                            ]}
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className="h-1/3">
                                <Astronomy />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex flex-col">
                            Forecast
                            <button
                                onClick={() => {
                                    SetToUpdate(true);
                                    apiCall.refetch();
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
            }}
        </Show>
    );
};

const Weather = () => {
    return (
        <>
            <GeolocationContextProvider>
                <WeatherContent />
            </GeolocationContextProvider>
        </>
    );
};

export default Weather;
