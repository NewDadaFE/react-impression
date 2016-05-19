import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

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
        fluid: PropTypes.bool,
        rounded: PropTypes.bool,
        circle: PropTypes.bool,
        thumbnail: PropTypes.bool,
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
        let { fluid, rounded, circle, thumbnail, className, ...others } = this.props;
        let classes = {
            'img-fluid': fluid,
            'img-rounded': rounded,
            'img-circle': circle,
            'img-thumbnail': thumbnail,
        };

        return(
            <img {...others} {...this.props} className={classnames(classes, className)}/>
        );
    }
 }