import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * CollapseTitle 组件
 */
export default class CollapseTitle extends Component{
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { onClick, children, className, ...others } = this.props;

        return(
            <div onClick={onClick} {...others} className={classnames('collapse-title', className)}>
                {children}
                <i className="fa fa-angle-right collapse-title-addon"></i>
            </div>
        );
    }
}
