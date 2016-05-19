import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

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
        disabled: PropTypes.bool,
        active: PropTypes.bool,
        eventKey: PropTypes.any,
        href: PropTypes.string,
        onClick: PropTypes.func,
        className: PropTypes.string,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        active: false,
    }
    //回调函数
    onClickHandle(){
        let { disabled, active, onClick, eventKey } = this.props;
        !disabled && !active && onClick(eventKey);
    }
    //渲染
    render(){
        let { disabled, active, className, href, ...others } = this.props;
        let childClass = {
            disabled,
            active,
        };

        return(
            <li {...others} className={classnames('nav-item', className)} onClick={this.onClickHandle}>
                { href &&
                    <a href={href} className={classnames('nav-link', childClass)}>
                        {this.props.children}
                    </a>
                }
                { !href &&
                    <span className={classnames('nav-link', childClass)}>
                        {this.props.children}
                    </span>
                }
            </li>
        );
    }
}