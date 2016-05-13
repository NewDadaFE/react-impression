import classnames from 'classnames';
import React, { Component, cloneElement } from 'react';

/**
 * Nav 组件
 */
export default class Nav extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.state = {
            activeKey: this.props.activeKey,
        };
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
    changeActiveHandle(eventKey){
        this.setState({activeKey: eventKey});
        // debugger;
        this.state.activeKey !== eventKey && this.props.onSelect(eventKey);
    }
    //渲染
    render(){
        let { style, stacked, onSelect, className } = this.props;
        let { activeKey } = this.state;
        let changeActiveHandle = this.changeActiveHandle.bind(this);

        let navStacked = stacked ? 'nav-stacked' : null;
        let navStyle = style ? `nav-${style}` : null;

        let rows = this.props.children.map((child, index) => {
            return cloneElement(child, {
                key: index,
                active: child.props.eventKey === activeKey,
                changeActiveHandle
            });
        });

        return(
            <ul className={classnames('nav', navStacked, navStyle, className)}>
                {rows}
            </ul>
        );
    }
}