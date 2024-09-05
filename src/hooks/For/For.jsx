import React, { Fragment, cloneElement } from "react";

/**
 * An interate tool in React
 * @param {Object} props - ming have each and children
 * @param {Array<*>} props.each - The array to interate in the UI
 * @param {Function} props.Children - The function where this array will be interated.
 * @returns React Children
 */
const For = (props) => {
    const { each, children } = props;
    return each.map((item, index) => (
        <Fragment key={index}>{cloneElement(children(item, index), { key: item.id || index })}</Fragment>
    ));
};

export default For;
