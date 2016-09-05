import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * CollapseTitle 组件
 */
export default class CollapseTitle extends PureComponent {
    // props校验
    static propTypes ={
        children: PropTypes.any,
        className: PropTypes.string,
        onClick: PropTypes.func,
    }
    // 渲染
    render() {
        let { onClick, children, className, ...others } = this.props;

        return(
            <div onClick={onClick} {...others} className={classnames('collapse-title', className)}>
                {children}
                <i className="fa fa-angle-right collapse-title-addon" />
            </div>
        );
    }
}
