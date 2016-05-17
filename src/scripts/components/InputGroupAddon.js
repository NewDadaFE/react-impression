import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * InputGroupAddon组件.
 */
export default class InputGroupAddon extends Component{
    //渲染
    render(){
        let { className, children } = this.props;

        return(
            <span className={classnames('input-group-addon', className)}>
                {children}
            </span>
        );
    }
}