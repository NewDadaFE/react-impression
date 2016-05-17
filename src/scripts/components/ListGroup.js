import classnames from 'classnames';
import React, { Component } from 'react';
import ListGroupItem from './ListGroupItem';

/**
 * ListGroup组件.
 */
export default class ListGroup extends Component{
    //props校验
    static propTypes = {
        className: React.PropTypes.string,
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

ListGroup.Item = ListGroupItem;