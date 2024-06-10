import { useState, useEffect } from "react";
import { Fieldset } from "primereact/fieldset";
import { Card } from "primereact/card";
import getCurrentPosition from "~/utils/geolocation";
// import key from "../../services/apiKey";
import { getRapidApiWeather } from "~/api/RestApi";
import initialState from "~/utils/initialState.json";

import "./Weather.css";
import Thermometer from "~/modules/weather/assets/icons/Thermometer";
import Wind from "~/modules/weather/assets/icons/Wind";
import Current from "./components/Current";
import Parameter from "./components/Parameter";

const Weather = () => {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const [weather, setWeather] = useState(initialState);

    const handleApi = () => {
        /* const response = getWeather("https://api.openweathermap.org/data/2.5/weather", {
            lat: position.latitude,
            lon: position.longitude,
        });
        response.then((data) => setWeather(data));
        */
        getRapidApiWeather({
            lat: position.latitude,
            lon: position.longitude,
        }).then((data) => setWeather(data));
    };

    useEffect(() => {
        getCurrentPosition(setPosition);
        handleApi();
    }, []);

    const current = {
        temp: weather.current.temp_c,
        name: weather.location.name,
        region: weather.location.region,
        country: weather.location.country,
        condition: {
            actual: weather.current.condition.text,
            icon: weather.current.condition.icon,
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
                                parameters={[{ description: "Feels like", value: `${weather.current.feelslike_c}°` }]}
                            />
                            <Parameter
                                icon={<Wind />}
                                parameters={[
                                    { description: "Velocity", value: `${weather.current.wind_kph}` },
                                    { description: "Direction", value: `${weather.current.wind_dir}` },
                                ]}
                            />
                        </div>
                    </Card>
                </div>
                <div className="h-1/3">
                    <Fieldset legend="Parameters">
                        <p className="m-0"></p>
                    </Fieldset>
                    <button onClick={handleApi}>get</button>
                </div>
            </div>
            <div className="w-1/3 h-full flex flex-col">
                Forecast
                <div className="self-end">
                    Powered by{" "}
                    <a href="https://www.weatherapi.com/" title="Free Weather API">
                        WeatherAPI.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Weather;
