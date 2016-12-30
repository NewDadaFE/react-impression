import classnames from 'classnames';
import React, { PropTypes } from 'react';

    // props校验
const propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

/**
 * NavTitle 组件
 */
const NavTitle = ({ children, className, ...others }) => {
    return (
        <div {...others} className={classnames('nav-title', className)}>
            {children}
        </div>
    );
};

NavTitle.propTypes = propTypes;
export default NavTitle;
