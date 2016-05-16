import classnames from 'classnames';
import React, { Component } from 'react';
import PaginationButton from './PaginationButton';

export default class Pagination extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.state = {
            activePage: this.props.activePage
        };
    }
    //默认props
    static defaultProps = {
        items: 1,
        activePage: 1,
        maxButtons: 5,
    }
    //props校验
    static propTypes = {
        //共有多少页
        items: React.PropTypes.number,
        //当前在第几页
        activePage: React.PropTypes.number,
        //最大展示页数
        maxButtons: React.PropTypes.number,
        //自定义样式
        className: React.PropTypes.string,
        //onSelect
        onSelect: React.PropTypes.func,
    }
    //改变当前active页函数
    handleChangeActivePage(num){
        num !== this.state.activePage && this.setState({activePage: num});
        num !== this.state.activePage && this.props.onSelect(num);
    }
    //增大当前active页
    handleAddActivePage(){
        let { activePage } = this.state;
        let {items} = this.props;

        activePage < items && 
        this.setState({activePage: activePage+1});
        activePage < items && 
        this.props.onSelect(activePage+1);
    }
    // 减小当前active页
    handleSubActivePage(){
        let { activePage } = this.state;

        activePage > 1 && 
        this.setState({activePage: activePage-1});
        activePage > 1 && 
        this.props.onSelect(activePage-1);
    }
    //渲染AddButton
    renderPaginationAddButton(){
        let { items } = this.props;
        let { activePage } = this.state;

        let disabledStyle = (activePage === items) ? 'disabled' : '';

        return(
            <li className={classnames('page-item', disabledStyle)} onClick={this.handleAddActivePage.bind(this)}>
                <a className="page-link">›</a>
            </li>
        );
    }
    //渲染SubButton
    renderPaginationSubButton(){
        let { activePage } = this.state;

        let disabledStyle = (activePage === 1) ? 'disabled' : '';

        return(
            <li className={classnames('page-item', disabledStyle)} onClick={this.handleSubActivePage.bind(this)}>
                <a className="page-link">‹</a>
            </li>
        );
    }
    //渲染...Button
    renderEllipsisButton(){
        return(
            <li className="page-item disabled">
                <a style={{border: 'none'}} className="page-link">...</a>
            </li>
        );
    }
    //渲染数字型PageButton
    renderNumPageButton(num){
        let pageButtons = [];
        let { items, maxButtons } = this.props;
        let { activePage } = this.state;

        maxButtons = maxButtons > items ? items : maxButtons; //防止错误参数的传入
        let intervalNum = Math.floor((maxButtons - 1)/2);
        let startPage = activePage - intervalNum;
        let endPage = activePage + intervalNum;

        if(startPage <= 0){
            endPage = endPage - startPage + 1;
            startPage = 1;
        }
            
        if(endPage >= items){
            startPage = startPage - endPage + items;
            endPage = items;
        }

        for (let pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
            pageButtons.push(
                <PaginationButton 
                    onChangeActivePage={this.handleChangeActivePage.bind(this)} key={pagenumber} 
                    item={pagenumber} active={activePage===pagenumber} />
                );
        }

        startPage > 1 && pageButtons.unshift(this.renderEllipsisButton());
        endPage < items && pageButtons.push(this.renderEllipsisButton());

        return(
            pageButtons
        );
    }
    //渲染
    render(){
        let { items, className } = this.props;

        return(
            <ul className={classnames('Pagination', className)}>
                {this.renderPaginationSubButton()}
                {this.renderNumPageButton(items)}
                {this.renderPaginationAddButton()}
            </ul>
        );
    }
}