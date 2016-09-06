import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * InputGroupAddon组件.
 */
const InputGroupAddon = ({ pure, className, children, ...others }) => {
    let pureClass = pure ? 'bg-pure' : null;

    return (
        <span {...others} className={classnames('input-group-addon', pureClass, className)}>
            {children}
        </span>
    );
};

InputGroupAddon.propTypes = {
    pure: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
};

export default InputGroupAddon;
