import classnames from 'classnames';
import React, { PropTypes } from 'react';
import Button from './Button';

/**
 * Navbar 组件
 */
const Navbar = ({ className, children, ...others }) => {
    return (
        <Button {...others} className={classnames('navbar-btn', className)}>
            {children}
        </Button>
    );
};

Navbar.NavbarButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
};
export default Navbar;
