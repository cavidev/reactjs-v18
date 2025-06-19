//import { Fieldset } from "primereact/fieldset";
import Show from "~/lib/Show/Show";
import useForecastWeatherApi from "../../api/rapidapi/forecast";
import { useContextGeolocation } from "../../context/Geolocation";

const Astronomy = () => {
    const geolocation = useContextGeolocation();

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <Show when={!geolocation.loading} fallback={<>I am loading...</>} keyed key={1}>
                {() => {
                    const { data } = useForecastWeatherApi({
                        lat: geolocation.latitude!,
                        lon: geolocation.longitude!,
                        isDev: true,
                    });
                    console.log("data", data);
                    return <>Tengo la data</>;
                }}
            </Show>
        </div>
    );
};

export default Astronomy;
