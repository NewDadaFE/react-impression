import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import DropdownTrigger from './DropdownTrigger';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuDivider from './DropdownMenuDivider';

/**
 * Dropdown组件.
 */
export default class Dropdown extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            active:  undefined === props.active?  false : props.active,
        };
    }
    //prop type校验
    static propTypes = {
        active: PropTypes.bool,
        //子节点
        children: PropTypes.array.isRequired,
    }
    //默认props
    static defaultProps = {
        active: false,
    }
    //显示/隐藏菜单
    toggleMenuHandle = () => {
        let { active } = this.state;

        this.setState({
            active: !active
        });
    }
    //渲染
    render(){
        let { className, children, ...others } = this.props,
            { active } = this.state;

        children = React.Children.toArray(children);
        children = children.map((child, index) => {
            return React.cloneElement(child, {
                toggleMenu: this.toggleMenuHandle
            });
        });

        delete others.active;

        return(
            <div {...others} className={classnames('dropdown', { active }, className)}>
                { children }
            </div>
        );
    }
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
Dropdown.MenuDivider = DropdownMenuDivider;
