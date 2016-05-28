import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * FormControl 组件.
 */
export default class FormControl extends Component{
    //渲染
    render(){
        let { children } = this.props,
            { className } = children;
        children = React.cloneElement(child, {
            className: classnames(className, 'form-control')
        });

        return children;
    }
}