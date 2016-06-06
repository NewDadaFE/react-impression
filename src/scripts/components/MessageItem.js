import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';


/**
 * MessageItem组件.
 */
export default class MessageItem extends Component{
    //prop type校验
    static propTypes = {
        //类型
        type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'loading']),
    }
    //默认props
    static defaultProps = {
        type: 'info'
    }
    /**
     * 获取信息图标.
     * @return {[type]} [description]
     */
    getNotifyItemIcon(){
        return {
            'message-item-success': 'fa-check-circle',
            'message-item-error': 'fa-times-circle',
            'message-item-info': 'fa-info-circle',
            'message-item-warning': 'fa-exclamation-triangle'
        }[this.props.theme];
    }
    /**
     * 渲染.
     */
    render() {
        let { children, className } = this.props;

        return (
            <div className={classnames('message-item', className)}>
                <div className='message-item-title'>
                    <i className={classnames(['fa', 'fa-check-circle'])}></i>
                </div>
                <div className='message-item-body'>{ children }</div>
            </div>
        );
    }
}