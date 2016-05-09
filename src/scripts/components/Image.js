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
        shape: React.PropTypes.string,
    }
    //渲染
    render(){
        let { shape, src, alt } = this.props;
        let imgStyle = `img${shape?'-fluid':''}-${shape}`;

        return(
            <img src={src} alt={alt} 
                className={classnames('img', imgStyle, className)}/>
        );
    }
 }