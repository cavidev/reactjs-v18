import { Dispatch, SetStateAction } from "react";

export default (setPosition: Dispatch<SetStateAction<{}>>) => {
    if (navigator.geolocation) {
        const success = function (position) {
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            setPosition({ latitud, longitud });
        };
        navigator.geolocation.getCurrentPosition(success, (msg) => {
            console.error(msg);
        });
    }
};
