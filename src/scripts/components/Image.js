import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Image组件
 */
export default class Image extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //prop type校验
    static propTypes = {
        //形状（fluid、rounded、circle、thumbnail）
        shape: React.PropTypes.string,
    }
    //渲染
    render(){
        let { shape, src, alt, className } = this.props;
        let imgStyle = `img-${shape}`;

        return(
            <img src={src} alt={alt} className={classnames(imgStyle,className)}/>
        );
    }
 }