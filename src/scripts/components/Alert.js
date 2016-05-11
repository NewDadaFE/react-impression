import classnames from 'classnames';
import React, { Component } from 'react';

/**
 *Alert 组件
 */
export default class Alert extends Component{

    constructor(props, context){
        super(props, context);
    }

    static propTypes = {
        //样式（success、primary、warning、danger）
        style: React.PropTypes.string,
    }
    
    render(){
        let {style, className} = this.props;
        let alertStyle = `alert-${style}`;

        return(
            <div className={classnames('alert', alertStyle, className)}>
                {this.props.children}
            </div>
        );
    }
} 