import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * CardFooter组件.
 */
const CardFooter = ({ className, children, ...others }) => {
    return (
        <div {...others} className={classnames('card-footer', className)}>
            {children}
        </div>
    );
};

CardFooter.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default CardFooter;
