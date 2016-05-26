import React, { Component } from 'react';

/**
 * 主内容区.
 */
export default class Content extends Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}