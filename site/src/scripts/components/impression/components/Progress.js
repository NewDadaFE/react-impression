import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * 进度条组件.
 */
export default class Progress extends PureComponent {
    // prop type校验
    static propTypes = {
        className: PropTypes.string,
        // 样式
        theme: PropTypes.string,
        // 斑马线
        striped: PropTypes.bool,
        // 值
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        // 最大值
        max: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }
    // 默认props
    static defaultProps = {
        max: 100,
        striped: false,
    }
    // 渲染
    render() {
        let { theme, striped, value, max, className, ...others } = this.props,
            themeClass = theme ? `progress-${theme}` : '',
            stripedClass = striped ? 'progress-striped' : '';

        return (
            <progress
                {...others}
                value={value} max={max}
                className={classnames('progress', themeClass, stripedClass, className)} />
        );
    }
}
