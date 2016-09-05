import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * NavTitle 组件
 */
export default class NavTitle extends PureComponent {
    // props校验
    static propTypes ={
        children: PropTypes.any,
        className: PropTypes.string,
    }
    // 渲染
    render() {
        let { children, className, ...others } = this.props;

        return(
            <div {...others} className={classnames('nav-title', className)}>
                {children}
            </div>
        );
    }
}
