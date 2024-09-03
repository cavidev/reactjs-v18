import React, { Children } from "react";

/**
 * An interate tool in React
 * @param {Object} props - Mingh have each and children
 * @param {Array<*>} props.each - The array to interate in the UI
 * @param {Function} props.Children - The function where this array will be interated.
 * @returns React Children
 */
const For = (props) => {
    const { each, children } = props;
    return Children.toArray(
        each.map((item, index) => {
            return React.cloneElement(children(item, index), { key: item.id || index });
        })
    );
};

export default For;

/**import { Children, useCallback } from "react";
 
 * For eficient and easy read in out code
 * @param {*} param0
 * @returns
 */
/* const For = (props) => {
    const { render, each, children } = props;
    const toRender = typeof children === "function" ? children : render;
    const component = useCallback(() => {
        return Children.toArray(each.map((item, index) => toRender(item, index)));
    }, [render, each, children]);
    return component();
};
export default For; */

/* 
const For = (props) => {
    const { render, each, children } = props;
    const toRender = typeof children === "function" ? children : render;

    const component = useCallback(() => {
        return Children.toArray(each.map((item, index) => {
            return React.cloneElement(toRender(item, index), { key: item.id || index });
        }));
    }, [render, each, children]);

    return component();
};
*/
