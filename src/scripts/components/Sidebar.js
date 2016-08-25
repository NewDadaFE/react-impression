import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Footer from './SidebarFooter';
import Header from './SidebarHeader';
import Body from './SidebarBody';

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

Sidebar.Header = Header;
Sidebar.Body = Body;
Sidebar.Footer = Footer;

