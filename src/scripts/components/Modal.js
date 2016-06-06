import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
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
        className: PropTypes.string,
        //大小
        size: PropTypes.string,
    }
    /**
     * 不可scroll.
     */
    componentDidMount(){
        document.querySelector('.content').style.overflow = 'hidden';
    }
    /**
     * 恢复scroll.
     */
    componentWillUnmount(){
        document.querySelector('.content').style.overflow = 'auto';
    }
    //渲染
    render(){
        let { size, className, children, ...others } = this.props,
            sizeClass = size? `modal-${size}` : null;

        return(
            <div {...others} className={classnames('modal', className)}>
                <div className={classnames('modal-dialog', sizeClass)}>
                    <div className="modal-content slideInDown">
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