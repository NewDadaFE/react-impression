import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import Button from './Button';

/**
 * Navbar 组件
 */
export default class Navbar extends PureComponent {
    // prop type校验
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
    }
    // 渲染
    render() {
        let { className, children, ...others } = this.props;

        return(
            <Button {...others} className={classnames('navbar-btn', className)}>
                {children}
            </Button>
        );
    }
}
