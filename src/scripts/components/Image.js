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
        fluid: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        circle: React.PropTypes.bool,
        thumbnail: React.PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        fluid: false,
        rounded: false,
        circle: false,
        thumbnail: false,
    }
    //渲染
    render(){
        let { fluid, rounded, circle, thumbnail, className } = this.props;
        let classes = {
            'img-fluid': fluid,
            'img-rounded': rounded,
            'img-circle': circle,
            'img-thumbnail': thumbnail,
        };

        return(
            <img {...this.props} className={classnames(classes, className)}/>
        );
    }
 }