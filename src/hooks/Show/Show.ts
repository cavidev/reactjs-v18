import { ReactNode } from "react";

interface showProps<T> {
    when: T | undefined | null | false;
    keyed?: boolean;
    fallback?: ReactNode;
    children: ReactNode | ((item: T) => ReactNode);
}
const Show = <T>(props: showProps<T>): ReactNode => {
    /* const change = useCallback(() => {
        return props.when ? props.children : props.fallback ?? <Fragment></Fragment>;
    }, [props.when, props.children, props.fallback]);
    return change(); */
    if (props.when) {
        if (typeof props.children === "function") {
            return (props.keyed ? props.children(props.when) : props.children(props.when)) ?? null;
        } else {
            return props.children ?? null;
        }
    }
    return props.fallback ?? null;
};

export default Show;
