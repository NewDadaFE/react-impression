import React, { Component } from 'react';

/**
 * Popover组件.
 */
export default class Popover extends Component{
    //prop type校验
    static propTypes = {
        position: React.PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
        title: React.PropTypes.string,
        content: React.PropTypes.string,
        children: React.PropTypes.element.isRequired,
    }
    //默认props
    static defaultProps = {
        position: 'right',
    }

}