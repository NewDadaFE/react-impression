import classnames from 'classnames';
import React, { PureComponent } from 'react';
import Button from './Button';

/**
 * Navbar 组件
 */
export default class Navbar extends PureComponent {
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        return(
            <Button {...others} className={classnames('navbar-btn', className)}>
                {children}
            </Button>
        );
    }
}
