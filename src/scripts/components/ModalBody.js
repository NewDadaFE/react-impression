import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * ModalBody组件.
 */
export default class ModalBody extends PureComponent {
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        return(
            <div {...others} className={classnames('modal-body', className)}>
                { children }
            </div>
        );
    }
}
