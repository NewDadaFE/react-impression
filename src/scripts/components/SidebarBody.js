import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Sidebar 主内容组件
 */
export default class SidebarBody extends Component{
    render(){
        let { className, children, ...others } = this.props;

        return (
            <div {...others} className={classnames('sidebar-body', className)}>
                { children }
            </div>
        );
    }
}
