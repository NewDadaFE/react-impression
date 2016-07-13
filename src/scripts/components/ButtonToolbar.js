import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * ButtonToolbar组件.
 */
export default class ButtonToolbar extends Component{
    //prop type校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { className, children } = this.props;

        return (
            <div className={classnames('btn-toolbar', className)}>
                {children}
            </div>
        );
    }
}