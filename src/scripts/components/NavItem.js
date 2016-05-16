import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * NavItem 组件
 */
export default class NavItem extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.onClickHandle = this.onClickHandle.bind(this);
    }
    //props校验
    static propTypes ={
        disabled: React.PropTypes.bool,
        active: React.PropTypes.bool,
        eventKey: React.PropTypes.any,
        href: React.PropTypes.string,
        onClick: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        active: false,
    }
    onClickHandle(){
        let { disabled, onClick, eventKey } = this.props;
        !disabled && onClick(eventKey);
    }
    //渲染
    render(){
        let { disabled, active, classname, href } = this.props;
        let classes = {
            disabled,
            active,
        };

        return(
            <li className={classnames('nav-item', classname)} onClick={this.onClickHandle}>
                <a href={href} className={classnames('nav-link', classes)}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}