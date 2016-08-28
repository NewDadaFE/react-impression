import classnames from 'classnames';
import React, { Component } from 'react';
import Button from './Button';

/**
 * Navbar 组件
 */
export default class Navbar extends Component{
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        return(
            <Button {...others} className={classnames('navbar-btn', className)}>
                {children}
            </Button>
        );
    }
}
