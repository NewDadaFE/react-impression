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
    }
    //默认props
    static defaultProps = {
        style: 'primary'
    }
    render(){
        let { content, children, style, className } = this.props,
            styleClass = `bg-${style}`;

        return (
            <span className={classnames('badge')}>
                { children }
                <div className={classnames('badge-addon', styleClass, className)}>{content}</div>
            </span>
        );
    }
}