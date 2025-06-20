import { useQuery } from "@tanstack/react-query";
import { useCurrentWeatherApiProps, WeatherData } from "~/../types/weatherTypes";
import { headers } from "../../../../utils/noUpload";
import { baseUrl, fetchTypedData, mockFetchTypedData } from "./utils";

const data = {
    location: {
        name: "San Vicente",
        region: "Heredia",
        country: "Costa Rica",
        lat: 9.99,
        lon: -84.09,
        tz_id: "America/Costa_Rica",
        localtime_epoch: 1727567008,
        localtime: "2024-09-28 17:43",
    },
    current: {
        last_updated_epoch: 1727660700,
        last_updated: "2024-09-29 19:45",
        temp_c: 20.4,
        temp_f: 68.7,
        is_day: 0,
        condition: {
            text: "Lluvia moderada",
            icon: "//cdn.weatherapi.com/weather/64x64/night/302.png",
            code: 1189,
        },
        wind_mph: 2.2,
        wind_kph: 3.6,
        wind_degree: 144,
        wind_dir: "SE",
        pressure_mb: 1017,
        pressure_in: 30.02,
        precip_mm: 3.63,
        precip_in: 0.14,
        humidity: 94,
        cloud: 75,
        feelslike_c: 20.4,
        feelslike_f: 68.7,
        windchill_c: 18.5,
        windchill_f: 65.3,
        heatindex_c: 18.5,
        heatindex_f: 65.3,
        dewpoint_c: 18.4,
        dewpoint_f: 65.1,
        vis_km: 10,
        vis_miles: 6,
        uv: 1,
        gust_mph: 6.7,
        gust_kph: 10.8,
    },
};

/**
 * Llama al API del clima, recuperando los datos actuales con la latitud y la longitud.
 * @param param0
 * @returns
 */
const useCurrentWeatherApi = ({ lat, lon, isDev = true }: useCurrentWeatherApiProps) => {
    // TODO: crear una funcion factory, para generar urls.
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
            if (!isDev) {
                const response = await fetchTypedData<WeatherData, typeof options>(url, options);
                return response;
            }
            const response = mockFetchTypedData<WeatherData>(2000, data);
            return response;
        },
    });
};

export type UseCurrentWeatherApi = NonNullable<ReturnType<typeof useCurrentWeatherApi>["data"]>;

export default useCurrentWeatherApi;
