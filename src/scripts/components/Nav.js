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

        //绑定上下文
        this.onSelectHandle = this.onSelectHandle.bind(this);
    }
    //props校验
    static propTypes ={
        type: React.PropTypes.string,
        stacked: React.PropTypes.bool,
        activeKey: React.PropTypes.number,
        onSelect: React.PropTypes.func,
    }
    //选中回调
    onSelectHandle(eventKey){
        let { activeKey } = this.state;
        let { onSelect } = this.props;

        if(activeKey === eventKey){
            return false;
        }
        this.setState({activeKey: eventKey});
        onSelect(eventKey);
    }
    //返回type映射的class
    getTypeClassMap(type){
        let map = {
            tab: 'nav-tabs',
            pill: 'nav-pills',
            inline: 'nav-inline',
        };

        return map[type]? map[type]: type;
    }
    //渲染
    render(){
        let { type, stacked, className } = this.props;
        let { activeKey } = this.state;
        let navStacked = stacked && type=='pill' ? 'nav-stacked' : null;
        let navStyle = this.getTypeClassMap(type);

        let children = this.props.children.map((child, index) => {
            return cloneElement(child, {
                key: index,
                eventKey: child.props.eventKey || index + 1,
                active: child.props.eventKey === activeKey || index + 1 === activeKey,
                onClick: this.onSelectHandle
            });
        });

        return(
            <ul className={classnames('nav', navStacked, navStyle, className)}>
                {children}
            </ul>
        );
    }
}