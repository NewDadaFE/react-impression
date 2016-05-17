import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * ModalBody组件.
 */
export default class ModalBody extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: React.PropTypes.string,
    }
    //渲染
    render(){
        let { className, children } = this.props;

        return(
            <div className={classnames('modal-body', className)}>
                { children }
            </div>
        );
    }
}