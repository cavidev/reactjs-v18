import { useEffect, useRef, useState } from "react";

/**
 * @desc Made compatible with {GeolocationPositionError} and {PositionError} cause
 * PositionError been renamed to GeolocationPositionError in typescript 4.1.x and making
 * own compatible interface is most easiest way to avoid errors.
 */
export interface IGeolocationPositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

export interface GeoLocationSensorState {
    loading: boolean;
    accuracy?: number | null;
    altitude?: number | null;
    altitudeAccuracy?: number | null;
    heading?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    speed?: number | null;
    timestamp: number | null;
    error?: Error | IGeolocationPositionError;
}
export interface useGeolocationProps extends PositionOptions {
    isInit?: boolean;
}
export const useGeolocation = (options?: useGeolocationProps): GeoLocationSensorState => {
    const [state, setState] = useState<GeoLocationSensorState>({
        loading: true,
        timestamp: Date.now(),
    });
    const isMounted = useRef(true);

    useEffect(() => {
        console.log("I am executing");
        isMounted.current = true;

        if (!navigator.geolocation) {
            setState({ loading: false, timestamp: Date.now() });
            return;
        }

        const onEvent = async (event: GeolocationPosition) => {
            if (event) {
                setState({
                    loading: false,
                    accuracy: event.coords.accuracy,
                    altitude: event.coords.altitude,
                    altitudeAccuracy: event.coords.altitudeAccuracy,
                    heading: event.coords.heading,
                    latitude: event.coords.latitude,
                    longitude: event.coords.longitude,
                    speed: event.coords.speed,
                    timestamp: event.timestamp,
                });
            }
        };

        const onEventError = (error: IGeolocationPositionError) =>
            setState((oldState) => ({ ...oldState, loading: false, error }));

        // if (!state.latitude && !state.longitude)
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);

        return () => {
            isMounted.current = false;
        };
    }, [options]);

    return state;
};
