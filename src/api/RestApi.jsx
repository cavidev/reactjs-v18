import { decryptPassword } from "../utils/secure";
import encriptedAppid from "./apiKey.json";
import secrectKey, { headers } from "../utils/noUpload";

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

const responseRapidApi = {
    location: {
        name: "San Vicente",
        region: "Heredia",
        country: "Costa Rica",
        lat: 9.99,
        lon: -84.09,
        tz_id: "America/Costa_Rica",
        localtime_epoch: 1717394095,
        localtime: "2024-06-02 23:54",
    },
    current: {
        last_updated_epoch: 1717393500,
        last_updated: "2024-06-02 23:45",
        temp_c: 23,
        temp_f: 73.4,
        is_day: 0,
        condition: {
            text: "Fog",
            icon: "//cdn.weatherapi.com/weather/64x64/night/248.png",
            code: 1135,
        },
        wind_mph: 2.2,
        wind_kph: 3.6,
        wind_degree: 344,
        wind_dir: "NNW",
        pressure_mb: 1018,
        pressure_in: 30.06,
        precip_mm: 0.03,
        precip_in: 0,
        humidity: 94,
        cloud: 75,
        feelslike_c: 25.5,
        feelslike_f: 78,
        windchill_c: 20.5,
        windchill_f: 68.9,
        heatindex_c: 20.5,
        heatindex_f: 68.9,
        dewpoint_c: 20.3,
        dewpoint_f: 68.5,
        vis_km: 8,
        vis_miles: 4,
        uv: 1,
        gust_mph: 6.7,
        gust_kph: 10.8,
    },
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

export const getRapidApiWeather = async ({ lat, lon }) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`;
    const options = {
        method: "GET",
        headers,
    };

    try {
        /*
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);*/
        return responseRapidApi;
    } catch (error) {
        console.error(error);
    }
};
