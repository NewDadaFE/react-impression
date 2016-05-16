import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * ListGroup组件.
 */
export default class ListGroup extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //props校验
    static propTypes = {
        className: React.PropTypes.string,
    }
    //默认props
    static defaultProps = {

    }
    //渲染
    render(){
        let { className } = this.props;

        return(
            <ul className={classnames('list-group', className)}>
                {this.props.children}
            </ul>
        );
    }
}