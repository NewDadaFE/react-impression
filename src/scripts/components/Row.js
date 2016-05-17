import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Row组件.
 */
export default class Row extends Component{
    //渲染
    render(){
        let { className, children } = this.props;

        return(
           <div className={classnames('row', className)}>
                {children}
           </div>
        );
    }
}