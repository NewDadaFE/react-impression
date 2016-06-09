import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Col布局组件.
 */
export default class Col extends Component{
    //prop type校验
    static propTypes = {
        //所占比例
        col: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        offset: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        push: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        pull: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
    }
    //渲染
    render(){
        let { col, offset, push, pull, children, className, ...others } = this.props,
            colClass = `col-xs-${col}`,
            offsetClass = offset? `offset-xs-${offset}` : null,
            pushClass = push? `push-xs-${push}` : null,
            pullClass = pull? `pull-xs-${pull}` : null;

        return(
           <div { ...others } className={classnames(colClass, offsetClass, pushClass, pullClass, className)}>
                {children}
           </div>
        );
    }

}