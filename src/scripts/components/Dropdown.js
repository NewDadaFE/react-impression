import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Dropdown组件.
 */
export default class Dropdown extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            open: false
        };

        this.toggleMenuHandle = this.toggleMenuHandle.bind(this);
    }
    //prop type校验
    static propTypes = {
        // 触发动作
        trigger: PropTypes.oneOf(['click', 'hover']),
        // menus: PropTypes.arrayOf(PropTypes.object),
        //菜单
        menus: PropTypes.arrayOf((value, index, componentName, location, propFullName) => {
            let callResult = Object.prototype.toString.call(value[index]);
            if(callResult !== '[object String]' & callResult !== '[object Object]'){
                return new Error(
                    `Invalid prop '${propFullName}', supplied to '${componentName}', expected 'object' or 'string'.`
                );
            }
        }).isRequired,
        //回调
        onClick: PropTypes.func,
        //子节点
        children: PropTypes.element.isRequired,
    }
    //默认props
    static defaultProps = {
        trigger: 'click',
    }
    //点击回调
    menuClickHandle(value, name, index, event){
        let { onClick } = this.props;
        this.setState({
            open: false
        });
        onClick && onClick(value, name, index, event);
    }
    //显示/隐藏菜单
    toggleMenuHandle(){
        this.setState({
            open: !this.state.open
        });
    }
    //渲染
    render(){
        let { menus, trigger, className, children, ...others } = this.props;
        let { open } = this.state;
        let options = {};

        switch(trigger){
        case 'click':
            options = {
                className: `${children.props.className} dropdown-toggle`,
                onClick: children.onClick ? event => {
                    children.onClick(event);
                    this.toggleMenuHandle();
                }: this.toggleMenuHandle
            };
            break;
        case 'hover':
            options = {
                className: `${children.props.className} dropdown-toggle`,
                onMouseOver: children.onMouseOver ? event => {
                    children.onMouseOver(event);
                    this.toggleMenuHandle();
                }: this.toggleMenuHandle,
                onMouseOut: children.onMouseOut ? event => {
                    children.onMouseOut(event);
                    this.toggleMenuHandle();
                }: this.toggleMenuHandle,
            };
            break;
        }

        children = React.cloneElement(children, options);

        return(
            <div {...others} className={classnames('dropdown', { open }, className)}>
                { children }
                <div className="dropdown-menu">
                    { menus && menus.map((menu, index) =>
                        Object.prototype.toString.call(menu) === '[object String]'?
                        <div key={index} className="dropdown-divider"></div>:
                        <a key={index} href={menu.href}
                           className={classnames('dropdown-item', {disabled: menu.disabled, active: menu.active})}
                           onClick={event => this.menuClickHandle(menu.value, menu.name || menu.text, index, event)}>
                           {menu.name || menu.text || menu.value}
                        </a>
                    )}
                </div>
            </div>
        );
    }

}