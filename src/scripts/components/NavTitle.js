import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * NavTitle 组件
 */
export default class NavTitle extends Component{
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        return(
            <div {...others} className={classnames('nav-title', className)}>
                {children}
            </div>
        );
    }
}