import { createContext, ReactNode, useContext } from "react";
import { GeoLocationSensorState, useGeolocation } from "../hooks/useGeolocation";

/**
 * Se crea el contexto y se le da los valores iniciales.
 */
const GeolocationContext = createContext<GeoLocationSensorState>({
    loading: true,
    timestamp: Date.now(),
});

/**
 * Se pide la geolocalizacion del hook para almacenarla en el contexto
 * @param param0
 * @returns
 */
export const GeolocationContextProvider = ({ children }: { children: ReactNode }) => {
    const geolocation = useGeolocation();
    return <GeolocationContext.Provider value={geolocation}>{children}</GeolocationContext.Provider>;
};

/**
 * Recuperar los datos almancenados en el contexto
 * @returns context = los datos alamcenados
 */
export const useContextGeolocation = () => {
    const context = useContext(GeolocationContext);
    return context;
};
