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
    }
    //渲染
    render(){
        let { className, children } = this.props;

        return(
            <div className={classnames('modal', className)}>
                <div className="modal-dialog">
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