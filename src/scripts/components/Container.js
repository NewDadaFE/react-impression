import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Container组件.
 */
export default class Container extends Component{
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        return(
           <div { ...others } className={classnames('container', className)}>
                {children}
           </div>
        );
    }
}
