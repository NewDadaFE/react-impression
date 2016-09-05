import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';


/**
 * MessageItem组件.
 */
export default class MessageItem extends PureComponent {
    // prop type校验
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        // 类型
        type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'loading']),
    }
    // 默认props
    static defaultProps = {
        type: 'info',
    }
    /**
     * 渲染.
     */
    render() {
        let { children, className } = this.props;

        return (
            <div className={classnames('message-item', className)}>
                <div className="message-item-title">
                    <i className={classnames(['fa', 'fa-check-circle'])} />
                </div>
                <div className="message-item-body">
                    {children}
                </div>
            </div>
        );
    }
}
