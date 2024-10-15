import { ReactNode } from "react";

interface showProps<T> {
    when: T | undefined | null | false;
    keyed?: boolean;
    fallback?: ReactNode;
    children: ReactNode | ((item?: T) => ReactNode);
}
const Show = <T>({ when, children, fallback, keyed }: showProps<T>): ReactNode => {
    if (!when) {
        return fallback ?? null;
    }

    if (typeof children === "function") {
        return keyed ? children(when) : children();
    }

    return children ?? null;
};

export default Show;
