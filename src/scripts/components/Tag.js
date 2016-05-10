import classnames from 'classnames';
import React, { Component } from 'react';

/**
 *Tag组件
 */
export default class Tag extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //默认props
    static defaultProps = {
        style: 'default'
    }
    //props校验
    static propTypes = {
        //样式（default、primary、success、info、warning、danger）
        style: React.PropTypes.string,
        //形状（pill）
        shape: React.PropTypes.string,
        //自定义样式
        className: React.PropTypes.string,
    }
    //渲染
    render(){
        let { style, shape, className } = this.props;

        let tagStyle = style? `tag-${style}` : '';
        let tagShape = shape? `tag-${shape}` : '';

        return (
            <span className = {classnames('tag', tagStyle, tagShape, className)}>
                {this.props.children}
            </span>
        )
    }
}