import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Breadcrumb } from '../../components';



/**
 * 主内容区.
 */
export default class Content extends Component {
    render() {
        let { children } = this.props;
        children = React.cloneElement(children, {
            key: children.props.location.pathname
        });

        return (
            <div className="content">
                <ReactCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    <Breadcrumb divider="arrow" routes={children.props.routes}/>
                    {children}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}