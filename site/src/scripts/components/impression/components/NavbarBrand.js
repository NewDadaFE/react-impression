import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * NavbarBrand 组件
 */
export default class NavbarBrand extends PureComponent {
    // props校验
    static propTypes ={
        href: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.any,
    }
    // 渲染
    render() {
        let { href, className, children, ...others } = this.props;

        return (
            <a {...others} className={classnames('navbar-brand', className)} href={href || '#'}>
                {children}
            </a>
        );
    }
}
