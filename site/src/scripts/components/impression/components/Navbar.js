import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarButton from './NavbarButton';

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
        theme: PropTypes.string,
    }
    //渲染
    render(){
        let { theme, className, children, ...others } = this.props,
            themeClass = theme? `navbar-${theme}` : undefined;

        return(
            <nav {...others} className={classnames('navbar', themeClass, className)}>
                {children}
            </nav>
        );
    }
}

Navbar.Brand = NavbarBrand;
Navbar.Button = NavbarButton;
