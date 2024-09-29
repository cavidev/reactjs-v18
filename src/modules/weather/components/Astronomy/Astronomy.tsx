import { Fieldset } from "primereact/fieldset";
import Show from "~/hooks/Show/Show";
// import { useGeolocation } from "../../context/Geolocation";

const Astronomy = () => {
    /* const { lat, lon } = useGeolocation();
    const { isLoading, isFetching, error, data, refetch } = useAstroWeatherApi({
        lat,
        lon,
    }); */
    return (
        <Fieldset legend="Astronomy">
            <Show when={!false} fallback={<>I am loading...</>}>
                <p className="m-0">Loaded</p>
            </Show>
        </Fieldset>
    );
};

export default Astronomy;
