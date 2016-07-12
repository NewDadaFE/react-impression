import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        style: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'loading']),
    }
    //默认props
    static defaultProps = {
        style: 'info'
    }
    /**
     * 移除定时器.
     */
    componentWillUnmount() {
        _timers.forEach(timer => clearTimeout(timer));
    }
    /**
     * 获取信息图标.
     * @return {[type]} [description]
     */
    getTitleIcon(){
        let { style } = this.state;

        return {
            info:     ['fa', 'fa-volume-up'],
            success:  ['fa', 'fa-check-circle'],
            warning:  ['fa', 'fa-exclamation-triangle'],
            danger:   ['fa', 'fa-times-circle'],
            loading:  ['message-loading'],
        }[style];
    }
    /**
     * [获取主题样式]
     * @return {[String]} [主题样式类名]
     */
    getStyleClass(){
        let { style } = this.state;

        return {
            info:     'message-primary',
            warning:  'message-warning',
            success:  'message-success',
            danger:   'message-danger',
            loading:  'message-primary',
        }[style];
    }
    /**
     * 渲染.
     */
    render() {
        let { className } = this.props,
            { message, show } = this.state,
            styleClass = this.getStyleClass(),
            iconClass = this.getTitleIcon();

        return (
            <div>
                <ReactCSSTransitionGroup component="div" transitionName="message" transitionEnterTimeout={240} transitionLeaveTimeout={360}>
                    { show &&
                        <div className={classnames('message', styleClass, className)}>
                            <div className="message-header">
                                <i className={classnames(iconClass)}></i>
                            </div>
                            <div className='message-body'>{ message }</div>
                        </div>
                    }
                </ReactCSSTransitionGroup>
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
Message.info = (message, duration) => {
    showMessage('info', message, duration);
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
Message.error = (message, duration) => {
    showMessage('danger', message, duration);
};

//显示loading信息
Message.loading = (message, duration) => {
    showMessage('loading', message, duration);
};
