import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Nav 组件
 */
export default class ComponentName extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //props校验
    static propTypes ={
        style: React.PropTypes.string,
        stacked: React.PropTypes.bool,
        activeKey: React.PropTypes.number,
        onSelect: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
    
    }
    //渲染
    render(){
        let { style, stacked, activeKey, onSelect, className } = this.props;

        let navStacked = stacked ? 'nav-stacked' : null;
        let navStyle = style ? `nav-${style}` : null;

        return(
            <ul {...this.props} className={classnames('nav', navStacked, navStyle, className)}>
                {this.props.children}
            </ul>
        );
    }
}