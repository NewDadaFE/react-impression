import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import SidebarFooter from './SidebarFooter';

/**
 * Sidebar 组件
 */
export default class Sidebar extends Component{
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        return(
            <div {...others} className={classnames('sidebar', className)}>
                {children}
            </div>
        );
    }
}

Sidebar.Footer = SidebarFooter;