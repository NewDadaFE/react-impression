import classnames from 'classnames';
import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';

/**
 * 面包屑组件.
 */
export default class Breadcrumb extends Component{
    //prop type校验
    static propTypes = {
        //分隔
        divider: PropTypes.string,
        //路由
        routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }
    //渲染
    render(){
        let { divider, routes, ...others } = this.props,
            dividerClass = divider? `breadcrumb-${divider}`: '',
            depth = routes.length - 1;

        return (
            <ol {...others} className={classnames('breadcrumb', dividerClass)}>
                { routes.map((item, index) =>
                    <li key={index} className="breadcrumb-item">
                        { index < depth && item.path &&
                            <Link to={item.path}>
                                { item.component && item.component.title || item.path}
                            </Link>
                        }
                        { (index === depth || !item.path) &&
                            <span>{ item.component && item.component.title || item.path}</span>
                        }
                    </li>
                )}
            </ol>
        );
    }
}