import { createContext, useContext } from "react";
import getGeolocation from "../hooks/getGeolocation";

const GeolocationContext = createContext({ lat: 0, lon: 0 });

export const GeolocationContextProvider = ({ children }) => {
    const { location } = getGeolocation();

    return <GeolocationContext.Provider value={location}>{children}</GeolocationContext.Provider>;
};

export const useGeolocation = () => {
    const context = useContext(GeolocationContext);
    return context;
};
