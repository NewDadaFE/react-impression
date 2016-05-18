import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Tag组件
 */
export default class Tag extends Component{
    //默认props
    static defaultProps = {
        style: 'default'
    }
    //props校验
    static propTypes = {
        //样式（default、primary、success、info、warning、danger）
        style: PropTypes.string,
        //形状（pill）
        shape: PropTypes.string,
        //自定义样式
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { style, shape, className, ...others } = this.props;
        let tagStyle = style? `tag-${style}` : '';
        let tagShape = shape? `tag-${shape}` : '';

        return (
            <span {...others} className = {classnames('tag', tagStyle, tagShape, className)}>
                {this.props.children}
            </span>
        );
    }
}