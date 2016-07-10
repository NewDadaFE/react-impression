import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * NavCollapseTitle 组件
 */
export default class NavCollapseTitle extends Component{
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { onClick, children, className, ...others } = this.props;

        return(
            <div onClick={onClick} {...others} className={classnames('nav-collapse-title', className)}>
                {children}
                <i className="fa fa-angle-right nav-collapse-title-addon"></i>
            </div>
        );
    }
}

