import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * SidebarHeader 组件
 */
export default class SidebarHeader extends Component{
    //props校验
    static propTypes ={
        img: PropTypes.string,
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { img, className, children, ...others } = this.props;

        return (
            <div {...others} className={classnames('sidebar-header', className)}>
                { img && <img src={img}/> }
                { children }
            </div>
        );
    }
}
