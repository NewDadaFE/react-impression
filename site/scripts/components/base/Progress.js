import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * 进度条组件.
 */
export default class Progress extends Component{
    //prop type校验
    static propTypes = {
        //样式
        style: PropTypes.string,
        //斑马线
        striped: PropTypes.bool,
        //值
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        //最大值
        max: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }
    //默认props
    static defaultProps = {
        max: 100,
        striped: false
    }
    //渲染
    render(){
        let { style, striped, value, max, className, ...others } = this.props,
            styleClass = style? `progress-${style}`: '',
            stripedClass = striped? `progress-striped`: '';

        return (
            <progress {...others} className={classnames('progress', styleClass, stripedClass, className)} value={value} max={max}></progress>
        );
    }
}