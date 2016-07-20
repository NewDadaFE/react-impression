import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Tag组件
 */
export default class Tag extends Component{
    //props校验
    static propTypes = {
        //样式（default、primary、success、info、warning、danger）
        style: PropTypes.string,
        //形状（pill）
        shape: PropTypes.string,
        //是否outline
        outline: PropTypes.bool,
        //是否可删除
        closable: PropTypes.bool,
        //删除回调
        onClose: PropTypes.func,
        //自定义样式
        className: PropTypes.string,

    }
    //默认props
    static defaultProps = {
        style: 'default',
        closable: false,
        outline: false,
    }
    //渲染
    render(){
        let { style, closable, onClose, shape, outline, children, className, ...others } = this.props,
            tagStyle = outline? `tag-outline-${style}` : `tag-${style}`,
            tagShape = shape? `tag-${shape}` : '';

        return (
            <span {...others} className = {classnames('tag', tagStyle, tagShape, className)}>
                {children}
                { closable &&
                    <span className="tag-close" onClick={onClose}>&times;</span>
                }
            </span>
        );
    }
}
