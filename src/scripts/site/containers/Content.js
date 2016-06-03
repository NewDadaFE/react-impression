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

        return (
            <div className="content">
                <ReactCSSTransitionGroup component="div" transitionName="zoom" transitionEnterTimeout={600} transitionLeaveTimeout={300}>
                    <div key={children.props.location.pathname}>
                        <Breadcrumb divider="arrow" routes={children.props.routes}/>
                        {children}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}