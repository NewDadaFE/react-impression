import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



/**
 * 主内容区.
 */
export default class Content extends Component {
    render() {
        let { children } = this.props;
        children && (children = React.cloneElement(children, {
            key: children.props.location.pathname
        }));

        return (
            <div className="content">
                <ReactCSSTransitionGroup component="div" transitionName="zoom" transitionEnterTimeout={1200} transitionLeaveTimeout={1200}>
                    {children}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}