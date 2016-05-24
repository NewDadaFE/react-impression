import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

//Message组件引用
let _message = undefined;
let _timers = [];

/**
 * Message组件.
 */
export default class Message extends Component{
    constructor(props, context){
        super(props, context);
        _message = this;

        this.state = {
            show: props.show || false,
            message: null,
            style: props.style,
        };
    }
    //prop type校验
    static propTypes = {
        //类型
        style: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'error', 'loading']),
    }
    //默认props
    static defaultProps = {
        style: 'info'
    }
    /**
     * 获取信息图标.
     * @return {[type]} [description]
     */
    getTitleIcon(){
        let { style } = this.state;

        return {
            'info':     'fa-volume-up',
            'primary':  'fa-volume-up',
            'success':  'fa-check-circle',
            'warning':  'fa-exclamation-triangle',
            'error':    'fa-times-circle',
            'danger':   'fa-times-circle',
        }[style];
    }
    /**
     * [获取主题样式]
     * @return {[String]} [主题样式类名]
     */
    getStyleClass(){
        let { style } = this.state;

        return {
            'info':     'message-primary',
            'primary':  'message-primary',
            'warning':  'message-warning',
            'success':  'message-success',
            'danger':   'message-danger',
            'error':    'message-danger',
        }[style];
    }
    /**
     * 渲染.
     */
    render() {
        let { className } = this.props;
        let { message, show } = this.state;
        let styleClass = this.getStyleClass();
        let iconClass = this.getTitleIcon();

        return (
            <div className={classnames('message', { 'hidden': !show }, styleClass, className)}>
                <div className='message-title'>
                    <i className={classnames('fa', iconClass)}></i>
                </div>
                <div className='message-body'>{ message }</div>
            </div>
        );
    }
}

//显示消息
const showMessage = (style, message, duration=2000) => {
    //清空隐藏消息定时器
    _timers.forEach(timer => clearTimeout(timer));
    _timers = [];

    _message.setState({
        show: true,
        style,
        message,
        duration,
    });

    //隐藏消息
    hideMessage(duration);
};

//隐藏消息
const hideMessage = duration => {
    _timers.push(setTimeout(() => {
        _message.setState({
            show: false
        });
    }, duration));
};

//显示info信息
Message.primary = Message.info = (message, duration) => {
    showMessage('primary', message, duration);
};

//显示info信息
Message.success = (message, duration) => {
    showMessage('success', message, duration);
};

//显示warning信息
Message.warning = (message, duration) => {
    showMessage('warning', message, duration);
};

//显示error信息
Message.danger = Message.error = (message, duration) => {
    showMessage('danger', message, duration);
};

