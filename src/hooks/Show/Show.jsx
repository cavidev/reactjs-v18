import { useCallback } from "react";

const Show = ({ when, children, fallback }) => {
    const change = useCallback(() => {
        console.log("llamado");
        return when ? children : fallback ?? <></>;
    }, [when, children, fallback]);
    return change();
};

export default Show;
