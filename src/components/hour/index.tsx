import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const formatTime = "hh:mm:ss";
const Hour: React.FC = () => {
    const [time, setTime] = useState<string>(format(new Date(), formatTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(format(new Date(), formatTime));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span>{time}</span>;
};

export default Hour;
