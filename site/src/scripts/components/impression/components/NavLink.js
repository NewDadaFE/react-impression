import classnames from 'classnames';
import React, { PropTypes } from 'react';

// props校验
const propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
};

/**
 * NavLink 组件
 */
const NavLink = ({ children, className, ...others }) => {
    let childrenProps = {
        className: classnames('nav-link', children.props.className),
    };

    children.type.displayName === 'Link' && (childrenProps.activeClassName = 'active');
    children = React.cloneElement(children, childrenProps);

    return (
        <li {...others} className={classnames('nav-item', className)}>
            {children}
        </li>
    );
};

NavLink.propTypes = propTypes;
export default NavLink;
