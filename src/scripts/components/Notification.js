import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Notice组件.
 */
class Notice extends Component{
    //prop type校验
    static propTypes = {
        //类型
        style: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
        //标题
        title: PropTypes.string,
        //内容
        message: PropTypes.string,
        //关闭
        close: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        style: 'info',
        title: '通知',
    }
    /**
     * 获取信息图标.
     * @return {[type]} [description]
     */
    getTitleIcon(){
        let { style } = this.props;

        return {
            info:     ['fa', 'fa-volume-up'],
            success:  ['fa', 'fa-check-circle'],
            warning:  ['fa', 'fa-exclamation-triangle'],
            danger:   ['fa', 'fa-times-circle'],
        }[style];
    }
    /**
     * 渲染.
     */
    render() {
        let { title, message, style, closeable, close, children, className } = this.props;
        let styleClass = `notice-${style}`;
        let iconClass = this.getTitleIcon();

        return (
            <div className={classnames('notice', styleClass, className)}>
                <div className="notice-header">
                    <i className={classnames(iconClass)}></i>
                </div>
                <div className="notice-body">
                    <div className="notice-title">
                        {title}
                        { closeable &&
                            <button type="button" className="close" onClick={close}>&times;</button>
                        }
                    </div>
                    <div className="notice-content">
                        {message || children}
                    </div>
                </div>
            </div>
        );
    }
}

//Notification组件引用
let _notification = undefined;

/**
 * 通知容器.
 */
export default class Notification extends Component{
    /**
     * 初始化信息.
     * @param  {[type]} props   [description]
     * @param  {[type]} context [description]
     */
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.key = 0;
        this.timers = [];
        _notification = this;
        this.removeNotice = this.removeNotice.bind(this);
    }
    //prop type校验
    static propTypes = {
        //是否可关闭
        closeable: PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        closeable: true,
    }
    /**
     * 移除定时器.
     */
    componentWillUnmount() {
        this.timers.forEach(timer => {
            clearTimeout(timer);
        });
    }
    /**
     * 添加通知.
     * @param {[String]} options.title    [标题]
     * @param {[String]} options.message  [内容]
     * @param {Number}   options.duration [延时]
     */
    addNotice({ title, message, duration=2000, closeable }, style){
        let key = this.key++;
        closeable = closeable === undefined? this.props.closeable : closeable;

        this.state[key] = {
            title,
            message,
            style,
            closeable,
        };
        this.setState(this.state);
        this.timeToRemoveNotice(key, duration);
    }
    /**
     * 移除通知.
     * @param  {[Number]} key      [索引]
     */
    removeNotice(key) {
        delete this.state[key];
        this.setState(this.state);
    }
    /**
     * 移除通知.
     * @param  {[Number]} key      [索引]
     * @param  {[Number]} duration [延时]
     */
    timeToRemoveNotice(key, duration){
        this.timers.push(setTimeout(() => {
            this.removeNotice(key);
        }, duration));
    }
    /**
     * 渲染.
     */
    render(){
        let { className } = this.props;

        return (
            <div className={classnames('notification', className)}>
                { Object.keys(this.state).map(key =>
                  <Notice key={key} style={this.state[key].style}
                  closeable={this.state[key].closeable}
                  title={this.state[key].title}
                  close={() => this.removeNotice(key)}>
                        {this.state[key].message}
                  </Notice>
                )}
            </div>
        );
    }
}

//添加一条info消息
Notification.info = options => {
    _notification.addNotice(options, 'info');
};

//添加一条success消息
Notification.success = options => {
    _notification.addNotice(options, 'success');
};

//添加一条warning消息
Notification.warning = options => {
    _notification.addNotice(options, 'warning');
};

//添加一条danger消息
Notification.error = options => {
    _notification.addNotice(options, 'danger');
};


