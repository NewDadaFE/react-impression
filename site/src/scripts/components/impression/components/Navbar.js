import classnames from 'classnames';
import NavbarBrand from './NavbarBrand';
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
        theme: PropTypes.string,
    }
    //渲染
    render(){
        let { theme, className, children, ...others } = this.props,
            themeClass = `navbar-${theme}`;

        return(
            <nav {...others} className={classnames('navbar', themeClass, className)}>
                {children}
            </nav>
        );
    }
}

Navbar.Brand = NavbarBrand;
