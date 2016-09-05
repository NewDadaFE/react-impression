import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * 按钮组件.
 */
export default class Button extends PureComponent {
    // 构造函数
    constructor(props, context) {
        super(props, context);
        this.state = {
            Tag: props.href ? 'a' : 'button',
        };
    }
    // prop type校验
    static propTypes = {
        children: PropTypes.any,
        // 自定义样式
        className: PropTypes.string,
        // 样式（primary、default、secondary）
        theme: PropTypes.string,
        // click事件
        onClick: PropTypes.func,
        // 是否outline
        outline: PropTypes.bool,
        // 尺寸
        size: PropTypes.string,
        // 形状
        shape: PropTypes.string,
        // 链接地址
        href: PropTypes.string,
        // 是否关闭按钮
        close: PropTypes.bool,
        // 是否block
        block: PropTypes.bool,
    }
    // 默认props
    static defaultProps = {
        theme: 'primary',
    }
    // 渲染
    render() {
        let {
                theme,
                outline,
                size,
                shape,
                className,
                onClick,
                href,
                close,
                block,
                children,
                ...others,
            } = this.props,
            { Tag } = this.state,
            btnClass = !close ? 'btn' : null,
            themeClass = !close ? `btn${outline ? '-outline' : ''}-${theme}` : null,
            sizeClass = size ? `btn-${size}` : null,
            shapeClass = shape ? `btn-${shape}` : null,
            closeClass = close ? 'close' : null,
            blockClass = block ? 'btn-block' : null;

        delete others.eventKey;

        return(
            <Tag
                {...others}
                type={href ? null : 'button'}
                onClick={onClick}
                href={href}
                className={classnames(
                    btnClass,
                    themeClass,
                    sizeClass,
                    shapeClass,
                    closeClass,
                    blockClass,
                    className)}>
                {children}
            </Tag>
        );
    }
}
