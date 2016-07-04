import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import NavCollapseTitle from './NavCollapseTitle';


/**
 * NavCollapse 组件
 */
export default class NavCollapse extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            active: props.active,
        };

        this.toggleItemsHandle = this.toggleItemsHandle.bind(this);
    }
    //props校验
    static propTypes ={
        className: PropTypes.string,
        active: PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        active: false,
    }
    toggleItemsHandle(){
        this.setState({
            active: !this.state.active
        });
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props,
            { active } = this.state,
            collapseTitle = null;

        children = React.Children.toArray(children);
        children = children.filter((child, index) => {
            if(child.type && child.type.name === 'NavCollapseTitle'){
                collapseTitle = React.cloneElement(child, {
                    onClick: this.toggleItemsHandle
                });
                return false;
            }
            return true;
        });

        return(
            <div {...others} className={classnames('nav-collapse', {active: active}, className)}>
                {collapseTitle}
                <div className="nav-collapse-items">
                    {children}
                </div>
            </div>
        );
    }
}

NavCollapse.Title = NavCollapseTitle;
