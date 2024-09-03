import { decryptPassword } from "../utils/secure";
import encriptedAppid from "./apiKey.json";
import secrectKey from "../utils/noUpload";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default getWeather;
