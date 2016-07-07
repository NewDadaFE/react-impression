import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Notice组件.
 */
export default class Notice extends Component{
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
        let { title, message, style, closeable, close, children, className } = this.props,
            styleClass = `notice-${style}`,
            iconClass = this.getTitleIcon();

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
