import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Row组件.
 */
export default class Row extends Component{
    static propTypes = {
        //子节点
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object),
        ])
    }
    /**
     * 自动计算col属性.
     * @return {[Array]} [子元素]
     */
    getChildren(){
        let { children } = this.props,
            count = 0,
            allocation = 0;
        children = React.Children.toArray(children);
        children.forEach(({ props }) => {
            if(props.hasOwnProperty('col')){
                count += Number.parseInt(props.col);
            }else{
                allocation += 1;
            }
        });

        let surplus = 12 - count;
        return children.map(child => {
            let { col } = child.props;
            return React.cloneElement(child, {
                col: col || Number.parseInt(surplus / allocation),
            });
        });
    }
    //渲染
    render(){
        let { className, children, ...others } = this.props;
        children = this.getChildren();

        return(
           <div {...others} className={classnames('row', className)}>
                {children}
           </div>
        );
    }
}