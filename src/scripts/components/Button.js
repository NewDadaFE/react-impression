import classnames from 'classnames';
import React, { Component } from 'react';

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
    //默认props
    static defaultProps = {
        style: 'primary'
    }
    //prop type校验
    static propTypes = {
        //样式（primary、default、secondary）
        style: React.PropTypes.string,
        //自定义样式
        className: React.PropTypes.string,
        //click事件
        onClick: React.PropTypes.func,
        //是否outline
        outline: React.PropTypes.bool,
        //尺寸
        size: React.PropTypes.string,
        //形状
        shape: React.PropTypes.string,
        //链接地址
        href: React.PropTypes.string,
    }
    //渲染
    render(){
        let { style, outline, size, shape, className, onClick, href} = this.props;
        let { Tag } = this.state;

        let btnStyle = `btn${outline?'-outline':''}-${style}`;
        let btnSize = size? `btn-${size}` : '';
        let btnShape = shape? `btn-${shape}` : '';

        return(
            <Tag type={href?null:'button'} onClick={onClick} href={href}
                    className={classnames('btn', btnStyle, btnSize, btnShape, className)}>
                    {this.props.children}
            </Tag>
        );
    }
}
