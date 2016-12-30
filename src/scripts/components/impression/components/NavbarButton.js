import classnames from 'classnames';
import React, { PropTypes } from 'react';
import Button from './Button';

/**
 * Navbar 组件
 */
const NavbarButton = ({ className, children, ...others }) => {
    return (
        <Button {...others} className={classnames('navbar-btn', className)}>
            {children}
        </Button>
    );
};

NavbarButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
};
export default NavbarButton;
