import { cloneElement, Fragment, ReactElement } from "react";

/**
 * An interate tool in React
 * @param {Object} props - ming have each and children
 * @param {Array<*>} props.each - The array to interate in the UI
 * @param {Function} props.Children - The function where this array will be interated.
 * @returns React Children
 */

interface Item {
    id?: string | undefined;
}

type ForProps<T extends Item> = {
    each: T[];
    children: (item: T, index: number) => ReactElement;
};

const For = <T extends Item>({ each, children }: ForProps<T>) => {
    return (
        <>
            {each.map((item, index) => (
                <Fragment key={item.id || index}>
                    {cloneElement(children(item, index), { key: item.id || index })}
                </Fragment>
            ))}
        </>
    );
};

export default For;
