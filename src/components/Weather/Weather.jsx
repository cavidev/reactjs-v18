import { useState, useEffect } from "react";
import { MagicCard, MagicContainer } from "../Magicui/MagicCard";
import getCurrentPosition from "../../utils/geolocation";
// import key from "../../services/apiKey";
import getWeather from "../../services/RestApi";
import initialState from "../../utils/initialState.json";
import Meteors from "../Magicui/Meteors";
import Show from "../Show/Show";

const Weather = () => {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const [weather, setWeather] = useState(initialState);

    useEffect(() => {
        getCurrentPosition(setPosition);
    }, []);

    const handleApi = () => {
        const response = getWeather("https://api.openweathermap.org/data/2.5/weather", {
            lat: position.latitude,
            lon: position.longitude,
        });
        response.then((data) => setWeather(data));
    };

    return (
        <>
            <MagicContainer className={"flex h-2/4 w-2/4 flex-col gap-4 lg:h-[250px] lg:flex-row"}>
                <MagicCard
                    borderwidth={100}
                    className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
                >
                    <Show when={weather.weather[0].main === "Rain"}>
                        <Meteors number={100} />
                    </Show>
                    <h1 className="z-10 whitespace-nowrap font-medium text-gray-800 dark:text-gray-200">
                        {weather.main.temp}{" "}
                    </h1>
                    <h2>{weather.name} </h2>
                    <span>Sensacion de: {weather.main.feels_like} </span>
                    <span>Longitud: {position.longitude} </span>
                    <button onClick={handleApi}>Get Data</button>
                </MagicCard>
            </MagicContainer>
        </>
    );
};

export default Weather;
