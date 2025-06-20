import { useQuery } from "@tanstack/react-query";
import { useCurrentWeatherApiProps } from "types/weatherTypes";
import { headers } from "../../../../utils/noUpload";
import { baseUrl, fetchTypedData, mockFetchTypedData } from "./utils";

const data = {
    location: {
        name: "London",
        region: "City of London, Greater London",
        country: "United Kingdom",
        lat: 51.52,
        lon: -0.11,
        tz_id: "Europe/London",
        localtime_epoch: 1722400145,
        localtime: "2024-07-31 5:29",
    },
    astronomy: {
        astro: {
            sunrise: "05:23 AM",
            sunset: "08:49 PM",
            moonrise: "12:35 AM",
            moonset: "06:46 PM",
            moon_phase: "Waning Crescent",
            moon_illumination: 20,
            is_moon_up: 1,
            is_sun_up: 0,
        },
    },
};

const useAstroWeatherApi = ({ lat, lon, isDev = false }: useCurrentWeatherApiProps) => {
    const RapidApi = new URL("/astronomy.json", baseUrl);
    RapidApi.searchParams.set("lang", "es");
    RapidApi.searchParams.set("q", `${lat},${lon}`);
    const url = RapidApi.toString();
    const options = {
        method: "GET",
        headers,
    };

    return useQuery({
        queryKey: ["useAstroWeatherApi"],
        queryFn: async () => {
            if (!isDev) {
                const response = fetchTypedData<typeof data, typeof options>(url, options);
                return response;
            }
            return await mockFetchTypedData(6000, data);
        },
    });
};

export default useAstroWeatherApi;
