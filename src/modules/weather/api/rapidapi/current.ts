import { useQuery } from "@tanstack/react-query";
import { WeatherData } from "~/../types/weatherTypes";
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
        last_updated_epoch: 1727566200,
        last_updated: "2024-09-28 17:30",
        temp_c: 20.3,
        temp_f: 68.5,
        is_day: 0,
        condition: {
            text: "Lluvias con tormenta fuertes o moderadas en la región",
            icon: "//cdn.weatherapi.com/weather/64x64/night/389.png",
            code: 1276,
        },
        wind_mph: 2.2,
        wind_kph: 3.6,
        wind_degree: 315,
        wind_dir: "NW",
        pressure_mb: 1017.0,
        pressure_in: 30.03,
        precip_mm: 3.01,
        precip_in: 0.12,
        humidity: 100,
        cloud: 100,
        feelslike_c: 20.3,
        feelslike_f: 68.5,
        windchill_c: 18.6,
        windchill_f: 65.6,
        heatindex_c: 18.6,
        heatindex_f: 65.6,
        dewpoint_c: 18.3,
        dewpoint_f: 65.0,
        vis_km: 0.7,
        vis_miles: 0.0,
        uv: 4.0,
        gust_mph: 3.5,
        gust_kph: 5.6,
    },
};

interface useCurrentWeatherApiProps {
    lat: number;
    lon: number;
    isDev: boolean;
}
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
