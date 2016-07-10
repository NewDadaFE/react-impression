import classnames from 'classnames';
import NavbarBrand from './NavbarBrand';
import NavbarSidebarTitle from './NavbarSidebarTitle';
import React, { Component, PropTypes } from 'react';

/**
 * Navbar 组件
 */
export default class Navbar extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //props校验
    static propTypes ={
        style: PropTypes.string,
    }
    //渲染
    render(){
        let { style, className, children, ...others } = this.props,
            styleClass = `navbar-${style}`;

        return(
            <nav {...others} className={classnames('navbar', styleClass, className)}>
                {children}
            </nav>
        );
    }
}

Navbar.Brand = NavbarBrand;
Navbar.SidebarTitle = NavbarSidebarTitle;