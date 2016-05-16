import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * ListGroupItem 组件
 */
export default class ListGroupItem extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.state = {
            Tag: props.href ? 'a': 'li'
        };
    }
    //props校验
    static propTypes = {
        href: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        active: React.PropTypes.bool,
        header: React.PropTypes.string,
        tag: React.PropTypes.string,
        className: React.PropTypes.string,
    }
    //默认props
    static defaultProps = {

    }
    //渲染
    render(){
        let { href, disabled, active, className, tag } = this.props;
        let { Tag } = this.state;

        let disabledStyle = disabled ? 'disabled': null;
        let activeStyle = active ? 'active': null;
        let actionStyle = href ? 'list-group-item-action': null;

        return(
            <Tag href={href} className={classnames('list-group-item', activeStyle, disabledStyle, actionStyle, className )}>
                { tag && <span className="tag tag-default tag-pill pull-xs-right">1</span> }
                {this.props.children}
            </Tag>
        );
    }
}