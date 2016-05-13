import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * NavItem 组件
 */
export default class NavItem extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //props校验
    static propTypes ={
        disabled: React.PropTypes.bool,
        active: React.PropTypes.bool,
        eventKey: React.PropTypes.any,
        href: React.PropTypes.string,
        onSelect: React.PropTypes.func,
        handleChangeActive: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        active: false,
    }
    //渲染
    render(){
        // debugger;
        let { disabled, active, classname, href, handleChangeActive } = this.props;

        let classes = {
            disabled: disabled,
            active: active,
        };

        return(
            <li className={classnames('nav-item', classname)} 
            onClick={handleChangeActive}>
                <a href={href} className={classnames('nav-link', classes)}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}