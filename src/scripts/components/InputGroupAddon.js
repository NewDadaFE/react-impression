import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * InputGroupAddon组件.
 */
export default class InputGroupAddon extends Component{
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        return(
            <span {...others} className={classnames('input-group-addon', className)}>
                {children}
            </span>
        );
    }
}