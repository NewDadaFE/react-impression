import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import CollapseTitle from './CollapseTitle';
import CollapseBody from './CollapseBody';


/**
 * Collapse 组件
 */
export default class Collapse extends Component{
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

        delete others.active;
        children = React.Children.toArray(children);
        children = children.map((child, index) => {

            return React.cloneElement(child, {
                onClick: this.toggleItemsHandle
            });
        });

        return(
            <div {...others} className={classnames('collapse', {active: active}, className)}>
                {children}
            </div>
        );
    }
}

Collapse.Title = CollapseTitle;
Collapse.Body = CollapseBody;
