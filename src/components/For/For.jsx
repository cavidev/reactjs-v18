import { Children, useCallback } from "react";

/**
 * For eficient and easy read in out code
 * @param {*} param0
 * @returns
 */
const For = (props) => {
    const { render, each, children } = props;
    const toRender = typeof children === "function" ? children : render;
    const component = useCallback(() => {
        return Children.toArray(each.map((item, index) => toRender(item, index)));
    }, [render, each, children]);
    return component();
};
export default For;
