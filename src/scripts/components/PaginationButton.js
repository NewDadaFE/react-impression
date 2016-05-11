import classnames from 'classnames';
import React, { Component } from 'react';

export default class PaginationButton extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    // props校验
    static propTypes = {
        className: React.PropTypes.string,
        item: React.PropTypes.any,
        active: React.PropTypes.bool,
        onChangeActivePage: React.PropTypes.func,
    }
    handleClick(e){
        e.preventDefault;
        this.props.onChangeActivePage(this.props.item);
        return false;
    }
    // 渲染
    render(){
        let { item, active } = this.props;

        let activeStyle = active? 'active' : '';

        return(
            <li className={classnames('page-item', activeStyle)} 
                onClick={this.handleClick.bind(this)}>
                <a className="page-link">{item}</a>
            </li>
        );
    }
}