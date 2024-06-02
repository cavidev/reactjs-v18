import { decryptPassword } from "../utils/secure";
import encriptedAppid from "./apiKey.json";
import secrectKey from "../utils/noUpload";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const response = {
    coord: {
        lon: -84.0948,
        lat: 9.9907,
    },
    weather: [
        {
            id: 500,
            main: "Rain",
            description: "lluvia ligera",
            icon: "10n",
        },
    ],
    base: "stations",
    main: {
        temp: 21.65,
        feels_like: 22.25,
        temp_min: 20.79,
        temp_max: 22.73,
        pressure: 1017,
        humidity: 91,
    },
    visibility: 10000,
    wind: {
        speed: 1.79,
        deg: 49,
        gust: 3.13,
    },
    rain: {
        "1h": 0.14,
    },
    clouds: {
        all: 75,
    },
    dt: 1716768856,
    sys: {
        type: 2,
        id: 2004086,
        country: "CR",
        sunrise: 1716722059,
        sunset: 1716767579,
    },
    timezone: -21600,
    id: 3621729,
    name: "San Pablo",
    cod: 200,
};

const getWeather = async (url, params) => {
    /**
     * Getting the appid decrypted...
     */
    const appidDencrypted = await decryptPassword(secrectKey, encriptedAppid);
    params.appid = appidDencrypted.decryptedPassword;
    (params.units = "metric"), (params.lang = "es");

    const urlSearch = `${url}${!isEmpty(params) ? "?" + new URLSearchParams(params).toString() : ""}`;
    try {
        /* Under develop mode 
        const response = await fetch(urlSearch, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;*/
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default getWeather;
