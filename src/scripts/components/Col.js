import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Col布局组件.
 */
export default class Col extends Component{
    //prop type校验
    static propTypes = {
        //所占比例
        col: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]).isRequired,
        offset: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        push: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        pull: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
    }
    //渲染
    render(){
        let { col, offset, push, pull } = this.props;
        let colClass = `col-xs-${col}`;
        let offsetClass = offset? `offset-xs-${offset}` : null;
        let pushClass = push? `push-xs-${push}` : null;
        let pullClass = pull? `pull-xs-${pull}` : null;

        return(
           <div className={classnames(colClass, offsetClass, pushClass, pullClass)}>
                {this.props.children}
           </div>
        );
    }

}