import { useState, useEffect } from "react";

// Custom hook para obtener la ubicación
const getGeolocation = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            if (navigator.geolocation) {
                try {
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject, {
                            timeout: 5000,
                            maximumAge: 0,
                        });
                    });
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                } catch (error) {
                    setError(error);
                }
            } else {
                setError(new Error("Geolocation is not supported by this browser."));
            }
        };

        getLocation();
    }, []);

    return { location, error };
};

export default getGeolocation;
