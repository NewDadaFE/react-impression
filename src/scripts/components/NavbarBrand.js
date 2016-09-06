import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * NavbarBrand 组件
 */
const NavbarBrand = ({ href, className, children, ...others }) => {
    return (
        <a {...others} className={classnames('navbar-brand', className)} href={href || '#'}>
            {children}
        </a>
    );
};

NavbarBrand.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any,
};

export default NavbarBrand;
