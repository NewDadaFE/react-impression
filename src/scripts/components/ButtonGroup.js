import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * ButtonGroup组件.
 */
 export default class ButtonGroup extends Component{
    constructor(props, context){
        super(props, context);
    }
    //默认props
    static defaultProps = {
        style: 'default'
    }
    //prop校验
    static propType = {
        //大小（lg、sm）
        size: React.PropTypes.string,
        style: React.PropTypes.string,
    }
    //渲染
    render(){
        let { style, size, className } = this.props;
        let btnGroupSize = size? `btn-group-${size}` : null;
        let btnGroupStyle = style? `btn-group-${style}` : null;

        return (
            <div className={classnames('btn-group', btnGroupSize, btnGroupStyle, className)}>
                {this.props.children}
            </div>
        )
    }
 }