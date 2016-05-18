import classnames from 'classnames';
import React, { Component } from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

/**
 * Modal组件.
 */
export default class Modal extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: React.PropTypes.string,
        //大小
        size: React.PropTypes.string,
    }
    //渲染
    render(){
        let { size, className, children } = this.props;
        let sizeClass = size? `modal-${size}` : null;

        return(
            <div className={classnames('modal', className)}>
                <div className={classnames('modal-dialog', sizeClass)}>
                    <div className="modal-content">
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}

Modal.Header = ModalHeader;
Modal.Body   = ModalBody;
Modal.Footer = ModalFooter;