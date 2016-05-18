import classnames from 'classnames';
import NavbarBrand from './NavbarBrand';
import NavbarSidebarTitle from './NavbarSidebarTitle';
import React, { Component } from 'react';

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
        style: React.PropTypes.string,
    }
    //渲染
    render(){
        let { style, className, children } = this.props;
        let styleClass = `navbar-${style}`;

        return(
            <nav className={classnames('navbar', styleClass, className)}>
                {children}
            </nav>
        );
    }
}

Navbar.Brand = NavbarBrand;
Navbar.SidebarTitle = NavbarSidebarTitle;