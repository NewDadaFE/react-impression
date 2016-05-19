import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * 按钮组件.
 */
export default class Button extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.state = {
            Tag: props.href? 'a': 'button'
        };
    }
    //prop type校验
    static propTypes = {
        //样式（primary、default、secondary）
        style: PropTypes.string,
        //自定义样式
        className: PropTypes.string,
        //click事件
        onClick: PropTypes.func,
        //是否outline
        outline: PropTypes.bool,
        //尺寸
        size: PropTypes.string,
        //形状
        shape: PropTypes.string,
        //链接地址
        href: PropTypes.string,
        //是否关闭按钮
        close: PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        style: 'primary'
    }
    //渲染
    render(){
        let { style, outline, size, shape, className, onClick, href, close, ...others} = this.props;
        let { Tag } = this.state;
        let btnClass = !close? 'btn': null;
        let styleClass = !close? `btn${outline?'-outline':''}-${style}`: null;
        let sizeClass = size? `btn-${size}` : '';
        let shapeClass = shape? `btn-${shape}` : '';
        let closeClass = close? 'close': null;

        return(
            <Tag {...others} type={href?null:'button'} onClick={onClick} href={href} 
                className={classnames(btnClass, styleClass, sizeClass, shapeClass, closeClass, className)}>
                {this.props.children}
            </Tag>
        );
    }
}
