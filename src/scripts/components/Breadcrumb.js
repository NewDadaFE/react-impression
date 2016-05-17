import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * 面包屑组件.
 */
export default class Breadcrumb extends Component{
    //prop type校验
    static propTypes = {
        //分隔
        divider: React.PropTypes.string,
        //路径
        path: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    }
    //渲染
    render(){
        let { divider, path } = this.props;
        let dividerClass = divider? `breadcrumb-${divider}`: '';

        return (
            <ol className={classnames('breadcrumb', dividerClass)}>
                { path.map((item, index) =>
                    <li key={index} className={classnames('breadcrumb-item', {active: !item.href})}>
                        { item.href && <a href={item.href}>{item.name || item.text}</a> }
                        { !item.href && <span>{item.name || item.text}</span> }
                    </li>
                )}
            </ol>
        );
    }
}