import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Breadcrumb } from '../../components';



/**
 * 主内容区.
 */
export default class Content extends Component {
    componentDidLeave(){
        console.log('leave');
    }
    render() {
        let { children } = this.props;
        children = React.cloneElement(children, {
            key: children.props.location.pathname
        });

        return (
            <div className="content">
                <ReactCSSTransitionGroup componentDidLeave={this.componentDidLeave} component="div" transitionName="zoom" transitionEnterTimeout={1200} transitionLeaveTimeout={1200}>
                    {children}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}