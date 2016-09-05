import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import PS from 'perfect-scrollbar';


/**
 * Sidebar 主内容组件
 */
export default class SidebarBody extends PureComponent {
    // props校验
    static propTypes ={
        className: PropTypes.string,
        children: PropTypes.any,
    }
    // 初始化滚动条
    componentDidMount() {
        PS.initialize(this.refs.container);
    }
    render() {
        let { className, children, ...others } = this.props;

        return (
            <div ref="container" {...others} className={classnames('sidebar-body', className)}>
                { children }
            </div>
        );
    }
}
