import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Flex布局组件.
 */
export default class Flex extends Component{
    //默认props
    static defaultProps = {
        direction: 'row',
    }
    //prop type校验
    static propTypes = {
        direction: React.PropTypes.oneOf(['row', 'column'])
    }
    //渲染
    render(){
        let { direction } = this.props;
        let directionClass = direction === 'row'? '' : 'flex-vertical';

        return(
           <div className={classnames('flex', directionClass)}>
                {this.props.children}
           </div>
        );
    }

}