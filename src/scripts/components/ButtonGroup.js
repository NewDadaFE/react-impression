import classnames from 'classnames';
import React, { Component } from 'react';

/**
 *ButtonGroup组件
 */

 export default class ButtonGroup extends Component{
    constructor(props, context){
        super(props, context);
    }

    static propType = {
        //大小（lg、sm）
        size: React.PropTypes.string,
    }

    render(){
        let { style, size, className } = this.props;
        let btnGroupSize = size?`btn-group-${size}`:null;
        return (
            <div className={classnames('btn-group', btnGroupSize, className)}>
                {this.props.children}
            </div>
        )
    }
 }