import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * FlexItem.
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
        let { flex } = this.props;
        let flexClass = `flex-item${flex > 1? ('-' + flex) : ''}`;

        return(
           <div className={classnames(flexClass)}>
                {this.props.children}
           </div>
        );
    }

}