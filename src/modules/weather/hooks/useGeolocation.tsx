import { useEffect, useState } from "react";

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
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    });
    let mounted = true;

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
        mounted && setState((oldState) => ({ ...oldState, loading: false, error }));

    useEffect(() => {
        mounted = true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        } else {
            setState({ loading: false, timestamp: Date.now() });
        }

        return () => {
            mounted = false;
        };
    }, []);

    return state;
};
