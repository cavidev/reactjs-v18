import { useEffect, useState } from "react";
import Card from "../Card";
import Meteors from "../Magicui/Meteors";
import getCurrentPosition from "../../utils/geolocation";

const Content = () => {
    const [position, setPosition] = useState({});
    useEffect(() => {
        getCurrentPosition(setPosition);
    }, []);

    console.log(position);
    return (
        <>
            <div className="fixed">
                <Meteors number={100} />
            </div>
            <div className="flex ">
                <>Hola</>
            </div>
        </>
    );
};

export default Content;
