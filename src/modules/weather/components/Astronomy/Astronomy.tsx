import { Fieldset } from "primereact/fieldset";
import Show from "~/lib/Show/Show";
import useForecastWeatherApi from "../../api/rapidapi/forecast";
import { useContextGeolocation } from "../../context/Geolocation";

const Astronomy = () => {
    const geolocation = useContextGeolocation();

    return (
        <Fieldset legend="Astronomy">
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
        </Fieldset>
    );
};

export default Astronomy;
