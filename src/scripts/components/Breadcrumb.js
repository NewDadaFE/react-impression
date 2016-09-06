import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * 面包屑组件.
 */
export default class Breadcrumb extends PureComponent {
    // prop type校验
    static propTypes = {
        // 分隔
        separator: PropTypes.string,
        // 自定义样式
        className: PropTypes.string,
        children: PropTypes.any,
    }
    // 默认props
    static defaultProps = {
        separator: 'arrow',
    }
    // 渲染
    render() {
        let { separator, children, className, ...others } = this.props,
            separatorClass = separator ? `breadcrumb-${separator}` : null;

        children = React.Children.map(children, (child, index) => {
            return (
                <li key={index} className="breadcrumb-item">{child}</li>
            );
        });

        return (
            <ol {...others} className={classnames('breadcrumb', className, separatorClass)}>
                {children}
            </ol>
        );
    }
}
