import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * 徽章组件.
 */
export default class Badge extends Component{
    constructor(props, context){
        super(props, context);
    }
    static propTypes = {
        //内容
        content: PropTypes.string,
        //样式
        style: PropTypes.string,
        //类型
        type: PropTypes.string,
        //addon尺寸
        size: PropTypes.string,
    }
    //默认props
    static defaultProps = {
        style: 'primary'
    }
    render(){
        let { content, children, style, type, size, className } = this.props,
            styleClass = `bg-${style}`,
            typeClass = `badge-${type}`,
            badgeSizeClass = size? `badge-addon-${size}` : null;

        return (
            <span className={classnames('badge', typeClass, className)}>
                <div className={classnames('badge-addon', badgeSizeClass, styleClass)}>{content}</div>
                { children }
            </span>
        );
    }
}