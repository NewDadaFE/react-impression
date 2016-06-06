import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import NavItem from './NavItem';
import NavLink from './NavLink';
import NavTitle from './NavTitle';

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
        type: PropTypes.string,
        stacked: PropTypes.bool,
        activeKey: PropTypes.number,
        onSelect: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        type: 'inline',
        stacked: false,
    }
    //选中回调
    onSelectHandle(eventKey){
        let { activeKey } = this.state;
        let { onSelect } = this.props;

        if(activeKey === eventKey){
            return false;
        }
        this.setState({activeKey: eventKey});
        onSelect && onSelect(eventKey);
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
        let { type, stacked, className, children, ...others } = this.props,
            { activeKey } = this.state,
            navStacked = stacked && type=='pill' ? 'nav-stacked' : null,
            navStyle = this.getTypeClassMap(type);

        children = React.Children.toArray(children);
        children = children && children.map((child, index) => {
            let { eventKey } = child.props;
            return React.cloneElement(child, {
                key: index,
                eventKey: eventKey || index + 1,
                active: (eventKey && eventKey === activeKey) || index + 1 === activeKey,
                onClick: this.onSelectHandle
            });
        });

        return(
            <ul {...others} className={classnames('nav', navStacked, navStyle, className)}>
                {children}
            </ul>
        );
    }
}

Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.Title = NavTitle;