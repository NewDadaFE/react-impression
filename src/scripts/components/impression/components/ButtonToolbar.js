import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * ButtonToolbar组件.
 */
const ButtonToolbar = ({ className, children }) => {
    return (
        <div className={classnames('btn-toolbar', className)}>
            {children}
        </div>
    );
};

ButtonToolbar.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default ButtonToolbar;
