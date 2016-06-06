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
    menuClickHandle(menu, index, event){
        let { value, name, text, disabled } = menu,
            { onClick } = this.props;

        if(disabled){
            return false;
        }

        this.setState({
            open: false
        });

        onClick && onClick(value, name || text, index, event);
    }
    //显示/隐藏菜单
    toggleMenuHandle(flag){
        this.setState({
            open: flag === undefined? !this.state.open : flag
        });
    }
    //渲染
    render(){
        let { menus, trigger, className, children, ...others } = this.props,
            { open } = this.state,
            options = {
                className: `${children.props.className} dropdown-toggle`
            };

        switch(trigger){
        case 'click':
            options.onClick = children.onClick ? event => {
                children.onClick(event);
                this.toggleMenuHandle();
            }: this.toggleMenuHandle;
            break;
        case 'hover':
            others.onMouseOver = () => this.toggleMenuHandle(true);
            others.onMouseOut = () => this.toggleMenuHandle(false);
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
                           onClick={event => this.menuClickHandle(menu, index, event)}>
                           {menu.name || menu.text || menu.value}
                        </a>
                    )}
                </div>
            </div>
        );
    }

}