import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import ListGroupItem from './ListGroupItem';

/**
 * ListGroup组件.
 */
export default class ListGroup extends PureComponent {
    // props校验
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
    }
    // 渲染
    render() {
        let { className, children, ...others } = this.props;

        return(
            <ul {...others} className={classnames('list-group', className)}>
                {children}
            </ul>
        );
    }
}

ListGroup.Item = ListGroupItem;
