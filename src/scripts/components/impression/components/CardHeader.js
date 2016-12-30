import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * CardHeader组件.
 */
const CardHeader = ({ className, children, ...others }) => {
    return (
        <div {...others} className={classnames('card-header', className)}>
            {children}
        </div>
    );
};

CardHeader.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};
export default CardHeader;
