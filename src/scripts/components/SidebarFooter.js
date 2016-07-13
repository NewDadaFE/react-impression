import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * SidebarFooter 组件
 */
export default class SidebarFooter extends Component{
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        children = React.Children.toArray(children);
        children = children && children.map((child, index) => {
            let { className } = child.props;
            return React.cloneElement(child, {
                className: classnames('sidebar-footer-item', className)
            });
        });

        return(
            <div {...others} className={classnames('sidebar-footer', className)}>
                {children}
            </div>
        );
    }
}
