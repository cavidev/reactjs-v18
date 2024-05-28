import { Dispatch, SetStateAction } from "react";
export interface Position {
    latitude: number;
    longitude: number;
}

const getCurrentPosition = (setPosition: Dispatch<SetStateAction<Position>>) => {
    if (navigator.geolocation) {
        const success = function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setPosition({ latitude, longitude });
        };
        navigator.geolocation.getCurrentPosition(success, (msg) => {
            console.error(msg);
        });
    }
};
export default getCurrentPosition;
