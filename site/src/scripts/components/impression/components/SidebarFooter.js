import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Sidebar 底部组件
 */
export default class SidebarFooter extends PureComponent {
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        children = React.Children.map(children, (child, index) => {
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
