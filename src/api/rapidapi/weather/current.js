import { headers } from "../../../utils/noUpload";
import { baseUrl, wait } from "./baseUrl";
import { useQuery } from "@tanstack/react-query";

const data = {
    location: {
        name: "San Vicente",
        region: "Heredia",
        country: "Costa Rica",
        lat: 9.98,
        lon: -84.09,
        tz_id: "America/Costa_Rica",
        localtime_epoch: 1722305054,
        localtime: "2024-07-29 20:04",
    },
    current: {
        last_updated_epoch: 1722304800,
        last_updated: "2024-07-29 20:00",
        temp_c: 19.0,
        temp_f: 66.2,
        is_day: 0,
        condition: {
            text: "Neblina",
            icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
            code: 1030,
        },
        wind_mph: 5.1,
        wind_kph: 8.3,
        wind_degree: 57,
        wind_dir: "ENE",
        pressure_mb: 1015.0,
        pressure_in: 29.96,
        precip_mm: 0.02,
        precip_in: 0.0,
        humidity: 96,
        cloud: 75,
        feelslike_c: 19.0,
        feelslike_f: 66.2,
        windchill_c: 19.0,
        windchill_f: 66.2,
        heatindex_c: 19.0,
        heatindex_f: 66.2,
        dewpoint_c: 18.4,
        dewpoint_f: 65.1,
        vis_km: 2.0,
        vis_miles: 1.0,
        uv: 1.0,
        gust_mph: 6.3,
        gust_kph: 10.2,
    },
};

const useCurrentWeatherApi = ({ lat, lon, toUpdate = false }) => {
    const RapidApi = new URL("/current.json", baseUrl);
    RapidApi.searchParams.set("lang", "es");
    RapidApi.searchParams.set("q", `${lat},${lon}`);
    const url = RapidApi.toString();
    const options = {
        method: "GET",
        headers,
    };

    return useQuery({
        queryKey: ["currentWeatherData"],
        queryFn: async () => {
            if (toUpdate) {
                const response = await fetch(url, options);
                return await response.json();
            }
            const response = await wait(10000, data);
            return response;
        },
    });
};

export default useCurrentWeatherApi;
