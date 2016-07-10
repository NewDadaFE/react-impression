import classnames from 'classnames';
import React, { Component } from 'react';
import FlexItem from './FlexItem';

/**
 * Flex布局组件.
 */
export default class Flex extends Component{
    //prop type校验
    static propTypes = {
        direction: React.PropTypes.oneOf(['row', 'column'])
    }
    //默认props
    static defaultProps = {
        direction: 'row',
    }
    //渲染
    render(){
        let { direction, children, className, ...others } = this.props,
            directionClass = direction === 'row'? '' : 'flex-vertical';

        return(
           <div {...others} className={classnames('flex', directionClass, className)}>
                {children}
           </div>
        );
    }
}

Flex.Item = FlexItem;