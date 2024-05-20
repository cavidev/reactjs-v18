import { useCallback } from "react";

const Show_ = ({ when, children, fallback }) => {
    const change = useCallback(() => when ? children : fallback ?? <></>, [when]);
    return change();
};

export default Show_;