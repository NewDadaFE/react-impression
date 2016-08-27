import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import PS from 'perfect-scrollbar';
import Footer from './SidebarFooter';
import Header from './SidebarHeader';
import Body from './SidebarBody';

/**
 * Sidebar 组件
 */
export default class Sidebar extends Component{
    componentDidUpdate(){
        PS.initialize(this.refs.container);
    }
    componentDidMount(){
        PS.initialize(this.refs.container);
    }
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        return(
            <div ref="container" {...others} className={classnames('sidebar', className)}>
                {children}
            </div>
        );
    }
}

Sidebar.Header = Header;
Sidebar.Body = Body;
Sidebar.Footer = Footer;

