import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Sidebar 顶部组件
 */
export default class SidebarHeader extends PureComponent {
    // props校验
    static propTypes ={
        img: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.any,
    }
    // 渲染
    render() {
        let { img, className, children, ...others } = this.props;

        return (
            <div {...others} className={classnames('sidebar-header', className)}>
                { img && <img src={img} /> }
                { children }
            </div>
        );
    }
}
