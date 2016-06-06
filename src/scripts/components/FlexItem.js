import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * FlexItem组件.
 */
export default class FlexItem extends Component{
    //默认props
    static defaultProps = {
        flex: 1,
    }
    //prop type校验
    static propTypes = {
        flex: React.PropTypes.number
    }
    //渲染
    render(){
        let { flex, children, className, ...others } = this.props,
            flexClass = `flex-item${flex > 1? ('-' + flex) : ''}`;

        return(
           <div {...others} className={classnames(flexClass, className)}>
                {children}
           </div>
        );
    }

}